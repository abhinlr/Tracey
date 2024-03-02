import { Component, OnInit } from '@angular/core';
import { Log } from '../../logs.model';
import { Observable } from 'rxjs';

import { LogsService } from 'src/app/services/logs.service';
@Component({
  selector: 'app-list-log',
  templateUrl: './list-log.component.html',
  styleUrls: ['./list-log.component.css'],
})
export class ListLogComponent implements OnInit {
  logs: Log[] = [];

  constructor(public logsService: LogsService) {}

  ngOnInit() {
    this.fetchAllLogs();
  }

  fetchAllLogs() {
    this.logsService.getAllLogs().subscribe(
      (logs: Log[]) => {
        this.logs = logs;
      },
      (error) => {
        console.error('Error fetching logs:', error);
      }
    );
  }
}
