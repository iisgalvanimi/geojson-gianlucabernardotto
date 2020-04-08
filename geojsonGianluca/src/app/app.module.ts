import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule} from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyD04eCGF66xz5zttWwqDYe39E8v1aHNyX8'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
