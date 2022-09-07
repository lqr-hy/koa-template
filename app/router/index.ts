import KoaRouter from 'koa-router'
import IndexController from "../controller/IndexController";
import LoginController from '../controller/LoginController';
import AuthMiddleware from '../middleware/AuthMiddleware';
const router = new KoaRouter({prefix: '/admin'})

router.get('/login', LoginController.index)
router.use(AuthMiddleware)
router.get('/', IndexController.index)

export default router