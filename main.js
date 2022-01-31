const gridElement = document.getElementById('grid');

const createGridElement = () => {
    const node = document.createElement('div');
    node.classList.add('square');
    return node;
}


for (let i = 1; i<=64; i++) {

    const node = createGridElement();

    //gridElement.innerHTML += `<div class="square"></div>`;

    node.addEventListener('click', function() {
        console.log(this);
        this.classList.add('clicked');
    });

    /*
    node.addEventListener('click', () => {
        console.log(this);
        node.classList.add('clicked');
    })
    */

    gridElement.appendChild(node);

}


