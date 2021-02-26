import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router';
import styled from 'styled-components';
import theme from '../assets/theme';
import HomeSvg from './Image/HomeSvg';
import BoxSvg from './Image/BoxSvg';
import NewSvg from './Image/NewSvg';
import LoginSvg from './Image/LoginSvg';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.5s ease-in-out;
`;

const NavList = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${theme.gap.nav};
  position: fixed;
  z-index: 99;

  @media only screen and (min-width: 768px) {
    top: ${theme.margins.pc};
  }

  transition: all 0.5s ease-in-out;
`;

const Label = styled.span`
  position: relative;
  margin: 0 ${theme.margins.mobile};
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
  font-weight: bold;

  :hover {
    cursor: pointer;
    color: ${theme.colors.blue};
  }

  transition: all 0.5s ease-in;
`;

const NewIcon = styled.span`
  position: absolute;
  left: 10px;
  bottom: 8px;
`;

const Header = () => {
  const { me } = useSelector((state) => state.auth);

  const goToHome = () => {
    Router.push(`/${me.id}`);
  };

  const goToAdmin = () => {
    Router.push(`/${me.id}/admin`);
  };

  const goToLogin = () => {
    Router.push('/login');
  };

  return (
    <Container>
      {me === null ? (
        <NavList>
          <Label onClick={goToLogin}>
            <LoginSvg width="1rem" fill={theme.colors.blue} />
          </Label>
          <Label onClick={goToLogin}>로그인</Label>
        </NavList>
      ) : (
        <NavList>
          <Label onClick={goToHome}>
            <HomeSvg width="1.1rem" fill={theme.colors.special} />
          </Label>

          <Label onClick={goToAdmin}>
            <BoxSvg width="1rem" fill={theme.colors.special} />
            <NewIcon>
              <NewSvg width="0.7rem" />
            </NewIcon>
          </Label>
        </NavList>
      )}
    </Container>
  );
};

export default Header;
