import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { HeaderComponent } from "../../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { TechStackComponent } from "../tech-stack/tech-stack.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [FooterComponent, HeaderComponent, HeroComponent, TechStackComponent, TestimonialsComponent,]
})
export class HomeComponent {

}
