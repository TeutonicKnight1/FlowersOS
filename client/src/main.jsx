import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

import CartPage from "./pages/CartPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/graphql.js";

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </Provider>
  </ApolloProvider>
);
