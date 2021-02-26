import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addAskRequestAction } from '../../reducers/ask';
import useInput from '../../hooks/useInput';
import theme from '../../assets/theme';

/* Style */
const Form = styled.form`
  width: 100%;
  min-height: ${theme.height.mb_sm};
  border-radius: ${theme.radius.mobile};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.colors.shadow};
  margin: ${theme.margins.mobile} 0;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    border-radius: ${theme.radius.pc};
    min-height: ${theme.height.pc_sm};
  }

  transition: all 0.5s ease-in-out;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: ${theme.gap.small};
  padding: ${theme.paddings.mobile};
  color: ${theme.colors.gray};
`;

const Label = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
  margin-top: ${theme.margins.mobile};
  margin-left: ${theme.margins.xs};
  line-height: 1rem;
`;

const NicknameInput = styled.input`
  all: unset;
  width: ${theme.form.width_mb_xs};
  height: ${theme.form.height_mb_xs};
  border-radius: ${theme.form.radius_mb_xs};
  background-color: ${theme.colors.lightblue};
  font-size: ${theme.fontSizes.medium};
  padding: 0.2rem;

  @media only screen and (min-width: 768px) {
    width: ${theme.form.width_pc_xs};
  }

  transition: all 0.5s ease-in-out;
`;

const AskInput = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  height: ${theme.form.height_mb_md};
  border-radius: ${theme.form.radius_mb_sm};
  background-color: ${theme.colors.lightblue};
  color: ${theme.colors.gray};

  :focus {
    outline: none;
  }

  @media only screen and (min-width: 768px) {
    min-height: ${theme.form.height_mb_md};
  }

  transition: all 0.5s ease-in-out;
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
  width: ${theme.submitButton.width_sm};
  height: ${theme.submitButton.height_mb_md};
  border-radius: ${theme.linkButton.radius};
  background-color: ${(props) =>
    props.type === 'submit'
      ? `${theme.colors.blue}`
      : `${theme.colors.lightblue}`};
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

const AskFormCard = ({ userId }) => {
  const dispatch = useDispatch();
  const [nickname, onChangeNickname] = useInput('');
  const [content, onChangeContent] = useInput('');
  const { addAskDone } = useSelector((state) => state.ask);

  // Functions
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(addAskRequestAction({ nickname, content, ...userId }));
    },
    [nickname, content],
  );

  //
  useEffect(() => {
    if (addAskDone) {
      alert('성공');
    }
  }, [addAskDone]);

  return (
    <Form onSubmit={onSubmitForm}>
      <FormWrapper>
        <Label>Your Nickname</Label>
        <NicknameInput
          type="text"
          name="text"
          value={nickname}
          onChange={onChangeNickname}
          required
        />
        <Label>Ask Something</Label>
        <AskInput
          name="text"
          value={content}
          onChange={onChangeContent}
          required
        />
        <Label>
          &#x26A0; 본 서비스는 익명 유저의 식별자를 임의로 생성하여 저장할 수
          있으며, 해당 정보는 형사소송법에 의한 요청에 따라 관련 기관에 제공될
          수 있습니다.
        </Label>
        <ButtonWrapper>
          <Button type="submit">
            <ButtonName>Send</ButtonName>
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Form>
  );
};

export default AskFormCard;
