import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { signupRequestAction } from '../reducers/auth';
import theme from '../assets/theme';
import LogoSvg from './Image/LogoSvg';

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
  color: ${theme.colors.gray};

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
  margin-top: ${theme.margins.xxxl};
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
`;

const SignupForm = () => {
  const [email, onChangeEmail] = useInput('');
  const [username, onChangeUsername] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useDispatch();

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(signupRequestAction({ email, username, password }));
    },
    [email, username, password],
  );

  return (
    <>
      <Form onSubmit={onSubmit}>
        <LogoContainer>
          <LogoSvg width="5rem" />
        </LogoContainer>
        <FormWrapper>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
            required
          />
        </FormWrapper>
        <FormWrapper>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={onChangeUsername}
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
        <FormWrapper>
          <Label htmlFor="password-check">Password Check</Label>
          <Input
            type="password"
            name="password-check"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
        </FormWrapper>
        <ButtonWrapper>
          <SubTitle>Welcome!!!</SubTitle>
          <Button type="submit">
            <ButtonName>회원가입</ButtonName>
          </Button>
        </ButtonWrapper>
      </Form>
      {/* {passwordError ? (
        <ErrorMsg>일치하지 않음</ErrorMsg>
      ) : (
        <ErrorMsg>일치함</ErrorMsg>
      )} */}
    </>
  );
};

export default SignupForm;
