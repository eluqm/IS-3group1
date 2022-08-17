import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

interface Props {
  children: React.ReactElement;
}

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;