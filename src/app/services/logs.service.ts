import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { of } from 'rxjs'
import { Log } from '../logs.model';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  logs: Log[] = [];

  constructor(private http: HttpClient) { }

  createNewLog(data:any){
    this.logs.push(data);
  }

  getAllLogs(): Observable<Log[]> {
    return this.http.get<Log[]>('../../assets/logs/logs.json').pipe(
      map(logs => {
        this.logs = logs;
        return [...logs];
      })
    );
  }

  getLogDetails(id:any):Observable<any>{
    let logData = this.logs.find(log => log.id == id);
    return of(logData);
  }
}
