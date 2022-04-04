import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
/**
 * @title Basic Drag&Drop
 */
@Component({
  selector: 'app-resizable-draggable',
  templateUrl: './resizable-draggable.component.html',
  styleUrls: ['./resizable-draggable.component.css'],
})
export class ResizableDraggableComponent {
  if(localStorage){
      
  }
  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
   const data =  localStorage.setItem("draggedItems",JSON.stringify(this.timePeriods))
   console.log(localStorage.getItem("draggedItems"))
  }
}
