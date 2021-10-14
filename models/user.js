import mongoose from "mongoose";


const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema

const userSchema = new Schema({ 
    userName: {type: String, required: [true, 'Campo obligatorio']}, 
    password: String,  
    date:{type: Date, default: Date.now}, 
    activo: {type: Boolean, default: true} 
});

// Encriptar password

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


// Convertir a Modelo
const User = mongoose.model('User', userSchema);

export default User;