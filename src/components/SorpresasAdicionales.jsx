import { NavLink } from "react-router-dom";

function SorpresasAdicionales()
{
    return (
      <div className="home" style={{overflow: "auto"}}>
        <div className="container" style={{maxWidth: "1350px"}}>
          <div className="row align-items-center my-5">
            <div className="col-lg-12" style={{marginLeft: "4.5em"}}>
              <h1 className="font-weight-light" style={{fontFamily: "cursive", marginLeft: "1.15em"}}>Sorpresas Adicionales</h1>
              <p style={{marginLeft: "1em"}}>De dos en dos...</p>
              <div className="row" style={{paddingLeft: "1em"}}>
                <div className="card col-sm-6 col-md-6 col-lg-6 col-xl-2" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", marginBottom: "1em", background: "cadetblue"}}>
                  <NavLink className="nav-link" to="/Conan" style={{color: "white"}}>
                    <span className="sr-only">(current)</span>
                    <div style={{paddingTop: "4em"}}>Opción 1</div>
                  </NavLink>
                </div>
                <div className="card col-sm-6 col-md-6 col-lg-6 col-xl-2" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", marginBottom: "1em", background: "cornflowerblue"}}>
                  <NavLink className="nav-link" to="/Atazar" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 2</div>
                  </NavLink>
                </div>
                <div className="card col-sm-6 col-md-6 col-lg-6 col-xl-2" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", marginBottom: "1em", background: "yellowgreen"}}>
                  <NavLink className="nav-link" to="/Buitrago" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 3</div>
                  </NavLink>
                </div>
                <div className="card col-sm-6 col-md-6 col-lg-6 col-xl-2" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", marginBottom: "1em", background: "rgba(249,249,40,1)"}}>
                  <NavLink className="nav-link" to="/Metropolitano" style={{color: "black"}}>
                    <div style={{paddingTop: "4em"}}>Opción 4</div>
                  </NavLink>
                </div>
                <div className="card col-sm-6 col-md-6 col-lg-6 col-xl-2" style={{width: "21rem", height: "10rem", textAlign: "center", marginLeft: "1em", marginBottom: "1em", background: "blueviolet"}}>
                  <NavLink className="nav-link" to="/Robledo" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 5</div>
                  </NavLink>
                </div>
              </div>
              <div className="row" style={{paddingLeft: "1em"}}>
                <div className="card col-sm-6 col-md-6 col-lg-6 col-xl-2" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", marginBottom: "1em", background: "coral"}}>
                  <NavLink className="nav-link" to="/Jarama" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 6</div>
                  </NavLink>
                </div>
                <div className="card col-sm-6 col-md-6 col-lg-6 col-xl-2" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", marginBottom: "1em", background: "currentcolor"}}>
                  <NavLink className="nav-link" to="/Lavanda" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 7</div>
                  </NavLink>
                </div>
                <div className="card col-sm-6 col-md-6 col-lg-6 col-xl-2" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", marginBottom: "1em", background: "crimson"}}>
                  <NavLink className="nav-link" to="/Racing" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 8</div>
                  </NavLink>
                </div>
                <div className="card col-sm-6 col-md-6 col-lg-6 col-xl-2" style={{width: "10rem", height: "10rem", textAlign: "center", marginLeft: "1em", marginBottom: "1em", background: "teal"}}>
                  <NavLink className="nav-link" to="/Escorial" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 9</div>
                  </NavLink>
                </div>
                <div className="card col-sm-6 col-md-6 col-lg-6 col-xl-2" style={{width: "21rem", height: "10rem", textAlign: "center", marginLeft: "1em", marginBottom: "1em", background: "seagreen"}}>
                  <NavLink className="nav-link" to="/PlanLibre" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Opción 10</div>
                  </NavLink>
                </div>
              </div>
              <div className="row" style={{paddingLeft: "1em", width: "90.25%"}}>
                <div className="card col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{width: "21rem", height: "10rem", textAlign: "center", marginLeft: "1em", marginBottom: "1em", background: "grey"}}>
                  <NavLink className="nav-link" to="/Restaurantes" style={{color: "white"}}>
                    <div style={{paddingTop: "4em"}}>Y en el apartado culinario...</div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SorpresasAdicionales;