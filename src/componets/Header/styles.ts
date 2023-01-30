import styled from "styled-components";

export const Topos = styled.section`

width: 100%;
height: 101px;
background-color: #0F52BA;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 505px ){
    
   
    height: 48px;
}

`;

export const Container = styled.div`
width: 95%;
max-width: 1424px;
height: 70%;
display: flex;
align-items: center;
justify-content: space-between;
@media screen and (max-width: 505px ){
    
    height: auto;
}


`;
export const DivTitle = styled.div`
width: 120px;
height: auto;
display: flex;
align-items: baseline;
cursor: pointer;
@media screen and (max-width: 505px ){
    
    margin-left: 15px;
    align-items: center;
}
`;
export const Title = styled.h1`
//font-family: Montserrat;
font-weight: 600;
font-size: 40px;
line-height: 19px;
color: #FFFFFF;
@media screen and (max-width: 505px ){
    
    font-size: 32px;
}
`;
export const SubTitle = styled.h3`
//font-family: Montserrat;
font-weight: 300;
font-size: 20px;
line-height: 19px;
color: #FFFFFF;
margin-left: 5%;

@media screen and (max-width: 505px ){
    
    font-size: 16px;
    margin-top: 6px;
}
`;

export const DivCart = styled.div`
width: 90px;
height: 45px;
display: flex;
background-color: #FFFFFF ;
align-items: center;
justify-content: space-evenly;
border-radius: 8px;
cursor: pointer;
@media screen and (max-width: 505px ){
    
    width: 52px;
    height: 26px;
    margin-right: 15px;
}

`;

export const Contador = styled.h1`


width: 13px;
height: 22px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #000000;
@media screen and (max-width: 505px ){
    
 font-size:12px;
}
`;

export const DImgCart = styled.div`
width: 19.01px;
height: 18px;
position: relative;

@media screen and (max-width: 505px ){
    
    width: 10.98px;
    height: 10.4px;
}

:nth-child(2){
 display: none;
 @media screen and (max-width: 505px ){
    
    display:block;
    margin-bottom: 10%;
}
}


:nth-child(1){
    @media screen and (max-width: 505px ){
    
    display:none;
}
}

`;


export const CnfAnme = styled.div<{animate:boolean}>`

width: 350px;
height: 350px;
position: absolute;
left: 35%;
top: 35%;
border-radius: 150px;
display: ${({animate})=> animate ? 'flex' : 'none'};
z-index: 1;

@media screen and (max-width: 505px){

display: none;

}

`; 