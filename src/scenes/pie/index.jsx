import { Box } from '@mui/material';
import PieChart from '../../components/PieChart';
import Header from '../../components/Header';

import React from 'react'

const Pie = () => {
  return (
    <Box m="20px">
        <Header title="PIE CHART" subtitle="Simple Pie Chart" />
        <Box height="75vh">
            <PieChart />
        </Box>
    </Box>
  )
}

export default Pie;