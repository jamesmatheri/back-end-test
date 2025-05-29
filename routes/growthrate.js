var express = require('express');
var router = express.Router();
const gowthratecontroller = require('../controllers/growthRateController')


router.get("/",gowthratecontroller.growthrate_list_get )
router.post("/update",gowthratecontroller.growthrate_update_post )


module.exports = router;
