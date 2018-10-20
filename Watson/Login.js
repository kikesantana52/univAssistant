  // export function sendQuery(request_text) {

    var AssistantV1 = require('watson-developer-cloud/assistant/v1');

    var watsonAssistant = new AssistantV1({
        version: '2018-09-20',
        username: '7ad9192b-3151-4053-9dab-420ee91726fa',
        password: 'BqVn458Ttarp',
        url: 'https://gateway.watsonplatform.net/assistant/api'
      });


    watsonAssistant.message({
      workspace_id: 'aaf31d3d-9705-44f8-8a7e-340571891d3c',
      input: {'text': "Olvide"},
      options:true
    },  function(err, response) {
      if (err)
        console.log('error:', err);
      else
        console.log(response);
    });
// }
