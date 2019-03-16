const cards = document.querySelectorAll('.m-excards__card');
const collapsers = document.querySelectorAll('.js-collapser');

Array.from(cards).forEach(card => {

    card.addEventListener('click', function (event) {

        const thisCell = event.target.closest(".m-excards__card");

        if (thisCell.classList.contains('is-collapsed')) {

            const cells = document.getElementsByClassName('m-excards__card');
            for (let cell of cells) {
                cell.classList.remove('is-expanded');
                cell.classList.add('is-collapsed');
                cell.classList.add('is-inactive');
            }

            thisCell.classList.remove('is-collapsed');
            thisCell.classList.add('is-expanded');


        } else {

            console.log('Does not.');
            // const cells = document.getElementsByClassName('m-excards__card');
            // for (let cell of cells) {
            //     cell.classList.remove('is-inactive');
            // }

            // thisCell.classList.remove('is-expanded');
            // thisCell.classList.add('is-collapsed');

        }


    });
});

Array.from(collapsers).forEach(collapse => {

    collapse.addEventListener('click', function (event) {
        const thisCell = event.target.closest(".m-excards__card");
        const cells = document.getElementsByClassName('m-excards__card');
        
        for (let cell of cells) {
            cell.classList.remove('is-inactive');
        }

        thisCell.classList.remove('is-expanded');
        thisCell.classList.add('is-collapsed');
    });
});



// var deleteLinks = document.querySelectorAll('.m-excards__card');

// Array.from(deleteLinks).forEach(link => {
//     link.addEventListener('click', function (event) {
//         // if (!confirm(`sure u want to delete ${this.title}`)) {
//         //     event.preventDefault();
//         // }
//         console.log('hello');
//     });
// });


// document.addEventListener('click', function (event) {


//     // If the clicked element doesn't have the right selector, bail

//     if (!event.target.matches('.js-expander')) return;
//     console.log(event.target);
//     const thisCell = event.target.closest(".m-excards__card");




//     if (thisCell.classList.contains('is-collapsed')) {

//         const cells = document.getElementsByClassName('m-excards__card');
//         for (let cell of cells) {
//             cell.classList.remove('is-expanded');
//             cell.classList.add('is-collapsed');
//             cell.classList.add('is-inactive');
//         }

//         thisCell.classList.remove('is-collapsed');
//         thisCell.classList.add('is-expanded');


//     } else {

//         console.log('Does not.');
//         const cells = document.getElementsByClassName('m-excards__card');
//         for (let cell of cells) {
//             cell.classList.remove('is-inactive');
//         }

//         thisCell.classList.remove('is-expanded');
//         thisCell.classList.add('is-collapsed');

//     }

// }, false);

// document.addEventListener('click', function (event) {
//     // If the clicked element doesn't have the right selector, bail
//     if (!event.target.matches('.js-collapser')) return;

//     const thisCell = event.target.closest(".m-excards__card");

//     const cells = document.getElementsByClassName('m-excards__card');
//     for (let cell of cells) {
//         cell.classList.remove('is-inactive');
//     }

//     thisCell.classList.remove('is-expanded');
//     thisCell.classList.add('is-collapsed');

// }, false);