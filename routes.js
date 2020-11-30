//separate router from index
module.exports = router => {
    //Basicaly import the routes from pages
    require('./routes/pages')(router);
    require('./routes/peoples')(router);
    return router;
}