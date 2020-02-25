import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.base};
  border-radius: 5px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  padding: 10px;
`;

export default Card;
