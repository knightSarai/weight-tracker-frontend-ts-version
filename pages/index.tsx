import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import WeightChart from '@/components/WeightChart';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <WeightChart />
    </Layout>
  );
};

export default Home;
