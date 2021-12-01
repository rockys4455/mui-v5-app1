import React from 'react'
import AppBarSample from './AppBarSample'
import Box from '@mui/material/Box'
import FooterSample from './FooterSample'
import SectionSample from './SectionSample'

function Layout() {
    return (
        <div>
            {/* header */}
            <AppBarSample />

            {/* content */}
            <Box sx={(theme)=>({ height: '100vh',backgroundColor: theme.palette.success.main})}>
                <SectionSample />
            </Box>

            {/* footer */}
            <FooterSample />
        </div>
    )
}

export default Layout
