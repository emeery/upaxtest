const express = require('express')
const User = require('../model/user.model')

const router = express.Router()

// @route    POST user/login
// @desc     Login user
// @access   Public
router.post('/login', async(req, res) => {
  try {
      const user = await User.findCredential(
          req.body.email,
          req.body.password
      )
      const token = await user.generateToken()
      res.status(200).json({
          user,
          token,
      })
  } catch (e) { console.log('e',e);
      res.status(401).json({ mensaje: 'verifica tus datos' })
  }
})

module.exports = router
