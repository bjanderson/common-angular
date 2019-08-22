import { getArrayOfModels } from '@lernato/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../api';

export abstract class CrudService<T> {
  constructor(
    private api: ApiService,
    private url: string,
    private clazz: new (o?: Partial<T>) => T
  ) {}

  public getAll(): Observable<T[]> {
    return this.api
      .get(this.url)
      .pipe(map((response: any) => getArrayOfModels(this.clazz, response)));
  }

  public get(id: string): Observable<T> {
    const url = `${this.url}/${id}`;
    return this.api.get(url).pipe(map((response: any) => new this.clazz(response)));
  }

  public create(item: T): Observable<T> {
    return this.api.post(this.url, item).pipe(map((response: any) => new this.clazz(response)));
  }

  public update(item: T): Observable<T> {
    return this.api.put(this.url, item).pipe(map((response: any) => new this.clazz(response)));
  }

  public delete(item: T): Observable<void> {
    const url = `${this.url}/${(item as any).id}`;
    return this.api.delete(url);
  }
}
