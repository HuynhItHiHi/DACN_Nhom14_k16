const json = require('body-parser/lib/types/json');
const connection = require('../config/database');
const db=require('../models/index')
const bcrypt = require('bcrypt');
const salt=bcrypt.genSaltSync(10)


//xử lý password
const hashPassword=(UserPassword)=>{
    return  bcrypt.hashSync(UserPassword,salt)   
}

const CreateOneNewUser=async (user)=>{
        let hashPass=hashPassword(user.password)
        //         connection.query(
        //     `INSERT INTO nhanvien (maNV, hoTen, diaChi, sdt)
        //      VALUES (?,?,?,?)`,
        //      [user.maNV,user.HoTen,user.DiaChi,user.SoDT],
        //      function(err,results){
        //         res.redirect('/')
        //      }
        // );
        try {
          await db.User.create({
                email:user.email,
                password:hashPass,
                firstName:user.firstName
            })
        } catch (error) {
            console.log(error);
        }
}



const getAllUsers=async()=>{
    let [results, fields]=await connection.promise().query('select * from nhanvien')
    return results;
}


const getOneUser=async(IdUser)=>{
    let [results, fields]=await connection.promise().query('select * from nhanvien where maNV=?',[IdUser])
    if(results.length>1){
        //trường hợp có nhiều user id trùng nhau
        return JSON.stringify({user:null,status:2});
    }else{

         if(!(results[0])){
        //trường hợp không hợp lệ
        return JSON.stringify({user:null,status:1})
        }else{
            //trường hợp hợp lệ
            return JSON.stringify({user:results[0],status:0})
        }
        
    }
   
}

const UpdateOneUser= async(user,id)=>{
    // console.log(">>>>>Check id bên CR",id);
    let success= await connection.promise().query(`UPDATE nhanvien 
        SET maNV=?, hoTen=?,diaChi=?,sdt=? WHERE maNV = ?`,
         [user.maNV,user.HoTen,user.DiaChi,user.SoDT,id])
    if(success[0].affectedRows===1){
        return JSON.stringify({status:0,err:'update success'})
    }else{
        return JSON.stringify({status:1,err:'Lỗi id'})
    }
    // console.log(">>>>check kết quả",value[0].affectedRows);
}
const DeleteOneUser=async(id)=>{
    if(!(id===null)){
        let success= await connection.promise().query(
            `delete from nhanvien where maNV=?`,[id])
            if(success[0].affectedRows===1){
                return JSON.stringify({status:0,err:'update success'})
            }else{
                return JSON.stringify({status:1,err:'Lỗi id'})
            }
    }else{
        return JSON.stringify({status:1,err:'Lỗi id'})
    }

}



module.exports={
    getAllUsers,
    getOneUser,
    UpdateOneUser,
    DeleteOneUser,
    CreateOneNewUser
}