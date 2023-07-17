import express, {Request, Response} from "express";
const router = express.Router()
router.route(`/`).get((req: Request, res: Response)=> {
res.json({message: `goodjob`})
})
module.exports = router