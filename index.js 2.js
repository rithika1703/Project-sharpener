let totalPrice = 0;

function handleSubmit(event){
    event.preventDefault();
    const price=event.target.price.value;
    const name=event.target.name.value;

    const obj={
        price,
        name,
       
    }

    axios.post('https://crudcrud.com/api/b9b6802970514f7ca3f30e4be8674457/products',obj)
    .then((response)=>{
         
        showUserOnScreen(response.data)
        updateTotalPrice(response.data.price)
        console.log(response)
    })
    .catch((err)=>{
        document.body.innerHTML=document.body.innerHTML+"<h4>something went wrong</h4>"
        console.log(err)

    })
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/b9b6802970514f7ca3f30e4be8674457/products')
    .then((response)=>{
    
     console.log(response)

     for(let i=0;i<response.data.length;i++){
        showUserOnScreen(response.data[i])
        updateTotalPrice(response.data[i].price);
     }
    })
    .catch((err)=>{

        console.log(err)
    })
})



function DeleteUser(id,price) {
    axios.delete(https://crudcrud.com/api/b9b6802970514f7ca3f30e4be8674457/products/)
        .then((res) => {
            removeUserFromScreen(id);
            updateTotalPrice(-parseFloat(price));
        })
        .catch((err) => {
            console.log(err);
        });
}


function showUserOnScreen(obj) {
    document.getElementById('price').value = '';
    document.getElementById('name').value = '';

    const parentNode = document.getElementById('listofproducts');
    const childNode = document.createElement('li');

    
    childNode.id = obj._id;
    childNode.innerHTML = `${obj.name}-${obj.price}
        <button onclick="DeleteUser('${obj._id}','${obj.price}')">Delete product</button>`;

    parentNode.appendChild(childNode);
}

function removeUserFromScreen(id) {
    const parentNode = document.getElementById('listofproducts');
    const childNodeToBeRemoved = document.getElementById(id);

    if (childNodeToBeRemoved) {
        parentNode.removeChild(childNodeToBeRemoved);
    }
}

function updateTotalPrice(price){
  totalPrice+=parseFloat(price);
  const totalElement=document.getElementById('totalPrice');
  
    totalElement.textContent = Total Worth of the Products: Rs ${totalPrice.toFixed(2)}
  
 
}