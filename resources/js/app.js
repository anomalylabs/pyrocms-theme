import ExampleComponent from './components/ExampleComponent.vue';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueCodemirror from 'vue-codemirror'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import "codemirror/mode/php/php.js";
Vue.component('example-component', ExampleComponent);

Vue.use(VueCodemirror, {
  options: {
    theme: 'pyro',
    mode: 'application/x-httpd-php-open',
    lineNumbers: true
  },

})

const app = new Vue({
  el: '#app',
  data() {
    return {
      //code:"<?php \r $a = array('a' => 1, 'b' => 2, 3 => 'c');\r?>",
      code: "<?php\r\rnamespace Anomaly\BooleanFieldType;\r\ruse Anomaly\Streams\Platform\Addon\FieldType\FieldType;\r\r/**\r * Class BooleanFieldType\r *\r * @link          http://pyrocms.com/\r * @author        PyroCMS, Inc. <support@pyrocms.com>\r * @author        Ryan Thompson <ryan@pyrocms.com>\r */\rclass BooleanFieldType extends FieldType\r{\r\r    public $greeting = 'Hello'\r    public $isAlive = true\r    public $year = 2019\r\r\r    /**\r     * The database column type.\r     *\r     * @var string\r     */\r    public $columnType = 'boolean';\r    \r    /**\r     * The filter view.\r     *\r     * @var string\r     */\r    protected $filterView = 'anomaly.field_type.boolean::filter';\r    \r    /**\r     * Return the input view.\r     *\r     * @return string\r     */\r    public function getInputView()\r    {\r        return 'anomaly.field_type.boolean::' . $this->mode();\r    }\r    \r}\r",
    }
  },
});




// Expanding Cards



// document.addEventListener('click', function (event) {


//   // If the clicked element doesn't have the right selector, bail
//   if (!event.target.matches('.js-expander')) return;
//   console.log('Clicked');
//   // Don't follow the link
//   //event.preventDefault();

//   // Log the clicked element in the console
//   console.log(event.target);

//   const thisCell = event.target.closest(".card");
//   console.log(thisCell);

//   if (thisCell.classList.contains('is-collapsed')) {
//     console.log('it is collapsed');
//     const cells = document.getElementsByClassName('card');
//     for (let cell of cells) {
//       cell.classList.remove('is-expanded');
//       cell.classList.add('is-collapsed');
//       cell.classList.add('is-inactive');
//     }

//     thisCell.classList.remove('is-collapsed');
//     thisCell.classList.add('is-expanded');


//     // el.classList.add(className);

//     // $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
//     // $thisCell.removeClass('is-collapsed').addClass('is-expanded');
//     // if ($cell.not($thisCell).hasClass('is-inactive')) {
//     //   //do nothing
//     // } else {
//     //   $cell.not($thisCell).addClass('is-inactive');
//     // }

//   } else {
//     //$thisCell.removeClass('is-expanded').addClass('is-collapsed');
//     //$cell.not($thisCell).removeClass('is-inactive');
//     console.log('No, its not collapsed');
//   }

// }, false);

// document.addEventListener('click', function (event) {


//   // If the clicked element doesn't have the right selector, bail
//   if (!event.target.matches('.js-collapser')) return;

//   const thisCell = event.target.closest(".card");

//   const cells = document.getElementsByClassName('card');
//   for (let cell of cells) {
//     cell.classList.remove('is-inactive');
//   }

//   thisCell.classList.remove('is-expanded');
//   thisCell.classList.add('is-collapsed');

//   //var $thisCell = $(this).closest('.card');

//   //   $thisCell.removeClass('is-expanded').addClass('is-collapsed');
//   //   $cell.not($thisCell).removeClass('is-inactive');


// }, false);








document.addEventListener('click', function (event) {


  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches('.js-expander')) return;
  console.log('Clicked');
  // Don't follow the link
  //event.preventDefault();

  // Log the clicked element in the console
  console.log(event.target);

  const thisCell = event.target.closest(".card");
  console.log(thisCell);

  if (thisCell.classList.contains('is-collapsed')) {
    console.log('it is collapsed');
    const cells = document.getElementsByClassName('card');
    for (let cell of cells) {
      cell.classList.remove('is-expanded');
      cell.classList.add('is-collapsed');
      cell.classList.add('is-inactive');
    }

    thisCell.classList.remove('is-collapsed');
    thisCell.classList.add('is-expanded');


  } else {
    console.log('No, its not collapsed');
    const cells = document.getElementsByClassName('card');
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

  const thisCell = event.target.closest(".card");

  const cells = document.getElementsByClassName('card');
  for (let cell of cells) {
    cell.classList.remove('is-inactive');
  }

  thisCell.classList.remove('is-expanded');
  thisCell.classList.add('is-collapsed');

}, false);





var $cell = $('.card');

//open and close card when clicked on card
$cell.find('.js-expander').click(function () {

  var $thisCell = $(this).closest('.card');

  if ($thisCell.hasClass('is-collapsed')) {
    $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
    $thisCell.removeClass('is-collapsed').addClass('is-expanded');

    if ($cell.not($thisCell).hasClass('is-inactive')) {
      //do nothing
    } else {
      $cell.not($thisCell).addClass('is-inactive');
    }

  } else {
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    $cell.not($thisCell).removeClass('is-inactive');
  }
});

//close card when click on cross
$cell.find('.js-collapser').click(function () {

  var $thisCell = $(this).closest('.card');

  $thisCell.removeClass('is-expanded').addClass('is-collapsed');
  $cell.not($thisCell).removeClass('is-inactive');

});