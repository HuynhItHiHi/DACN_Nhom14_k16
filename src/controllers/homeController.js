const json = require('body-parser/lib/types/json');
const connection = require('../config/database');
const {getAllUsers,getOneUser,
    UpdateOneUser,DeleteOneUser,CreateOneNewUser
} =require('../services/CRUDService')



const getHomePage= async (req,res)=>{
    let result=await getAllUsers();
    return res.render('homePage.ejs',{listUssers: result})
    
}

const getImage=(req,res)=>{
    res.render('sample.ejs')
}

//tạo user mới

const getCreateNewUser=(req,res)=>{
    res.render('create')
}

const postCreateNewUser=(req,res)=>{
    let user=req.body
    if(!user==null){
        console.log("Không tìm thấy user");
    }
    else{
        CreateOneNewUser(user)
    }

}


//update user
const getUpdateUser = async (req,res)=>{
    let results= await getOneUser(req.params.IdUser);
    if(JSON.parse(results)["status"]===1){  
        //không thấy user nào   
        return res.send('undefine')  
    }
    else if(JSON.parse(results)["status"]===2){
        //thấy nhiều user
        return res.send('erro databse')
    }else if(JSON.parse(results)["status"]===0){
        //hợp lệ
        return res.render('editUser.ejs',{oneUser:JSON.parse(results)["user"]})
    }else{
        return req.send('undefine')
    }
}
//post update user
const PostUpdateUser =async (req,res)=>{
    let result=await UpdateOneUser(req.body,req.body.maNV)
    if(JSON.parse(result)["status"]===0){
        res.send('update success')
    }else{
        res.send('error update')
    }
    
}

const getDeleteUser=async (req,res)=>{
    // let results= await getOneUser(req.params.IdUser);
    // res.render('deleteUser.ejs',{oneUser: results})
    let results= await getOneUser(req.params.IdUser);
    if(JSON.parse(results)["status"]===1){  
        //không thấy user nào   
        return res.send('undefine')  
    }
    else if(JSON.parse(results)["status"]===2){
        //thấy nhiều user
        return res.send('erro databse')
    }else if(JSON.parse(results)["status"]===0){
        //hợp lệ
        return res.render('deleteUser.ejs',{oneUser:JSON.parse(results)["user"]})
    }else{
        return req.send('undefine')
    }
}

const postDeleteUser= async(req,res)=>{
    let result=await DeleteOneUser(req.body.maNV)
    if(JSON.parse(result)["status"]===0){
        res.redirect('/')
    }else{
        res.send('có lỗi trong quá trình xóa một user')
    }
}

module.exports={
    getHomePage,
    getImage,
    postCreateNewUser,
    getCreateNewUser,
    getUpdateUser,
    PostUpdateUser,
    getDeleteUser,
    postDeleteUser
}