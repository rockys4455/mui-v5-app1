import { ButtonBase, Grid, Paper, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ComplexGridExampleNew() {
    return (
        <Paper sx={{p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, p: 2}}>
            <Grid container spacing={2}>
                <Grid item sx={{}}>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src="/static/images/complex.jpg" />
                    </ButtonBase>
                </Grid>
                <Grid item sm container sx={{}}>
                    <Grid item xs container direction="column" spacing={2} sx={{}} >
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Standard license
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Full resolution 1920x1080 • JPEG
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ID: 1030114
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                Remove
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            $19.00
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>
        </Paper>

    )
}
