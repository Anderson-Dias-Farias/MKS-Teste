import styled from "styled-components";

export const Container = styled.section<{open: boolean}>`
position: absolute;
width: ${({ open }) => open? '468px' : '0px'};
height: 100%;
right:0;
top: 0px;
display: ${({ open }) => open ? "flex" : "none"};
background: #0F52BA;
box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
flex-direction: column;
align-items: center;
z-index: 1;

@media screen and (max-width: 507px ){
  width:330px;
  height: auto;
}
`;

export const Exit = styled.div`

width: 38px;
height: 38px;
background-color: #000;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
@media screen and (max-width: 507px ){
  width:45.92px;
  height: 45.92px;
  margin-top: 3%;
  margin-right:-5%;
}

`;
export const ExitText = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 33px;
color: #FFFFFF;
@media screen and (max-width: 507px ){
  font-size: 44px;
  line-height: 15px;
  color: #0F52BA;
}
`;

export const Top = styled.div`
width: 100%;
height: 101px;
display: flex;
align-items: flex-end;
justify-content: space-around;
@media screen and (max-width: 507px ){

  align-items: center;
  justify-content: space-around;
}

`;

export const TextTop = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 27px;
line-height: 33px;
width: 180px;
height: 56px;
color: #FFFFFF;
@media screen and (max-width: 507px ){
  width:178px;
  height: 37px;
  line-height: 33px;
}

`;

export const ProdutsRaper = styled.div`

width: 90%;
height: 70%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10%;
overflow-y: auto;

`;

export const DivTotalCart = styled.div`
width: 80%;
height: 70px;
margin-top: 1%;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const TextTotalCart = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
color: #FFFFFF;

`;

export const FinalCart = styled.div`

width: 100%;
height: 97px;
background: #000000;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
@media screen and (max-width: 505px){

height: 65.68px;
text-align: center;

}
`;

export const TextFinalCart = styled.div`

width: 249px;
height: 15px;
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 15px;
color: #FFFFFF;
@media screen and (max-width: 505px){

font-size:20px;

}

`;

export const CVRaper = styled.div`

width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

`;