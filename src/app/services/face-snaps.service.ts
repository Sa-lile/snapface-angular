import { Injectable } from '@angular/core';
import { FaceSnap } from '../model/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Sakura',
      description: 'Ma meilleure saison au Japon !',
      imageUrl: '../assets/images/sakura.jpg',
      createdDate: new Date(),
      snaps: 150,
      location: 'Japon',
    },
    {
      id: 2,
      title: 'Sushi plateau',
      description: 'Le plateau de sushi',
      imageUrl: '../assets/images/sushi_plateau.jpg',
      createdDate: new Date(),
      snaps: 0,
    },
    {
      id: 3,
      title: 'Tokyo tower',
      description: 'Le symbole de Tokyo !',
      imageUrl: '../assets/images/tokyo_tower.jpg',
      createdDate: new Date(),
      snaps: 40,
      location: 'Japon',
    },
    {
      id: 4,
      title: 'Promenade avec Yukata',
      description: 'Promenade avec Yukata',
      imageUrl: '../assets/images/kimono.jpg',
      createdDate: new Date(),
      snaps: 150,
      location: 'Japon',
    },
    {
      id: 5,
      title: 'Voyage en croisière',
      description: 'Le paysage en croisière me manque...',
      imageUrl: '../assets/images/cruiseship.jpg',
      createdDate: new Date(),
      snaps: 0,
    },
    {
      id: 6,
      title: 'Santorin, en Grèce',
      description: 'Ma visite préférée en croisière',
      imageUrl: '../assets/images/santorini.jpg',
      createdDate: new Date(),
      snaps: 40,
      location: 'Japon',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
}

}
