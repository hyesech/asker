import Router from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import theme from '../assets/theme';
import { logoutRequestAction } from '../reducers/auth';
import LogoSvg from './Image/LogoSvg';

const FooterContainer = styled.footer`
  width: inherit;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.bgColor};
  border-radius: ${theme.radius.mobile};
  margin: ${theme.margins.xl} 0;

  transition: all 0.5s ease-in-out;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Label = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.special};
  margin-top: ${theme.margins.sm};
  line-height: 0.5rem;
  font-weight: bold;

  :hover {
    cursor: pointer;
    color: ${theme.colors.blue};
  }
  transition: all 0.5s ease-in;
`;

const Footer = () => {
  const { me } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutRequestAction());
  };

  const handleLogin = () => {
    Router.push('/login');
  };

  // logout 완료시 알림

  return (
    <FooterContainer>
      <LogoWrapper>
        <LogoSvg width="4rem" fill={theme.colors.special} />
      </LogoWrapper>
      <InfoWrapper>
        <Label>Policy</Label>
        <Label>Contact</Label>
        <Label>Twitter</Label>
        <Label>-</Label>
        {me === null ? (
          <Label onClick={handleLogin}>로그인</Label>
        ) : (
          <Label onClick={handleLogout}>로그아웃</Label>
        )}
        <Label>-</Label>
        <Label>&copy;Asker</Label>
      </InfoWrapper>
    </FooterContainer>
  );
};

export default Footer;
