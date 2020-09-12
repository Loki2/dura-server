module.exports = {
  serverError: async (res, error) => {
    console.log(error);
    res.status(500).json({
      message: 'Server Error Occurred'
    })
  },
  resourceError: async (res, message) => {
    res.status(400).json({
      message
    })
  }
}