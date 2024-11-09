import {
  Component,
  computed,
  effect,
  OnDestroy,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  username = signal('username');
  timeOutId!: ReturnType<typeof setTimeout>;

  isUserLoggedIn: WritableSignal<boolean> = signal(false);

  login(inputUsername: string) {
    if (inputUsername !== this.username()) {
      console.log('Unable to logIn');
      return;
    }

    this.isUserLoggedIn.set(true);
    console.log('User loggedIn');
  }

  constructor() {
    console.log(this.username());
    console.log(`User is logged: ${this.isUserLoggedIn()}`);
   
  }

  signInLogger =  effect(()=>{
    console.log(`User signIn logger : ${this.isUserLoggedIn()}`)
  })

  
  likeHandler() {
    this.likes.update((prev) => prev + 1); // Increment by 1
  }
  // Writeable signal to hold the number of likes
  likes: WritableSignal<number> = signal(0);

  // Computed signal to derive the message based on the likes
  likesMessage = computed(() => {
    const count = this.likes();

    if (count === 0) {
      return 'No likes yet';
    }

    return `${count} likes`;
  });

  ngOnInit(): void {
    this.timeOutId = setTimeout(() => this.login('username'), 4000);
  }
  ngOnDestroy(): void {
    if (this.timeOutId) clearTimeout(this.timeOutId);
  }
}
