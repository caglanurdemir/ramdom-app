import React from "react";
import "./App.css";

//redux global store initialization
import { Provider } from "react-redux";
import store from "../src/redux/store";

//master page components
import Header from "./components/MasterPage/Header";
import Footer from "./components/MasterPage/Footer";

//main component
import MemeGenerator from "./components/MemeGenerator";

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <MemeGenerator />
      <Footer />
    </Provider>
  );
}
