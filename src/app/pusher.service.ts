import { Injectable } from '@angular/core';
import Pusher from "pusher-js";
// declare const Pusher: any;
@Injectable()
export class PusherService {
  constructor() {
    const pusher = new Pusher('PUSHER_KEY', {
      cluster: 'ap2',
    });
    this.channel = pusher.subscribe('painting');
  }
  channel;
  public init() {
    return this.channel;
  }
}
