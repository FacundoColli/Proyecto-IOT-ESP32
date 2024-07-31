
let formulario = document.querySelector('#formulario')

formulario.addEventListener('submit',e=>{
    e.preventDefault()

    let valor=document.getElementById('valor1').value

    enviarDatosAThingSpeak(valor)
})

 function enviarDatosAThingSpeak(campo1) {
    const apiKey='QJ4HXXZ1SLGAHMWH'
    const channelID = '2613830'
  
    const url = `https://api.thingspeak.com/update?api_key=${apiKey}&field1=${campo1}`;
  
    // Realiza la solicitud HTTP
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log('Datos enviados correctamente:', data);
      })
      .catch(error => {
        console.error('Error al enviar los datos:', error);
      });
  }
  
  // Ejemplo de uso:
  enviarDatosAThingSpeak(25, 60); // Envía temperatura 25 y humedad 60
  