import { useCallback, useEffect, useRef, useState } from "react"
import axios from 'axios'

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const activeHttpRequests = useRef([]);
    const sendRequest = useCallback(
        async (url, method = 'GET', body = null, headers = {}) => {
            setIsLoading(true)
            const httpAbortCtrl = new AbortController();
            activeHttpRequests.current.push(httpAbortCtrl);

            try {
                const response = await axios.post(url, {
                    method,
                    body,
                    headers,
                    signal: httpAbortCtrl.signal
                });

                const responseData = await response.data;

                activeHttpRequests.current = activeHttpRequests.current.filter(
                    reqCtrl => reqCtrl !== httpAbortCtrl
                );

                if (!!response.statusText) {
                    throw new Error(responseData.message)
                }
                setIsLoading(false)
                return responseData;
            } catch (err) {
                setError(err.message)
                setIsLoading(false)
                throw err;
            }
        },
        []
    )

    const clearError = () => {
        setError(null)
    }

    useEffect(() => {
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort())
        }
    }, [])
    return { isLoading, error, sendRequest, clearError }
}