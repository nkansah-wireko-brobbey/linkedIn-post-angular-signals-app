import { effect, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private likes: WritableSignal<number> = signal(0)

  constructor() { }

  likeHandler(){
    this.likes.update(prev => ++prev)
  }

  removeLikeHandler(){
    this.likes.update(prev => --prev)
  }

  getLikes(){
    return this.likes.asReadonly()
  }

  logger = effect(()=>{
    console.log(`Like clicked ${this.likes()}`)
  })
}
