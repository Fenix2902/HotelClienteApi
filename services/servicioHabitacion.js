export async function servicioHabitacion(){
    let url = "https://cadena-hotelera-api.vercel.app/";
    let peticion ={
        method:"GET"
    }
    let respuesta= await fetch(url,peticion)
    return respuesta.json
}