import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../Redux/Slice";
import ItensCart from "./ItensCart";
import {
  Container,
  CVRaper,
  DivTotalCart,
  Exit,
  ExitText,
  FinalCart,
  ProdutsRaper,
  TextFinalCart,
  TextTop,
  TextTotalCart,
  Top
} from "./styles";

interface HeaderProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setAnimate:Dispatch<SetStateAction<boolean>>;
}

function Listart({ open, setOpen, setAnimate }: HeaderProps) {
  const { Produtos } = useSelector(selectProducts);

  const ItensList = Produtos.map((I, index) => {
    return (
      <ItensCart
        key={index}
        Qtd={I.Qtd}
        id={I.id}
        descripition={I.descripition}
        name={I.name}
        photo={I.photo}
        price={I.price}
        brand={I.brand}
      />
    );
  });

  const Total = Produtos.reduce(
    (initial, Elm: { Qtd: any; price: any }) =>
      initial + Elm.Qtd * Elm.price,
    0
  );
  const Totals = parseInt(Total.toString());

  const CV = <CVRaper><TextTotalCart>Carrinho Vazio</TextTotalCart></CVRaper>;

  return (
    <Container open={open}>
      <Top>
        <TextTop>Carrinho <br/>de compras</TextTop>
        <Exit onClick={() => setOpen(false)}>
          <ExitText>X</ExitText>
        </Exit>
      </Top>
      <ProdutsRaper>{ItensList.length !== 0 ? ItensList : CV}</ProdutsRaper>
      <DivTotalCart>
        <TextTotalCart>Total:</TextTotalCart>
        <TextTotalCart>R${Totals}</TextTotalCart>
      </DivTotalCart>
      <FinalCart onClick={()=>setAnimate(true)}>
        <TextFinalCart>Finalizar Compra</TextFinalCart>
      </FinalCart>
    </Container>
  );
}

export default Listart;
