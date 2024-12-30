import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private jsonUrl = 'assets/json/db/cli.json';

  constructor(private http: HttpClient) {}

  getUniqueCategories(): Observable<any[]> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map((data) => {
        
        const categoriesMap = new Map();
        data.data.forEach((item: any) => {
          const category = item.category;
          if (!categoriesMap.has(category.uuid)) {
            categoriesMap.set(category.uuid, category);
          }
        });
        return Array.from(categoriesMap.values());
      })
    );
  }

  getCategory(uuid: string): Observable<any[]> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map((data) => {
        return data.data.filter((item: any) => item.category.uuid === uuid);
      })
    );
  }

  getCommands(): Observable<any[]> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map((data) => {
        return data.data.map((item: any) => {
          const { category, ...rest } = item;
          return rest;
        });
      })
    );
}

  
}
