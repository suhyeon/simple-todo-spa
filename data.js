let todoSeq = 1
const todos = [
  {
    id: todoSeq++,
    title: "sample todo",
    complete: false
  },
  {
    id: todoSeq++,
    title: "completed todo",
    complete: true
  }
]

function addTodo({title}) {
  const newTodo = {
    id: todoSeq++,
    title,
    complete: false
  }
  todos.push(newTodo)
  return newTodo
}

function updateTodo(id, source) {
  const todo = todos.find(item => item.id === id)
  if (todo) {
    Object.assign(todo, source)
    return todo
  } else {
    throw new Error('해당 id를 갖는 요소가 없습니다.')
  }
}

function rewriteTodo(id , new_title){
  const todo = todos.find(item => item.id === id)
  if(todo){
    todo.title = new_title
    console.log(todo.title)
    console.log('rewrite')
    return todo
  }else{
    throw new Error('해당 요소를 찾을 수 없습니다.')
  }
}
function deleteTodo(id) {
  const index = todos.findIndex(item => item.id === id)
  if (index !== -1) {
    todos.splice(index, 1)
  }
}

module.exports = {
  todos,
  addTodo,
  updateTodo,
  rewriteTodo,
  deleteTodo
}
