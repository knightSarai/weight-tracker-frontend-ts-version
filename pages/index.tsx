import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import Layout from '@/components/Layout';
import WeightChart from '@/components/WeightChart';
import WeightTimeline from '@/components/WeightTimeline';
import WeightForm from '@/components/WeightForm';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <WeightChart />
      <Box
        component="form"
        mt={5}
        display="flex"
        justifyContent="center"
        autoComplete="off"
        width="100%"
      >
        <WeightForm />
      </Box>
      <WeightTimeline />
    </Layout>
  );
};

export default Home;
