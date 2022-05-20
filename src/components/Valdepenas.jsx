function Valdepenas()
{
    return(<>
        <div style={{margin: "2em"}}>
            <h1>Has escogido... ¡Valdepeñas!</h1>
            <h3>Durante 3 días (o 3 noches y 4 días) estaremos aquí...</h3>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="470" title="Valdepenas" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Valdepe%C3%B1as&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                </div>
            </div>
        </div>
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            Segundo de los paraísos de España famoso y conocido por el vino. Y, en este caso, sólo hay vino por los alrededores, además de ciertos lugares manchegos para perderse
            visitándolos. En el caso de que no te apetezca salir del hotel y spa, también podemos darnos un homenaje y estar toda nuestra estancia sin salir, pidiendo champán en
            la habitación... O vino, que aquí seguro que lo sirven riquísimo. También, si lo deseas, podemos visitar alguna bodega, estaré encantado de acompañarte.
        </p>
        <img alt="Hotel Veracruz y Spa" src="https://cf.bstatic.com/xdata/images/hotel/max500/11297903.jpg?k=faf43e62fa95e47f6203c32f270bde1f4db459e2439fa0a646bb670b7f0ebdcb&o=&hp=1" width={"500px"} style={{paddingLeft: "2em", paddingBottom: "1em"}} />
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            Y las posibles bodegas que tenemos alrededor, si quieres visitar alguna, aquí te dejo por aquí una lista de ellas:
        </p>
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            <ul>
                <li>
                    <a href="https://museodelvinovaldepenas.es" target="_blank" rel="noreferrer noopener">
                    Museo del Vino Valdepeñas
                    </a>
                </li>
                <li>
                    <a href="https://navarrolopez.com" target="_blank" rel="noreferrer noopener">
                    Bodegas Navarro López
                    </a>
                </li>
                <li>
                    <a href="https://www.felixsolis.com" target="_blank" rel="noreferrer noopener">
                    Bodegas Félix Solís
                    </a>
                </li>
                <li>
                    <a href="https://www.bodegas-real.com" target="_blank" rel="noreferrer noopener">
                    Bodegas Real
                    </a>
                </li>
            </ul>
        </p>
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            ¿Spa y vino, pequeña?
        </p>
    </>);
}

export default Valdepenas;