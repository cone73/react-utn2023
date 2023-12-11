export default function Titulo ({titulo, subtitulo}) {

    // props es un objeto
    /*
        props = {
            titulo: "hola mundo",
            subtitulo: "como va?",
            edad: 45
        }
    */

    // const titulo    = props.titulo;
    // const subtitulo = props.subtitulo;
    // const edad      = props.edad;

    // deconstruct...
    // const {titulo, subtitulo} = props;

    // divitis / react fragment
    // const titulo = "¡Hola desde el componente título";
    // const subtitulo = "Subtítulo acá";

    return (
        <>
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
            {/* El formato de archivo .jsx hace que ande bien VSCode! */}
        </>
    )
}