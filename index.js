const input = document.getElementById('button');

const addingEventListener = () => {
    input.addEventListener('click', addingEventListener)
    alert('I was clicked! ')
}
