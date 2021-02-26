import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import Router, { useRouter } from 'next/router';
import { LOAD_AUTH_REQUEST } from '../../reducers/auth';
import { LOAD_ASKS_REQUEST } from '../../reducers/asks';
import wrapper from '../../store/configureStore';
import Layout from '../../components/Layout';
import theme from '../../assets/theme';
import AnswerFormCard from '../../components/Cards/AnswerFormCard';
import ProfileBlock from '../../components/Blocks/ProfileBlock';

const UserAdminSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (min-width: 768px) {
    gap: ${theme.gap.large};
  }

  transition: all 0.5s ease-in-out;
`;

const AskCardList = styled.section`
  min-height: 30vh;
`;

const UserAdmin = () => {
  const dispatch = useDispatch();
  const { me, user } = useSelector((state) => state.auth);
  const { asks, hasMoreAsks, loadAsksLoading } = useSelector(
    (state) => state.asks,
  );
  const router = useRouter();
  const { userId } = router.query;
  const parsedUserId = parseInt(userId);

  // 프론트 단에서 me의 정보와 me의 정보가 다르면 본인 index로 redirect
  // routeAdress와 me.id는 자료형이 다르다.
  useEffect(() => {
    if (me.id !== parsedUserId) {
      Router.replace(`/${me.id}`);
    }
  }, [me.id]);

  // Infinite Scrolling
  useEffect(() => {
    function onScroll() {
      // scroll 끝까지 내렸을 때 로딩

      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        // 답변이 더 있고, 로딩중이 아닐 때 dispatch
        if (hasMoreAsks && !loadAsksLoading) {
          // lastID
          const lastId = asks[asks.length - 1]?.id;
          const data = { userId, lastId };
          dispatch({
            type: LOAD_ASKS_REQUEST,
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
  }, [hasMoreAsks, loadAsksLoading, asks]);

  return (
    <Layout>
      <UserAdminSection>
        <ProfileBlock username={user !== null ? user.username : 'asker'} />
      </UserAdminSection>
      <AskCardList>
        {asks.map((ask) => (
          <AnswerFormCard
            key={ask.id}
            askId={ask.id}
            nickname={ask.nickname}
            content={ask.content}
            date={ask.createdAt}
          />
        ))}
      </AskCardList>
    </Layout>
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

    // context.store.dispatch({
    //   type: LOAD_ASKS_REQUEST,
    //   data: context.params.userId,
    // });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default UserAdmin;
