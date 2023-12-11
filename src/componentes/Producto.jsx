import './Producto.css';

export default function Producto ({
    imagen,
    titulo,
    precio_actual,
    precio_anterior,
    envio_gratis,
}) {
    // Hardcodeando los datos
    // const imagen = "imagenes/potter_lego.webp";
    // const titulo = "Lego Harry Potter";
    // const precio_anterior = 45000;
    // const precio_actual = 35000;
    // const envio_gratis = true;
    // - Botón de "Comprar": HTML_Element

    return (
        <div className='producto'>
            <img src={imagen} alt="" />
            <div className='producto-info'>
                <h2>{titulo}</h2>
                <p>
                    <del className='precio-anterior'>
                        ${precio_anterior}
                    </del>
                    <br />
                    <span className='precio-actual'>
                        ${precio_actual}
                    </span>
                </p>
                {/* Si envio_gratis es true ENTONCES && */}
                {envio_gratis &&
                    <p className='envio-gratis'>
                        Envío gratis full
                    </p>
                }
            </div>
        </div>
    )
}