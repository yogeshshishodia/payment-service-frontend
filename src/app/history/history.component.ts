import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  transactions: any[] = [];  // Array to store the transactions
  username: string = '';     // Username to search transactions for
  displayedColumns: string[] = ['id', 'amount', 'senderUsername', 'senderBalance','receiverBalance', 'receiverUsername', 'date']; // Columns to display in the table

  constructor(
    private transactionService: TransactionService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // Optionally load transaction history for a logged-in user
    // this.username = 'loggedInUsername'; // Replace with actual logic to get logged-in username
    // this.loadTransactionHistory();
  }

  loadTransactionHistory(): void {
    if (this.username.trim()) {
      this.transactionService.getTransactionHistory(this.username).subscribe(
        (data) => {
          this.transactions = data;
          console.log('Transactions:', this.transactions);  // Log to verify data
        },
        (error) => {
          console.error(error);
          this.snackBar.open('Failed to load transaction history. Try again!', 'Close', { duration: 3000 });
        }
      );
    } else {
      this.snackBar.open('Please enter a valid username.', 'Close', { duration: 3000 });
    }
  }
  
}
