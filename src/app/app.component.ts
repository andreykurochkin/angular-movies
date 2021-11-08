import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheaters = [{
      title: 'Spider-Man',
      releaseDate: new Date(),
      price: 1400.99
    },
    {
      title: 'Moana',
      releaseDate: new Date('2014-11-14'),
      price: 300.99
    },
    {
      title: 'Spider-Man',
      releaseDate: new Date(),
      price: 1400.99
    },
    {
      title: 'Moana',
      releaseDate: new Date('2014-11-14'),
      price: 300.99
    },
    {
      title: 'Moana',
      releaseDate: new Date('2014-11-14'),
      price: 300.99
    },
    {
      title: 'Spider-Man',
      releaseDate: new Date(),
      price: 1400.99
    },
    {
      title: 'Moana',
      releaseDate: new Date('2014-11-14'),
      price: 300.99
    }];
    this.moviesFutureReleases = []; // [{
    //   title: 'Avengers',
    //   releaseDate: new Date(),
    //   price: 1234.00
    // },
    // {
    //   title: 'Die Hard',
    //   releaseDate: new Date('2021-01-12'),
    //   price: 123.22
    // }];
  }
  title = 'angular-movies';
  moviesInTheaters: any;
  moviesFutureReleases: any;
  display = true;
}
