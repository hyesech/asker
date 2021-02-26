import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  height: 324px;
  margin: 35.4px 15px 0 0;
  padding: 32px 32px 45px;
  border-radius: 20px;
  box-shadow: 8px 8px 16px 4px rgba(137, 143, 150, 0.04);
  border: solid 0.5px #ebebf9;
  background-color: #ffffff;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
`;
const Label = styled.span`
  font-size: 0.7rem;
`;
const Nickname = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const Content = styled.div`
  font-size: 1rem;
`;

const AskCard = ({ nickname, content }) => (
  <Container>
    <Header>
      <Label>Asker Nickname</Label>
      <Nickname>{nickname}</Nickname>
    </Header>
    <Content>{content}</Content>
  </Container>
);

AskCard.propTypes = {
  ask: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    answer: PropTypes.string,
    nickname: PropTypes.string,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
export default AskCard;
