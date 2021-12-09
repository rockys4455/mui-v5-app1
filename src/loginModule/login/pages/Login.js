import React, { useContext, useState } from 'react'
import { Button, Card, CardContent, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import RenderTextField from '../../shared/components/UIElements/RenderTextField';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/useHttpClient ';
import { useForm } from '../../shared/hooks/useForm';
import { useNavigate} from 'react-router-dom'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators'

function Login() {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    // login mode and signup mode
    const [isLoginMode, setIsLoginMode] = useState(true);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

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
    const authSubmitHandler = async event => {
        event.preventDefault();

        if (isLoginMode) {
            // login mode
            console.log(formState.inputs.email.value);
            console.log(formState.inputs.password.value);
            try {
                const responseData = await sendRequest(
                    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDcwUXq8mMdo9iJjaVXdV5toq9y5EuvZbo',
                    'POST',
                    JSON.stringify({
                        // email: formState.inputs.email.value,
                        // password: formState.inputs.password.value,
                        returnSecureToken: true
                    }),
                    {
                        'Content-Type': 'application/json'
                    }
                );
                //auth.login(responseData.userId, responseData.token)
                auth.login(responseData.localId, responseData.idToken)

            } catch (err) {}
        } 

    };
    const handleChange = e => { };
    const loginModeHandler = () =>{

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
            <form onSubmit={authSubmitHandler}>
                <Box sx={{ height: '90vh', display: 'flex', justifyContent: 'right' }}>
                    <Grid container sx={{ width: '40%', alignSelf: 'center' }}>
                        <Grid item xs={12} sm={7}>
                            <Card>
                                <CardContent>
                                    <Box mb={2} mt={1}>
                                        <Typography variant='h6' color='common.black' align='left'>
                                            Login
                                        </Typography>
                                    </Box>
                                    <Box mb={1}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={6} sm={6}>
                                                <Button
                                                    variant='contained'
                                                    size='small'
                                                    color='primary'
                                                    fullWidth={true}
                                                    sx={{ fontSize: '0.6rem', textTransform: 'none', }}
                                                >
                                                    Login with Google
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Button
                                                    variant='contained'
                                                    size='small'
                                                    color='primary'
                                                    fullWidth={true}
                                                    sx={{ fontSize: '0.6rem', textTransform: 'none', }}
                                                >
                                                    Login with facebook
                                                </Button>
                                            </Grid>
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
                                                    Login
                                                </Button>
                                            </Grid>
                                            <Grid item xs={12} sm={12}>
                                                <Button
                                                    type='submit'
                                                    variant='text'
                                                    size='small'
                                                    color='primary'
                                                    fullWidth={true}

                                                    sx={{ textTransform: 'none', }}
                                                >
                                                    Forgotten Password?
                                                </Button>
                                            </Grid>
                                            <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <Button
                                                    type='submit'
                                                    variant='contained'
                                                    size='small'
                                                    color='primary'
                                                    fullWidth={false}
                                                    onClick={()=>{navigate('/signup',{replace: true})}}
                                                    sx={{ textTransform: 'none', }}
                                                >
                                                    Create New Account
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

export default Login
