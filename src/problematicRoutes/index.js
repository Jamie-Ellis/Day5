import express from "express"

const router = express.Router()

router.get("/houston", (req, res, next) => {
  const err = new Error("Houston we got a problem!")
  next(err)
})

router.get("/nonExistant", (req, res, next) => {
  const err = new Error("Houston we got a problem!")
  err.httpStatusCode = 404
  next(err)
})

export default router