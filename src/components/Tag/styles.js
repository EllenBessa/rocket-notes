import styled from "styled-components";

export const Container = styled.span`
  margin-right: 6px;
  padding: 5px 14px;

  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.BACKGROUD_900};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;
