import express from "express"
import "express-async-errors"
import cors from "cors"
import { errorHandling } from "@/middlwares/error-handling"
import { routes } from "@/routes/index"

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)
app.use(errorHandling)

export { app }
