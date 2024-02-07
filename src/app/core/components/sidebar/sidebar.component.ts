import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {
  selectedType: any;
  isDropdownVisible = false;
  loadedFile: any;
  addedComment: string = '';

  selectListOptions = [
    {
    name: 'Option 1'},
    {
      name: 'Option 1'
    }
  ]

  enteredNumberChanged(){}

  selectedOption(option: any){
    this.selectedType = option;
  }
  
  addTask(){}
  
  readFile($event: any){}

}

