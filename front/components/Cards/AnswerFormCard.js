import React, { useCallback } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { addAnswerRequestAction } from '../../reducers/answer';
import useInput from '../../hooks/useInput';
import theme from '../../assets/theme';
import XbtnSvg from '../Image/XbtnSvg';
import { deleteAskRequestAction } from '../../reducers/ask';
// import TwitterSvg from '../Image/TwitterSvg';

// Style
const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${theme.paddings.xl} ${theme.paddings.xl} 0 0;
`;
const Icon = styled.span`
  :hover {
    cursor: pointer;
  }
`;

const Form = styled.form`
  width: 100%;
  min-width: ${theme.width.mb_sm};
  height: auto;
  border-radius: ${theme.radius.mobile};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.colors.shadow};
  margin: ${theme.margins.mobile} 0;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    border-radius: ${theme.radius.pc};
    height: auto;
  }

  transition: all 0.5s ease-in-out;
`;

const AskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 ${theme.gap.small};
  padding: 0 ${theme.paddings.mobile};
  color: ${theme.colors.gray};
`;

const AskDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
const Nickname = styled.span`
  margin-left: ${theme.margins.xs};
  color: ${theme.colors.dark};
  font-size: ${theme.fontSizes.lg};
  font-weight: bold;
`;
const Date = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
  margin-top: ${theme.margins.sm};
  margin-left: ${theme.margins.xs};
  line-height: 1rem;
  font-weight: bold;
`;

const AskContent = styled.div`
  margin: ${theme.margins.sm};
  color: ${theme.colors.gray};
  font-size: ${theme.fontSizes.medium};
  line-height: 1.4rem;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 ${theme.gap.small};
  padding: 0 ${theme.paddings.mobile};
  color: ${theme.colors.gray};
`;

const Label = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
  margin-top: ${theme.margins.mobile};
  margin-left: ${theme.margins.xs};
  line-height: 1rem;
`;

const AnswerInput = styled.textarea`
  width: 100%;
  height: ${theme.form.height_mb_md};
  border-radius: ${theme.form.radius_mb_sm};
  background-color: ${theme.colors.lightblue};

  :focus {
    outline: none;
  }

  @media only screen and (min-width: 768px) {
    min-height: ${theme.form.height_mb_md};
  }

  transition: all 0.5s ease-in-out;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.margins.xl};
`;

const Button = styled.button`
  all: unset;
  width: ${theme.submitButton.width_sm};
  height: ${theme.submitButton.height_mb_md};
  border-radius: ${theme.submitButton.radius_mb_md};
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

// dayjs
dayjs.locale('ko');

const AnswerFormCard = ({ askId, nickname, content, date }) => {
  const dispatch = useDispatch();
  const [answer, onChangeAnswer] = useInput('');

  // Functions
  const handdleDelete = () => {
    // 질문 삭제
    dispatch(deleteAskRequestAction(askId));
  };

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(addAnswerRequestAction({ answer, askId }));
    },
    [answer],
  );

  return (
    <Form onSubmit={onSubmitForm}>
      <ToggleContainer onClick={handdleDelete}>
        <Icon>
          <XbtnSvg width="1.25rem" />
        </Icon>
      </ToggleContainer>
      <AskWrapper>
        <AskDetail>
          <Label>From.</Label>
          <Nickname>{nickname}</Nickname>
          <Date>{dayjs(date).format('YYYY.MM.DD')}</Date>
        </AskDetail>
        <AskContent>{content}</AskContent>
      </AskWrapper>
      <FormWrapper>
        <AnswerInput
          name="answer"
          value={answer}
          onChange={onChangeAnswer}
          required
        />
      </FormWrapper>

      <ButtonWrapper>
        {/* <TwitterSvg width="2rem" fill={theme.colors.blue} /> */}
        <Button type="submit">
          <ButtonName>Answer</ButtonName>
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default AnswerFormCard;
