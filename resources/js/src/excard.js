

function collapse(thisCell,cells) {
    for (let cell of cells) {
        cell.classList.remove('is-inactive');
    }
    thisCell.classList.remove('is-expanded');
    thisCell.classList.add('is-collapsed');
}


export default function exCards() {

    const cards = document.querySelectorAll('.m-excards__card');
    const cells = document.getElementsByClassName('m-excards__card');    
    
    Array.from(cards).forEach(card => {

        card.addEventListener('click', function (event) {

            const thisCell = event.target.closest(".m-excards__card");

            if (event.target.classList.contains('js-collapser')) {
                console.log('coe');
                collapse(thisCell,cells);

            } else if (thisCell.classList.contains('is-collapsed')) {

                for (let cell of cells) {
                    cell.classList.remove('is-expanded');
                    cell.classList.add('is-collapsed');
                    cell.classList.add('is-inactive');
                }

                thisCell.classList.remove('is-inactive');
                thisCell.classList.remove('is-collapsed');
                thisCell.classList.add('is-expanded');


            } else {
                // Use if we would like to use the button to toggle collapsed.
            }


        });
    });

}