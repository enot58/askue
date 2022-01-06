import Router from 'express';

const router = new Router();

// Обрабатываем главную
router.get('/', (request, response) => {
    response.render('index');
});



export default router;