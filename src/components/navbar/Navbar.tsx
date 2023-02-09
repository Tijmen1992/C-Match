import './Navbar.css';

export const Navbar = () => {
    //JS functies hier
    const title = "dit is een title";
  
    return (
      //HTML hier
      <div>
        <nav className="navbar bg-body-tertiary">
          <form className="container-fluid justify-content-between">
            <button className="btn btn-outline-success me-2" type="button">
              <i className="fa-sharp fa-solid fa-user me-2"></i>
              Mijn ritten
              </button>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/4158/4158502.png" className="nav__meter"></img>
              <h4>CO2 Meter</h4>
            </div>
            <button className="btn btn-outline-success me-2" type="button">
              <i className="fa-solid fa-car me-2"></i>
              Ik rij!
            </button>
          </form>
        </nav>
      </div>
    );
  };
  