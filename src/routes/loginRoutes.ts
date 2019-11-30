import { Router } from 'express';
import express, { Request, Response } from 'express';
import { request } from 'http';

export const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send(`
  <div>
    <h1>Heya</h1>
  </div>
  `);
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

router.post('/login', (req: Request, res: Response) => {
  const { email, password }: { } = req.body;
  console.log(req);
  res.send(`
    <div>
      <h1>Thank you</h1>
      <p>Email: ${email}</p>
      <p>Password: ${password}</p>
    </div>
  `);
});