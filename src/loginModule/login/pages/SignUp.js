import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import RenderTextField from '../../shared/components/UIElements/RenderTextField'
import { AuthContext } from '../../shared/context/auth-context'
import { useHttpClient } from '../../shared/hooks/useHttpClient '
import {useForm } from '../../shared/hooks/useForm'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators'

function SignUp() {


    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    const [isLoginMode, setIsLoginMode] = useState(false);
    const {  isLoading, error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        }, false)

    const signupSubmitHandler = async event => {
        event.preventDefault();

        if (!isLoginMode) {
            // sign up mode
            try {
                const formData = new FormData();
                formData.append("email", formState.inputs.email.value)
                formData.append("password", formState.inputs.password.value)

                const responseData = await sendRequest(
                    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDcwUXq8mMdo9iJjaVXdV5toq9y5EuvZbo',
                    'POST',
                    JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    }),
                    {
                        'Content-Type': 'application/json'
                    }                    
                );

                auth.login(responseData.userId, responseData.token)
            } catch (err) {}
        }
    }
    const handleChange = async event => {}
    const signupModeHandler = () =>{

        setFormData(
            {
              ...formState.inputs
            },
            false
        );
        // switch login mode to sighup mode
        setIsLoginMode(prevMode => !prevMode);
    }

    return (
        <React.Fragment>
            <form onSubmit={signupSubmitHandler}>
                <Box sx={{ height: '90vh', display: 'flex', justifyContent: 'right' }}>
                    <Grid container sx={{ width: '40%', alignSelf: 'center' }}>
                        <Grid item xs={12} sm={7}>
                            <Card>
                                <CardContent>
                                    <Box mb={2} mt={1}>
                                        <Typography variant='h6' color='common.black' align='left'>
                                            Sign up
                                        </Typography>
                                    </Box>
                                    <Box mb={1}>
                                        <Grid container spacing={1}>
                                            
                                            <Grid item xs={12} sm={12}>
                                                <Typography variant='caption' color='gray' align='left'>
                                                    Username
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <RenderTextField
                                                    placeholder='test@test.com'
                                                    name='email'
                                                    size='small'
                                                    fullWidth
                                                    type='email'
                                                    // data={data}
                                                    // error={error}
                                                    onInput={inputHandler}
                                                    id="email"
                                                    color="primary"
                                                    validators={[VALIDATOR_EMAIL()]}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <Typography variant='caption' color='gray' align='left'>
                                                    Password
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <RenderTextField
                                                    placeholder='th#678Gu87@'
                                                    name='password'
                                                    type='password'
                                                    size='small'
                                                    fullWidth
                                                    // data={data}
                                                    // error={error}
                                                    onInput={inputHandler}
                                                    id="password"
                                                    color="primary"
                                                    validators={[VALIDATOR_MINLENGTH(6)]}
                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={12}>
                                                <Button
                                                    type='submit'
                                                    variant='contained'
                                                    size='small'
                                                    color='primary'
                                                    fullWidth={true}

                                                    sx={{ textTransform: 'none', }}
                                                >
                                                    Sign up
                                                </Button>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <Button
                                                    type='submit'
                                                    variant='text'
                                                    size='small'
                                                    color='primary'
                                                    fullWidth={true}
                                                    onClick={()=>{navigate('/login', {replace: true})}}
                                                    sx={{ textTransform: 'none', }}
                                                >
                                                    Have an account? Log in
                                                </Button>
                                            </Grid>
                                            
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </React.Fragment>
    )
}

export default SignUp
