import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';
import { INewsMarvel } from 'src/types/INews';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  marvelData: INewsMarvel | null = null; // Inicializado como null

  private id: number = 0;

  constructor(
    private marvelService: MarvelService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = +value.get('id')!;
      this.getNewDetailAPI(this.id);
    });
  }

  getNewDetailAPI(id: number) {
    this.marvelService.getNewDetail(id).subscribe((data) => {
      this.marvelData = data.data.results[0];
      console.log(this.marvelData);

      this.setValuesToComponent();
    });
  }

  setValuesToComponent() {
    if (!this.marvelData) {
      return;
    }

    const { title, description, thumbnail } = this.marvelData;

    this.contentTitle = title;
    this.contentDescription = description;
    this.photoCover = `${thumbnail.path}.${thumbnail.extension}`;
  }
}
