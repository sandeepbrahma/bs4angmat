import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';




@NgModule({
    imports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule, MatFormFieldModule,
        MatInputModule],
    exports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule, MatFormFieldModule,
        MatInputModule],

})
export class MaterialModule { }
