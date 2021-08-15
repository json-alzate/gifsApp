import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // ! = not null operator (Le digo a typescript que estoy seguro de que el operador no va a ser nulo)
  // tiparlo con HTMLInputElement permite identificar las propiedades y eventos (value, focus, etc)
  @ViewChild('textToSearch') textToSearch!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService
  ) { }

  ngOnInit(): void {
  } 

  // si se recibe el evento de tipo keyboardEvent y se imprime en consola, se puede saber que tecla se presiona

  search() {
    const query = this.textToSearch.nativeElement.value;
    console.log('event ', query);
    this.gifsService.onSearch(query);
    this.textToSearch.nativeElement.value = '';
  }


}
