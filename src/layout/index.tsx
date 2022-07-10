import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../components/Navbar';
import * as ST from '../styles/components';

interface Props {
  children: React.ReactNode;
  title?: string;
  favicon?: string;
}

export const MainLayout: FC<Props> = ({ children, title, favicon }) => {
  return (
    <ST.ContentWrapperStyles>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon || './assets/world.png'} />
      </Head>
      <Navbar />
      <ST.MainWrapper>{children}</ST.MainWrapper>
    </ST.ContentWrapperStyles>
  );
};
