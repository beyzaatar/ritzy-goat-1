import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
//import styles from "./App.css";
import "./reset.css";

//contexts
import { BasketProvider } from "./contexts/BasketContext"
import { FavoriteProvider } from "./contexts/FavoriteContext";


//redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
          <Provider store={store}>
            <BrowserRouter>
            <BasketProvider>
              <FavoriteProvider>
                <App />
              </FavoriteProvider>
            </BasketProvider>
            </BrowserRouter>
          </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
