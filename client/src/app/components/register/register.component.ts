import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup; // creating form of formGroup type

    constructor(
      private formBuilder: FormBuilder
    ) {
      this.createForm()
    }

  // creating a function that creates a form
  createForm(){
    this.form = this.formBuilder.group({
      // passing objects, fields of form. This flexibility to create angular form control objects are not present in templateForms, directives take care of them
      email: '',
      username: '',
      password: '',
      confirm: ''
    })
  }

  onRegisterSubmit(){
    console.log(this.form);
  }

  ngOnInit() {
  }

}
