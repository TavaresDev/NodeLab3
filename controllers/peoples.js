//import people model 
// const People = require('../models/people');
const localPeople = require('../MOCK_DATA');


exports.index = (req, res, next) => {
  try {
    res.status(200).json(localPeople);
  } catch (error) {
    next(error);
  }
}

exports.show = (req, res, next) => {
  try {
    console.log(req.params.id)
    const people =  localPeople.find( ({ id }) => id == req.params.id);
    res.status(200).json(people);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  console.log(req.body);
  try {
    const { first_name, age, catch_phrase, avatar, date } = req.body;
    const pp = await People.create({
        first_name,
        age,
        catch_phrase,
        avatar,
      date: new Date(date)
    });

    res.status(200).json({message: 'People was created successfully', status: 'success', people: pp});
  } catch (error) {
    next(error);
  }
}

exports.update = async (req, res, next) => {
  try {
    const { _id, first_name, age, catch_phrase, avatar, date } = req.body;
    const pp = await People.findOneAndUpdate({ _id }, {
        first_name,
        age,
        catch_phrase,
        avatar,
      date: new Date(date)
    });
    res.status(200).json({message: 'People was updated successfully', status: 'success', people: pp});
  } catch (error) {
    next(error);
  }
}

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await People.findOneAndDelete({ _id });
    res.status(200).json({message: 'People was deleted successfully', status: 'success'});
  } catch (error) {
    next(error);
  }
}
