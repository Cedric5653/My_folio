import { Component,OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-typed-animation',
  standalone: true,
  imports: [],
  templateUrl: './typed-animation.component.html',
  styleUrl: './typed-animation.component.scss'
})
export class TypedAnimationComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: [" m Cedrick NANA", " m Web Developer." , "❤️ Angular & Vue-Js"],
      typeSpeed: 40,
      backSpeed: 40,
      startDelay: 1000,
      backDelay: 2500,
      loop: true,
      smartBackspace: true,
    };

    const typed = new Typed('#typed2', options);
  }

}
