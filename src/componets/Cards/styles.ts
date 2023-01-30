import styled from "styled-components";

export const CardRaper = styled.div`
width: 217.56px;
height: 285px;
border-radius:8px;
background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
margin: 18px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;


@media screen and (max-width: 505px ){
    
    width: 250.5px;
    height: 328px;
}

`;

export const DivInfo = styled.div`
width:85%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-evenly;

`;

export const DivValor = styled.div`
width:64px;
height: 26px;
background-color: #373737;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
padding: 1%;
@media screen and (max-width: 505px ){
    
    width: 73.69px;
    height: 29.92px;
}

`;
export const ValorText = styled.p`

color: #FFFFFF;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 15px;

`;

export const TextInfo = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #2C2C2C;

@media screen and (max-width: 505px ){
    
    width: 142.77px;
    height: auto;
    line-height: 16px;
}

`;


export const DivDescricao = styled.div`
width:86%;
height: 10px;
margin-bottom: 15%;

@media screen and (max-width: 505px ){
    
    width: 221.06px;
    height: 28.77;
    line-height: 12px;
}

`;

export const DescricaoText = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 10px;
line-height: 12px;
color: #2C2C2C;
`;

export const DivBotao = styled.div`
width:100%;
height: 31.91px;
background-color: #0F52BA;
border-bottom-left-radius: 8px;
border-bottom-right-radius:8px ;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
@media screen and (max-width: 505px ){
    
    height: 36.74px;
}

`;

export const DivBotaoW = styled.div`
width: 45%;
height: 80%;
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 505px ){
    
    width: 40%;
}
`;

export const TextBotao =styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
`;

export const DBagRaper = styled.div`
width: 12px;
height: 13.5px;
position: relative;

@media screen and (max-width: 505px ){
    
    width: 13.82px;
    height: 15.54;
}

`;

export const DImgRaper = styled.div`
width: 112px;
height: 138px;
position: relative;
object-fit: cover;


@media screen and (max-width: 505px ){
    
    width: 128px;
    height: 158.89px;
}

`;
