import React from 'react'
import { styled } from 'styled-components'

export const DivGrid=styled.div`
background-color:lightgrey;
border:none;
padding:none;
display:grid;
height:700px;
grid-template-areas:"head head"
                    "side main"
                    "foot foot";
grid-template-rows:15% 70% 15%;           
grid-template-columns:20% 80%;
gap:2%; 
`;
export const DivHead=styled.div`
grid-area:head;
background-color:grey;
`;
export const DivAside=styled.div`
grid-area:side;
background-color:hotpink;
position:relative;
left:-200px;
transition:left 0.5s ease;
&:hover{
    background-color:lightblue;
    left:0;
}
`;
export const DivBody=styled.div`
grid-area:main;
background-color:orange;
`;
export const DivFooter=styled.div`
grid-area:foot;
background-color:lightgreen;
`;


function CondRenderTransition() {
  return (
    <DivGrid>
        {true&&<DivHead></DivHead>}
        <DivAside></DivAside>
        <DivBody></DivBody>
        <DivFooter></DivFooter>
    </DivGrid>
  )
}

export default CondRenderTransition