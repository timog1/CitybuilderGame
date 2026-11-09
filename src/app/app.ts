import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Shop } from './shop/shop';
import { Board } from './Board/Board';
import {nextRound} from './nextRound/nextRound'
import {fighter} from './fighter/fighter';
import {battle } from './battle/battle'
import {OverlaysService} from './overlays.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Shop, Board, nextRound, fighter, battle],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  overlayService = inject(OverlaysService)
  protected readonly title = signal('angularGame');
}
