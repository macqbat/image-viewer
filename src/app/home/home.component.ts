import {Component, OnInit} from '@angular/core';
import {Image, ImageService} from '../image.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageList: Image[];

  constructor(private imageService: ImageService,
              private router: Router) {
  }

  ngOnInit() {
    this.imageService.getList().subscribe(images => {
      this.imageList = images;
    });
  }

  expandImage(image: Image) {
    this.router.navigate(['/detail/' + image.id]);
  }
}
