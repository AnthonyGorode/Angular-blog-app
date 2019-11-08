import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public posts: Array<any> = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, eaque. Aliquid alias hic error minus libero sapiente obcaecati necessitatibus deleniti, officia perferendis molestiae, quam esse totam quae excepturi. Eligendi, distinctio!',
      createdAt: new Date(),
      likeIts: 0
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, eaque. Aliquid alias hic error minus libero sapiente obcaecati necessitatibus deleniti, officia perferendis molestiae, quam esse totam quae excepturi. Eligendi, distinctio!',
      createdAt: new Date(),
      likeIts: 0
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, eaque. Aliquid alias hic error minus libero sapiente obcaecati necessitatibus deleniti, officia perferendis molestiae, quam esse totam quae excepturi. Eligendi, distinctio!',
      createdAt: new Date(),
      likeIts: 0
    }
  ]

  constructor(){ }

  setLikeItsPost(like: number, index: number) {
    this.posts[index].likeIts = like;
  }
}
