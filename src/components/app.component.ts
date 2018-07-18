import Vue from 'vue';
import Component from 'vue-class-component';
import './app.component.scss'


@Component({
  template: `
    <ion-app>
      <router-view></router-view>
    </ion-app>
  `,
})
export default class AppComponent extends Vue { }
