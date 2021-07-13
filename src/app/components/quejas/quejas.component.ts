import { Component, OnInit } from '@angular/core';
import { ListaPAises } from '../../interfaces/pais';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent implements OnInit {

  Paises=ListaPAises;
  formulario: FormGroup=new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    pais: new FormControl('', [Validators.required]),
    obs: new FormControl('', [Validators.required])
  });

  constructor() { 
    this.buildForm();
  }

  

  ngOnInit(): void {
  }

  private buildForm() {
    this.formulario = new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      obs: new FormControl('', [Validators.required])
    });
  }

  save(event:Event){
    window.location.href="/gracias"
  }

}
