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
  @Output() public setNewPost = new EventEmitter<Array<number>>();

  constructor() { }

  ngOnInit() {
  }

  public setPost(like: number, type: string, index: number): void {
    type === "like" ? like++ : like--;
    this.setNewPost.emit([like,index]);
  }
}
