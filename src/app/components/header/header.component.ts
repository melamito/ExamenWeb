import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links = [
    { title: 'Home', fragment: '' },
    { title: 'Libros', fragment: 'libros' },
    { title: 'Quejas', fragment: 'quejas' }
  ];
  

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
