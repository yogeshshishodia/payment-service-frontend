import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:8080/api/transactions';  // Adjust this to your backend API endpoint

  constructor(private http: HttpClient) { }

  // Method to fetch the transaction history for a specific user
  getTransactionHistory(username: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/history/${username}`, {
      params: { senderUsername: username }
    });
  }
}
