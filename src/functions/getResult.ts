export const getResult = (id: String, data: Array<Object>) => {
    document.querySelector(`#${id}`).innerHTML = `${data.length}`
}

