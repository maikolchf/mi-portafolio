import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from '../../environments/environment'

firebase.initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {
  storageRef = firebase.app().storage().ref();

  constructor() { }

  async subirImagen( nombreCarpeta: string,NombreImagen: string, img:any){
    try
    {
      let respuesta = await this.storageRef.child(nombreCarpeta+'/'+NombreImagen).putString(img, 'data_url');
      return await respuesta.ref.getDownloadURL();
    }
    catch(error)
    {
      return null;
    }
  }
}
