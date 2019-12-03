import { Request, Response } from 'express'

import { get } from './decorators/routes';

@controller('/')
export class LoginController {

  @get('/login')
  getLogin(req: Request, res: Response): void {
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
}