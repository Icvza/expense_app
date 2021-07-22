const base_url = "http://127.0.0.1:3000"
const categoryService =  new CategoryService(base_url)
const expenseService = new ExpenseService(base_url)
categoryService.getCategory()
expenseService.getExpense()
Category.renderFormCategory()
Category.categoryForm.addEventListener('submit', handleSubmitCategory)
Category.categoryContainer.addEventListener('submit', handleSubmitExpense)

function handleSubmitCategory() {
    event.preventDefault()
    categoryService.createCategory()
    event.target.reset()
}

function handleSubmitExpense(){
    event.preventDefault()
    expenseService.createExpense()
}