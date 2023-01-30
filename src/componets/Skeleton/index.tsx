import { Container } from "../Products/styles";
import Variants from "./Skl";

function Skeleton() {
  const lista = [];
  const tamanhoDaLista = 8;
  for (let i = 0; i < tamanhoDaLista; i++) {
    lista.push(i);
  }

  return (
    <Container>
      {lista.map((item, index) => (
        <Variants key={index} />
      ))}
    </Container>
  );
}

export default Skeleton;
