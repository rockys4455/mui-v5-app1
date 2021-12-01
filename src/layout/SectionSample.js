import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'

const MainSection = styled('div')(({ theme }) => ({
    background: 'linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent),url("/static/images/freedom.jpg") center/cover no-repeat border-box #ff1b68',
    width: '100vw',
    height: '33vh',
    position: 'relative',
    '& .MainSectionHeaderText': {
        color: theme.palette.common.white,
        fontFamily: 'anton',
        position: 'absolute',
        bottom: '5%', left: '3%', fontSize: '1.6rem',
    },

    //[theme.breakpoints.up('sm')]: { // only work for width
    '@media (min-width: 40rem) and (min-height: 40rem)': {
        height: '40vh',
        position: '50% 25%',
        '& .MainSectionHeaderText': {
            fontSize: '3rem'
        }
    }
}))
function SectionSample() {
    return (
        <MainSection>
            <Typography className="MainSectionHeaderText">text...</Typography>
        </MainSection>
    )
}

export default SectionSample
