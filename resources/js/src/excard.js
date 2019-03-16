



document.addEventListener('click', function (event) {


    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.js-expander')) return;
    console.log('Clicked');
    // Don't follow the link
    //event.preventDefault();
  
    // Log the clicked element in the console
    console.log(event.target);
  
    const thisCell = event.target.closest(".m-excards__card");
    console.log(thisCell);
  
    if (thisCell.classList.contains('is-collapsed')) {
      console.log('it is collapsed');
      const cells = document.getElementsByClassName('m-excards__card');
      for (let cell of cells) {
        cell.classList.remove('is-expanded');
        cell.classList.add('is-collapsed');
        cell.classList.add('is-inactive');
      }
  
      thisCell.classList.remove('is-collapsed');
      thisCell.classList.add('is-expanded');
  
  
    } else {
      console.log('No, its not collapsed');
      const cells = document.getElementsByClassName('m-excards__card');
      for (let cell of cells) {
        cell.classList.remove('is-inactive');
      }
  
      thisCell.classList.remove('is-expanded');
      thisCell.classList.add('is-collapsed');
  
    }
  
  }, false);
  
  document.addEventListener('click', function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.js-collapser')) return;
  
    const thisCell = event.target.closest(".m-excards__card");
  
    const cells = document.getElementsByClassName('m-excards__card');
    for (let cell of cells) {
      cell.classList.remove('is-inactive');
    }
  
    thisCell.classList.remove('is-expanded');
    thisCell.classList.add('is-collapsed');
  
  }, false);
  
  
  
  