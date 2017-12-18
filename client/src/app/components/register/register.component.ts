import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup; // variable: type, model driven form

    constructor(
      private formBuilder: FormBuilder
    ) {
      this.createForm()
    }

  // creating a function that creates a form
  createForm(){
    this.form = this.formBuilder.group({
      // passing objects, fields of form. This flexibility to create angular form control objects are not present in templateForms, directives take care of them
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    })
  }

  onRegisterSubmit(){
    console.log(this.form);
  }

  ngOnInit() {
  }

}
