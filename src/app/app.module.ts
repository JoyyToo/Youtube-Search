import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { youTubeSearchInjectables } from './youtube-search/you-tube-search.injectables';
import { SearchboxComponent } from './youtube-search/searchbox.component';
import { SearchresultComponent } from './youtube-search/searchresult.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeSearchComponent,
    SearchboxComponent,
    SearchresultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
