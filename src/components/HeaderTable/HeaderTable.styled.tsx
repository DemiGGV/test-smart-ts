import styled from '@emotion/styled';

export const HeaderMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #f0f0f0;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #999;
`;

export const LabelStyled = styled.label`
  position: relative;
`;

export const InputStyled = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 10px;
  display: inline-block;

  background-color: inherit;
  border: none;
  border-radius: 4px;
  outline: none;

  text-align: left;
  font-family: inherit;
  font-size: inherit;

  &:focus {
    background-color: #e4e4e4;
  }

  &:focus ~ span {
    top: -15px;
    left: 5px;

    font-size: 10px;
  }

  &:not(:placeholder-shown) ~ span {
    top: -15px;
    left: 5px;

    font-size: 10px;
  }
`;

export const PlaceHolderStyled = styled.span`
  position: absolute;
  top: 5px;
  left: 10px;

  cursor: text;

  color: #999;
  transition: all 0.3s ease;
`;
