/*
    This component a Button indicating whether or not the selection is correct.
    The indication should only become visible once the user has selected an
    option.
 */
import styled from 'styled-components';

const Button = styled.button`
  color: ${({ answerSubmitted }) => (answerSubmitted ? 'white' : 'black')};
  background-color: ${({ answerSubmitted, isCorrect }) => {
    if (answerSubmitted) {
      return isCorrect ? 'green' : 'tomato';
    }
    return '';
  }};
`;

export default Button;
