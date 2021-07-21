class Expense{

    static all = []
    static expensesContainer = document.getElementById("expenses-contianer")
    static expenseForm = document.getElementById("form-expense-container")
    
    constructor({id, name, amount, category_id, due_date}) {
        this.id = id
        this.name = name
        this.amount = amount 
        this.category_id = category_id
        this.due_date = due_date

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `expense-${this.id}`
        this.element.addEventListener('click', this.handleClickExpense)

        Expense.all.push(this)
    }


    static renderFormExpense(ctg){
        ctg.element.innerHTML += `
        <form id="new-expense-form">
            Name: <input type="text" id=name>
            Amount: <input type="integer" id=amount>
            Due Date: <input type="text" id=due_date>
            <input type="submit" id="create">
            <input type="hidden" id="category_id" value="${ctg.id}">

        </form>
        `
        return this.element
    }


    findYourCategory (expense){
        document.getElementById(`category-${expense.category_id}`).childNodes[1]
    }

    addToDom(){
        debugger
    }

}