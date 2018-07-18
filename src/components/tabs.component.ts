import Vue from 'vue';
import Component from 'vue-class-component';
import './app.component.scss'
import ContactPage from './pages/contact.page';
import AboutPage from './pages/about.page';
import HomePage from './pages/home.page';


@Component({
  template: `
    <ion-tabs use-router="true">
      <ion-tab href="#/home" label="Home" icon="home"></ion-tab>
      <ion-tab href="#/about" label="About" icon="information-circle"></ion-tab>
      <ion-tab href="#/contact" label="Contact" icon="contacts"></ion-tab>
    </ion-tabs>
  `,
})
export default class TabsComponent extends Vue {
  public tab1Root = HomePage;
  public tab2Root = AboutPage;
  public tab3Root = ContactPage;
}
