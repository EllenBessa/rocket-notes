import styled from "styled-components";

export const Container = styled.button`
  margin-top: 16px;
  padding: 0 16px;

  width: 100%;
  height: 56px;

  border: 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  &:disabled {
    opacity: 0.5;
  }
`;
