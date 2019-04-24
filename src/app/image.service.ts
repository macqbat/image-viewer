import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

export class Image {
  id: number;
  imageName: string;
  fileName: string;
}

const imagesArray = [
  {id: 2, imageName: 'file 2', fileName: '20585296_1_1280x1024_kazimierz-2-pokojemiejsce-postojowe-mpec-krakow.jpg'},
  {
    id: 3,
    imageName: 'file 3',
    fileName: '20585296_2_1280x1024_kazimierz-2-pokojemiejsce-postojowe-mpec-dodaj-zdjecia.jpg'
  },
  {
    id: 4,
    imageName: 'file 4',
    fileName: '20585296_2_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-dodaj-zdjecia_rev018.jpg'
  },
  {
    id: 5,
    imageName: 'file 5',
    fileName: '20585296_3_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-mieszkania_rev018.jpg'
  },
  {
    id: 6,
    imageName: 'file 6',
    fileName: '20585296_4_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-sprzedaz_rev018.jpg'
  },
  {
    id: 7,
    imageName: 'file 7',
    fileName: '20585296_5_1280x1024_kazimierz-2-pokojemiejsce-postojowe-mpec-malopolskie.jpg'
  },
  {
    id: 8,
    imageName: 'file 8',
    fileName: '20585296_6_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-_rev018.jpg'
  },
  {id: 9, imageName: 'file 9', fileName: '20585296_7_1280x1024_kazimierz-2-pokojemiejsce-postojowe-mpec-.jpg'},
  {
    id: 10,
    imageName: 'file 10',
    fileName: '20585296_7_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-_rev018.jpg'
  },
  {id: 11, imageName: 'file 11', fileName: '20585296_8_1280x1024_kazimierz-2-pokojemiejsce-postojowe-mpec-.jpg'},
  {
    id: 12,
    imageName: 'file 12',
    fileName: '20585296_8_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-_rev018.jpg'
  },
  {id: 13, imageName: 'file 13', fileName: '20585296_9_1280x1024_kazimierz-2-pokojemiejsce-postojowe-mpec-.jpg'},
  {
    id: 14,
    imageName: 'file 14',
    fileName: '20585296_9_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-_rev018.jpg'
  },
  {
    id: 15,
    imageName: 'file 15',
    fileName: '20585296_10_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-_rev018.jpg'
  },
  {
    id: 16,
    imageName: 'file 16',
    fileName: '20585296_11_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-_rev018.jpg'
  },
  {
    id: 17,
    imageName: 'file 17',
    fileName: '20585296_12_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-_rev018.jpg'
  },
  {id: 18, imageName: 'file 18', fileName: '20585296_13_1280x1024_kazimierz-2-pokojemiejsce-postojowe-mpec-.jpg'},
  {
    id: 19,
    imageName: 'file 19',
    fileName: '20585296_13_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-_rev018.jpg'
  },
  {id: 20, imageName: 'file 20', fileName: '20585296_14_1280x1024_kazimierz-2-pokojemiejsce-postojowe-mpec-.jpg'},
  {
    id: 21,
    imageName: 'file 21',
    fileName: '20585296_14_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-_rev018.jpg'
  },
  {
    id: 22,
    imageName: 'file 22',
    fileName: '20585296_15_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-_rev018.jpg'
  },
  {
    id: 23,
    imageName: 'file 23',
    fileName: '20585296_16_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-_rev018.jpg'
  },
  {
    id: 24,
    imageName: 'file 24',
    fileName: '20585296_17_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-_rev018.jpg'
  },
  {
    id: 25,
    imageName: 'file 25',
    fileName: '20585296_18_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-_rev018.jpg'
  },
  {
    id: 26,
    imageName: 'file 26',
    fileName: '20585296_19_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-_rev018.jpg'
  },
  {id: 27, imageName: 'file 27', fileName: '20585296_20_1280x1024_kazimierz-2-pokojemiejsce-postojowe-mpec-.jpg'},
  {
    id: 28,
    imageName: 'file 28',
    fileName: '20585296_20_1280x1024_okazja-kazimierz-2-pokojemiejsce-postojowe-mpec-_rev018.jpg'
  }
];


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images: Image[];

  constructor() {
  }

  getList(): Observable<Image[]> {
    if (!this.images) {
      this.images = imagesArray;
    }
    return of(this.images);
  }

  getSingle(id: number): Observable<Image> {
    return this.getList().pipe(map(images => images.filter(image => image.id === id)[0]));
  }

  updateName(newName: string, id: number): Observable<boolean> {
    return this.getList().pipe(
      map(images => {
        let len = images.length;
        while (len--) {
          if (images[len].id === id) {
            images[len].imageName = newName;
            return true;
          }
        }
        return false;
      }));
  }

  delete(id: number): Observable<boolean> {
    return this.getList().pipe(
      map(images => {
        let len = images.length;
        while (len--) {
          if (images[len].id === id) {
            images.splice(len, 1);
            this.images = images;
            return true;
          }
        }
        return false;
      }));
  }

  next(id: number): Observable<number> {
    return this.getList().pipe(
      map(images => {
        let len = images.length;
        while (len--) {
          if (images[len].id === id) {
            const newind = len + 1 >= images.length ? 0 : len + 1;
            return +images[newind].id;
          }
        }
        return +images[0].id;
      }));
  }

  prev(id: number): Observable<number> {
    return this.getList().pipe(
      map(images => {
        let len = images.length;
        while (len--) {
          if (images[len].id === id) {
            const newind = len - 1 < 0 ? images.length - 1 : len - 1;
            return +images[newind].id;
          }
        }
        return +images[0].id;
      }));
  }
}
