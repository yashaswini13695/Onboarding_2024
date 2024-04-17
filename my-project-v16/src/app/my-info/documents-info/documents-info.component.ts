import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/_material/material.module';

@Component({
  selector: 'app-documents-info',
  standalone: true,
  templateUrl: './documents-info.component.html',
  styleUrls: ['./documents-info.component.scss'],
  imports: [MaterialModule,CommonModule ]
})
export class DocumentsInfoComponent implements OnInit {
  folders:any = ['Folder1','Folder2','Folder3', 'Folder4','Folder5','Folder6']

  showDownloadButton:boolean[] = [];

  ngOnInit() {}
}
