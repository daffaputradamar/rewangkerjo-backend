import { Router } from "express";
const router: Router = Router()
export default router

import { SupportedByRouter } from "@api/supportedBy/supportedByRoutes"

router.use('/', SupportedByRouter)