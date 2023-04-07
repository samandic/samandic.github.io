const express = require('express')
const app = express()
app.use(express.json());
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.post("/insertEvent", (req, res) => {
  console.log(req.body); // your JSON
  var result = insertEvent(req.body);
  res.send(req.body);
});

function insertEvent(event) {
    console.log(event.data);
}

app.listen(process.env.PORT || 3000)
