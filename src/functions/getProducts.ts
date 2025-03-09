export const getProducts = (data: Array<object>) => {
    const products = data

    document.querySelector('#grid-products').innerHTML = ''
    document.querySelector('#grid-products').innerHTML = 
    `${Object.keys(products).map((key) => {
        const product = products[key]
        return `
        <div class="col-12 col-lg-3">
            <article class="product" data-id="${product.id}">
            <button data-btn="open-modal" data-modal="${product.id}">
            <span>${product.category.name}</span>
                <div class="slider-wrapper" data-images="wrapper">
                <ul class="slides-container">
                ${Object.keys(product.images).map((key) => {
                const image = product.images[key]
                    return `<li class="slide">
                    <img src="${image}" alt="${image}" height="230" id="${image}" />
                    </li>`
                }).join('')}
                </ul>
                </div>
                <div class="title">
                <h3>${product.title}</h3>
                <h4>${product.price}€</h4>
                </div>
               
            </button>
             <div class="modal" id="modal-${product.id}">
    <button data-btn="modal-close" class="modal-close">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--black-color)"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
    </button>
    <div class="modal-content container">
<div class="grid">
<div class="col-12 col-lg-6">
        <div class="slider-wrapper" data-images="wrapper">
        <ul class="slides-container">
                        ${Object.keys(product.images).map((key) => {
                        const image = product.images[key]
                            return `<li class="slide">
                    <img src="${image}" alt="${image}" height="400" id="${image}" />
                    </li>`
                }).join('')}
                </ul>
                </div>
    </div>
<div class="col-12 col-lg-6">
<div class="modal-right">
                <h3>${product.price}€</h3>
                <h4>${product.title}</h4>
      <p>${product.description}</p>
      <button class="secondary getOrder" data-id="${product.id}">Add to cart</button>
  </div>
    </div>
    </div>
    </div>
    </div>
  </div>

            </article>
            
    </div>
    
    `
    }).join('')
    
}
    `

    /* Order */
   let getOrder = []
   document.querySelectorAll('.getOrder').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('aside')?.classList.add('active')
      const productID = Number(btn.dataset.id)
      const getProduct = products.filter((product: object) => product.id === productID)
      getOrder.push(getProduct[0])
      document.querySelector('#order').innerHTML = 
      `
      ${Object.keys(getOrder).map((key) => {
        const order = getOrder[key] 
return `
<div class="order-content">
                    <img src="${order.images[0]}" alt="${order.images[0]}" height="150" width="150" id="${order.images[0]}" />
<div class="order-content__title">
<h3>${order.title}</h3>
<h4>${order.price}€</h4>
</div>
<button data-btn="order-delete">delete</button>
</div>
`
      }).join('')}
      `
   document.querySelector('#order-length').innerHTML = getOrder.length
   let totalPrices = []
   getOrder.map((order) => {
    totalPrices.push(order.price)
   })
   const prices = totalPrices.reduce((partialSum, a) => partialSum + a, 0)
   document.querySelector('#total').innerHTML = `${prices}€`

    })
   });

      /* Order delete */
document.querySelectorAll('[data-btn="order-delete"]').forEach(btn => {
  console.log('getOrder')
  btn.addEventListener('click', () => {
    console.log('getOrder')
  })
});

/* Modal */
const modal = (() => {
  const open = document.querySelectorAll('[data-btn="open-modal"]')
  if(open.length !== 0 )
  open.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = document.querySelector(`#modal-${btn.dataset.modal}`)
      if(!modal.classList.contains('open')) modal.classList.add('open')
      document.querySelector('html').classList.add('open')
    })
  })
  const close = document.querySelectorAll('[data-btn="modal-close"]')
  if(close.length !== 0 )
  close.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.parentNode
      if(modal.classList.contains('open')) modal.classList.remove('open')
      document.querySelector('html').classList.remove('open')
    })
  })
})()

   
   /* Article Add */
   const btnAside = document.querySelector('aside')?.querySelector('button')
   btnAside?.addEventListener('click', () => {
    btnAside?.parentNode.classList.remove('active')
})

const btnClose = document.querySelectorAll('[data-btn="modal-close"]')
btnClose.forEach(btn => {
  btn.addEventListener('click', () => {
    btnAside?.parentNode.classList.remove('active')
  })
});



/* Slider images */
document.querySelectorAll('[data-images="wrapper"]')?.forEach(wrapper => {
  const btnPrev = document.createElement('button')
  const btnNext = document.createElement('button')
  btnPrev.innerHTML = '&#8249;'
  btnNext.innerHTML = '&#8250;'
  btnPrev.classList.add('slide-arrow')
  btnPrev.classList.add('slide-arrow__prev')
  btnPrev.classList.add('hide')
  btnNext.classList.add('slide-arrow')
  btnNext.classList.add('slide-arrow__next')
  wrapper.appendChild(btnPrev)
  wrapper.appendChild(btnNext)
  let count = 0
  btnPrev.addEventListener('click', (e) => {
      const prev = btnPrev
      const next = btnPrev.parentNode.children[2]
      const container = btnPrev.parentNode.children[0]
      const slides = container.children
      count--
      container.scrollLeft -= slides[count].clientWidth
      count === 0 ? prev.classList.add('hide') : prev.classList.remove('hide')
      count === slides.length - 1 ? next.classList.add('hide') : next.classList.remove('hide')
e.stopPropagation()
  })
  btnNext.addEventListener('click', (e) => {
      const prev = btnNext.parentNode.children[1]
      const next = btnNext
      const container = btnNext.parentNode.children[0]
      const slides = container.children
      count++
      container.scrollLeft += slides[count].clientWidth
      count === 0 ? prev.classList.add('hide') : prev.classList.remove('hide')
      count === slides.length - 1 ? next.classList.add('hide') : next.classList.remove('hide')
e.stopPropagation()
  })
});


}