import Vue from 'vue'
import App from './App.vue'
import {
    Button,
    Select,
    Input,
    Form,
    FormItem,
    Option,
    DatePicker,
    RadioGroup,
    Radio,
    Checkbox,
    Col
} from 'element-ui';

Vue.config.productionTip = false;
Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Col)

new Vue({
  render: h => h(App)
}).$mount('#app')
