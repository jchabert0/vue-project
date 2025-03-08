export const noResults = (id: string) => {
    document.querySelector(`#${id}`).innerHTML = 
    `<div class="col-12">
        <h2 class="no-results">No results</h2>
    </div>`
}