  let contexto;
  let AssistantV1 = require('watson-developer-cloud/assistant/v1');
  let watsonAssistant = new AssistantV1({
      version: '2018-09-20',
      username: '7ad9192b-3151-4053-9dab-420ee91726fa',
      password: 'BqVn458Ttarp',
      url: 'https://gateway.watsonplatform.net/assistant/api'
    });
  let params = {
    workspace_id: 'aaf31d3d-9705-44f8-8a7e-340571891d3c',
    options:true,
    input: {'text': "Quiero saber mis contraseñas"},
  }

  watsonAssistant.message(params,  function(err, response) {
    // Si hay un error
      if (err){
        console.log('error:', err);
      }
      // Si tiene opciones imprimir las opciones
      else if (response.output.generic[0].options) {
        response.output.generic[0].options.forEach(function(element) {
          // TODO: Por cada opcion imprimir un boton
        });
      // Si es una imagen imprimir la imagen
      }else if (response.output.generic[]) {

      }
      // Si mo es ninguna de las anteriores solo mandar respuesta
      else{
          // TODO: Imprimir respuesta
        }
      }
    });
