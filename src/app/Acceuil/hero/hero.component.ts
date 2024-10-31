import { Component } from '@angular/core';
import { TypedAnimationComponent } from "../typed-animation/typed-animation.component";


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TypedAnimationComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent  {
  
}
