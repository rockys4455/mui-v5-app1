import { TextField } from '@mui/material';
import React, { useEffect, useReducer } from 'react'
import {validate} from '../../util/validators'

// input field validation
const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            }
        default:
            return state;    
    }
}
function RenderTextField(props) {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.intialValue || '',
        isTouched: false,
        isValid: props.intialValid || false
    })

    const {id, onInput} = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    },[id, value, isValid, onInput])

    const changeHandler = event => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    }
    return (
        <TextField
            variant='outlined'
            fullWidth={props.fullWidth}
            color={props.color}
            size='small'
            label={props.label}
            name={props.name}
            placeholder={props.placeholder}
            type={props.type}
            value={inputState.value}
            id={props.id}
            // value={data[name]}
            // error={error[name] ? true : false}
            // helperText={error[name] ? error[name] : ""}
            onChange={changeHandler}
        />
    )
}

export default RenderTextField
