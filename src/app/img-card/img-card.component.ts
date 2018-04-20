import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {
  private catImage: CatImage = {
    message: 'First Progressive Web app',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  public src: string;

  constructor() { }

  ngOnInit() {
    this.generateSrc();
  }

  public generateSrc(): void {
    this.src = this.catImage.api + this.catImage.message + '?size=' + this.catImage.fontsize + '&ts=' + Date.now();
  }

}

export class CatImage {
  message: string;
  api: string;
  fontsize: number;
}
