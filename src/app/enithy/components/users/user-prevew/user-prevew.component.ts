import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../models/User';

@Component({
  selector: 'app-user-prevew',
  templateUrl: './user-prevew.component.html',
  styleUrls: ['./user-prevew.component.css']
})
export class UserPrevewComponent implements OnInit {
  @Input()
  user : User;
  constructor() { }

  ngOnInit(): void {
  }

}
