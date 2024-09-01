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
  position: relative;
  text-align: left;
  padding: 10px;
  display: block;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  cursor: default;

  &::after {
    content: '';
    top: 5px;
    left: 0;
    scale: 0.9;
  }

  &:hover::after {
    content: attr(data-text);
    position: absolute;
    top: 5px;
    left: 0;
    z-index: 10;
    padding: 5px;
    width: max-content;

    white-space: nowrap;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    scale: 1;
    transition: all 0.2s ease;
  }

  &:hover {
    overflow: visible;
  }
`;
