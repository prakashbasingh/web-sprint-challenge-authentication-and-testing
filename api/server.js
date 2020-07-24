const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);


server.get("/", (req, res) => {
    res.json({ api: "this is Sprint day of third week backend session. Server is up and running" });
  });

module.exports = server;
