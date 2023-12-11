import './GrillaProductos.css';
import productos from '../datos/productos.json';
import Producto from './Producto';

export default function GrillaProductos () {
    console.log(productos);

    return (
        <div className='grilla'>
            {productos.map((producto, index) => (
                <Producto
                    key={index}
                    imagen = {producto.imagen}
                    titulo = {producto.titulo}
                    precio_anterior = {producto.precio_anterior}
                    precio_actual = {producto.precio_actual}
                    envio_gratis = {producto.envio_gratis}
                />
            ))}
        </div>
    )
}