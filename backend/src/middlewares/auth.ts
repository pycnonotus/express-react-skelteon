import * as expressJwt from 'express-jwt';

const authMiddleware = expressJwt.expressjwt({
  secret: "wooooow",
  algorithms: ['RS256'],
}).unless({ path: ['/login'] });

export default authMiddleware;
