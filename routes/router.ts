import * as express from 'express'
import {createData,delId,getId,writeDummy} from '../controllers/write'
const router = express.Router()

router.route('/').post(createData).patch(writeDummy)
    router.route('/:id').get(getId).delete(delId)
export = router