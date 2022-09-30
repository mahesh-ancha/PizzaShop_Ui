import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show=[
    {'id':1,'description':'Mushroom Pepper','p':200,'image':'/assets/img/mushroom_pepper.jpg'},
    {'id':2,'description':'Tomato Mozzarella','p':200,'image':'/assets/img/tomato_mozzarella.jpg'},
    {'id':3,'description':'Flying jacob','p':200,'image':'/assets/img/pexels-engin-akyurt-1435903.jpg'},
    {'id':4,'description':'Kentucky','p':200,'image':'/assets/img/pexels-engin-akyurt-2260555.jpg'},
    {'id':5,'description':'Pescatore','p':200,'image':'/assets/img/pexels-pablo-macedo-845811.jpg'},
    {'id':6,'description':'Margarita','p':200,'image':'/assets/img/margarita.jpg'},
    {'id':7,'description':'Barcelona','p':200,'image':'/assets/img/pexels-pablo-macedo-845812.jpg'},
    {'id':8,'description':'Vegetarian pizza','p':200,'image':'/assets/img/pexels-victor-miyata-3682838.jpg'},
    {'id':9,'description':'Pepperoni','p':200,'image':'/assets/img/pepperoni.jpg'},
    {'id':10,'description':'Paneer pizza','p':200,'image':'/assets/img/paneer.jpg'},
  ]

}
