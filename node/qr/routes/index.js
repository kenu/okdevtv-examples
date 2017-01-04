const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const msg = 'Hello OKdevTV|' + Date.now();
  const url = await QRCode.toDataURL(msg);
  res.render('index', { title: 'Express', dataUrl: url });
});

module.exports = router;
