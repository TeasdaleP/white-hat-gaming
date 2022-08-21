import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';

// -- Components
import { NavigationComponent } from "./navigation/navigation.component";
import { TileComponent } from "./tile/tile.component";

const SHARED_COMPONENTS = [
    NavigationComponent,
    TileComponent
];

@NgModule({
    declarations: SHARED_COMPONENTS,
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,
        MatIconModule
    ],
    exports: SHARED_COMPONENTS
})
export class SharedModule { }