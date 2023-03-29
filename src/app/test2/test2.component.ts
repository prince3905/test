import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const scripts = [
      '../assets/libs/jquery/jquery.min.js',
      '../assets/app-style-switcher.js',
      '../assets/feather.min.js',
      '../assets/libs/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js',
      '../assets/js/sidebarmenu.js',
      '../assets/custom.min.js',
      '../assets/libs/bootstrap/js/bootstrap.min.js'
    ];

    for (const script of scripts) {
      const scriptElement = this.renderer.createElement('script');
      scriptElement.src = script;
      scriptElement.type = 'text/javascript';
      scriptElement.async = true;
      this.renderer.appendChild(document.body, scriptElement);
    }
  }
}
