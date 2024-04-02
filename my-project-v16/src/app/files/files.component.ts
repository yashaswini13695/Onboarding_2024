import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  documents: any[] = [
    { name: 'Resume', url: '../../assets/Yashaswini_NG_Resumen_2024.pdf' },
    // Add more documents as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}