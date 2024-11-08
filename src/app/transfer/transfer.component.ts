import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transferForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.transferForm = this.fb.group({
      senderUsername: ['', Validators.required],
      receiverUsername: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.transferForm.valid) {
      const formValue = this.transferForm.value;
      this.http.post('http://localhost:8080/api/transactions/transfer', null, {
        params: {
          senderUsername: formValue.senderUsername,
          receiverUsername: formValue.receiverUsername,
          amount: formValue.amount
        },
        responseType: 'text'
      }).subscribe(
        (response) => {
          this.snackBar.open(response, 'Close', { duration: 3000 });
        },
        (error) => {
          this.snackBar.open('Transaction failed. Try again!', 'Close', { duration: 3000 });
        }
      );
    }
  }
}
