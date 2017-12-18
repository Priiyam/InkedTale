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
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ])],
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(35)
      ])],
      confirm: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ])]
    })
  }

  onRegisterSubmit(){
    console.log(this.form);
  }

  ngOnInit() {
  }

}
