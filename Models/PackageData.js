const mongoose = require('mongoose');

const packageschema = new mongoose.Schema({

Package_Name :{
        required:true,
        type:String,
    },
Package_Type :{
    required:true,
        type:String,
},
Package_SecType :{
    required:true,
        type:String,
},
Package_CapitalMin :{
    required:true,
        type:String,
},
Package_CapitalMax :{
    required:true,
        type:String,
},
Package_ProfitShare :{
    required:true,
        type:String,
},
Package_Fees :{
    required:true,
        type:String,
}

})