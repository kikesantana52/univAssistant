  // export function sendQuery(request_text) {
  let contexto;
  var AssistantV1 = require('watson-developer-cloud/assistant/v1');

  var watsonAssistant = new AssistantV1({
      version: '2018-09-20',
      username: '7ad9192b-3151-4053-9dab-420ee91726fa',
      password: 'BqVn458Ttarp',
      url: 'https://gateway.watsonplatform.net/assistant/api'
    });
  var params = {
    workspace_id: 'aaf31d3d-9705-44f8-8a7e-340571891d3c',
    options:true,
    input: {'text': "Quiero saber mis contraseñas"},
  }

  let promiseResponse = new Promise((resolve, reject)=>{
    watsonAssistant.message(params,  function(err, response) {
      if (err)
        console.log('error:', err);
      else{
        if (response.output.generic[0].options) {
          // response.output.generic[0].options.forEach(function(element) {
          //   console.log(element);
          // });
        // params.context = {'context': response.context};
        console.log(response);
        resolve(response.context);
          // console.log(response.output.generic[0].title);
        }else{
          console.log(response.output.text[0]);
        }
      }

    });

  })
  promiseResponse.then((response)=>{
    console.log("------------------------------------");
    params.input = {'text': "RTC"};
    params.context = response;
    console.log(params);
    watsonAssistant.message(params,  function(err, response) {
      if (err)
        console.log('error:', err);
      else{
        if (response.output.generic[0].options) {
          // response.output.generic[0].options.forEach(function(element) {
          //   console.log(element);
          // });
        contexto = (response);
          // console.log(response.output.generic[0].title);
        }else{
          console.log(response);
        }
      }

    });
  })



// }
