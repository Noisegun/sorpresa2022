function CostaBrava()
{
    return(<>
        <div style={{margin: "2em"}}>
            <h1>Has escogido... ¡Costa Brava!</h1>
            <h3>Durante 3 días (o 3 noches y 4 días) estaremos aquí...</h3>
            <div className="mapouter">
                <div className="gmap_canvas">
                   <iframe width="470" title="RVHotels" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=RVHotels%20Nautic%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed"  frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                </div>
            </div>
        </div>
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            Creo que este es el único plan que hay que incluye muchas opciones de que acabemos yendo a la playa. Me hace especial ilusión ir a esta zona contigo. El hotel está en la platja d'aro,
            en la provincia de Girona muy cerquita de Palamós. La verdad, en los alrededores más allá de pueblecitos y cosas así no creo que haya, pero siempre podemos quedarnos en la comodidad de
            la habitación los dos juntitos y pedir champán...
        </p>
        <img alt="Hotel RVHotels NauticPark" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/aa/cb/f0/alegria-nautic-park-general.jpg?w=900&h=-1&s=1" width={"800px"} style={{paddingLeft: "2em", paddingBottom: "1em"}} />
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            Estas son algunas zonas cercanas que tenemos por si quisieras hacer turismo.
        </p>
        <h4 style={{paddingLeft: "1.25em"}}>Palamós</h4>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Palamos.jpg" width={"500px"} alt="Palamós" style={{paddingLeft: "2em", marginBottom: "1em"}} />
        <h4 style={{paddingLeft: "1.25em"}}>Mirador de Pedralta</h4>
        <img src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/06/13/5fa91d49042c7.jpeg" width={"500px"} alt="Pedralta" style={{paddingLeft: "2em", marginBottom: "1em"}} />
        <h4 style={{paddingLeft: "1.25em"}}>Tossa de Mar</h4>
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/00/af/aa/photo3jpg.jpg?w=500&h=300&s=1" width={"500px"} alt="Tossa" style={{paddingLeft: "2em", marginBottom: "1em"}} />
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            ¿Preparamos el bañador, pequeña?
        </p>
    </>);
}

export default CostaBrava;