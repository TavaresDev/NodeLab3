exports.index = async (req, res, next) => {
    try {
      const characters = await Character.find();
      res.status(200).json(characters);
    } catch (error) {
      next(error);
    }
  };
  
  