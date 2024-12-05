import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistraionComponent } from "./registraion/registraion.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppiconsComponent } from "./appicons/appicons.component";
import { NoteinputComponent } from "./noteinput/noteinput.component";
import { DisplaynoteComponent } from "./displaynote/displaynote.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'keepnotes';
}
