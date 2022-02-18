import React from 'react'
import { useTheme } from '@mui/system'
import ReactEcharts from 'echarts-for-react'

const DoughnutChart = ({ height, color = [] }) => {
    const theme = useTheme()

    const option = {
        legend: {
            show: false,
            itemGap: 10,
            icon: 'circle',
            bottom: 0,
            textStyle: {
                color: theme.palette.text.secondary,
                fontSize: 16,
                fontFamily: 'roboto',
            },
        },
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: '{b}:  ({d}%)',
        },
        xAxis: [
            {
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        yAxis: [
            {
                axisLine: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
        ],

        series: [
            {
                name: 'Traffic Rate',
                type: 'pie',
                radius: ['45%', '72.55%'],
                center: ['50%', '50%'],
                avoidLabelOverlap: false,
                hoverOffset: 5,
                stillShowZeroSum: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center', // shows the description data to center, turn off to show in right side
                        textStyle: {
                            color: theme.palette.text.secondary,
                            fontSize: 13,
                            fontFamily: 'roboto',
                        },
                        formatter: '{a}',
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '14',
                            fontWeight: 'normal',
                            // color: 'rgba(15, 21, 77, 1)',
                        },
                        formatter: '{b} \n({d}%)',
                    },
                },
                labelLine: {
                    normal: {
                        show: false,
                    },
                },
                data: [
                    {
                        value: 30,
                        name: 'Rent Expenses',
                    },
                    {
                        value: 10,
                        name: 'Repair & Manintainance',
                    },
                    {
                        value: 20,
                        name: 'Meals & Entertainment',
                    },
                    {
                        value: 20,
                        name: 'Vehicles',
                    },
                    {
                        value: 20,
                        name: 'Other',
                    },
                ],

                itemStyle: {
                    emphasis: {
                        shadowBlur: 20,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
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

export default DoughnutChart
