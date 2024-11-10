import { effect, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private likes: WritableSignal<number> = signal(0)

  private loggerService = inject(LoggerService)

  constructor() { }

  likeHandler(){
    this.likes.update(prev => ++prev)
    this.loggerService.log(`Like clicked ${this.likes()}`)

  }

  removeLikeHandler(){
    this.likes.update(prev => --prev)
    this.loggerService.log(`Like clicked ${this.likes()}`)

  }

  getLikes(){
    return this.likes.asReadonly()
  }

  likeEffect = effect(()=>{
    console.log(`Like clicked ${this.likes()}`)
  })
}
