import {
  Component,
  computed,
  effect,
  inject,
  OnDestroy,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { LikeService } from '../../services/like.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent  {

  private  likeService = inject(LikeService)
  
  private loggerService = inject(LoggerService)

  likes = this.likeService.getLikes()

  logs = this.loggerService.getLogs()
  
  
  clickHandler() {
    this.likeService.likeHandler() // Increment by 1
  }
  
}
