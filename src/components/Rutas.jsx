import React from "react";
import { NavLink } from "react-router-dom";

function Rutas()
{
    return(
        <React.Fragment>
            <div className="navigation">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">
                            Sorpresa 2022 - Elige tu propia aventura... ¿Elegirás bien?
                        </NavLink>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
}

export default Rutas;