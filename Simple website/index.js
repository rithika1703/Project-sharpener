const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios.get("https://crudcrud.com/api/6b8a48f4918a41a6ba8a5e205cd719e2/todo")
  .then(res => console.log(res))
  .catch(err => console.log(err));
  
}

function postTodo() {
  // Write your code here
    axios.post("https://crudcrud.com/api/6b8a48f4918a41a6ba8a5e205cd719e2/todo",{
    title:"meet doctor",
    completed:false,
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

function putTodo() {
  // Write your code here
   axios.put("https://crudcrud.com/api/6b8a48f4918a41a6ba8a5e205cd719e2/todo"){
     title:"axios",
      completed:true,
   }
  
}

function deleteTodo() {
  // Write your code here
  axios.delete("https://crudcrud.com/api/6b8a48f4918a41a6ba8a5e205cd719e2/todo")
}
 .then(res => console.log(res))
 .catch(err => console.log(err));