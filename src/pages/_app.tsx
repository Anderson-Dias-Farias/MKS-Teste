import { store, wrapper } from '@/componets/Redux/Store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from "react-redux";

 function App({ Component, pageProps }: AppProps) {
  return( 
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
        
)}

export default wrapper.withRedux(App);
