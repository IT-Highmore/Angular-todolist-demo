import { Component, OnInit } from '@angular/core';
import { TodoService } from '../providers/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  todo: Todo;

  constructor(private route: ActivatedRoute, private todoServe: TodoService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todo = this.todoServe.getTodo(id);
  }

  goBack() {
    history.back();
  }

}
