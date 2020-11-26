//separate router from index
module.exports = router => {
    //Basicaly import the routes from pages
    require('./routes/pages')(router);
    return router;
}