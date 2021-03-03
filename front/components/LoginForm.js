import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import useInput from '../hooks/useInput';
import {
  loginRequestAction,
  twitterLoginRequestAction,
  googleLoginRequestAction,
} from '../reducers/auth';
import theme from '../assets/theme';
import LogoSvg from './Image/LogoSvg';
import { backUrl } from '../config/config';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${theme.margins.xxxl};
`;

const Form = styled.form`
  width: ${theme.width.mobile};
  height: ${theme.height.mobile};
  border-radius: ${theme.radius.mobile};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.colors.shadow};

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    border-radius: ${theme.radius.pc};
    width: ${theme.width.pc};
    height: ${theme.height.pc};
  }

  transition: all 0.5s ease-in-out;
`;

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
  width: ${theme.form.width_mb_md};
  height: ${theme.form.height_mb_sm};
  border-radius: ${theme.form.radius_mb_xs};
  background-color: ${theme.colors.lightblue};
  padding-left: 1rem;

  @media only screen and (min-width: 768px) {
    width: ${theme.form.width_pc_xl};
  }

  transition: all 0.5s ease-in-out;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  all: unset;
  width: ${theme.submitButton.width_lg};
  height: ${theme.submitButton.height_mb_lg};
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
    width: ${theme.submitButton.width_xl};
  }

  transition: all 0.5s ease-in-out;
`;
const ButtonName = styled.span`
  font-size: ${theme.fontSizes.small};
  line-height: 1rem;
`;

const SubTitle = styled.span`
  margin-top: ${theme.margins.xxl};
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
`;

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(loginRequestAction({ email, password }));
    },
    [email, password],
  );

  const twitterAuth = () => {
    window.open(`${backUrl}/auth/twitter`, '_self');
  };

  const googleAuth = () => {
    window.open(`${backUrl}/auth/google`, '_self');
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <LogoContainer>
        <LogoSvg width="5rem" />
      </LogoContainer>
      <FormWrapper>
        {/* <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          required
        />
      </FormWrapper>
      <FormWrapper>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </FormWrapper>
      <ButtonWrapper>
        <Button type="submit">
          <ButtonName>Send</ButtonName>
        </Button>
      </ButtonWrapper> */}
      <ButtonWrapper>
        <SubTitle>유저가 아니신가요? 지금 가입하세요!</SubTitle>
        <Button
          type="button"
          onClick={() => router.push('/signup')}
          value="회원가입"
        >
          <ButtonName>회원가입</ButtonName>
        </Button>
        <Button type="button" onClick={googleAuth}>
          <ButtonName>구글로 로그인</ButtonName>
        </Button>
        <Button type="button" onClick={twitterAuth}>
          <ButtonName>트위터로 로그인</ButtonName>
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default LoginForm;
