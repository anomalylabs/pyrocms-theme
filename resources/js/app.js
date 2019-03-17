import ExampleComponent from './components/ExampleComponent.vue';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueCodemirror from 'vue-codemirror'
import VueMouseParallax from 'vue-mouse-parallax'
Vue.use(VueMouseParallax)

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


// Expanding cards
import {initExcards} from './src/excard';
initExcards();
