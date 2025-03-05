export const getPrices = (data: Array<Object>) => {
let ancientPrices = []
let finalPrices = []
let prices = []
data.map(function (el: Object) {
    ancientPrices.push(el.price)
    finalPrices = [...new Set(ancientPrices)];
})
prices = finalPrices.sort(function (a, b) {
    return a - b;
});
const range = document.querySelector('#priceMax')
range?.setAttribute('min', prices[0])
range?.setAttribute('max', prices[prices.length - 1])
range?.setAttribute('value', prices[prices.length - 1])
const value = document.querySelector('#slider-value')
value.innerHTML = `${prices[prices.length - 1]}€`
}
