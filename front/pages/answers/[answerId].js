import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { END } from 'redux-saga';
import wrapper from '../../store/configureStore';
import theme from '../../assets/theme';

import AnswerCard from '../../components/Cards/AnswerCard';
import { LOAD_AUTH_REQUEST } from '../../reducers/auth';
import { LOAD_ANSWER_REQUEST } from '../../reducers/answer';

const AnswerDetailContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnswerCardWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    width: ${theme.width.pc};
  }
`;

const AnswerDetail = () => {
  const router = useRouter();
  const { answer } = useSelector((state) => state.answer);

  // 페이지가 백엔드 Redirect로 호출되는 경우

  return (
    <AnswerDetailContainer>
      <AnswerCardWrapper>
        <AnswerCard
          answerId={answer.id}
          askId={answer.Ask.id}
          nickname={answer.Ask.nickname}
          askContent={answer.Ask.content}
          answerContent={answer.content}
          date={answer.createdAt}
        />
      </AnswerCardWrapper>
    </AnswerDetailContainer>
  );
};

/*
  SSR Dispatch
  LOAD_AUTH_REQUEST
  LOAD_ANSWER_REQUEST
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

    context.store.dispatch({
      type: LOAD_ANSWER_REQUEST,
      data: context.query,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default AnswerDetail;
