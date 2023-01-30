import { AddQdtItem, removeItem, removeQdtItem } from "@/componets/Redux/Slice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Container,
  Counter,
  CounterBox,
  CounterRaper,
  DImgRaper,
  Exit,
  ExitText,
  Qtds,
  Raper,
  TextItemCart,
  ValorItem
} from "./styles";

interface Produtos {
  id: Number;
  name: String;
  brand: String;
  descripition: String;
  price: Number;
  photo: String;
  Qtd: Number;
}

function ItensCart({
  id,
  name,
  brand,
  descripition,
  price,
  photo,
  Qtd,
}: Produtos) {

  const QTds:number = parseInt(Qtd.toString());
  const [count, setCount] = React.useState<Number>(QTds);
  const v = parseInt(price.toString())
  const Preco = v.toLocaleString();
  const dispatch = useDispatch();
  

  const RemoveItem = () => {
    dispatch(removeItem(id));
  };
  const RemoveQtd = () => {
    dispatch(removeQdtItem(id));
  };

  const Increment = () => {
    dispatch(AddQdtItem(id));
  };

  return (
    <Container>
      <DImgRaper>
      <Image fill alt={`${brand}`}  src={`${photo}`} />
      </DImgRaper>
      <TextItemCart>{name}</TextItemCart>
      <Raper>
      <CounterRaper>
        <Qtds>Qtd:</Qtds>
        <CounterBox>
          <Counter
            onClick={() => {
              setCount(Math.max(QTds - 1, 0));

              if (count === 0) {
                RemoveItem();
              } else {
                RemoveQtd();
              }
            }}
          >
            -
          </Counter>
          <Counter>
            <Box>{QTds}</Box>
          </Counter>
          <Counter
            onClick={() => {
              setCount(QTds+ 1);
              Increment();
            }}
          >
            +
          </Counter>
        </CounterBox>
      </CounterRaper>
      <ValorItem>R${Preco}</ValorItem>
      </Raper>
      <Exit onClick={() => RemoveItem()}>
        <ExitText>X</ExitText>
      </Exit>
    </Container>
  );
}

export default ItensCart;
