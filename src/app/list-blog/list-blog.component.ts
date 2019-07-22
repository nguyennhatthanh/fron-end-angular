import { Component, OnInit, OnDestroy, } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})
export class ListBlogComponent implements OnInit, OnDestroy {
  blog: any;
  sub: Subscription;
  constructor(
    private youtubeService: YoutubeService,
    private activatedRouter: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const url = paramMap.get('url');
      this.blog = this.youtubeService.found(url);
    });
  }
  getSource() {
    const url = 'https://www.thatcatblog.com/' + this.blog.url;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
