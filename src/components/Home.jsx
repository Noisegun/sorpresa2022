import { NavLink } from "react-router-dom";

function Home ()
{
    return (
      <div className="home" style={{overflow: "auto"}}>
        <div className="container" style={{maxWidth: "1350px"}}>
          <div className="row align-items-center my-5">
            <div className="col-lg-12">
              <h1 className="font-weight-light" style={{fontFamily: "cursive"}}>Sorpresa 2022</h1>
              <p>Si has llegado aquí sin el QR... ¡Escoge una tarjeta!</p>
              <div className="row" style={{paddingLeft: "1em"}}>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", background: "cadetblue"}}>
                  <NavLink className="nav-link" to="/AldeaObispo" style={{color: "white"}}>
                    <span className="sr-only">(current)</span>
                    <div style={{paddingTop: "4em"}}>Opción 1</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", background: "cornflowerblue"}}>
                  <NavLink className="nav-link" to="/Malaga" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 2</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", background: "yellowgreen"}}>
                  <NavLink className="nav-link" to="/SanSebastian" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 3</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", background: "rgba(249,249,40,1)"}}>
                  <NavLink className="nav-link" to="/Covadonga" style={{color: "black"}}>
                    <div style={{paddingTop: "4em"}}>Opción 4</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", background: "blueviolet"}}>
                  <NavLink className="nav-link" to="/Galicia" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 5</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", background: "coral"}}>
                  <NavLink className="nav-link" to="/Sevilla" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 6</div>
                  </NavLink>
                </div>
              </div>
              <div className="row" style={{marginTop: "1em", paddingLeft: "1em"}}>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", background: "currentcolor"}}>
                  <NavLink className="nav-link" to="/LaRioja" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 7</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", background: "crimson"}}>
                  <NavLink className="nav-link" to="/Valdepenas" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 8</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", background: "teal"}}>
                  <NavLink className="nav-link" to="/Zaragoza" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 9</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", background: "seagreen"}}>
                  <NavLink className="nav-link" to="/Valencia" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 10</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", background: "orangered"}}>
                  <NavLink className="nav-link" to="/CostaBrava" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 11</div>
                  </NavLink>
                </div>
                <div className="card" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", background: "gold"}}>
                  <NavLink className="nav-link" to="/Merida" style={{color: "black"}}>
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