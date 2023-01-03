import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  todos: Todo[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: Todo[]) => {
      this.todos = data;
    });
  }

  public onSelectedTodo(e): void {
    console.log(e);
  }

}
