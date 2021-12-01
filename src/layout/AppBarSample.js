import React from 'react'
import Box from '@mui/material/Box'
import { AppBar, IconButton, Link, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { styled } from '@mui/material/styles';


const MainNav = styled('nav')(({theme})=>({
    display: 'none',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}))
const MainNavList = styled('ul')(({
    listStyle: 'none',
    display: 'flex',
    border: '1px solid red',
    padding: 0, margin: 0,
}))
const MainNavListItem = styled('li')(({
    margin: '0 1rem'
}))
const MainHaiderBrand = styled(Link)(({
    '& .haiderBrandImage':{
        height: '2.5rem', // either this property use in sx prop for MainHaiderBrandImage
    }
}))
// const MainHaiderBrandImage = styled('img')(({

// }))


const uhost =
{
    url: '/static/images/uhost-icon.png',
    title: 'uhost',
    width: '40%',
}

function AppBarSample() {
    return (
        <Box>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex',padding: 0,border: '1px solid red' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={(theme)=>({ mr: 2 , display: 'yellow',
                            //'@media (min-width: 40rem)': {
                            [theme.breakpoints.up('sm')]:{
                                color: 'red', display: 'none'
                            }
                        })}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* main-header__brand */}
                        <MainHaiderBrand href="#">
                            {/* <MainHaiderBrandImage className="haiderBrandImage" src={uhost.url} alt={uhost.title}/> */}
                            <img className="haiderBrandImage" src={uhost.url} alt={uhost.title}/>
                        </MainHaiderBrand>
                    </Box>

                    {/* main header nav */}
                    <Box sx={{ border: '1px solid yellow' }}>
                        <MainNav>
                            <MainNavList>
                                <MainNavListItem>
                                    <Link href="#" color="inherit">Packages</Link>
                                </MainNavListItem>
                                <MainNavListItem>
                                    <Link href="#" color="inherit">Customer</Link>
                                </MainNavListItem>
                                <MainNavListItem>
                                    <Link href="#" color="inherit">Start hosting</Link>
                                </MainNavListItem>
                            </MainNavList>
                        </MainNav>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />

            {/* <Box sx={{ width: '100%', height: '3rem', display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ backgroundColor: 'red', width: '20%' }}>
                    1
                </Box>
                <Box sx={{ backgroundColor: 'yellow', width: '60%' }}>
                    2
                </Box>
            </Box> */}
        </Box>

    )
}

export default AppBarSample
