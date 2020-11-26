exports.index = (req, res) => {
    res.status(200).json([
      {
        path: '/characters',
        description: 'Returns the first 100 characters in the database'
      },
      {
        path: '/characters/search/:name',
        description: 'Returns list of Marvel characters starting with that name'
      },
      {
        path: '/characters/:id',
        description: 'Returns the character with the specified ID'
      }
    ]);
  };