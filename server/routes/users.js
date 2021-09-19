import { PrismaClient } from '@prisma/client'
import { genSaltSync, hashSync } from 'bcryptjs'

const express = require('express')
const router = express.Router()
const prisma = new PrismaClient()

router.get('/users', function (req, res, next) {
  // eslint-disable-next-line no-console
  console.log(req.headers)
  return res.json({
    name: 'Luis',
    id: 2,
  })
})

router.post('/users', function (req, res, next) {
  const { email, username, socialName, password } = req.body

  const salt = genSaltSync(15)
  const hashedPassord = hashSync(password, salt)

  prisma.user
    .create({
      data: {
        email,
        username,
        socialName,
        password: hashedPassord,
        biography: 'hi',
        profileImg: 'dadadad',
        isActive: true,
      },
    })
    .then((result) => {
      // eslint-disable-next-line no-console
      console.log(result)
      return res.json(result)
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(e)
      res.json(e)
    })
    .finally(() => {
      next()
    })
})

// module.exports = router
export default router
