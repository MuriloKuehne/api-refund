import { Router } from "express"
import { usersRoutes } from "./users-routes"
import { sessionsRoutes } from "./sessions-routes"
import { refundsRoutes } from "./refunds-routes"
import { ensureAuthenticated } from "@/middlwares/ensure-authenticated"
import { uploadsRoutes } from "./uploads-routes"

const routes = Router()

//rotas públicas
routes.use("/users", usersRoutes) // this does not need to be authenticated
routes.use("/sessions", sessionsRoutes)

//Rota Privadas
routes.use(ensureAuthenticated) // only called after this line
routes.use("/refunds", refundsRoutes) // this needs to be authenticated
routes.use("/uploads", uploadsRoutes)

export { routes }
