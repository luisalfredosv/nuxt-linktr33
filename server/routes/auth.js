import { PrismaClient } from '@prisma/client'
import { compareSync } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

const express = require('express')
const router = express.Router()
const prisma = new PrismaClient()

router.post('/auth', function (req, res, next) {
  const { email, password } = req.body

  prisma.user
    .findUnique({
      where: {
        email,
      },
    })
    .then((user) => {
      // eslint-disable-next-line no-console
      console.log(user)
      const comparePassword = compareSync(password, user.password)
      // eslint-disable-next-line no-console
      console.log('data', comparePassword)

      if (!comparePassword) {
        res.json({
          message: 'Unauthorized or user no found',
        })
      }

      delete user.password
      const payload = user
      const token = sign(payload, 'test', {
        expiresIn: '1h',
        issuer: user.id.toString(),
      })

      res.json({
        message: 'Login',
        token,
      })
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(e)
      res.json(e)
    })

    next()
})

// module.exports = router
export default router

