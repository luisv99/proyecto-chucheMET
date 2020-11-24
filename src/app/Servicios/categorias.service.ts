import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



export interface Category {
   name: string; 
  }


@Injectable({
  providedIn: 'root'
})


export class CategoriasService {
  private categoriesCollection: AngularFirestoreCollection<Category>;
  categories: Observable<Category[]>;

  private categoryDoc: AngularFirestoreDocument<Category>;

  constructor(private afs: AngularFirestore) { 
    this.categoriesCollection = this.afs.collection<Category>('categorias');
    this.categories = this.categoriesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Category;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listaCategory(){
    return this.categories;
  }

  agregarCategory(category: Category) {
    this.categoriesCollection.add(category);
  }

  eliminarCategory(category){
    this.categoryDoc= this.afs.doc<Category>(`categorias/${category.id}`);
    this.categoryDoc.delete();
  }

  editarCategory(category){
    this.categoryDoc= this.afs.doc<Category>(`categorias/${category.id}`);
    this.categoryDoc.update(category);
  }



}
