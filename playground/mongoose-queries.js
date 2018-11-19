// http://mongodb.github.io/node-mongodb-native/3.1/api/ObjectID.html

const { mongoose } = require('../server/db/mongoose');
const { ObjectID } = require('mongodb');

const { Todo } = require('../server/models/todo');

var id = '5bf2bcd598a74420b838eaf67';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("todos: ", todos);
// })

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo: ", todo);
// })

Todo.findById(id).then(todo => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by ID: ', todo);
}).catch(e => {
  console.log(e.message)
}) 