import React from 'react'
let FicIdNombre: string | number = "Frank";
FicIdNombre = 706;
const FicNombre: string = "Francisco";
const FicApellidos: string = "Ibarra Carlos"
const FicNumControl: number = 706;
const FicNumControl2 = 1074;
const FicFechaReg: Date = new Date();
let FicExperiencia = 20;
let FicActivo: boolean = true;
let FicPasatiempos: string[] = ['futbol', 'squash', 'leer', 'series y peliculas'];
//FicPasatiempos.push(706);
//FicPasatiempos.push(true);
let FicLibros: any[]=[];
FicLibros.push(706);
FicLibros.push(true);
FicLibros.push('El Principito');


export const TiposBasicos = () => {
    return (
        <>
        <h3>
            Tipos básicos
        </h3>
   Alias:     {FicIdNombre},
 <br/> Nombre: {FicNombre},
 <br/> Apellidos: {FicApellidos},
 <br/> No. Control: {FicNumControl},
 <br/> No. Control 2: {FicNumControl2},
 <br/> Fecha de Registro: {FicFechaReg.toString()},
 <br/> Años de Experiencia: {FicExperiencia},
 <br/> Estatus: {(FicActivo) ? 'Activo' : 'No Activo'}
 <br/> Libros: {FicLibros[0]}, 
                  {(FicLibros[1]) ? 'Activo' : 'No Activo'}, 
                  {FicLibros[2]}
        </>
    )
}