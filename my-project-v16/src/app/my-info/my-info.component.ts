import { Component } from '@angular/core';
import { MaterialModule } from '../_material/material.module';
import { PersonalInfoComponent } from '../my-info/personal-info/personal-info.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-info',
  standalone: true,
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss'],
  imports:[MaterialModule,PersonalInfoComponent,CommonModule]
})
export class MyInfoComponent {

  tabs:any = ['Personal','Training','Documents','Notes','Leaves','Pay Info','Benefits',]

}
