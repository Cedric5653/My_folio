import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {

}
