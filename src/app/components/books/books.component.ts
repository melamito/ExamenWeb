import { Component, OnInit } from '@angular/core';
import { ListaLibros } from '../../interfaces/libro';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  Libros=ListaLibros;
  constructor() { }

  ngOnInit(): void {
  }

}
