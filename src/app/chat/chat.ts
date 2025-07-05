import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat implements OnInit {
  phoneNumber: string = '';
  question: string = '';
  reply: string = '';
  loading: boolean = false;
  error: string = '';
  isOpen = false;
  userPhonenumber: string | null = '';
  isListening: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.userPhonenumber = sessionStorage.getItem('number');
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
    this.error = '';
    this.reply = '';
    this.question = '';
  }

  askQuestion(): void {
    if (!this.question || !this.userPhonenumber) {
      this.error = 'Please enter your question and make sure you are logged in.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.reply = '';

    const params = new HttpParams()
      .set('phoneNumber', this.userPhonenumber)
      .set('question', this.question);

    this.http.get<{ reply: string }>('https://localhost:7203/ask', { params })
      .subscribe({
        next: res => {
          this.reply = res.reply;
          this.loading = false;
        },
        error: err => {
          this.loading = false;

          if (err.error instanceof ProgressEvent) {
            this.error = 'Cannot connect to the server. Check your API or network.';
          } else if (err.error && typeof err.error === 'object') {
            this.error = err.error.message || 'An unexpected server error occurred.';
          } else {
            this.error = err.message || 'An unknown error occurred.';
          }
        }
      });
  }

  startVoiceRecognition(): void {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-IN'; // Change to 'hi-IN' for Hindi
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    this.isListening = true;
    recognition.start();

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      this.question = transcript;
      this.isListening = false;

      // Optional: auto-send after voice
      this.askQuestion();
    };

    recognition.onerror = () => {
      this.isListening = false;
      alert('Could not recognize speech. Please try again.');
    };

    recognition.onend = () => {
      this.isListening = false;
    };
  }
}

