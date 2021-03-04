import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  onSubmit() {
    if (
      this.form.controls.email.value === 'abc' &&
      this.form.controls.password.value === 'abc'
    ) {
      this.presentToast('Successfully logged in. 😊');
      this.router.navigate(['/landing']);
    } else {
      const msg = 'User name password issue 😭';
      this.presentToast(msg);
    }
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }
}
