//Importar mongoose
const moongose = require('mongoose')
const esquemaAuto = new moongose.Schema(
    {
        marca: {
            type:String,
            default:"generico",
            //required: true
        },
        modelo: Number,
        color: String,
        precio: Number,
        fechaRegistro: {
            type:Date, 
            default: Date.now
        }
    }
)

//definir el export
const Auto = moongose.model("auto",esquemaAuto)
module.exports = Auto;
