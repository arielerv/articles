import styled from "styled-components";

export const Container = styled.div`
  padding: 50px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template: repeat(6, 1fr) / repeat(7, 1fr);
  grid-column-gap: 2.5em;
  grid-row-gap: 2.5em;
  min-height: 0;
  min-width: 0;

  @media (min-width: 80em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ArticleContainer = styled.article`
  padding: 10px;
  overflow: hidden;
  min-width: 0;

  @media (min-width: 64em) {
    width: 100% !important;
    margin-left: 0;
  }
`;

export const Image = styled.img`
  width: 300px;
  max-height: 300px;
`;

export const ArticleWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.label`
  font-size: 1.0625rem;
  line-height: 1.5rem;
  margin-top: 0.4375em;
  font-weight: bold;
`;
