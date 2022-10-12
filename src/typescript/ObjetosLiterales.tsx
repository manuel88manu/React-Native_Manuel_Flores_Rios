import React from 'react'
export const ObjetosLiterales = () => {
//7.Crear objetos personas
interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
    /*direccion: {
        pais: string,
        estado: string,
        ciudad: string,
        calle: string,
        numero: number
    }*/
}
interface Direccion {
    pais: string,
    estado: string,
    ciudad: string,
    calle: string,
    numero: number
}
const persona:Persona = {
        nombreCompleto: 'Martha',
        edad: 30,
        direccion: {
            pais: 'Mexico',
            estado: 'Nayarit',
            ciudad: 'Tepic',
            calle:'Conocido',
            numero:532
        }
}
 
return (
    <div>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                {/*JSON.stringify(persona)*/}
                {JSON.stringify(persona, null, 2)}
            </pre>
           
        </code>
    </div>
)
}