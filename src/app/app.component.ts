import { Component } from '@angular/core';

class Post {
  private createdAt: Date;

  constructor(
    private title: string = title,
    private content: string = content,
    private likeIts: number = likeIts,
    private unlikeIts: number = unlikeIts
  ) 
  {
    this.createdAt = this.randomDate(new Date(2018,1,1), new Date());
  }

  private randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  public setLikeIts(likeIts: number): void {
    this.likeIts = likeIts;
  }

  public setUnlikeIts(unlikeIts: number): void {
    this.unlikeIts = unlikeIts;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public posts: Array<Post> = [
    new Post(
      "Les carottes sont cuites",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, eaque. Aliquid alias hic error minus libero sapiente obcaecati necessitatibus deleniti, officia perferendis molestiae, quam esse totam quae excepturi. Eligendi, distinctio!",
      0,
      1
    ),
    new Post(
      "Mon poisson rouge s'est noyé",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, eaque. Aliquid alias hic error minus libero sapiente obcaecati necessitatibus deleniti, officia perferendis molestiae, quam esse totam quae excepturi. Eligendi, distinctio!",
      0,
      0
    ),
    new Post(
      "Avengers... Rassemblement ! <i class='fas fa-music'></i> taaatatatataaaataaataaataaa... <i class='fas fa-music'></i> ",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, eaque. Aliquid alias hic error minus libero sapiente obcaecati necessitatibus deleniti, officia perferendis molestiae, quam esse totam quae excepturi. Eligendi, distinctio!",
      1,
      0
    )
  ]

  constructor(){ }

  setLikeOrUnlikePost(like: number, index: number, type: string): void {
    type === 'like' ? (
      this.posts[index].setLikeIts(like)
    ) : (     
      this.posts[index].setUnlikeIts(like)
    );
  }
}
