
export default function Bucle () {
    const numeros = [45, 567, 23, 34, 78, 12];

    /*
        array.map es lo mismo que 

        for (numero of array) {
            console.log(numero);
        }

        for (var i = 0; i <= 10; i++) {
            numeros[i]
        } 


    */
    
    return (
        <>
            {numeros.map((numero, index) => (
                // Opción 1: puedo utilizar un valor random
                // const random = Math.random();
                // <p key={random}>El número es: {numero}</p>

                // Opción 3: usar el índice del .map
                <p key={index}>El número es: {numero}</p>
            ))}
            {numeros.map(numero => {
                // Cuando hacemos un .map y devolvemos elementos HTML
                //   cada elemento del HTML debe estar identificado de manera única
                //   con una propiedad key

                // sumarle 2 a numero
                const suma = numero + 2;
                // Opción 2: puedo utiliza el numero (si estoy segura de que no se repite)
                return (
                    <p key={numero}>El número es: {suma}</p>
                )
            })}
        </>
    )
}