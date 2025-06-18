import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Demo1Component } from '../demo1/demo1.component';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-material-demo1',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule
  ],
  templateUrl: './material-demo1.component.html',
  styleUrl: './material-demo1.component.css'
})
export class MaterialDemo1Component {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  mydataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  readonly dialog = inject(MatDialog); // Dependency injection

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(Demo1Component, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  f1() {
    alert('This is f1...')
  }
}
