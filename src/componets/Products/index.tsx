import Axios from "axios";
import { Key, useEffect, useState } from "react";
import Cards from "../Cards";
import Skeleton from "../Skeleton";
import { Container, Produts } from "./styles";

interface products {
  id: Number;
  name: String;
  brand: String;
  description: String;
  price: Number;
  photo: String;
}

function Products() {
  const [result, setResult] = useState<products[]>([]);
 
  const fetchAllData = async () => {
    const resposta = await Axios({
      method: "get",
      url: "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC",
      data: {},
    })
      .then((response) => {
        setResult(response.data.products);
      
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const Itens = result.map((I: products, index: Key | null | undefined) => {
    return (
      <Cards
        key={index}
        id={I.id}
        name={I.name}
        brand={I.brand}
        photo={I.photo}
        description={I.description}
        price={I.price}
      />
    );
  });

  return (
    <Produts>
      <Container>{Itens.length > 0 ? Itens : <Skeleton />}</Container>
    </Produts>
  );
}

export default Products;
