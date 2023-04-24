const express = require('express')
const app = express()
app.use(express.json());
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo! Im alive !')
})
app.post("/insertEvent", async (req, res) => {
  console.log(req.body); // your JSON
  var result = await insertTelegramEvent(req.body);
  console.log('result:' + result);
  res.send(result);
});

async function insertTelegramEvent(bodydata) {
  console.log('received:' + JSON.stringify(bodydata));
  var response = await fetch('https://api.telegram.org/bot5898404192:AAEoxoZ-X4hF3eHfu1g1Sg0NdNhc3OPaP0s/sendMessage', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodydata)//JSON.stringify({a: 7, str: 'Some string: &=&'})
  })
    const jsonData = await response.json();
    const result = await JSON.stringify(jsonData);
    return result;
}

/*async function insertTelegramEvent(bodydata) {
  console.log('received:' + JSON.stringify(bodydata));
  fetch('https://api.telegram.org/bot5898404192:AAEoxoZ-X4hF3eHfu1g1Sg0NdNhc3OPaP0s/sendMessage', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodydata)//JSON.stringify({a: 7, str: 'Some string: &=&'})
  }).then(res => res.json())
    .then(res => console.log(res));
}*/

app.listen(process.env.PORT || 3000)

/*l_result := APEX_WEB_SERVICE.MAKE_REST_REQUEST(
    p_url => 'https://api.telegram.org/bot5898404192:AAEoxoZ-X4hF3eHfu1g1Sg0NdNhc3OPaP0s/sendMessage'
   ,p_http_method => 'POST'
   ,p_body => '{"chat_id":-1001911823358,"text":"Welcome to https://apex18.blogspot.com. Introducing https://apexpert.in."}'
  );*/