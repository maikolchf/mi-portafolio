import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
 img_perfil: string = '../../../assets/img/Img-perfil.png';
 info_Sobre_mi: string[] = `Soy un apasionado desarrollador de software con tres años y medio de experiencia en el mundo de la programación y las tecnologías web. Mi enfoque principal se ha centrado 
 en el desarrollo de aplicaciones web robustas y escalables utilizando una variedad de tecnologías clave. He trabajado extensamente con HTML5, CSS3, .NET Core, 
 .NET Framework, jQuery, SQL Server, Reporting Services, JavaScript, Bootstrap y el patrón de diseño MVC./n

 Mi sólida base técnica y mi habilidad para adaptarme a nuevas tecnologías me han permitido adquirir conocimientos básicos en Angular, React JS, Node.js y WCF. Esto me 
 ha abierto las puertas para explorar y contribuir en proyectos más diversos y desafiantes./n

 Estoy comprometido con la creación de soluciones de software eficientes y de alta calidad que satisfagan las necesidades de los usuarios y las metas de negocio. 
 Mi enfoque en el aprendizaje continuo y la mejora constante me ha permitido mantenerme al día con las últimas tendencias tecnológicas y encontrar soluciones innovadoras 
 para los problemas que enfrento./n

 Siendo un miembro altamente colaborativo y orientado a resultados, estoy listo para aportar mi experiencia y pasión por la programación a proyectos desafiantes que 
 requieran un enfoque pragmático y creativo.`.split('/n');  
}
