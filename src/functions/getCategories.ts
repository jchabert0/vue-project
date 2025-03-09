
export const getCategories = (data: Array<object>) => {
    const categories = data;
    document.querySelector('header').innerHTML = 
    ` <div class="container">
        <button class="primary all active" data-id="">
           All
        </button>
     ${Object.keys(categories).map((key) => {
        const category = categories[key]
        return `
        <button class="primary getCategory" data-id="${category.id}">
            ${category.name}
        </button>
    `
}).join('')}
<button class="secondary" data-btn="open-modal" data-modal="order">
            My Cart
            <small id="order-length">0</small>
        </button>
        <div class="modal" id="modal-order">
    <button data-btn="modal-close" class="modal-close">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--black-color)"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
    </button>
    <div>
    <h2>My Order</h2>
    <div id="order">No result :(</div>
    <div class="total"><h2>Total : </h2><span id="total">0€</span></div>
  </div>
    </div>
    `
    document.querySelectorAll('.primary').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.primary').forEach(button => {
                button.classList.remove('active')                
            });
            button.classList.add('active')                
        })
    });

}


