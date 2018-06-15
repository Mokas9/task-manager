import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks = [];

  input = '';
  newValue = '';

  title = 'app';

  // localStorage.setItem('tasks', JSON.stringify(this.tasks));

  constructor() { }

  ngOnInit() {
  }


  onClickadd(): void {
    this.tasks.push({task: this.input, edit: false});
    this.input = '';
  }

  onClickedit(index) {
    this.tasks[index].edit = true;
  }

  onClickdel(index) {
    this.tasks.splice(index, 1);
  }

  onClickdone(index, newValue) {
    this.tasks[index].task = newValue;
    this.tasks[index].edit = false;
    this.newValue = '';
  }

}
