import styled from "styled-components";

export const Container = styled.div`
width: 379px;
height: 95px;
background: #FFFFFF;
box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
border-radius: 8px;
margin-bottom: 20px;
margin-top: 10px;
position: relative;
display: flex;
align-items: center;
justify-content: space-around;

@media screen and (max-width: 505px){

width:250px;
height: 220.05px;
flex-direction: column;
text-align: center;

}

`;

export const Raper = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-around;

@media screen and (max-width: 505px){

width:85%;
height: 40px;
align-items: center;
justify-content: space-between;
margin-bottom: 5%;

}
`;

export const TextItemCart = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 17px;
color: #2C2C2C;
width: 113px;
height: 33px;


@media screen and (max-width: 505px){

font-size:16px;
line-height: 19px;
width: 211px;
height: 21.45;

}
`;


export const Exit = styled.div`
background: #000000;
width: 18px;
height: 18px;
border-radius: 9px;
position: absolute;
right: -2%;
top: -5%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

@media screen and (max-width: 505px){

top: 7%;
right: 7%;
background-color: #FFFF;

}
`;

export const ExitText = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
@media screen and (max-width: 505px){

color: #000;
font-size: 38px;
line-height: 17px;

}
`;

export const CounterRaper = styled.div`
width:55px;
height: auto;
display: flex;
flex-direction: column;
align-items: flex-start;
`;

export const Qtds = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 8px;
line-height: 6px;
color: #000000;
margin-bottom: 5%;
@media screen and (max-width: 505px){

display: none;

}

`;


export const Counter = styled.div`
width:25%;
height: 80%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 15px;
color: #000000;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 505px){

font-size: 20px;
font-weight: 400;
line-height: 24px;

}

`;

export const Box = styled.div`

width: 100%;
height: 100%;
border-left: 0.2px solid #BFBFBF;
border-right: 0.2px solid #BFBFBF;
display: flex;
align-items: center;
justify-content: center;

`;

export const ValorItem = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 800;
font-size: 14px;
line-height: 17px;
color: #000000;
@media screen and (max-width: 505px){

width:84px;
height: 34.81;
background-color: #373737;
border-radius: 5px;
color: #ffffff;
line-height: 15px;
padding: 11px  0px;
}
`;

export const CounterBox = styled.div`
width:100%;
height: 19px;
border: 0.3px solid #BFBFBF;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: space-evenly;
margin-bottom: 12px;
@media screen and (max-width: 505px){

width:97.37px;
height: 34.5px;
margin-top: 20%;

}

`;


export const DImgRaper = styled.div`
width: 46px;
height: 57px;
position: relative;
object-fit: cover;

@media screen and (max-width: 505px){

    width:80px;
    height: 95.1px;
    margin-top: 2%;
    
}

`;