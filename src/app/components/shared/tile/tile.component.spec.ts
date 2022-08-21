import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TileComponent } from "./tile.component";
import { Game } from "src/app/ngrx/games";
import { Ribbon } from "src/app/helpers/ribbon.enum";

import { v4 as uuidv4 } from 'uuid';

describe('Tile Component', () => {
    let component: TileComponent;
    let fixture: ComponentFixture<TileComponent>;

    let mockGame: Game = {
        categories: ['top', 'new', 'slots'],
        name: 'Best Game',
        image: 'http://image.com',
        id: uuidv4()
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TileComponent],
            providers: [

            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {

        it('Should get top and new for ribbon', () => {
            component.game = mockGame;
            component.ngOnInit();
            expect(component.ribbon).toBe(`${Ribbon.Top} & ${Ribbon.New}`);
        });

        it('Should get top for ribbon', () => {
            component.game = {
                categories: ['top', 'slots'],
                name: 'Best Game',
                image: 'http://image.com',
                id: uuidv4()
            };
            component.ngOnInit();
            expect(component.ribbon).toBe(Ribbon.Top);
        });

        it('Should get new for ribbon', () => {
            component.game = {
                categories: ['new', 'slots'],
                name: 'Best Game',
                image: 'http://image.com',
                id: uuidv4()
            };
            component.ngOnInit();
            expect(component.ribbon).toBe(Ribbon.New);
        });
    });

    it('Should have defined inputs', () => {
        expect(component.game).toBeUndefined();
        component.game = mockGame;
        expect(component.game).toBeDefined();
    });

    it('Should need ribbon', () => {
        component.game = mockGame;
        const ribbon = component.needRibbon()
        expect(ribbon).toBeTruthy();
    });

    it('Should be able to emit selected values', () => {
        spyOn(component.selection, 'emit');
        component.game = mockGame;
        component.handleSubmit();
        expect(component.selection.emit).toHaveBeenCalled();
        expect(component.selection.emit).toHaveBeenCalledWith(mockGame);
    });

    it('Shouldnt be able to emit null values', () => {
        spyOn(component.selection, 'emit');
        component.game = null;
        component.handleSubmit();
        expect(component.selection.emit).not.toHaveBeenCalled();
    });
});