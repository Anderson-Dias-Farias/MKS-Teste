import styled from "styled-components";


export const Produts = styled.section`

width: 100%;
height: auto;
min-height: 85vh;
background-color: #E5E5E5;
display: flex;
align-items: center;
justify-content: center;

`;

export const Container =styled.div`
width: 100%;
max-width: 1024px;
height: auto;
display: flex;
flex-wrap: wrap;
margin-top: 5%;
margin-bottom: 5%;


@media screen and (max-width: 1023px) {
    align-items: center;
    justify-content: center;
}
`;