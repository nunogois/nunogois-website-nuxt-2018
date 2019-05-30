import Vue from 'vue'
// the component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// the library
import { library } from '@fortawesome/fontawesome-svg-core'
// add more icon categories as you want them, even works with pro packs
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// asociate it to the library, if you need to add more you can separate them by a comma
library.add(far, fas, fab)
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)