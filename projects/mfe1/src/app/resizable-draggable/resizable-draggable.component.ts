import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

/**
 * @title Basic Drag&Drop
 */
@Component({
  selector: 'app-resizable-draggable',
  templateUrl: './resizable-draggable.component.html',
  styleUrls: ['./resizable-draggable.component.css'],
})
export class ResizableDraggableComponent {
  constructor(private http: HttpClient) {

  }
  daletProducts = [
    'Dalet Flex',
    'Dalet Pyramid',
    'Dalet Galaxy',
    'Dalet Cube',
    'Dalet One Play',
  ];
  onDragDropSave(event:Event) {
    alert('hi')
    this.http.post('https://dalet-assignment-default-rtdb.firebaseio.com/postData.json', this.daletProducts).subscribe(responseData => {
      console.log(responseData)
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.daletProducts, event.previousIndex, event.currentIndex);
    // const data = localStorage.setItem("draggedItems", JSON.stringify(this.daletProducts))
    // console.log(localStorage.getItem("draggedItems"))
  }
}
