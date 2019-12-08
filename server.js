import {Request, Response} from "express";
import * as express from 'express';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
import * as jwt from 'jsonwebtoken';
import * as fs from "fs";

const app: Application = express();

const expressJwt = require('express-jwt');

const RSA_PUBLIC_KEY = fs.readFileSync('./demos/public.key');

const checkIfAuthenticated = expressJwt({
    secret: RSA_PUBLIC_KEY
}); 

app.use(bodyParser.json());

app.route('/api/login')
    .post(loginRoute);

const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');


app.route('/api/lessons')
    .get(checkIfAuthenticated, readAllLessons);

export function loginRoute(req: Request, res: Response) {

    const email = req.body.email,
          password = req.body.password;

    if (validateEmailAndPassword()) {
       const userId = findUserIdForEmail(email);

        const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
                algorithm: 'RS256',
                expiresIn: 120,
                subject: userId
            }

    }
    else {

        res.sendStatus(401);
    }
}

const jwtBearerToken = jwt.sign(...);

res.cookie("SESSIONID", jwtBearerToken, {httpOnly:true, secure:true});

const jwtBearerToken = jwt.sign(...);

res.status(200).json({
  idToken: jwtBearerToken,
  expiresIn: ...
});
