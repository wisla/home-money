import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
// import {Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Bill} from "../models/bill.model";

@Injectable()
export class BillService {
  constructor(private http: HttpClient) {}

  getBill(): Observable<Bill> {
    return this.http.get<Bill>('http://localhost:3000/bill');
      // .map(response: Response);
  }

  getCurrency(base: string = 'USD'): Observable<any> {
    return this.http.get(`http://api.fixer.io/latest?base=${base}`);
      // .map(response: Response);
  }
}
