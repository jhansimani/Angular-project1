import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent
  implements OnInit, AfterContentInit, AfterContentChecked
{
  @ContentChildren(PanelComponent) panels!: QueryList<PanelComponent>;
  constructor() {}

  ngOnInit(): void {}
  ngAfterContentChecked(): void {
    // console.log(this.panels);

    this.panels.forEach((panel, index) => {
      panel.panelStatus.subscribe(() => {
        this.panelUpdation(panel);
      });
    });
  }
  ngAfterContentInit(): void {
    let currentOpenedIndex = this.panels
      .toArray()
      .findIndex((panel) => panel.opened);
    if (currentOpenedIndex != -1) {
      this.panels.toArray()[currentOpenedIndex].opened = true;
    } else {
      this.panels.toArray()[0].opened = true;
    }
    this.panels.forEach((panel, index) => {
      panel.panelStatus.subscribe(() => {
        this.panelUpdation(panel);
      });
    });
  }
  panelUpdation(panel: PanelComponent) {
    this.panels.forEach((panel) => (panel.opened = false));
    panel.opened = !panel.opened;
  }
}
