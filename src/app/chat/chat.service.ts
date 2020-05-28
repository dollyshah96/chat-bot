import { Injectable } from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

export class Message {
  constructor(public content: string, public sentBy: string) { }
}

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  constructor() { }
  conversation = new BehaviorSubject<Message>({ content: '', sentBy: '' });
  token = environment.chatBotToken;
  client = new ApiAiClient({ accessToken: this.token });

  talk() {
    this.client.textRequest('Who are you!').then((res) => {
      console.log(res, 'res');
    });
  }

  update(msg: Message) {
    this.conversation.next(msg);
  }

  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    console.log('msg');

    this.update(userMessage);

    return this.client.textRequest(msg).then(res => {
      console.log('update', res);

      const speech = res.result.fulfillment.speech;
      const botMsg = new Message(speech, 'bot');
      this.update(botMsg);
    });
  }
}
