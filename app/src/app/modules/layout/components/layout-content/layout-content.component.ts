import { ChangeDetectorRef, Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-layout-content',
  templateUrl: './layout-content.component.html',
  styleUrls: ['./layout-content.component.css']
})
export class LayoutContentComponent implements OnInit{

  public _iscontentReady: boolean = false;
  constructor(public changeDetectRef:ChangeDetectorRef) { }
  get isContentReady():boolean {
    return this._iscontentReady;
  }
  public set isSetContentReady(val: boolean) {
    this._iscontentReady = val;
    this.changeDetectRef.detectChanges();
  }
  ngOnInit(): void {
    //console.log(this.isContentReady)
  }
  
  ngDoCheck(changes: SimpleChanges): void {
   // console.log(this.isContentReady)
  }


}
