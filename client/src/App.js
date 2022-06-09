import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PlantList from "./components/PlantList/PlantList";
import CartModal from "./components/CartModal/CartModal";
import { useSelector } from "react-redux";
import CheckOutModal from "./components/CheckOutModal/CheckOutModal";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  const modalState = useSelector((state) => {
    return state.modal.value;
  });
  const checkOutSelector = useSelector((state) => state.checkOut);
  const failSuccessSelector = useSelector((state) => state.failSuccess);

  return (
    <React.Fragment>
      {modalState.isModal && <CartModal />}
      {checkOutSelector.show && <CheckOutModal />}
      {failSuccessSelector.isModal && <CheckOut />}
      <Header />
      <Hero />
      <PlantList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
