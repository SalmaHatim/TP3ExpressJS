import { Component } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  template: `
    <div>
      <label>
        <input type="radio" [(ngModel)]="selectedColor" value="red"> Rouge
      </label>
      <label>
        <input type="radio" [(ngModel)]="selectedColor" value="green"> Vert
      </label>
      <label>
        <input type="radio" [(ngModel)]="selectedColor" value="blue"> Bleu
      </label>
    </div>
    <div [highlight]="selectedColor">Cet élément change de couleur</div>
  `,
  styles: [`
    div {
      margin-top: 20px;
      padding: 10px;
      border: 1px solid #ccc;
    }
  `]
})
export class ColorPickerComponent {
  selectedColor: string = 'red';
}
