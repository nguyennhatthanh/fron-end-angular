import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { BlogComponent } from './blog/blog.component';
import { ListBlogComponent } from './list-blog/list-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlayerComponent,
    YoutubePlaylistComponent,
    BlogComponent,
    ListBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
