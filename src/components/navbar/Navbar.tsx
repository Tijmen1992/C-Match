import "./Navbar.css";

export const Navbar = () => {
  //JS functies hier
  const title = "dit is een title";

  return (
    //HTML hier
    <div>
      <nav className="navbar bg-body-tertiary">
        <form className="container-fluid justify-content-between">
          <button className="btn btn-outline-light me-2" type="button">
            <i className="fa-sharp fa-solid fa-user me-2"></i>
            Mijn ritten
          </button>
          
          <button className="btn btn-outline-light me-2" type="button">
            <i className="fa-solid fa-temperature-low"></i>
            CO2 Meter
          </button>

          <button className="btn btn-outline-light me-2" type="button">
            <i className="fa-solid fa-car me-2"></i>
            Ik rij!
          </button>
        </form>
      </nav>
    </div>
  );
};
