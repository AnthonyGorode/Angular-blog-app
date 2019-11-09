import { 
  Component, 
  OnInit,
  Input, 
  Output, 
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() public posts: Array<any>;
  @Output() public setNewPost = new EventEmitter<Array<any>>();

  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.audio.src = "../../assets/audio/avengers.mp3";
   }

  ngOnInit() {
  }

  public setPost(like: number, type: string, index: number): void {  
    like++;
    this.setNewPost.emit([like,index,type]);
  }

  public playAudio(){
    this.audio.volume = 0.1;
    this.audio.play();
      
  }

}
