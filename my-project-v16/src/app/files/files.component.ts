import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../_services/jsonData.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent  implements OnInit {
  documents: any[] = [];
  groupedContacts:any;
  showDownloadIcon: { [key: number]: boolean } = {};
  showOffice:boolean = false;
  showPersonal:boolean = false;

  constructor(private jsonDataService: JsonDataService) { }

  ngOnInit(): void {
    this.jsonDataService.getFilesList().subscribe((res) => { 
      this.documents = res

      this.groupedContacts = this.jsonDataService.getGroupedContacts(res);
    })
  }

  downloadPdf(pdfUrl:any,pdfName:any) {
    // You can implement the download logic here
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', pdfName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
