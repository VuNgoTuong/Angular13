import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name='Vũ';
  public age= 23;
  public mau=['xanh','vàng','đỏ','lục','lam'];
  public mau1=[{ten:'xanh',english:'green'},
        {ten:'vàng',english:'yellow'},
        {ten:'đỏ',english:'red'},
        {ten:'lục',english:'Luc'},
        {ten:'lam',english:'blue'}];
  constructor() { }
  public district:any[]=[];
  public cities = [{city:'chọn thành phố', district:[]} ,{ city: 'Quảng Nam', district:['Thành Phố Hội An','Thành Phố Tam Kỳ']},{city:'TP HCM', district:['quan1','quan 2']}];
  public ngOnInit(): void {
    console.log('cities =',this.cities);
  }
  public resetName():void{
      console.log('resetName');
      this.name='Vũ';
  }
  public changeCity(event:any){
    const city = event.target.value;
    console.log('event',city);
    const search = this.cities.filter(data=>data.city === city);
    console.log('search',search);
    if (search && search.length>0){
      this.district=search[0].district;
    }
}
}
