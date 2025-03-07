export const getResult = (id: string, data: Array<object>) => {
    document.querySelector(`#${id}`).innerHTML = `${data.length}`
}

