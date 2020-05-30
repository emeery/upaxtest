import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  autForm: FormGroup;
  switch = false;
  constructor(
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.setForm()
  }
  setForm() {
    this.autForm = this.formBuilder.group({
      email: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log('form', this.autForm.value)
  }
}
