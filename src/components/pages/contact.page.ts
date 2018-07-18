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
          <ion-title>Contact</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        Contact
      </ion-content>
      <tabs-component></tabs-component>
    </ion-page>
  `,
})
export default class ContactPage extends Vue { }
