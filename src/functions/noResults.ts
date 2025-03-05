export const noResults = (id: string) => {
    document.querySelector(`#${id}`).innerHTML = 
    `<div class="col-12">
        <h2 class="no-results">Aucun résultats !</h2>
    </div>`
}