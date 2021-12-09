import { useCallback, useReducer } from "react";

// form validation
const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            }
        case 'SET_DATA':
        default:
            return state
    }
};
export const useForm = (intialInput, intialFormValidity) => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: intialInput,
        isValid: intialFormValidity
    })

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            isValid: isValid,
            inputId: id
        })
    }, [])

    const setFormData = useCallback((inputData, formValidity) => {
        dispatch({
            type: 'SET_DATA',
            inputs: inputData,
            formIsValid: formValidity
        })
    }, [])
    return [formState, inputHandler, setFormData]
}