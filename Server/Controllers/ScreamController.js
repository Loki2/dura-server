const Scream = require('../Models/ScreamModel');

module.exports = {
  createScream: async (req, res, next) => {
    console.log(req.file)
    const scream = new Scream({
      writter: req.body.writter,
      body: req.body.body,
      privacy: req.body.privacy,
      files: req.file.path
    })
  
    try {
      const file = req.file;
      const newScream = await scream.populate('writter').save();
      res.status(201).json({
        message: 'create scream is done',
        data: newScream,
        files: file.filename
      })
    } catch (error) {
      res.status(400).json({
        message: error.message
      })
    }
    next();
  },

   //FetCh All User Screams
   getAllScream: async (req, res, next) => {
    try {
      const result = await Scream.find();
      res.status(201).json({
        message: 'Display Screams is successfully',
        data: result
      })
    } catch (error) {
      console.log(error.message);
      if(!result) {
        res.status(400).json({
          message: 'Scream Doesn\'t exist'
        })
        return;
      }
      next(error);
    }
  },

  //FetCh All User Screams
  getAllUserScream: async (req, res, next) => {
    try {
      const result = await Scream.find().populate('writter', '_id username');
      res.status(201).json({
        message: 'Display Screams is successfully',
        data: result
      })
    } catch (error) {
      console.log(error.message);
      if(!result) {
        res.status(400).json({
          message: 'Scream Doesn\'t exist'
        })
        return;
      }
      next(error);
    }
  },
  
  getByScreamID: async (req, res, next) => {
    const id = req.params._id;
    try {
      const scream = await Scream.findById(id).populate('writter', '_id username');
      if(!scream) {
        res.status(404).json({
          message: 'Can not fetch by ID'
        })
        return;
      }
      res.status(201).json({
        message: 'Display user is successfully',
        data: scream
      })
    } catch (error) {
      if(error instanceof mongoose.CastError) {
        next(createError(404, 'Invilid Scream ID'));
        return;
      }
      next(error);
    }
  },

  updateScream: async (req, res, next) => {
    try {
      const id = req.params._id;
      const update = req.body;
      const option = { new: true};

      const result = await Scream.findByIdAndUpdate(id, update, option).populate('writter', '_id username');
      if(!result) {
        throw createError(404, 'Scream is not update');
      }
      res.status(201).json({
        message: 'Update Scream is successfully',
        data: result
      })
    } catch (error) {
      console.log(error.message);
      if(error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Scream ID'));
        return;
      }
      next(error);
    }
  }
}