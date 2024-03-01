function onsignup(event) {
    event.preventDefault();
    const expenses = event.target.expenses.value
    const description = event.target.description.value
    const category = event.target.category.value

    const obj = {
        expenses,
        description,
        category
    }
    localStorage.setItem(obj.category, JSON.stringify(obj))
    showUserOnScreen(obj)
}

function showUserOnScreen(obj) {
    const parent = document.getElementById('project')
    const child = document.createElement('li')
    child.textContent = obj.expenses + '-' + obj.description + '-' + obj.category
    parent.appendChild(child)

    const editbutton = document.createElement('input')
    editbutton.type = 'button'
    editbutton.value = 'Edit'
    editbutton.onclick = () => {
        localStorage.removeItem(obj.category)
        parent.removeChild(child)
        document.getElementById('expenses').value = obj.expenses
        document.getElementById('description').value = obj.description
        document.getElementById('category').value = obj.category
    }
    child.appendChild(editbutton)
    parent.appendChild(child)

    const deletebutton = document.createElement('input')
    deletebutton.type = 'button'
    deletebutton.value = 'Delete'
    deletebutton.onclick = () => {
        localStorage.removeItem(obj.category)
        parent.removeChild(child)
    }
    child.appendChild(deletebutton)
    parent.appendChild(child)
}
