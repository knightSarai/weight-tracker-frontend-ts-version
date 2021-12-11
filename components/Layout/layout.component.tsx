import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Container from '@mui/material/Container';

interface IProps {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<IProps> = (props) => {
  const { title, children } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: '20px' }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
