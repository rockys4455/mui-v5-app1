import { Button, Container, Grid, Slider } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'

const Img = styled('img')(({ theme }) => ({

}))


const SideBarButton = styled(Button)(({ theme }) => ({
    '&:hover, &:focus': { background: 'hsl(265, 100%, 70%)' },
    margin: 1,
    // '&.MuiButtonBase-root-MuiButton-root':{
    //     fontSize: '0.5rem',

    // }

    
}))
const SideBarDiv = styled('div')({
    display: 'flex', flexDirection: 'column', alignItems: 'stretch',
    '& .SideBarButtonRoot': {
        fontSize: '0.65em', color: 'red'
    }  
})

function PhotoEditor() {
    return (
        <Box sx={{ width: '100%', height: '100vh', overflow: 'hidden', }}>
            <Grid container sx={{ background: 'hsl(265, 100%, 85%)', height: '100%', p: 0.5 }}>
                <Grid item xs container direction="column" sx={{ border: 0 }}>
                    <Grid xs item sx={{
                        //border: 1,
                        backgroundImage: 'url("/static/images/complex.jpg")',
                        width: '100%', height: '100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'top',
                        backgroundSize: 'contain',
                    }}>
                        {/* <Img alt="complex" src="/static/images/complex.jpg" /> */}
                    </Grid>
                    <Grid item sx={{ backgroundColor: 'red', }}>
                        <Box sx={{ width: 300, mx: '0.5rem', }}>
                            <Slider sx={{ py: '0.5rem', }} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid item sx={{ borderLeft: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                    <SideBarDiv>
                        <SideBarButton className="SideBarButtonRoot" variant="text" disableRipple  >Contrast</SideBarButton>
                        <SideBarButton className="SideBarButtonRoot">Brightness</SideBarButton>
                    </SideBarDiv>
                </Grid>
            </Grid>

        </Box>
    )
}

export default PhotoEditor
