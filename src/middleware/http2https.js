const http2https = (req, res, next) => {
  if(req.secure){
    return next();
  };
  res.redirect('https://' + req.hostname + req.url);
}

module.exports = http2https
