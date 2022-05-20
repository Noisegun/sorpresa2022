function Galicia()
{
    return(<>
        <div style={{margin: "2em"}}>
            <h1>Has escogido... ¡Galicia!</h1>
            <h3>Durante 3 días (o 3 noches y 4 días) estaremos donde tú decidas... Porque me ha sido imposible escoger entre varios lugares alucinantes.</h3>
        </div>
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            El primer lugar que he encontrado está en Vilavella y es un hotel con Spa de esos en los que sólo falta que nos lleven en volandas
            al paraíso.
        </p>
        <div className="mapouter" style={{margin: "2em"}}>
            <div className="gmap_canvas">
                <iframe width="470" title="Vilavella" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Hotel%20Vilavella&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
            </div>
        </div>
        <h4 style={{paddingLeft: "1.25em"}}>Hotel Vilavella - Spa</h4>
        <img alt="Hotel Vilavella" src="https://hotelspavilavella.es/wp-content/uploads/2020/08/hv2020_032-1170x780.jpg" width={"500px"} style={{paddingLeft: "2em", paddingBottom: "1em"}} />
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            Este hotel es para no salir del hotel ni ver los alrededores siquiera... Pero si por si acaso quieres que hagamos turismo, tenemos cerca la presa de Pías en Zamora y también
            tenemos Portugal a tiro de piedra. La ciudad grande más cercana es Ourense, que está a menos de una hora.
        </p>
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            El segundo lugar está en Pazo do Río, al lado de A Coruña. Es un hotel súper cuco al lado de Coruña.
        </p>
        <div className="mapouter" style={{margin: "2em"}}>
            <div className="gmap_canvas">
                <iframe width="1000" title="Pazo de Rio" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Hotel%20Pazo%20do%20Rio&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
            </div>
        </div>
        <h4 style={{paddingLeft: "1.25em"}}>Hotel Pazo do Río, Montrove</h4>
        <img alt="Hotel Pazo do Rio" src="http://www.galiciacalidadelecer.gal/wp-content/uploads/Hotel_Pazo_do_Rio_-_A_coruna.jpg" width={"500px"} style={{paddingLeft: "2em", paddingBottom: "1em"}} />
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            Las ventajas de este hotel son que tenemos A Coruña al lado del hotel y, además, tiene playas y la ría al lado.
        </p>
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            El tercer y último lugar (porque he tenido que filtrar bastante, que me servían todos casi) está en la Ensenada de O Bao, al lado de la isla de La Toja, en plenas Rias Baixas.
        </p>
        <div className="mapouter" style={{margin: "2em"}}>
            <div className="gmap_canvas">
                <iframe width="1000" title="O Bao" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Hotel%20Abeiras&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
            </div>
        </div>
        <h4 style={{paddingLeft: "1.25em"}}>Hotel Abeiras, Ensenada de O Bao</h4>
        <img alt="Hotel Abeiras" src="https://cf.bstatic.com/xdata/images/hotel/max500/4797827.jpg?k=bd13a4cc60e578a825f075757e771b68f465d9d62bdf2288bbab234cba87e662&o=&hp=1" width={"500px"} style={{paddingLeft: "2em", paddingBottom: "1em"}} />
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            Este hotel está emplazado en uno de los mejores lugares de toda Galicia. Y alrededor tenemos todas las Rias Baixas para explorar.
        </p>
        <p style={{paddingLeft: "2em", paddingRight: "2em", textAlign: "justify"}}>
            ¿Estás lista para la aventura, pequeña? Esta decisión depende totalmente de ti, e incluso también si no quieres salir del hotel o la habitación... Es otra opción válida, ¿no crees?
        </p>
    </>);
}

export default Galicia;