const express = require('express');
const axios = require('axios');
const app = express();

app.post('/', function(req, res, next) {
  try {
    let results = req.body.developers.map(async function(d){
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
    return res.send(JSON.stringify(out));
  } catch(err) {
    next(err);
  }
});

app.listen(3000);
