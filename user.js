const mongoose=require('mongoose');

const User = mongoose.model('User',{
    
    username:{
        type: 'string'
    },
    password: {
        type: 'string'
    }
})

module.exports=User;