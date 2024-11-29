import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-econova',
  templateUrl: './econova.component.html',
  styleUrl: './econova.component.css'
})
export class EconovaComponent implements OnInit{
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  ngOnInit(): void {
    const element = document.getElementById('header');
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

}
