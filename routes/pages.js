const { index } = require('../controllers/pages');

module.exports = router => {
  router.get('/', index);
  // router.get('/docs', index);

  return router;
};