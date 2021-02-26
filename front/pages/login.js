import React, { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';
import wrapper from '../store/configureStore';
import { LOAD_AUTH_REQUEST } from '../reducers/auth';

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const { isLoggedIn, loginError, me } = useSelector((state) => state.auth);

  // 이미 로그인 했을 시
  useEffect(() => {
    if (me && me.id) {
      Router.replace(`/${me.id}`);
    }
  }, [me && me.id]);

  // 로그인 성공시
  useEffect(() => {
    if (isLoggedIn) {
      Router.replace(`/${me.id}`);
    }
  }, [isLoggedIn]);

  // 로그인 에러
  useEffect(() => {
    if (loginError) {
      alert(loginError);
    }
  }, [loginError]);

  return (
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
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

export default Login;
