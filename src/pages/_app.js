import "@/styles/globals.scss"; 
import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <ToastContainer /> 
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
