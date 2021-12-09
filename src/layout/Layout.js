import React from 'react'
import AppBarSample from './AppBarSample'
import Box from '@mui/material/Box'
import FooterSample from './FooterSample'
import SectionSample from './SectionSample'
import PlanSample from './PlanSample'
import KeyFeturesSample from './KeyFeturesSample'

function Layout() {
    return (
        <div>
            {/* header */}
            <AppBarSample />

            {/* content */}
            <Box sx={(theme)=>({ height: '100vh',backgroundColor: theme.palette.success.main})}>
                <SectionSample />

                {/* plan */}
                <PlanSample />

                {/* key-feature */}
                <KeyFeturesSample />

            </Box>

            {/* footer */}
            <FooterSample />
        </div>
    )
}

export default Layout
