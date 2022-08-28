import React, { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

interface Props {
  children: React.ReactElement;
}

const CallForPapersLayout = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {props.children}
      <Footer />
    </>
  );
};

export default CallForPapersLayout;
