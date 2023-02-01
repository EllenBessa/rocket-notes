import styled from "styled-components";

export const Container = styled.button`
  padding: 20px;
  margin-bottom: 16px;

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;
  border-radius: 10px;

  > h1 {
    flex: 1;

    text-align: left;
    font-weight: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    margin-top: 24px;

    display: flex;
  }
`;
