import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Game } from "../ngrx/games/games.model";


@Injectable({
    providedIn: 'root'
})
export class GamesService {

    constructor(private http: HttpClient) { }

    getGames$(): Observable<Array<Game>> {
        return this.http.get<Array<Game>>(`${environment.baseUrl}/games.php`);
    }
}