import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: #3f51b5;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 72, 204, 0.2) 0px -50px 36px -28px inset;
  }
`;
export const Input = styled.input`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 7px;
  border: none;
  outline: none;
`;
