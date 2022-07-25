const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    
    nombre:{
        type: String,
        required: [true, 'Debes ingresar tu nombre']
    },

    apellido:{
        type: String,
        required: [true, 'Debes ingresar tu apellido']
    },

    legajo:{
        type: String,
        required: [true, 'Debes ingresar tu legajo']
    },

    carrera:{
        type: String,
        required: [true, 'Debes ingresar tu carrera']
    },

    email:{
        type: String,
        required: [true, 'Debes ingresar un email'],
        trim: true,
        unique: true
    },

    password:{
        type: String,
        required: [true, 'Debes ingresar una contraseña']
    },

    estado: {
        type: Boolean,
        default: true
    },

    created_at:{
        type: Date,
        default: Date.now()
    },

})

usuarioSchema.plugin(uniqueValidator,{
    message: "{PATH} debe ser unico"
});

//Eliminar password de las peticiones

usuarioSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password; 
    return userObject;
}

module.exports=mongoose.model('Usuario', usuarioSchema)

