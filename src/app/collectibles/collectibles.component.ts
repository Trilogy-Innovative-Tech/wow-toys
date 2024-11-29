import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-collectibles',
  templateUrl: './collectibles.component.html',
  styleUrl: './collectibles.component.css'
})
export class CollectiblesComponent implements OnInit{
    ngOnInit(): void {
      const element = document.getElementById('header');
      if (element) {
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    }

}
