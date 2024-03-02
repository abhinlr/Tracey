import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogsService } from 'src/app/services/logs.service';
import { FormsModule } from '@angular/forms';
import { Time } from '@angular/common';
@Component({
  selector: 'app-log-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './log-details.component.html',
  styleUrl: './log-details.component.css'
})
export class LogDetailsComponent implements OnInit{

  id: string | null;
  logDetails:{id:any,title:string,description:string,time:string,date:Date}={
    id: null,
    title: '',
    description: '',
    time: '',
    date: new Date()
  };

  constructor(private route: ActivatedRoute,
    private logsService: LogsService){
      this.id = null;
  }



  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getLogDetails();
  }

  getLogDetails(){
    this.logsService.getLogDetails(this.id)
      .subscribe(data=>{
        this.logDetails = data;
      })
  }

  updateLog(){
    console.log(this.logDetails);

  }
}
