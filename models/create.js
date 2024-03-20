// create.js
const mongoose = require('mongoose');

// Définir le schéma du modèle
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFoods: [String]
});

// Créer le modèle à partir du schéma
const Person = mongoose.model('Person', personSchema);
// Exporter le modèle pour l'utiliser ailleurs
module.exports = Person;
