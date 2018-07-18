import Vue from 'vue';
import Component from 'vue-class-component';
import TabsComponent from '../tabs.component';


@Component({
  components: {
    TabsComponent
  },
  template: `
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        Home
      </ion-content>
      <tabs-component></tabs-component>
    </ion-page>
  `,
})
export default class HomePage extends Vue { }
