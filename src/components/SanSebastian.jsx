function SanSebastian()
{
    return(<>
        <div style={{margin: "2em"}}>
            <h1>Has escogido... ¡San Sebastián!</h1>
            <h3>Durante 3 días (o 3 noches y 4 días) estaremos aquí...</h3>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="1000" title="San Sebastián" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=San%20Sebasti%C3%A1n&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                </div>
            </div>
        </div>
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            Este plan estoy seguro de que te va a encantar. Por el sitio, por lo lejos que está de todo y porque la gastronomía local es extraordinaria. Pero claro,
            puedes escoger algo totalmente diferente, que sea vivir en la habitación y no salir nada más que para comer. Y que nos traigan el champán
            a la habitación y todo...
        </p>
        <img alt="Hotel Codina" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/110269040.jpg?k=0a523f094c34c9cae4d018bff15731ccd13bb9a4369ce0240bdcf4366b5182e4&o=&hp=1" height={"500px"} style={{paddingLeft: "2em", paddingBottom: "1em"}} />
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            Pero si quieres hacer turismo por esta preciosa ciudad, tenemos las playas alrededor y todo el casco histórico para pasear alrededor. La Catedral del Buen Pastor, el Monte
            Urgull, el Monte Igueldo, el Peine del Viento, el Palacio de Miramar, el Museo San Telmo... San Sebastián es preciosa en fotos, pero verla a tu lado debe ser todavía mucho más bonita.
        </p>
        <h4 style={{paddingLeft: "1.25em"}}>Peine del Viento</h4>
        <img src="https://www.sansebastianturismoa.eus/images/tematicos-2/peine-del-viento-temporal.jpg" width={"500px"} alt="Peine del Viento" style={{paddingLeft: "2em", marginBottom: "1em"}} />
        <h4 style={{paddingLeft: "1.25em"}}>Monte Igueldo</h4>
        <img src="https://vivecamino.com/img/gal/monte-igueldo-saiko3pistock_9870_p.jpg" width={"500px"} alt="Ciudad Rodrigo" style={{paddingLeft: "2em", marginBottom: "1em"}} />
        <h4 style={{paddingLeft: "1.25em"}}>Monte Urgull</h4>
        <img src="https://www.sansebastianturismoa.eus/images/tematicos/paseo_nuevo.jpg" width={"500px"} alt="Siega Verde" style={{paddingLeft: "2em", marginBottom: "1em"}} />
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            ¿Estás lista para la aventura, pequeña?
        </p>
    </>);
}

export default SanSebastian;