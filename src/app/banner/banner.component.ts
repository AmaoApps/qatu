import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss', './../../../node_modules/swiper/swiper-bundle.css']
})
export class BannerComponent implements OnInit, AfterViewInit {

  constructor() { }

  mySwiper: Swiper;
  listaBanner: String[] = [
    'assets/banners/banner_1.jpg',
    'assets/banners/banner_2.jpg',
    'assets/banners/banner_3.jpg'
  ];

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    Swiper.use([Navigation, Pagination]);
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }

  

}
