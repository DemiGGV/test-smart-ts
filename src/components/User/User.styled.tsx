import styled from '@emotion/styled';

export const UserItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #f0f0f0;

  &:nth-of-type(2n + 1) {
    background-color: #fff;
  }
`;

export const TextField = styled.p`
  text-align: left;
  padding: 10px;
  display: inline-block;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  cursor: default;

  &:hover {
    overflow: visible;
    transition: all 0.3s ease;
    background-color: #fff;
    border-radius: 4px;
  }
`;
