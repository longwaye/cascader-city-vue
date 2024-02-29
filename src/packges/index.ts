import { App } from 'vue'

import CascaderCity from './CascaderCity.vue'

const install = (app: App<Element>) => {
  app.component('CascaderCity',CascaderCity)
}

export default {
  install
}