import { ReactElement, useEffect, useRef } from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Doughnut, Line } from 'react-chartjs-2';
import { BaseLayout } from '../../components/layouts/BaseLayout';
import HStack from '#/components/base/Stack/HStack';
import styled from 'styled-components';
import Box from '#/components/base/Box/Box';
import VStack from '#/components/base/Stack/VStack';
import Table from '#/components/base/Table/DefaultTable';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const funnelOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '유입경로',
      font: {
        size: 24
      },
      padding: {
        top: 16,
        bottom: 16
      }
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', "December"];

export const funnelData = {
  labels,
  datasets: [
    {
      label: '모바일',
      data: labels.map(() => Math.random() * 1000),
      borderColor: 'rgb(128, 99, 255)',
      backgroundColor: 'rgba(128, 99, 255, 0.5)',
      fill: true
    },
    {
      label: '웹',
      data: labels.map(() => Math.random() * 1000),
      borderColor: 'rgb(255, 221, 0)',
      backgroundColor: 'rgba(255, 221, 0, 0.5)',
      fill: true
    },
  ],
};

const salesData = {
  labels: [
    '카카오페이',
    '네이버페이',
    '신용카드'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 228, 50)',
      'rgb(13, 211, 26)',
      'rgb(139, 86, 255)'
    ],
    hoverOffset: 4
  }]
}

const salesDataOptions = {
  responsive: true,
  aspectRatio: 1 / 0.625,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: '총 매출 비중',
      font: {
        size: 24
      },
      padding: {
        top: 16,
        bottom: 16
      }
    },
    tooltip: {
      padding: 20,
    }
  }
}

interface ITableData {
  id: string;
  today: number;
  week: number;
  total: number;
}

const table = {
  data: [
    { id: '1', today: 129, week: 5138, total: 1253262 }
  ],
  columns: [
    {
      label: '오늘',
      key: 'today'
    },
    {
      label: '1주일',
      key: 'week',
    },
    {
      label: '총 합계',
      key: 'total'
    }
  ]
}

export default function Home() {
  const chartRef = useRef<ChartJS>(null);
  const salesChartRef = useRef<ChartJS>(null);

  useEffect(() => {
    // if (!chartRef.current) return;

    console.log(chartRef.current)
  },[chartRef])

  return (
    <Home.Container>
      <HStack width="100%" height="100%">
        <Box padding="20px" border={{ right: '1px solid lightgray' }}>
          <Table<ITableData> title="방문자 통계" data={table.data} columns={table.columns}/>
        </Box>

        <VStack width="100%">
          <Box width="100%" height="100%" padding="20px">
            <Line 
              ref={chartRef} 
              type="line" 
              options={funnelOptions} 
              data={funnelData}
            />
          </Box>
          
          <Box border={{ top: '1px solid lightgray'}} padding="20px" height="100%">
            <Box>
              <Doughnut
                type="doughnut"
                ref={salesChartRef}
                data={salesData}
                options={salesDataOptions}
              />
            </Box>
          </Box>
        </VStack>
      </HStack>
    </Home.Container>
  )
}

Home.Container = styled.main`
  overflow: hidden;
  width: 100%;
  height: calc(100% - ${props => props.theme.layouts.header.height});
  flex: 1;
`

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>{page}</BaseLayout>
  )
}
