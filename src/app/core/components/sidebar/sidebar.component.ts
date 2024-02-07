import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeLast } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {
  selectedType: any;
  isDropdownVisible = false;
  addedCipher = true
  showNumberTypeSelection = true;
  selectListOptions = [{
    name: 'Line 1'
  }]
  addTaskOnEnter($event: any){
  }
  enteredNumberChanged(){}
  cipherTypes = [{
    name: 'name'
  }]
  enteredTasks = [{
    info: '',
    cipherType: '', 
  }];
  selectedOption(option: any){
    this.selectedType = option;
  }
  addTask(){}
  loadedFile: any;
  readFile($event: any){}
  addedComment: any;
  trackTask: any;
  deleteTask(event: any){}
  pendingTasksArray=[];
  results=[{
    taskInfo: '',
    queryInfo: '',
    cipherType: '',
    queryId: ''
  }]
  trackResult: any;
  restartAll(){}
  deleteItem(){}
}

