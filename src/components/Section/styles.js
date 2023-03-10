import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    padding-bottom: 16px;
    margin-bottom: 24px;

    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUD_700};
  }
`;
