class Category{

    static all = []
    static categoryContainer = document.getElementById("categories-contianer")
    static categoryForm = document.getElementById("form-category-container")

    constructor({id, name, expenses}) {
        this.id = id
        this.name = name
        this.expenses = expenses
        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `category-${this.id}`
        this.element.addEventListener('click', this.handleClickCategory)

        Category.all.push(this)
    }

    categoryHTML() {
        this.element.innerHTML += `
        <div>
            <h3>${this.name} ${this.id}</h3>
        </div>
        <button id='delete-bttn'>Delete</button>
        <button id='create-exp'>Add Expense</button>
        `
        return this.element
    }

    addToDom() {
        Category.categoryContainer.append(this.categoryHTML())
    }

    

    static renderFormCategory(){
        Category.categoryForm.innerHTML += `
        <form id="new-category-form">
            New category: <input type="text" id=name>
            <input type="submit" id="create">
        </form>
        `
    }

    handleClickCategory = () => {
        if (event.target.innerHTML === "Delete") {
            categoryService.deleteCategory(this.id)
            event.target.parentNode.remove()
        } else if (event.target.innerHTML === "Add Expense") {
            event.target.previousElementSibling.previousElementSibling.append(Expense.renderFormExpense(this))
        } else if (event.target.type === "submit") {
            //this.element.lastElementChild.remove()
            handleSubmitExpense()
        } else {
            false
        }
    }

}