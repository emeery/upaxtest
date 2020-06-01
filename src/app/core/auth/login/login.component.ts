import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AutService } from '../aut.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  autForm: FormGroup;
  switch = false;
  @ViewChild('email', {static: true}) email:any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AutService
  ) { }

  ngOnInit(): void {
    this.email.nativeElement.focus();
    this.setForm()
  }
  setForm() {
    this.autForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit() {
    this.authService.onLogin(
      this.autForm.value.email,
      this.autForm.value.password
    )
  }
}
