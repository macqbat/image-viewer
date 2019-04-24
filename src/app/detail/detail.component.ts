import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Image, ImageService} from '../image.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  private sub: any;
  image: Image;
  id: number;
  edit = false;

  constructor(private imageService: ImageService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.imageService.getSingle(this.id).subscribe(image => this.image = image);
    });
  }

  changeName(event: any) {
    this.image.imageName = event.target.value;
    this.imageService.updateName(this.image.imageName, this.id);
  }

  delete() {
    this.imageService.delete(this.id).subscribe(ret => {
      if (ret) {
        this.router.navigate(['/']);
      }
    });
  }

  next() {
    this.imageService.next(this.id)
      .subscribe(newid => this.router.navigate(['/detail/' + newid]));
  }

  prev() {
    this.imageService.prev(this.id)
      .subscribe(newid => this.router.navigate(['/detail/' + newid]));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
