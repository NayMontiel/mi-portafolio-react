import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "./components";
import Context from "./context/Context";

function App() {
  const [info, setInfo] = useState([]);
  const [certificado, setCertificado] = useState([]);

  const endpoint = "json/portafolio.json";
  const getPortafolio = async () => {
    const res = await fetch(endpoint);
    const data = await res.json();

    setInfo(data);
    // console.log(data);
  };

  useEffect(() => {
    getPortafolio();
  }, []);

  const endpoint1 = "json/certificados.json";
  const getCertificados = async () => {
    const res = await fetch(endpoint1);
    const data = await res.json();

    setCertificado(data);
    // console.log(data);
  };

  useEffect(() => {
    getCertificados();
  }, []);

  console.log(certificado);

  return (
    <>
      <Context.Provider value={{ info, certificado }}>
        <NavBar />
        <main className="container text-center mt-5">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
