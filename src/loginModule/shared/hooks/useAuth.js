import { useCallback, useEffect, useState } from "react";

let logoutTimer;
export const useAuth = () => {
    const [token, setToken] = useState(false)
    const [tokenExpirationDate, setTokenExpirationDate] = useState();
    const [userId, setUserId] = useState(false);

    const login = useCallback((uid, token, expirationDate) => {
        setToken(token)
        setUserId(uid)
        const tokenExpirationDate =
            expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60)

        setTokenExpirationDate(tokenExpirationDate)

        localStorage.setItem(
            'userData',
            JSON.stringify({
                userId: uid,
                token: token,
                expiration: tokenExpirationDate.toISOString()
            })
        )
    }, [])
    const logout = useCallback(() => {
        setToken(null)
        setTokenExpirationDate(null)
        setUserId(null)
        localStorage.removeItem('userData')
    }, [])

    // when re-render page after logout or token get expire
    useEffect(() => {
        if (token, tokenExpirationDate) {
            const remaningTime = tokenExpirationDate.getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remaningTime)
             
        }else {
            clearTimeout(logoutTimer)
        }

    }, [token, tokenExpirationDate, logout])

    // when re-render the login page afer login action
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'))
        if(
            storedData && 
            storedData.token &&
            new Date(storedData.expiration) > new Date()
        ) {
            login(storedData.userId, storedData.token, storedData.expiration)
        }
        
    },[login])

    return { token, login, logout, userId };
}