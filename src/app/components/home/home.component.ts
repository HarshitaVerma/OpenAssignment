import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** Lower resolution settings starts */
  thousand: string = '1000px';
  half: string = '500px';
  /** Lower resolution settings ends*/
  private arrTenure = [6, 12, 18, 24, 30];
  private emiAmount;
  private objCalc = {
    income: 10000,
    expense: 0,
    tenure: this.arrTenure[0],
    loan: false,
    emi: null
  };
  /**
   * Method to calculate Loan Amount and EMI
   */
  loanAmount() {
    let principal = this.objCalc.income - this.objCalc.expense;
    let interest = 10 / 100 / 12;
    let payments = this.objCalc.tenure * 12;
    let x = Math.pow(1 + interest, payments);
    let monthly = (principal * x * interest) / (x - 1);
    this.emiAmount = monthly;
    if (!isNaN(monthly) && monthly != Number.POSITIVE_INFINITY && monthly != Number.NEGATIVE_INFINITY) {
      return monthly * payments - principal;
    } else {
      return null;
    }
  }
}
