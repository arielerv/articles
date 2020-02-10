import React, { FC } from "react";

import {
  Container,
  MenuWrapper,
  Wrapper,
  Logo,
  LogInButton,
  SuscribeButton,
  ButtonsWrapper,
  SearchInput
} from "./styles";

const Header: FC = () => (
  <Container>
    <Wrapper>
      <MenuWrapper>
        <SearchInput placeholder="Buscar" />
        <Logo>LA NACION</Logo>
        <ButtonsWrapper>
          <SuscribeButton>SUSCRIBE</SuscribeButton>
          <LogInButton>INGRESAR</LogInButton>
        </ButtonsWrapper>
      </MenuWrapper>
    </Wrapper>
  </Container>
);

export default Header;
