import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, RouterOutlet, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {


  
}
