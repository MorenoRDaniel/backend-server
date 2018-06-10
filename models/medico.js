var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var medicoSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    img: { type: String, required: false },
    // TODO FOREIGN KEY los _id para manejar la relación entre el usuario que lo creo y el hospital al que estamos queriendo asignar al médico
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    hospital: { type: Schema.Types.ObjectId, ref: 'Hospital', required: [true, 'El id hospital es un campo obligatorio '] }
});
module.exports = mongoose.model('Medico', medicoSchema);