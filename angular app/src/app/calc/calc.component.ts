import { Component } from '@angular/core';

@Component({
    selector : 'calc',    
    // template :  "<h3>mi plantilla</h3>"; //plantilla directo en el archivo
    templateUrl : 'calc.component.html',
    styleUrls : [ 'calc.component.css' ]
})
export class CalcComponent{
    public number1 : number;
    public number2 : number;
    public result: number;

    public add() : void {
        this.result = this.number1 + this.number2;
    }
}