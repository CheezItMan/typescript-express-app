import { Router, NextFunction } from 'express';
import express, { Request, Response } from 'express';
import { request } from 'http';
import { readSync } from 'fs';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined },
};

const requireAuth = function(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    return next();
    return;
  }

  res.status(403);
  res.send('Not permitted');
}

export const router = Router();
const UNAUTHORIZED = 401;
const UNPROCESSABLE_ENTITY = 422;

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
      <h2>You are logged in!</h2>
      <p><a href="/logout">Logout</a></p>
    </div>
    `);

  } else {
    res.send(`
    <div>
      <h1>Heya</h1>
      <p>Please login with <a href="/login">This link</a></p>
    </div>
    `);
  }
});

router.get('/login', (req: Request, res: Response) => {
  res.send(`
  <div>
    <h1>Login form</h1>
    <div>
    <form method="POST">
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <input type="submit" value="login" id="submit-btn" name="submit-btn" class="btn submit primary" />
      </div>
    </form>
    </div>
  </div>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password &&
    email === 'bob@bob.com' && password === 'password') {
    req.session = {
      loggedIn: true,
    };

    res.redirect('/');
  } else if (email && password) {
    res.status(UNAUTHORIZED);
    res.send(`
    <div>
      <h2>Unauthorized</h2>
    </div>
    `);
  }
  else {
    res.status(UNPROCESSABLE_ENTITY);
    res.send(`
    <div>
      <h2>You need to submit both an email & body</h2>
    </div>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  if (req.session) {
    req.session.loggedIn = false;
  }
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send(`
  <div>
    <h2>Welcome to protected stuff</h2>
  </div>
  `);
});