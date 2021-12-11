import Navbar from '@/components/Navbar';
import Head from 'next/head';

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
      {children}
    </>
  );
};

export default Layout;
