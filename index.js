const connectDatabase = require("./dbConnect");
const person = require('./person')
connectDatabase()

// person.insertMany([{
//     name:"Samar",
//     age : 25,
//     favoriteFoods :['chiken','cake']
// },
// {
//    name:"Ahmed",
//    age : 32,
//    favoriteFoods :['pizza']},
// {
//     name:"Oumaima",
//     age : 28,
//     favoriteFoods :['chiken','cake','pizza']
// }])


// requete find()

// person.find({}).then((doc)=>{
// console.log(doc);
// }).catch((err)=>{
// console.log(err);
// })

// requete findOne selon food name 

// person.findOne({favoriteFoods:"pizza"})
// .then((doc)=>{
// console.log(doc);
// })
// .catch((err)=>{
//     console.log(err);
// })


// requete findById selon _id

// person.findById({_id:'6554d1ed086ff833c3fabb0d'})
// .then((doc)=>{
// console.log(doc);
// })
// .catch((err)=>{
//     console.log(err);
// })


// find by Id and update favorite foods

// person.updateOne({age:22},{$push:{favoriteFoods:'kafteji'}})
// .then((doc)=>{
// console.log(doc);
// })
// .catch((err)=>{
//     console.log(err);
// })

//Perform New Updates on a Document Using model.findOneAndUpdate()

// person.findOneAndUpdate({name:"user1"},{$set:{age:20}},{new : true})
// .then((doc)=>{
//     console.log(doc);
// })
// .catch((err)=>{
//     console.log(err);
// })

// Delete One Document Using model.findByIdAndRemove
// findByIdAndRemove ma3adech tekhdem fel version mongoose jdida replaced by 
// findByIdAndDelete
// person.findByIdAndDelete({_id : "6554cf906c5d5a95506055ad"})

// .then(()=>{
//     console.log("document removed");
// })
// .catch((err)=>{
//     console.log(err);
// })

// MongoDB and Mongoose - Delete Many Documents with model.remove()
// model.remove() : is not working anymore we can use deleteMany()
// person.deleteMany({age:{$eq:22}})
// .then(()=>{
//     console.log('documents removed with sucess');
// })
// .catch((err)=>{
//     console.log(err);
// })


// Chain Search Query Helpers to Narrow Search Results



// person.find({favoriteFoods : 'pizza'}).sort({name:-1})
// .then((document)=>{
//     console.log(document);
// })
// .catch((error)=>{
//     console.log(error);
// })