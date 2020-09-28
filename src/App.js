import React from "react";
import Header from "./components/Header";
import Panier from "./components/Panier";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import backgroundImg from "./images/background-test-competances.png";
function App() {
  return (
    <>
      <Header />
      <div>
        <img src={backgroundImg} alt="sous le header" />
      </div>
      <Panier />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
