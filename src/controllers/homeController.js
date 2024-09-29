
const getHomePage=(req,res)=>{
    res.send('hello with home page')
}
const getImage=(req,res)=>{
    res.render('sample.ejs')
}

module.exports={
    getHomePage,
    getImage
}