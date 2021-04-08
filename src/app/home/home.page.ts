import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storageService: StorageService) {}

  async onClickButtonSave(): Promise<void> {
    try {
      await this.storageService.set('usuario', [
        {
          id: 'abc1',
          nombre: 'Antxon',
          apellido: 'Eguiguren',
          aficiones: [
            {
              nombre: 'escalada',
              material_necesario: ['arnés', 'cuerda', 'pies de gato']
            },
            {
              nombre: 'ciclismo',
              material_necesario: ['bici', 'casco', 'maillot']
            }
          ]
        }
      ]);
    }
    catch (err) {
      console.log(err);
    }
  }

  async onClickButtonRemove(): Promise<void> {
    try {
      await this.storageService.removeItem('usuario');
    }
    catch (err) {
      console.log(err);
    }
  }

}
