import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { environment } from 'src/environments/environment';
import { GamesService } from './games.service';
import { Game } from '../ngrx/games/games.model';
import { v4 as uuidv4 } from 'uuid';


describe('Games Service', () => {
    let service: GamesService;

    const response: Game[] = [
        { 
            categories: ['one', 'two', 'three'],
            name: 'The best game ever',
            image: 'https://www.whitehatgaming.com/site/assets/files/1223/white_hat_gaming_logo.198x120.png',
            id: uuidv4()
        }
    ];

    let httpMock: HttpTestingController;
    let httpClient: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GamesService]
        });

        service = TestBed.inject(GamesService);
        httpMock = TestBed.inject(HttpTestingController);
        httpClient = TestBed.inject(HttpClient);
    });

    it('Service should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Should verify the HTTP call is of type GET', () => {
        let result;

        service.getGames$().subscribe((games) => {
            result = games;
        });

        const req = httpMock.expectOne(`${environment.baseUrl}/games.php`);
        expect(req.request.method).toEqual('GET');
        expect(req.request.url).toEqual(`${environment.baseUrl}/games.php`);
        httpMock.verify();
    });

    it('Should return an array of jackpots', (done) => {
        service.getGames$().subscribe((games) => {
            expect(games.length).toBe(1);
            expect(games).toEqual(response);
            done();
        });

        const req = httpMock.expectOne(`${environment.baseUrl}/games.php`);
        expect(req.request.method).toBe('GET');
        req.flush(response);
        httpMock.verify();
    });
});