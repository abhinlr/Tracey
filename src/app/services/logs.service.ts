import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Log } from '../logs.model';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  logs: Log[] = [];

  constructor(private http: HttpClient) { }

  createNewLog(data:any){
    console.log(data);
  }

  getAllLogs(): Observable<Log[]> {
    return this.http.get<Log[]>('../../assets/logs/logs.json');
  }
}
