import React from 'react';
import { styled } from 'styled-components';

export const DivGrid = styled.div`
  display: grid;
  grid-template-areas:
    'head head'
    'side content'
    'foot foot';
  grid-template-columns: 20% 80%;
  grid-template-rows: 15% 70% 15%;
  height:500px;
`;
export const GridHead = styled.header`
  grid-area: head;
  background-color: red;
`;
export const GridAside = styled.aside`
  grid-area: side;
  background-color: grey;
`;
export const GridMain = styled.article`
  grid-area: content;
  background-color: lightgreen;
`;
export const GridFooter = styled.footer`
  grid-area: foot;
  background-color: violet;
`;

function GridLayout() {
  return (
    <DivGrid>
      <GridHead>Header</GridHead>
      <GridAside>Aside</GridAside>
      <GridMain>Main</GridMain>
      <GridFooter>Footer</GridFooter>
    </DivGrid>
  );
}

export default GridLayout;
