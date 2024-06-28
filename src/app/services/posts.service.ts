import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postList: Post[] = [
    {
      "urlProfileImage": "../../../assets/ignore-assets/user-01.jpeg",
      "userName": "Carmila",
      "subtitle": "Legenda Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "urlPostImage": "../../../assets/ignore-assets/jardinagem.jpg"
    },
    {
      "urlProfileImage": "../../../assets/ignore-assets/user-01.jpeg",
      "userName": "Carmila",
      "subtitle": "Legenda Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "urlPostImage": "../../../assets/ignore-assets/xadrez.jpg"
    },
    {
      "urlProfileImage": "../../../assets/ignore-assets/user-01.jpeg",
      "userName": "Carmila",
      "subtitle": "Legenda Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "urlPostImage": "../../../assets/ignore-assets/violão.jpg"
    }
  ]

  constructor() { }

  getPosts() {
    return this.postList;
  }

}
