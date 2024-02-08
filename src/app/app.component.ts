import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask/lib/ngx-mask.directive';
import { NgxMaskPipe } from 'ngx-mask/lib/ngx-mask.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, MatToolbarModule, RouterOutlet],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pasquali-front';
}
