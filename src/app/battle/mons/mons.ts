import {Component, Inject, inject, input} from '@angular/core';

import mazeMon from '../assets/mons/maze.png';
import {Mon} from '../../game.service';
import {ConstantsService} from '../../constants.service';
@Component({
  selector: 'app-mons',
  standalone: true,
  templateUrl: './mons.html',
  styleUrl: './mons.css'
})
export class mons {
  constants = inject(ConstantsService)
  allMons = this.constants.allMons
  mons = input<Mon[] | null>();


}
