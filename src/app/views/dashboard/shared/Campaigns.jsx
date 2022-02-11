import React from 'react'
import { Small } from 'app/components/Typography'
import { Box, useTheme } from '@mui/system'
import { SimpleCard, MatxProgressBar } from 'app/components'

const Campaigns = () => {
    const theme = useTheme()
    const secondary = theme.palette.text.secondary

    return (
        <div>
            <SimpleCard title="Campaigns">
                <Small sx={{ color: secondary }}>Today</Small>
                <Box sx={{ pt: 1 }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Invoices Sent (102k)"
                />
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="GST Return File (40k)"
                />
            </SimpleCard>
        </div>
    )
}

export default Campaigns
