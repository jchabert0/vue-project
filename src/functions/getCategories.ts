
export const getCategories = (data: Array<object>) => {
    const categories = data;
    document.querySelector('header').innerHTML = 
    ` <div class="container">
        <button class="category all active" data-id="">
           All
        </button>
     ${Object.keys(categories).map((key) => {
        const category = categories[key]
        return `
        <button class="category getCategory" data-id="${category.id}">
            ${category.name}
        </button>
    `
}).join('')}
    </div>
    `
    document.querySelectorAll('.category').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.category').forEach(button => {
                button.classList.remove('active')                
            });
            button.classList.add('active')                
        })
    });
}


