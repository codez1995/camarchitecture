import { ChangeDetectorRef, Component, OnInit, ViewChildren } from '@angular/core';
import { LayoutContentComponent } from 'src/app/modules/layout/components/layout-content/layout-content.component';
import { PageLayoutService } from 'src/app/modules/shared/services/page-layout.service';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export abstract class BasePageComponent implements OnInit {

  abstract name: string;
  @ViewChildren(LayoutContentComponent) public layoutContentComponent: LayoutContentComponent;
  @ViewChildren("searchGrid")
  componentData: any;
  SearchGrid: any;
  constructor(public layoutService: PageLayoutService,public changeDetectRef:ChangeDetectorRef) { 
    this.layoutContentComponent=new LayoutContentComponent(changeDetectRef)

  }

  ngOnInit(): void {
    if (this.layoutContentComponent) {
      console.log(this.name)
      this.getLayout(this.name);
    }
  }

  getLayout(name: string) {
    // this.layoutService.get('Account').subscribe(data=>{
    //   console.log(data);
    // })
      this.layoutService.getLayout(name).subscribe(data => {
        this.loadLayoutData(data);
      })
  }

  loadLayoutData(layoutData:any){
    if(layoutData[0].componentName==this.name){
      this.componentData=layoutData;
        this.changeState(true)
    }
  }
  changeState(val:boolean){
    if(this.layoutContentComponent && !this.layoutContentComponent._iscontentReady){
      this.SearchGrid = this.layoutContentComponent;
      this.SearchGrid.first._iscontentReady=val;
      this.layoutContentComponent.isSetContentReady=val;
    }
  }
}
