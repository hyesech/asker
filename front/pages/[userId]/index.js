import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { END } from 'redux-saga';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_AUTH_REQUEST, LOAD_USER_REQUEST } from '../../reducers/auth';
import { LOAD_ANSWERS_REQUEST } from '../../reducers/answers';
import Layout from '../../components/Layout';
import ProfileBlock from '../../components/Blocks/ProfileBlock';
import wrapper from '../../store/configureStore';
import AskFormCard from '../../components/Cards/AskFormCard';
import theme from '../../assets/theme';
import AnswerCard from '../../components/Cards/AnswerCard';

const UserIndexSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: ${theme.gap.large};
  }

  transition: all 0.5s ease-in-out;
`;

const AnswerSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
    gap: ${theme.gap.large};
  }

  transition: all 0.5s ease-in-out;
`;

const AnswerSectionTitle = styled.div`
  margin: ${theme.margins.xl} 0 0;
  padding-left: ${theme.paddings.lg};
  font-size: ${theme.fontSizes.xxxl};
  font-weight: bold;
  color: ${theme.colors.special};
`;

const AnswerCardList = styled.section``;

const UserIndex = () => {
  const dispatch = useDispatch();
  const { answers, hasMoreAnswers, loadAnswersLoading } = useSelector(
    (state) => state.answers,
  );
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const userId = router.query;

  // Infinite Scrolling
  useEffect(() => {
    function onScroll() {
      // scroll 끝까지 내렸을 때 로딩
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        // 답변이 더 있고, 로딩중이 아닐 때 dispatch
        if (hasMoreAnswers && !loadAnswersLoading) {
          // lastID
          const lastId = answers[answers.length - 1]?.id;
          const data = { ...userId, ...lastId };
          dispatch({
            type: LOAD_ANSWERS_REQUEST,
            data,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);

    // 반드시 해제해야 함
    // 안그러면 메모리에 계속 쌓인다.
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMoreAnswers, loadAnswersLoading, answers]);

  return (
    <>
      <Layout>
        <UserIndexSection>
          <ProfileBlock username={user !== null ? user.username : 'asker'} />
          <AskFormCard userId={userId} />
        </UserIndexSection>
        <AnswerSection>
          <AnswerSectionTitle>Answers</AnswerSectionTitle>
          <AnswerCardList>
            {answers.map((answer) => (
              <AnswerCard
                key={answer.id}
                answerId={answer.id}
                askId={answer.Ask.id}
                nickname={answer.Ask.nickname}
                askContent={answer.Ask.content}
                answerContent={answer.content}
                date={answer.createdAt}
              />
            ))}
          </AnswerCardList>
        </AnswerSection>
      </Layout>
    </>
  );
};

/*
  SSR Dispatch
  LOAD_AUTH_REQUEST
  LOAD_ASKS_REQUEST
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
      type: LOAD_ANSWERS_REQUEST,
      data: context.params.userId,
    });

    context.store.dispatch({
      type: LOAD_USER_REQUEST,
      data: context.params.userId,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default UserIndex;
