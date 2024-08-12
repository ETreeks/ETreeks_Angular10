import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imageSource = new BehaviorSubject<string | null>(null);
  currentImage = this.imageSource.asObservable();

  updateImage(newImage: string): void {
    this.imageSource.next(newImage);
  }
}
