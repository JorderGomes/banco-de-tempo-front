import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-void-state',
  templateUrl: './void-state.component.html',
  styleUrl: './void-state.component.css'
})
export class VoidStateComponent {

  @Input() message: string = "Dados não encontrados!";
  @Input() icon!: IconDefinition;

}
