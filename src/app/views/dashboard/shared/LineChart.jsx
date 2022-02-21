import React from 'react'
import { useTheme } from '@mui/system'
import ReactEcharts from 'echarts-for-react'

const LineChart = ({ height, color = [] }) => {
    const theme = useTheme()

    const option = {
        grid: {
            top: '10%',
            bottom: '10%',
            left: '5%',
            right: '5%',
        },
        legend: {
            itemGap: 20,
            icon: 'circle',
            textStyle: {
                color: theme.palette.text.secondary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        // tooltip: {},
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: '{b}: {c}',
        },
        xAxis: {
            type: 'category',
            data: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: theme.palette.text.secondary,
                fontSize: 14,
                fontFamily: 'roboto',
            },
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                // show: false
                lineStyle: {
                    color: theme.palette.text.secondary,
                    opacity: 0.15,
                },
            },
            axisLabel: {
                color: theme.palette.text.secondary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        series: [
            {
                data: [30, 40, 20, 50, 40, 80, 90, 10, 40, 50, 20, 100],
                type: 'line',
                stack: 'This month',
                name: 'This month',
                smooth: true,
                symbolSize: 6,
                lineStyle: {
                    width: 5,
                },
            },
            {
                data: [20, 50, 15, 50, 30, 70, 95, 5,45, 70, 20, 50],
                type: 'line',
                stack: 'Last month',
                name: 'Last month',
                smooth: true,
                symbolSize: 6,
                lineStyle: {
                    width: 5,
                },
            },
        ],
    }

    return (
        <ReactEcharts
            style={{ height: height }}
            option={{
                ...option,
                color: [...color],
            }}
        />
    )
}

export default LineChart
