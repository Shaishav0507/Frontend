import React from 'react'
import { useTheme, Box, styled } from '@mui/system'

import { Card } from '@mui/material'
import LineChart from './LineChart'

const CardHeader = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const TopSellingTable = () => {
    const theme = useTheme()
    return (
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
            <CardHeader>
                <Title>OverView</Title>
            </CardHeader>
            <Box overflow="auto">
                <LineChart
                    height="300px"
                    color={[
                        theme.palette.success.main,
                        theme.palette.warning.light,
                    ]}
                />
            </Box>
        </Card>
    )
}

export default TopSellingTable
