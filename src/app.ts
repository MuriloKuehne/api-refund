import express from "express"
import cors from "cors"
import { errorHandling } from "./middlwares/error-handling"
const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello world!")
})

app.use(errorHandling)

export { app }
