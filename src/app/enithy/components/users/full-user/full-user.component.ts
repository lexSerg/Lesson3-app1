import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/enithy/models/User';
import { DataService } from 'src/app/enithy/services/data.service';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent{
  fullUser : User;
  constructor(private dataService : DataService, private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.params.subscribe(valueId =>this.dataService.getUserById(valueId.id).subscribe(value =>
      this.fullUser = value))
  }

}
