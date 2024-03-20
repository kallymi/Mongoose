const express = require('express')

const app = express()
require("dotenv").config({path: "./config/.env"})
require('./config/db')

const port = 5000
app.listen(port, ()=> {
    console.log('Server in running on port',port)
})

// import du model Person depuis notre fichier create dans model
// et le stocke dans une variable Person
//const Person = require('./models/create');

// Creation d'une nouvelle personne 
// const newPerson = new Person({ 
//     name: 'Mary mami', 
//     age: 22, 
//     favoriteFoods: ['Plat 3', 'Plat 4'] 
// });

// newPerson.save()
//   .then(data => {
//     console.log('Nouvelle personne ajoutée à la base de données :', data);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// recherche avec le model.find() avec l'argumenet name
// Person.find({ name: 'Jhon' })
//   .then(personnes => {
//     console.log('Personnes trouvées :', personnes);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Recharche avec le model.find avec l'argument food
// Person.find({ favoriteFoods: 'Plat 1' })
//   .then(personnes => {
//     console.log('Personnes trouvées :', personnes);
//   })
//   .catch(err => {
//     console.error(err);
//   });

const Person = require('./models/create');

const personName = 'Ali';
const newAge = 20;

// Utiliser findOneAndUpdate() pour trouver une personne par son nom et mettre à jour son âge
// Person.findOneAndUpdate({ name: personName }, { age: newAge }, { new: true })
//   .then(personneMiseAJour => {
//     console.log('Personne mise à jour :', personneMiseAJour);
//   })
//   .catch(err => {
//     console.error(err);
//   });
//const personId = '3';

// Utiliser findOneAndRemove() pour supprimer une personne par son _id
// Person.findByIdAndRemove(personId, function(err, personneSupprimee) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('Personne supprimée :', personneSupprimee);
//     }
//   });

// la supression avec la methode deleteMany
// Person.deleteMany({ name: "Mary" })
//   .then(resultat => {
//     console.log('Résultat de l\'opération :', resultat);
//   })
//   .catch(err => {
//     console.error(err);
//   });