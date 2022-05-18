
function Malaga()
{
    return(<>
        <div style={{margin: "2em"}}>
            <h1>Has escogido... ¡Málaga y alrededores!</h1>
            <h3>Durante 3 días (o 3 noches y 4 días) estaremos aquí...</h3>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="1000" title="Malaga" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Malaga&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
                </div>
            </div>
        </div>
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            Este plan es uno de mis favoritos. Entre otras muchas cosas, porque no conozco la zona y sé que se come de maravilla. Pero porque al lado está Marbella y, también, Puerto Banús,
            que es una de las alternativas que hay alrededor, pero claro, también puedes escoger algo totalmente diferente, que sea vivir en la habitación y no salir nada más que para comer.
            Y que nos traigan el champán a la habitación y todo...
        </p>
        <img alt="Hotel Sol Guadalmar" src="https://pix10.agoda.net/hotelImages/4890958/0/e15228b84b017c1d668eb39ab4bfb51e.jpg?ca=9&ce=1&s=1024x768" width={"800px"} style={{paddingLeft: "2em", paddingBottom: "1em"}} />
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            Pero si quieres hacer turismo, esto es lo que tenemos alrededor del hotel: Málaga ciudad, Marbella, Puerto Banús, Fuengirola, Benalmádena y Torremolinos, entre otras muchas cosas...
            Aquí en esta zona para comer en cualquier sitio que busquemos en los alrededores con buena puntuación nos servirá. Además, estoy convencido de que si escoges moverte por aquí en vez
            de quedarnos en el hotel, seguro que podremos ir también a cualquiera de las playas de los alrededores...
        </p>
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            ¿Estás lista para la aventura, pequeña?
        </p>
    </>);
}

export default Malaga;