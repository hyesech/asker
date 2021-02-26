import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { END } from 'redux-saga';
import Router from 'next/router';
import { LOAD_AUTH_REQUEST } from '../reducers/auth';
import theme from '../assets/theme';
import wrapper from '../store/configureStore';
import LogoSvg from '../components/Image/LogoSvg';

// Style
const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.bgColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.5s ease-in-out;
`;

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.gap.small};
  color: ${theme.colors.special};
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

const ButtonWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.margins.base};
`;

const Button = styled.button`
  all: unset;
  width: ${theme.submitButton.width_xs};
  height: ${theme.submitButton.height_mb_lg};
  border-radius: 100%;
  background-color: ${(props) =>
    props.type === 'submit'
      ? `${theme.colors.blue}`
      : `${theme.colors.lightgray}`};
  color: ${(props) =>
    props.type === 'submit' ? `${theme.colors.white}` : `${theme.colors.gray}`};
  text-align: center;

  :hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.type === 'submit'
        ? `${theme.colors.lightblue}`
        : `${theme.colors.blue}`};
    color: ${(props) =>
      props.type === 'submit'
        ? `${theme.colors.lightblue}`
        : `${theme.colors.white}`};
  }

  @media only screen and (min-width: 768px) {
  }

  transition: all 0.5s ease-in-out;
`;

const ButtonName = styled.span`
  font-size: ${theme.fontSizes.small};
  line-height: 1rem;
`;

const Home = () => {
  const goToLogin = () => {
    Router.push('/login');
  };

  return (
    <HomeContainer>
      <LogoWrapper>
        <LogoSvg width="4rem" fill={theme.colors.special} />
      </LogoWrapper>
      <ProfileWrapper>
        <UserName>@Asker</UserName>
      </ProfileWrapper>
      <HomeWrapper>
        <ButtonWrapper>
          <Button onClick={goToLogin}>
            <ButtonName>START</ButtonName>
          </Button>
        </ButtonWrapper>
      </HomeWrapper>
    </HomeContainer>
  );
};

/*
  SSR Dispatch
  LOAD_AUTH_REQUEST
*/
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // Cookie
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_AUTH_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default Home;
