function collapseCurrent(thisCard, cards) {
    for (let card of cards) {
        card.classList.remove('is-inactive');
    }
    thisCard.classList.remove('is-expanded');
    thisCard.classList.add('is-collapsed');
}

function collapseAll(cards) {
    for (let cell of cards) {
        cell.classList.remove('is-expanded');
        cell.classList.add('is-collapsed');
        cell.classList.add('is-inactive');
    }
}


export default function exCards() {

    const cards = document.querySelectorAll('.m-excards__card');

    Array.from(cards).forEach(card => {

        card.addEventListener('click', function (event) {

            const thisCard = event.target.closest(".m-excards__card");

            if (event.target.classList.contains('js-collapser')) {
                collapseCurrent(thisCard, cards);
            // } else if (thisCard.classList.contains('is-expanded')) {
            //     collapseAll(cards);
            } else if (thisCard.classList.contains('is-collapsed')) {
                collapseAll(cards);
                thisCard.classList.remove('is-inactive');
                thisCard.classList.remove('is-collapsed');
                thisCard.classList.add('is-expanded');
            }
        });
    });

}