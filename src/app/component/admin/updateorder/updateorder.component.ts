import { Component, OnInit } from '@angular/core';
import { UpdateorderService } from '../adminservices/updateorder.service';

@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.scss'],
})
export class UpdateorderComponent implements OnInit {





  constructor(private updateorder: UpdateorderService) {}



  changeorderstatus(){

  }


  ngOnInit(): void {
    this.changeorderstatus();

  }





}
