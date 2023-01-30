import { createSlice } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector
} from "react-redux";
import { RootState } from "../Store";

interface Produtos {
  id: Number;
  name: String;
  brand: String;
  descripition: String;
  price: Number;
  photo: String;
  Qtd: number;
}

const initialState = {
  Produtos: [] as Produtos[],
};

const ProductsSlice = createSlice({
  name: "Products",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      const itemInCart = state.Produtos.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        (itemInCart.Qtd)++;
      } else {
        state.Produtos.push({ ...action.payload, Qtd: +1 });
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.Produtos.filter(
        (item) => item.id !== action.payload
      );
      state.Produtos = removeItem;
    },
    removeQdtItem: (state, action) => {
      const itemInCart = state.Produtos.find(
        (item) => item.id === action.payload
      );
      if (itemInCart) {
        itemInCart.Qtd--;
      } else {
        state.Produtos.push({ ...action.payload, Qtd: -1 });
      }
    },
    AddQdtItem: (state, action) => {
      const itemInCart = state.Produtos.find(
        (item) => item.id === action.payload
      );
      if (itemInCart) {
        itemInCart.Qtd++;
      } else {
        state.Produtos.push({ ...action.payload, Qtd: +1 });
      }
    },
  },
});

export const { increment, removeItem, removeQdtItem, AddQdtItem } =
  ProductsSlice.actions;

export const selectProducts = (state: RootState) => state.Produtos;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
//export const Dispatch= useDispatch()

export default ProductsSlice.reducer;
