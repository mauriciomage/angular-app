import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.interface';


@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() selectedTodo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public sendTodo(e): void {
    this.selectedTodo.emit(this.todo);
  }

}
