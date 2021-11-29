import React from 'react'
import AppBarSample from '../components/UI/AppBarSample'
import Box from '@mui/material/Box'
import FooterSample from '../components/UI/FooterSample'

function Layout() {
    return (
        <div>
            {/* header */}
            <AppBarSample />

            {/* content */}
            <Box sx={{ height: '50vh'}}>Content</Box>

            {/* footer */}
            <FooterSample />
        </div>
    )
}

export default Layout
