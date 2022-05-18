import { NavLink } from "react-router-dom";

function Home ()
{
    return (
      <div className="home" style={{overflow: "auto"}}>
        <div className="container" style={{maxWidth: "1350px"}}>
          <div className="row align-items-center my-5">
            <div className="col-lg-12">
              <h1 className="font-weight-light">Sorpresa 2022</h1>
              <p>Si has llegado aquí sin el QR... ¡Escoge una tarjeta!</p>
              <div className="row" style={{paddingLeft: "1em"}}>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center"}}>
                  <NavLink className="nav-link" to="/AldeaObispo">
                    <span className="sr-only">(current)</span>
                    <div style={{paddingTop: "4em"}}>Opción 1</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em"}}>
                  <NavLink className="nav-link" to="/Malaga">
                    <div style={{paddingTop: "4em"}}>Opción 2</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em"}}>
                  <NavLink className="nav-link" to="/SanSebastian">
                    <div style={{paddingTop: "4em"}}>Opción 3</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em"}}>
                  <NavLink className="nav-link" to="/Langreo">
                    <div style={{paddingTop: "4em"}}>Opción 4</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em"}}>
                  <NavLink className="nav-link" to="/Galicia">
                    <div style={{paddingTop: "4em"}}>Opción 5</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em"}}>
                  <NavLink className="nav-link" to="/Sevilla">
                    <div style={{paddingTop: "4em"}}>Opción 6</div>
                  </NavLink>
                </div>
              </div>
              <div className="row" style={{marginTop: "1em", paddingLeft: "1em"}}>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center"}}>
                  <NavLink className="nav-link" to="/LaRioja">
                    <div style={{paddingTop: "4em"}}>Opción 7</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em"}}>
                  <NavLink className="nav-link" to="/Valdepenas">
                    <div style={{paddingTop: "4em"}}>Opción 8</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em"}}>
                  <NavLink className="nav-link" to="/Zaragoza">
                    <div style={{paddingTop: "4em"}}>Opción 9</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em"}}>
                  <NavLink className="nav-link" to="/Valencia">
                    <div style={{paddingTop: "4em"}}>Opción 10</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em"}}>
                  <NavLink className="nav-link" to="/Barcelona">
                    <div style={{paddingTop: "4em"}}>Opción 11</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em"}}>
                  <NavLink className="nav-link" to="/Merida">
                    <div style={{paddingTop: "4em"}}>Opción 12</div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;