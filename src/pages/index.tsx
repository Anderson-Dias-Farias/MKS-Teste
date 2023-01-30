
import Footer from "@/componets/Footer";
import Products from "@/componets/Products";
import { RootState } from "@/componets/Redux/Store";
import Head from "next/head";
import { connect } from "react-redux";
import Header from "../componets/Header";

const  Home =() => {

  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
      </Head>
      <Header />
      <Products />
      <Footer />
    </>
  );
}

export default  connect((state:RootState) => state.Produtos)(Home);
