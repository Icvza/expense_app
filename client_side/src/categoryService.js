class CategoryService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getCategory(){
        fetch(`${this.endpoint}/categories`)
        .then(resp => resp.json())
        .then( categories => {
            for (const category of categories ) {
                const x = new Category (category)
                x.addToDom()
            }
        })
    }


    createCategory(){
        const category = {
            name: document.getElementById('name').value
        }
        
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(category)
        }

        fetch(`${this.endpoint}/categories`, configObj)
        .then(resp => resp.json())
        .then(category => {
            const c = new Category(category)
            c.addToDom()
        })
    }


    deleteCategory(id){
        fetch(`${this.endpoint}/categories/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}