import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaymentRecieveModel } from 'src/app/shared/model/PaymentReciept.model';
import { ReferenceDetailViewModel } from '../../shared/model/PaymentReciept.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  frmGroup!: FormGroup;
  model = new PaymentRecieveModel();
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
  }
  formInit() {
    this.frmGroup = this.fb.group({
   

    });
  }

  onSubmit() { }
  onAddItem(){
    this.model.Referencee.push(new ReferenceDetailViewModel());
  }
}
