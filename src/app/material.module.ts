import { NgModule } from "@angular/core";
import { MatAutocompleteModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';



@NgModule({
    imports: [MatAutocompleteModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule
    ],
    exports: [MatAutocompleteModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule]

})
export class MaterialModule { }