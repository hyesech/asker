import React, { useEffect } from 'react';
import styled from 'styled-components';

import theme from '../../assets/theme';
import LogoSvg from '../Image/LogoSvg';
import ShareSvg from '../Image/ShareSvg';

// Style
const ProfileBlockContainer = styled.div`
  width: 100%;
  height: ${theme.height.mb_xs};
  border-radius: ${theme.radius.mobile};
  background-color: ${theme.colors.bgColor};
  margin: ${theme.margins.mobile} 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    width: ${theme.width.pc_lg};
    height: ${theme.height.pc_sm};
    border-radius: ${theme.radius.pc};
  }

  transition: all 0.5s ease-in-out;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.gap.small};
  color: ${theme.colors.special};
`;

const UserName = styled.div`
  font-size: ${theme.fontSizes.small};
  font-weight: bold;
`;

const NavList = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${theme.gap.nav};

  @media only screen and (min-width: 768px) {
    right: ${theme.margins.pc};
  }

  transition: all 0.5s ease-in-out;
`;

const NavLabel = styled.span`
  margin: 0 ${theme.margins.mobile};
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
  font-weight: bold;

  :hover {
    cursor: pointer;
    color: ${theme.colors.blue};
  }
`;

const ProfileBlock = ({ username }) => {
  const goToShareLink = () => {};

  return (
    <ProfileBlockContainer>
      <LogoWrapper>
        <LogoSvg width="3rem" fill={theme.colors.special} />
      </LogoWrapper>
      <ProfileWrapper>
        <UserName>@{username}</UserName>
      </ProfileWrapper>
      <NavList>
        <NavLabel onClick={goToShareLink}>
          <ShareSvg width="1rem" fill={theme.colors.special} />
        </NavLabel>
      </NavList>
    </ProfileBlockContainer>
  );
};

export default ProfileBlock;
