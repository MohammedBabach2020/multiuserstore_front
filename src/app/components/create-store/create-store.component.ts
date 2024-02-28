import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, animation } from '@angular/animations';
import { MatChipsModule } from '@angular/material/chips'
import { StoreService } from '../../services/store-service/store-service.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '../../models/Store';

@Component({
  selector: 'app-create-store',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule, MatButtonModule, CommonModule, MatChipsModule, HttpClientModule],
  templateUrl: './create-store.component.html',
  styleUrl: './create-store.component.css',
  providers: [StoreService],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1000ms ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('0ms ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class CreateStoreComponent {

  constructor(private storeService: StoreService, private router: Router) { }


  Store: Store = {
    id: 0,
    OwnerId: 0,
    name: '',
    description: '',
    categories: [],

  };
  public Categories: any[] = []

  store_name !: FormControl;
  store_description !: FormControl;



  fadeAnimation = animation([
    style({ opacity: '{{ start }}' }),
    animate('{{ time }}',
      style({ opacity: '{{ end }}' }))
  ],
    { params: { time: '1000ms', start: 0, end: 1 } });
  showNameField: boolean = true;
  showDescriptionField: boolean = false;

  showContent: boolean[] = [true, false, false]; // Array to store visibility state of each section
  show: any;


  contentIndex: number = 0;
  visible: boolean = false
  goNext() {

    this.contentIndex++;

    if (this.contentIndex == 2) {

      this.get_selected_categories()
    }

  }
  goPrevious() {

    this.contentIndex--;

    if (this.contentIndex == 2) {
      this.get_selected_categories()

    }

  }


  create() {
    this.router.navigate(['layout/dashboard']);
  }

  selected_categories: any[] = [];
  ngOnInit() {
    this.storeService.get_categories().subscribe(response => { this.Categories = response });
    this.store_name = new FormControl('');
    this.store_description = new FormControl('');
  }



  save_selected_categories() {

    var selected_chips: string[] = []

    Array.from(document.getElementsByClassName("mdc-evolution-chip--selected")).forEach((element) => {

      selected_chips.push((element as HTMLElement).innerText)
    })
    if (selected_chips.length > 0) {
      localStorage.setItem("selected_categories", JSON.stringify(selected_chips));
    }

    console.log(localStorage.getItem("selected_categories"));

  }



  async get_selected_categories() {


    var selected_chips = localStorage.getItem("selected_categories");
    if (selected_chips != null) {
      var selected_categories = JSON.parse(selected_chips);
      const l = document.getElementsByClassName("mdc-evolution-chip__action");
      for (const iterator of Array.from(l)) {
        console.log(iterator);

      }



    }



  }

}
