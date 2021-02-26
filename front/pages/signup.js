import Router from 'next/router';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { END } from 'redux-saga';
import axios from 'axios';
import { useSelector } from 'react-redux';
import SignupForm from '../components/SignupForm';
import wrapper from '../store/configureStore';
import { LOAD_AUTH_REQUEST } from '../reducers/auth';

const SignupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Signup = () => {
  const { isSignedUp, signupError, me } = useSelector((state) => state.auth);

  // 이미 로그인 했을 시
  useEffect(() => {
    if (me && me.id) {
      Router.replace(`/${me.id}`);
    }
  }, [me && me.id]);

  // 회원가입 성공시
  useEffect(() => {
    if (isSignedUp) {
      Router.replace('/login');
    }
  }, [isSignedUp]);

  // 회원가입 에러
  useEffect(() => {
    if (signupError) {
      alert(signupError);
    }
  }, [signupError]);

  return (
    <SignupContainer>
      <SignupForm />
    </SignupContainer>
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

export default Signup;
