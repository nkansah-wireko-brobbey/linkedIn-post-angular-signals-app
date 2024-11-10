import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  logs: WritableSignal<{id:number,date: Date, description: string}[]>
  = signal([])

  constructor() { }

  log(description: string ){
    const log = {id: this.logs().length+1,date: new Date(), description}

    this.logs.update(prev=> [...prev,log])
  }

  getLogs(){
    return this.logs.asReadonly()
  }

}
