import express from 'express';
import { AuthRoutes } from '../module/auth/auth.route';
import { PhoneRoutes } from '../module/phoneCallLog/phoneCallLog.route';
import { visitorRoutes } from '../module/visitor/visitor.route';

const router = express.Router();

const moduleRoutes = [
  //  routes
  {
    path: '/visitor',
    routes: visitorRoutes,
  },
  {
    path: '/Phone',
    routes: PhoneRoutes,
  },
  {
    path: '/admin',
    routes: AuthRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));

export default router;
