const express = require("express");
const router = express.Router();
const { handleGenerateNewShortUrl,handleRedirectUrl,handleAnalytics,handleGetAllUrls } = require("../controllers/url");


router.post("/", handleGenerateNewShortUrl);
router.get("/:shortId",handleRedirectUrl);
router.get("/analytics/:shortId",handleAnalytics);

module.exports = router;
