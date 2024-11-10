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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent  {

  likeService = inject(LikeService)

  likes = this.likeService.getLikes()
  
  
  clickHandler() {
    this.likeService.likeHandler() // Increment by 1
  }
  
}
