'use strict'

const express = require('express');
const useRouter = require('../auth/user.js')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(useRouter);

  module.exports = {
    server: app,
    start: port => {
        app.listen(port, () => console.log(`server up: ${port}`));
    }
}