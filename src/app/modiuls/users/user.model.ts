import { model, Schema } from "mongoose";
import { TUsers } from "./user.interfach";
import bcrypt from 'bcrypt';
import config from "../../config";


const userSchema=new Schema<TUsers>({
    firstName:{
        type:String,
        required:true
    },
    lestName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','seller'],
        default:'user'
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})


userSchema.pre('save',async function (next) {
    this.password=await bcrypt.hash(
        this.password,
        Number(config.BCRYPT_ROUND)
    )
    next()
})

userSchema.post('save',function (doc,next){
    doc.password='';
    next()
})


export const User= model<TUsers>('Users',userSchema)