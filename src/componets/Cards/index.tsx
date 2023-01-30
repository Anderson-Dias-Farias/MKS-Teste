import Image from "next/image";
import { useDispatch } from "react-redux";
import bag from "../../../public/bag.png";
import { increment } from "../Redux/Slice";
import {
  CardRaper,
  DBagRaper,
  DescricaoText,
  DImgRaper,
  DivBotao,
  DivBotaoW,
  DivDescricao,
  DivInfo,
  DivValor,
  TextBotao,
  TextInfo,
  ValorText
} from "./styles";

interface products {
  id: Number;
  name: String;
  brand: String;
  description: String;
  price: Number;
  photo: String;
}

function Cards({ id, name, brand, description, price, photo }: products) {
  const Preco = parseInt(price.toLocaleString());

  const dispatch = useDispatch();
  const Prod = {
    id: id,
    name: name,
    description: description,
    price: price,
    photo: photo,
    Qtd: 1,
  };

  return (
    <CardRaper>
      <DImgRaper>
      <Image
        fill
        alt={`${brand}`}
        sizes="(max-width: 1200px) 50vw,
        33vw"
        src={`${photo}`}
        priority
        style={{ marginTop: "15px" }}
      />
      </DImgRaper>
      <DivInfo>
        <TextInfo>{name}</TextInfo>
        <DivValor>
          <ValorText>R${Preco}</ValorText>
        </DivValor>
      </DivInfo>
      <DivDescricao>
        <DescricaoText>{description}</DescricaoText>
      </DivDescricao>
      <DivBotao onClick={() => dispatch(increment(Prod))} >
        <DivBotaoW >
          <DBagRaper>
          <Image
            fill
            sizes="(max-width: 1200px) 20px,
            33px"
            alt={"Icone Botão de Compra"}
            src={bag}
          />
          </DBagRaper>
          <TextBotao>COMPRAR</TextBotao>
        </DivBotaoW>
      </DivBotao>
    </CardRaper>
  );
}

export default Cards;
