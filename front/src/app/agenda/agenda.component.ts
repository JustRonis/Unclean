import { Component, OnInit } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-agenda',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  template:   `<ejs-schedule> </ejs-schedule>`
})
export class AgendaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
