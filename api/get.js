export default async function get(url){
    //metodo get
    const options = {
        method: "GET", 
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "GET"
        }
    }
 //guardar la respuesta de GET en una variable

  let response = await fetch(url, options).then(data => data); // busca la informacion a la url, se guardan los datos del objeto data en data y se guarda en response

  return response.json();
}