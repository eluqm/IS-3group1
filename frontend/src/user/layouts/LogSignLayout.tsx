import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

interface Props {
  children: React.ReactElement;
}

const LogSignLayout = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default LogSignLayout;
