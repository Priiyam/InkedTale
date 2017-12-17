import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup; // creating form of formGroup type

  // creating a function that creates a form
  createForm(){
    this.form = this.formBuilder.group({
      // passing objects, fields of form
      email: '',
      username: '',
      password: '',
      confirm: ''
    })
  }

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm()
   }

  ngOnInit() {
  }

}
