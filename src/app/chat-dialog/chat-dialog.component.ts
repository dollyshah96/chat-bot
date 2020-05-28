import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat/chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {
  messages: Message[] = [];
  formValue: string;
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.conversation.subscribe(res => {
      console.log('ers', res);
      this.messages.push(res);
      return res;
    });
    // this.chatService.talk();
  }
  sendMessage() {
    this.chatService.converse(this.formValue);
    this.formValue = null;
  }

}
