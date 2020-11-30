const { index, show, create, update, destroy, search } = require('../controllers/peoples');
module.exports = router => {
    //GET loocalhost:4000/peoples
    router.get('/peoples', index);

    //POST loocalhost:4000/peoples
    router.post('/peoples', create);
    
    //POST loocalhost:4000/peoples/update
    router.post('/peoples/update', update);

    //POST loocalhost:4000/peoples/destroy
    router.post('/peoples/destroy', destroy);
    
    // router.get('/quotes/search', search);

    router.get('/peoples/:id', show);
}