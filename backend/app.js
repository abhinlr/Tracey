const express = require('express');

const app = express();

app.use((req,res,next)=>{
  res.send('<h4>Hi</h4>')
})

module.exports = app;
