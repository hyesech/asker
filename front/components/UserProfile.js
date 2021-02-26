import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logoutRequestAction } from '../reducers/auth';

const Container = styled.div``;

const UserWrapper = styled.div``;
const Avatar = styled.span``;
const UserInfo = styled.div``;
const UserId = styled.span``;
const UserLink = styled.span``;

const AskWrapper = styled.div``;
const AskTotal = styled.span``;

const LogoutWrapper = styled.div``;
const LogoutBtn = styled.button``;

const UserProfile = () => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(logoutRequestAction());
  });

  return (
    <Container>
      <UserWrapper>
        <Avatar>아바타... 사진?</Avatar>
        <UserInfo>
          <UserId>유저 아이디 닉네임</UserId>
          <UserLink>뭐 트위터 링크</UserLink>
        </UserInfo>
      </UserWrapper>
      <AskWrapper>
        <AskTotal>345</AskTotal>
      </AskWrapper>
      <LogoutWrapper>
        <LogoutBtn onClick={onClick}>로그아웃</LogoutBtn>
      </LogoutWrapper>
    </Container>
  );
};

export default UserProfile;
