import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Input() urlProfileImage: string = "../../../assets/ignore-assets/user-01.jpeg";
  @Input() userName: string = "Carmila";
  @Input() subtitle: string = "Legenda Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  @Input() urlPostImage: string = "../../../assets/ignore-assets/jardinagem.jpg";

  faThumbsUp = faThumbsUp;
  faComment = faComment;
  faShare = faShare;

}
