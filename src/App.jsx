import React from "react";
import Header from "./components/Header/Header";
import AppRoutes from "./Routes/Approutes";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <AppRoutes/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
