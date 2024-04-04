import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

export interface Contact {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  constructor(private http: HttpClient) {}

  getEmployeeList(): Observable<any> {
    return this.http.get<any>('../jsonData/userList.json').pipe(
      map((data) => data)
    );
  }

  
  getFilesList(): Observable<any> {
    return this.http.get<any>('../jsonData/filesList.json').pipe(
      map((data) => data)
    );
  }

  getGroupedContacts(contacts: Contact[]): { letter: string, contacts: Contact[] }[] {
    const groupedContacts: { letter: string, contacts: Contact[] }[] = [];

    // Group contacts by the first letter of their name
    contacts.forEach(contact => {
      const firstLetter = contact.name.charAt(0).toUpperCase();
      const index = groupedContacts.findIndex(group => group.letter === firstLetter);
      if (index === -1) {
        groupedContacts.push({ letter: firstLetter, contacts: [contact] });
      } else {
        groupedContacts[index].contacts.push(contact);
      }
    });

    // Sort the groups alphabetically
    groupedContacts.sort((a, b) => a.letter.localeCompare(b.letter));

    return groupedContacts;
  }

  getCountryList() : Observable<any> {
    return this.http.get<any>('../jsonData/countryList.json').pipe(
      map((data) => data)
    );
  }
}