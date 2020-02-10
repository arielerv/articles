import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const Main = styled.main`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  height: calc(100vh - 80px);
`
