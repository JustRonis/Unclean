import { Component,Input, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-modal-dev',
  templateUrl: './modal-dev.component.html',
  styleUrls: ['./modal-dev.component.css']
})
export class ModalDevComponent implements OnInit {

  @Input() id: any;

  constructor() { }

  ngOnInit(): void {
  }

  
  troll(){     
    let imagem = document.getElementById("imagem")
    imagem!.innerHTML = "<img src='../../assets/img/troll.jpeg'/>"
    function teste1(){
      setTimeout(() =>{
        imagem!.innerHTML = ''
      }, 2000)
    }
    teste1()
  }

 
}



 