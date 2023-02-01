import styled from "styled-components";

export const Container = styled.textarea`
  margin-bottom: 8px;
  padding: 16px;

  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 16px;

  border: none;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
