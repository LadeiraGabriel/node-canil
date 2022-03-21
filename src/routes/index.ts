import {Router, Request, Response} from 'express';
import * as homeController from '../controllers/pageController';
import * as searchController from '../controllers/searchController'

const router = Router();

router.get('/',homeController.home);
router.get('/dogs',homeController.dogs);
router.get('/cats',homeController.cats);
router.get('/fishes',homeController.fishes);


router.get('/search',searchController.search);

router.use((req:Request, res: Response)=>{
   
    res.render('pages/page')
})
export default router