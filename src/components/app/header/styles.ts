import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Container = styled.header`
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #cccccc;
  display: flex;
  color: white;
  justify-content: space-between;
  height: 68px;
  width: 100%;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  display: flex;
  flex: 1;
  padding: 0 20px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.sizes.header};
`;

export const Logo = styled.label`
  color: #006998;
  font-size: 31px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
`;

export const LogInButton = styled(Button).attrs({
  color: "primary",
  variant: "contained"
})`
  && {
    background-color: #ffffff;
    border: 1px solid #0074c4;
    color: #0074c4;
    font-family: "Arial", "sans-serif";
    font-weight: bold;

    text-transform: uppercase;
    border-radius: 3px;
    transition: opacity 0.2s ease-in-out;
    font: 400 13.3333px Arial;

    &:hover {
      background: #0074c4;
      color: #fff;
    }
  }
`;

export const SuscribeButton = styled(Button).attrs({
  color: "primary",
  variant: "contained"
})`
  && {
    background-color: #ffff24;
    border: 1px solid #cccccc;
    color: #000000;
    font-size: 0.75em;
    padding: 0.75em 1.5em;
    font-family: "Arial", "sans-serif";
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 3px;
    transition: opacity 0.2s ease-in-out;
    margin-right: 35px;

    &:hover {
      background: #ffff24;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  left: 0;
  background: transparent;
  width: 191px;
  &:focus {
    transition: width ease 0.35s;
    width: 40%;
  }
`;
