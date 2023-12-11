import { INewsMarvel } from 'src/types/INews';
import { MarvelService } from '../../services/marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  marvelData: INewsMarvel[] = [];

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.marvelService.getNews().subscribe((data) => {
      this.marvelData = data.data.results;
      console.log(this.marvelData);
    });
  }
}
