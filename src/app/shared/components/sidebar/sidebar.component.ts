import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  get getHistory(){
    return this.gifsService.getHistory;
  }

  constructor(
    private gifsService: GifsService
  ) { }

  ngOnInit(): void {
  }

  applyHistorySearch(query: string) {
    this.gifsService.onSearch(query);
  }

}
