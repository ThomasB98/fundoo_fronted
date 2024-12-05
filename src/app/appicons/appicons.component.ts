import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-appicons',
  imports: [
    MatMenuModule,
    MatButtonModule
  ],
  templateUrl: './appicons.component.html',
  styleUrl: './appicons.component.css'
})
export class AppiconsComponent {
  applyStyle(event: MouseEvent): void{
    const target=event.target as HTMLElement;

    if (target && target instanceof SVGElement) {
      // Toggle the "clicked" class on the clicked SVG
      target.classList.toggle('clicked');
    }
  }
}
