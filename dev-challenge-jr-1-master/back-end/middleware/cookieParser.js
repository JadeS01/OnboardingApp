const ParseUidCookie = (req,res,next) =>{
    const cookies = req.headers.cookie;
    if(!cookies){
      next();
      return;
    }
    const kv = cookies.split("'; ").filter(item => item.includes('uid'));
    if(kv.length >= 1){
      req.uid = kv[0].split('=')[1];
    }
    next();
  }

  module.exports = ParseUidCookie;