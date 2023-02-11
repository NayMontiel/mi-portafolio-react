import logo from "../assets/img/logo.png";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row redes-sociales justify-content-center">
          <div className="col-auto mt-3 text-center">
            <img src={logo} alt="logo" />
            <div className="derechos text-center text-dark p-3">
              <p className="mb-0">
                Nairyn Montiel 2023. ©Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
