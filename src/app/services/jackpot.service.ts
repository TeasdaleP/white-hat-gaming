import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Jackpot } from "../ngrx/jackpot/jackpot.model";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class JackpotService {

    constructor(private http: HttpClient) { }

    getJackpots$(): Observable<Array<Jackpot>> {
        return this.http.get<Array<Jackpot>>(`${environment.baseUrl}/jackpots.php`);
    }
}