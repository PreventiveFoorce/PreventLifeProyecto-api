import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  irDonaciones(){
    if(sessionStorage.getItem('key')==null){
      const ok = confirm('Debes iniciar sesión para poder ver tus donaciones');
    if(ok){

      window.location.replace(`../login`)
    }
    }
    else{
      window.location.replace(`../admin/donaciones`);
    }



  }

}
