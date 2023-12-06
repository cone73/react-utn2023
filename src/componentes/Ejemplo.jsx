import './Ejemplo.css';

export default function Ejemplo () {
    const vida = 122;

    // `asdf es ${vida}`
    // Si el sentido de la vida es 42 usar "correcto" como clase
    // Sino usar "incorrecto"

    // var (function scope) let (block scope) y const (block scope)
    // scope

    let clase = "";
    if (vida === 42) {
        clase = "correcto";
    } else {
        clase = "incorrecto";
    }

    return (
        <p className={clase}>El sentido de la vida es {vida}</p>
    )
}