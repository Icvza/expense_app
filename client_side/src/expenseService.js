class ExpenseService{
    
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getExpense(){
        fetch(`${this.endpoint}/expenses`)
        .then(resp => resp.json())
        .then( expenses => {
            for (const expense of expenses ) {
                const x = new Expense (expense)
                x.addToDom()
            }
        })
    }


    createExpense() {
        const expense = {
            name: document.getElementById('name').value,
            amount: document.getElementById('amount').value,
            category_id: document.getElementById('category_id').value,         
            due_date: document.getElementById('due_date').value,   
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(expense)
        }
        
        fetch(`${this.endpoint}/expenses`, configObj)
        .then(resp => resp.json())
        .then(expense => {
            const v = new Expense(expense)
            v.addToDom()
        })
    }

}


