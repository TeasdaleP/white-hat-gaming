import { Component, Input, OnInit } from "@angular/core";
import { Game } from "src/app/ngrx/games";

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
    @Input() public game!: Game | null;

    constructor() {}

    ngOnInit(): void {
        
    }
}