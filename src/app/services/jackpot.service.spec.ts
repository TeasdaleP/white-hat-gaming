import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { JackpotService } from "./jackpot.service";
import { environment } from 'src/environments/environment';
import { Jackpot } from '../ngrx/jackpot/jackpot.model';

describe('Jackpot Service', () => {
    let service: JackpotService;

    const response: Jackpot[] = [
        { game: 'game', amount: 1 }
    ];

    let httpMock: HttpTestingController;
    let httpClient: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [JackpotService]
        });

        service = TestBed.inject(JackpotService);
        httpMock = TestBed.inject(HttpTestingController);
        httpClient = TestBed.inject(HttpClient);
    });

    it('Service should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Should verify the HTTP call is of type GET', () => {
        let result;

        service.getJackpots$().subscribe((jackpots) => {
            result = jackpots;
        });

        const req = httpMock.expectOne(`${environment.baseUrl}/jackpots.php`);
        expect(req.request.method).toEqual('GET');
        expect(req.request.url).toEqual(`${environment.baseUrl}/jackpots.php`);
        httpMock.verify();
    });

    it('Should return an array of jackpots', (done) => {
        service.getJackpots$().subscribe((jackpots) => {
            expect(jackpots.length).toBe(1);
            expect(jackpots).toEqual(response);
            done();
        });

        const req = httpMock.expectOne(`${environment.baseUrl}/jackpots.php`);
        expect(req.request.method).toBe('GET');
        req.flush(response);
        httpMock.verify();
    });
});