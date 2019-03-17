const cards = document.querySelectorAll('.m-excards__card');
const collapsers = document.querySelectorAll('.js-collapser');
const cells = document.getElementsByClassName('m-excards__card');


function collapse(thisCell) {
    for (let cell of cells) {
        cell.classList.remove('is-inactive');
    }
    thisCell.classList.remove('is-expanded');
    thisCell.classList.add('is-collapsed');
}

Array.from(cards).forEach(card => {

    card.addEventListener('click', function (event) {
        
        const thisCell = event.target.closest(".m-excards__card");

        if (event.target.classList.contains('js-collapser')) {    

            collapse(thisCell);
            
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
