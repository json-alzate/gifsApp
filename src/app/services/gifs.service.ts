import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { GifsHttpResponse } from '../models/gifs-response.model';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];

  public results: any[] = [];

  constructor(
    private httClient: HttpClient
  ) {

    this._history = JSON.parse(localStorage.getItem('gifsApp_history')!) || [];
    this.results = JSON.parse(localStorage.getItem('gifsApp_lastResults')!) || [];

  }

  get getHistory() {
    return [...this._history];
  }

  onSearch(query: string = '') {
    if (query.length === 0) {
      return;
    }

    query = query.toLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.slice(0, 10);
      localStorage.setItem('gifsApp_history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
    .set('api_key', environment.apiKeyGiphy)
    .set('limit', '10')
    .set('q', query)

    this.httClient.get<GifsHttpResponse>(`${environment.urlApiGiphy}/search`, {params}).subscribe(data => {
      this.results = data.data;
      localStorage.setItem('gifsApp_lastResults', JSON.stringify(this.results));
    });
  }

}
