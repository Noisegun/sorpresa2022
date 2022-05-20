function Merida()
{
    return(<>
        <div style={{margin: "2em"}}>
            <h1>Has escogido... ¡Mérida!</h1>
            <h3>Durante 3 días (o 3 noches y 4 días) estaremos aquí...</h3>
            <div className="mapouter">
                <div className="gmap_canvas">             
                    <iframe width="1000" title="Merida" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Hotel%20Velada%20M%C3%A9rida&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                </div>
            </div>
        </div>
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            Este plan fue el último de todos los que configuré allá por Marzo cuando acabé de escoger los doce destinos posibles a los que podíamos ir. Pero no por ser el último deja de ser bonito.
            Mérida es una ciudad preciosa llena de historia y posibles lugares de turismo donde aprender y dejarnos llevar por tantísima cultura a nuestro alrededor. Claro que, si no te apetece nada
            más que estar en la habitación sin salir de la misma todo lo posible... Es otra preciosa opción.
        </p>
        <img alt="Hotel Velada Mérida" src="https://imgs-akamai.mnstatic.com/f3/73/f3731d6005ac76d21c80d0e4f817d7cf.jpg" width={"800px"} style={{paddingLeft: "2em", paddingBottom: "1em"}} />
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            Aquí abajo te dejo unos posibles lugares de turismo en los cuales poder movernos para conocer mejor Mérida.
        </p>
        <h4 style={{paddingLeft: "1.25em"}}>Teatro Romano de Mérida</h4>
        <img src="https://fotos.hoteles.net/articulos/teatro-romano-merida-5525-1.jpg" width={"500px"} alt="Teatro" style={{paddingLeft: "2em", marginBottom: "1em"}} />
        <h4 style={{paddingLeft: "1.25em"}}>Acueducto de los Milagros</h4>
        <img src="https://i0.wp.com/mochilaexpres.com/wp-content/uploads/2020/11/20200722_202151-scaled.jpg?w=768&ssl=1" width={"500px"} alt="Acueducto" style={{paddingLeft: "2em", marginBottom: "1em"}} />
        <h4 style={{paddingLeft: "1.25em"}}>Templo Diana</h4>
        <img src="https://i0.wp.com/mochilaexpres.com/wp-content/uploads/2020/11/20200722_220651-scaled.jpg?w=759&ssl=1" width={"500px"} alt="Templo" style={{paddingLeft: "2em", marginBottom: "1em"}} />
        <h4 style={{paddingLeft: "1.25em"}}>Puente Romano sobre el Guadiana</h4>
        <img src="https://i0.wp.com/mochilaexpres.com/wp-content/uploads/2020/11/20200723_214716-scaled.jpg?w=759&ssl=1" width={"500px"} alt="Puente" style={{paddingLeft: "2em", marginBottom: "1em"}} />
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            ¿Nos sumergimos juntos en la historia, pequeña?
        </p>
    </>);
}

export default Merida;