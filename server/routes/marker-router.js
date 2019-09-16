const express = require('express')

const MarkerCtrl = require('../controllers/marker-ctrl')

const router = express.Router()

router.post('/marker', MarkerCtrl.createMarker)
router.put('/marker/:id', MarkerCtrl.updateMarker)
router.delete('/marker/:id', MarkerCtrl.deleteMarker)
router.get('/marker/:id', MarkerCtrl.getMarkerById)
router.get('/markers', MarkerCtrl.getMarker)

module.exports = router