import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-feature',
  templateUrl: './like-feature.component.html',
  styleUrls: ['./like-feature.component.css']
})
export class LikeFeatureComponent implements OnInit {
  likeCount= 0;
  isLiked = false;
  
  likeTheButton = () => {
    if(this.isLiked)
    this.likeCount--;
    else
    this.likeCount++;

    this.isLiked = !this.isLiked
    
  }
  constructor() { }

  ngOnInit(): void {
    

  }

}
