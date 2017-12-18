import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
// import {Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Bill} from "../models/bill.model";
import {BaseApi} from "../../../shared/core/base-api";

@Injectable()
export class BillService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  // getBill(): Observable<Bill> {
  //   return this.http.get<Bill>('http://localhost:3000/bill');
  //     // .map(response: Response);
  // }

  getBill(): Observable<Bill> {
    return this.get('bill');
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.put('bill', bill);
  }

  getCurrency(base: string = 'PLN'): Observable<any> {
    return this.http.get(`http://api.fixer.io/latest?base=${base}`);
      // .map(response: Response);
  }
}
