let blog = require('../models/blog')

module.exports = {
  getBlog: (req, res) => {
    res.json({
      message: "Blog has success",
      data: blog
    })
  },

  getBlogByID: (req, res) => {
    const id = req.params.id
    const blogs = blog.find(item => item.id == id)

    res.json({
      message: "Blog by id has success",
      data: blogs
    })
  }
}