import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { map, Observable } from "rxjs";
import { Ribbon } from "src/app/helpers/ribbon.enum";
import { Game } from "src/app/ngrx/games";
import { Jackpot } from "src/app/ngrx/jackpot";

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
    @Input() public game!: Game | null;
    @Input() public jackpots$!: Observable<Array<Jackpot>>;

    public filteredJackpot$!: Observable<Jackpot | undefined>;
    public ribbon: string | undefined;

    @Output() public selection: EventEmitter<Game> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {
        this.filteredJackpot$ = this.jackpots$.pipe(map((jackpot: Jackpot[]) => jackpot.find((j) => j.game === this.game?.id)));

        this.filteredJackpot$.subscribe((amount) => {
            console.log(amount);
        });

        if(this.needRibbon()) {
            if(this.game?.categories.includes(Ribbon.Top) && this.game.categories.includes(Ribbon.New)) {
                this.ribbon = `${Ribbon.Top} & ${Ribbon.New}`;
            } else if (this.game?.categories.includes(Ribbon.Top)) {
                this.ribbon = Ribbon.Top;
            } else if (this.game?.categories.includes(Ribbon.New)) {
                this.ribbon = Ribbon.New;
            } 
        }
    }

    public needRibbon(): boolean | undefined {
        return this.game?.categories.includes(Ribbon.Top) || this.game?.categories.includes(Ribbon.New);
    }

    public handleSubmit(): void {
        if(this.game) {
            this.selection.emit(this.game);
        }
    }
}