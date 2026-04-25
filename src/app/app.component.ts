import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ScreenOrientation } from '@capacitor/screen-orientation';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private platform: Platform) {
    this.initApp();
  }

  async initApp() {
    await this.platform.ready();

    try {
      await ScreenOrientation.lock({ orientation: 'landscape' });
    } catch (error) {
      console.log('Error al bloquear orientación:', error);
    }
  }
}