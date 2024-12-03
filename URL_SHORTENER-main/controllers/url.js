const URL = require('../models/url')
const shortid = require('shortid');
async function handleGenerateNewShortUrl(req,res){
    const body = req.body;
    if(!body.url){
        return res.status(404).json({msg : 'url not entered'})
    }
    const shortID = shortid();
    await URL.create({
        shortId : shortID,
        redirectUrl:body.url,
        visitHistory:[],
        createdBy : req.user._id,
    })
    return res.render('home',{
        shortID : shortID
    })
}
async function handleRedirectUrl(req,res){
    const shortId = req.params.shortId;
    const mainUrl = await URL.findOneAndUpdate({ 
        shortId,
     },
      {
        $push: {
          visitHistory: 
            {
              timestamp: Date.now(),
            },
          
        },
      }
    );

    res.redirect(mainUrl.redirectUrl)
}

async function handleAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId})
    return res.json({
        totalClicks : result.visitHistory.length,
        analytics : result.visitHistory,
    })
}


async function handleGetAllUrls(req,res){
    if(!req.user) return res.redirect('/login')
const allUrls = await URL.find({createdBy:req.user._id});

res.render('home',{urls : allUrls})
}
module.exports = {handleGenerateNewShortUrl,
    handleRedirectUrl,handleAnalytics,handleGetAllUrls}