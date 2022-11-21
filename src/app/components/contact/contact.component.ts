import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  FormData!: FormGroup;
  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Subject: new FormControl(''),
      Message: new FormControl('', [Validators.required])
    })
  }

  onSubmit(FormData: FormGroup) {
    console.log(FormData)
    this.contact.postMessage(FormData)
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Subject: new FormControl(''),
      Message: new FormControl('', [Validators.required])
    })
  }

}
