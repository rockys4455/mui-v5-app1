import { Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const Plans = styled('div')({

})
const PlanList = styled('div')({
    // plan__list
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})
const Plan = styled('div')(({theme})=>({
    // card look
    border: '1px solid red',
    [theme.breakpoints.up('sm')]: {
        
    }
    
}))
const PlanFeatures = styled('div')({

})
const PlanFeature = styled('div')({

})

function PlanSample() {
    return (
        <Plans>
            {/* h1 : section__title: choose ur plan */}
            <Typography variant="h5" align="center"  >Choose your plan</Typography>
            {/* div: plan__list  */}
            <PlanList >
                {/*  div : plan*/}
                <Plan >
                    {/* h1: plan__title */}
                    <Typography variant="h6">FREE</Typography>
                    {/* h2: plan__price */}
                    <Typography variant="h6">$0/month</Typography>
                    {/* h3 */}
                    <Typography variant="h6">For hobby projects or small teams.</Typography>

                    <PlanFeatures>
                    {/* ul: plan__features */}
                        {/* li: plan__feature */}
                        <PlanFeature>1 Workspace</PlanFeature>
                        <PlanFeature>Unlimited Traffic</PlanFeature>
                        <PlanFeature>10GB Storage</PlanFeature>
                        <PlanFeature>Basic Support</PlanFeature>
                    </PlanFeatures>   
                </Plan>
            
                {/*  div : plan*/}
                <Plan >
                    {/* h1: plan__title */}
                    <Typography variant="h6">FREE</Typography>
                    {/* h2: plan__price */}
                    <Typography variant="h6">$0/month</Typography>
                    {/* h3 */}
                    <Typography variant="h6">For hobby projects or small teams.</Typography>

                    <PlanFeatures>
                    {/* ul: plan__features */}
                        {/* li: plan__feature */}
                        <PlanFeature>1 Workspace</PlanFeature>
                        <PlanFeature>Unlimited Traffic</PlanFeature>
                        <PlanFeature>10GB Storage</PlanFeature>
                        <PlanFeature>Basic Support</PlanFeature>
                    </PlanFeatures>    
                </Plan>

                {/*  div : plan*/}
                <Plan >
                    {/* h1: plan__title */}
                    <Typography variant="h6">FREE</Typography>
                    {/* h2: plan__price */}
                    <Typography variant="h6">$0/month</Typography>
                    {/* h3 */}
                    <Typography variant="h6">For hobby projects or small teams.</Typography>

                    <PlanFeatures>
                    {/* ul: plan__features */}
                        {/* li: plan__feature */}
                        <PlanFeature>1 Workspace</PlanFeature>
                        <PlanFeature>Unlimited Traffic</PlanFeature>
                        <PlanFeature>10GB Storage</PlanFeature>
                        <PlanFeature>Basic Support</PlanFeature>
                    </PlanFeatures>    
                </Plan>               
            </PlanList>  
               
        </Plans>
    )
}

export default PlanSample
