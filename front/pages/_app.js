import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';
import GrobalStyles from '../assets/globalStyles';
// 전역으로 적용하고 싶은 것 임포트

const Asker = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Asker</title>
    </Head>
    <GrobalStyles />
    <Component />
  </>
);

Asker.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

// HOC
export default wrapper.withRedux(Asker);
