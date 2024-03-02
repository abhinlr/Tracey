import { Component } from '@angular/core';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-create-log',
  templateUrl: './create-log.component.html',
  styleUrls: ['./create-log.component.css']
})
export class CreateLogComponent {
  formData: any = {};

  constructor(public logsService: LogsService) {
    // Initialize formData with current time and date
    const now = new Date();
    this.formData.time = this.formatTime(now);
    this.formData.date = this.formatDate(now);
  }

  private formatTime(date: Date): string {
    return date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');
  }

  private formatDate(date: Date): string {
    return date.toISOString().slice(0, 10);
  }

  createLog(formData:any){
    this.logsService.createNewLog(formData);
  }
}
