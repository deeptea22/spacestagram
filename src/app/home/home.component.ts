import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
li:any;
  lis: any=[];
  like: boolean = false;
  safeURL: SafeResourceUrl
  constructor(private spinner: NgxSpinnerService,private _sanitizer: DomSanitizer,private http : HttpClient){ 
     this.safeURL="";
  }
  public likePicture(){
    this.like = !this.like;
    console.log(this.like)
  }
  public getSafeVideos(url:string): SafeResourceUrl{
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(url);
    return this.safeURL
  }
  ngOnInit(): void {
    this.spinner.show();

    this.http.get('https://api.nasa.gov/planetary/apod?api_key=N3cZOqMxo9Vrwm21xCDvsZuhm48cbWueQYkirRsU&start_date=2021-01-01&end_date=2021-01-31')
    .subscribe(Response => {
      if(Response){ 
        this.spinner.hide();
      }
      console.log(Response)
      this.lis=Response;
    });
  }
  }

