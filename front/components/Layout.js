// index, profile, signup이 공통적으로 사용하는 레이아웃임
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import theme from '../assets/theme';

// STYLED COMPONENTS
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${theme.margins.mobile};

  @media only screen and (min-width: 768px) {
    margin: ${theme.margins.pc};
  }
`;

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1000px;
  align-self: center;
  height: 10vh;
  max-height: 10vh;
`;

const ChildernContainer = styled.main`
  width: 100%;
  max-width: 1000px;
  max-height: auto;
  align-self: center;
`;

const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1000px;
  align-self: center;
  min-height: 25vh;
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <ChildernContainer>{children}</ChildernContainer>
    <FooterContainer>
      <Footer />
    </FooterContainer>
  </LayoutContainer>
);

// node: return안에 들어갈 수 있는 모든 것들이 노드다.
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
