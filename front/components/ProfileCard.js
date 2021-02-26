import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addAskRequestAction } from '../reducers/ask';
import useInput from '../hooks/useInput';
import theme from '../assets/theme';
import LogoSvg from './Image/LogoSvg';

// Style
const GridLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const Form = styled.form`
  width: 100%;
  height: auto;
  border-radius: ${theme.radius.mobile};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.colors.shadow};
  margin: ${theme.margins.mobile} 0;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    border-radius: ${theme.radius.pc};
    width: ${theme.width.pc};
    height: ${theme.height.pc};
  }

  transition: all 0.5s ease-in-out;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: ${theme.gap.small};
  color: ${theme.colors.gray};
`;

const ProfilePicture = styled.div`
  width: 20%;
`;
const ProfileDetail = styled.div`
  width: 70%;
`;

const UserName = styled.div``;
const UserBio = styled.div``;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.gap.small};
  color: ${theme.colors.gray};
`;

const Label = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
`;

const Input = styled.input`
  all: unset;
  width: ${theme.inputButton.width_lg};
  height: ${theme.inputButton.height};
  border-radius: ${theme.inputButton.radius};
  background-color: ${theme.colors.lightblue};
  padding-left: 1rem;

  @media only screen and (min-width: 768px) {
    width: ${theme.inputButton.width_xl};
  }

  transition: all 0.5s ease-in-out;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.input`
  all: unset;
  width: ${theme.linkButton.width_lg};
  height: ${theme.linkButton.height};
  border-radius: ${theme.linkButton.radius};
  background-color: ${(props) =>
    props.type === 'submit'
      ? `${theme.colors.blue}`
      : `${theme.colors.lightblue}`};
  color: ${(props) =>
    props.type === 'submit' ? `${theme.colors.white}` : `${theme.colors.gray}`};
  text-align: center;
  margin: ${theme.gap.small};

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
    width: ${theme.linkButton.width_xl};
  }

  transition: all 0.5s ease-in-out;
`;

const ProfileCard = ({ targetUserId }) => {
  const dispatch = useDispatch();
  const [nickname, onChangeNickname] = useInput('');
  const [content, onChangeContent] = useInput('');

  // Functions
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(addAskRequestAction({ nickname, content, targetUserId }));
    },
    [nickname, content],
  );

  const handlePopUp = () => {
    alert('Ask를 보냈습니다.');
    window.location.reload();
  };

  return (
    <GridLayout>
      <Form onSubmit={onSubmitForm}>
        <ProfileWrapper>
          <ProfilePicture>
            <LogoSvg width="3rem" />
          </ProfilePicture>
          <ProfileDetail>
            <UserName>유저네임</UserName>
            <UserBio>모든 것은 너의 스탠스로부터 시작된다.</UserBio>
          </ProfileDetail>
        </ProfileWrapper>
        <FormWrapper>
          <Label>Your Nickname</Label>
          <Input
            type="text"
            name="text"
            value={nickname}
            onChange={onChangeNickname}
            required
          />
          <Label>Ask what you want!</Label>
          <Input
            type="text"
            name="text"
            value={content}
            onChange={onChangeContent}
            required
          />
          <ButtonWrapper>
            <Button type="submit" onClick={handlePopUp} value="제출" />
          </ButtonWrapper>
        </FormWrapper>
      </Form>
    </GridLayout>
  );
};

export default ProfileCard;
