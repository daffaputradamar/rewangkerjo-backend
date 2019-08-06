import { Router } from "express";
const router: Router = Router()
export default router

import { SupportedByRouter } from "@api/supportedBy/supportedByRoutes"
import { HadiahRouter } from "@api/hadiah/hadiahRoutes";
import { KontakRouter } from "@api/kontak/kontakRouter";
import { MediaPartnerRouter } from "@api/mediaPartner/mediaPartnerRouter";
import { TimelineRouter } from "@api/timeline/timelineRouter";
import { UniversitasRouter } from "@api/universitas/universitasRouter";
import { StatusRouter } from "@api/status/statusRouter";
import { AdminRouter } from "@api/admin/adminRouter";
import { JenisPengumpulanRouter } from "@api/jenisPengumpulan/jenisPengumpulanRouter";
import { TimRouter } from "@api/tim/timRouter";
import { PesertaRouter } from "@api/peserta/pesertaRouter";

router.use('/supportedBy', SupportedByRouter)
router.use('/hadiah', HadiahRouter)
router.use('/kontak', KontakRouter)
router.use('/mediaPartner', MediaPartnerRouter)
router.use('/timeline', TimelineRouter)
router.use('/universitas', UniversitasRouter)
router.use('/status', StatusRouter)
router.use('/admin', AdminRouter)
router.use('/jenisPengumpulan', JenisPengumpulanRouter)
router.use('/tim', TimRouter)
router.use('/peserta', PesertaRouter)