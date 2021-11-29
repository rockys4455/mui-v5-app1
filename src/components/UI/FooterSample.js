
import { Link, styled, Box } from '@mui/material'
import React from 'react'


const FooterSampleDiv = styled('div')(({ theme }) => ({
    height: '3rem',
    width: '100%',
    backgroundColor: theme.palette.common.black,
}))

const FooterSampleList = styled('ul')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    height:'100%',

}))

const FooterSampleListItem = styled('li')(({theme}) => ({
    margin: '0 1.5rem',
}))
function FooterSample() {
    return (
        <FooterSampleDiv>
            <Box component="nav" sx={{height: '100%'}}>
                <FooterSampleList>
                    <FooterSampleListItem>
                        <Link href="#">Home</Link>
                    </FooterSampleListItem>
                    <FooterSampleListItem>
                        <Link href="#">Contact</Link>
                    </FooterSampleListItem>
                    <FooterSampleListItem>
                        <Link href="#">Terms & condition</Link>
                    </FooterSampleListItem>
                </FooterSampleList>
            </Box>
        </FooterSampleDiv>
    )
}

export default FooterSample
