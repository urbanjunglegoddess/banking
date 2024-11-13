'use client'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"
import React from 'react'
import {Doughnut} from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend); 

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [4243, 5535, 1433],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ]
      },
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3'],
  }
  return <Doughnut data={data} 
  options={{
    cutout: '60%',
    plugins: {
      legend: {
        display: false,
      },
    },
  }}
  
  />
   
  
}

export default DoughnutChart