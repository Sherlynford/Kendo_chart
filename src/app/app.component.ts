import { Component } from '@angular/core';
import { AxisLabelContentArgs } from '@progress/kendo-angular-charts';
@Component({
    selector: 'my-app',
    template: `
      <kendo-chart [title]="{ text: 'Market Value of Major Banks /bln/' }">
        <kendo-chart-series>
          <kendo-chart-series-item type="radarLine"
                                   name="Market value as of 2007"
                                   [data]="banksData" field="pre" categoryField="name">
          </kendo-chart-series-item>
          <kendo-chart-series-item type="radarLine"
                                   name="Market value as of 2009"
                                   [data]="banksData" field="post" categoryField="name">
          </kendo-chart-series-item>
        </kendo-chart-series>
        <kendo-chart-value-axis>
            <kendo-chart-value-axis-item [labels]="{ format: 'C0' }">
            </kendo-chart-value-axis-item>
        </kendo-chart-value-axis>
        <kendo-chart-legend position="bottom"></kendo-chart-legend>
      </kendo-chart> `
  })
  export class AppComponent {
    public banksData = [
      { name: 'JP Morgan', pre: 116, post: 64 },
      { name: 'HSBC', pre: 165, post: 85 },
      { name: 'Credit Suisse', pre: 215, post: 97 },
      { name: 'Goldman Sachs', pre: 75, post: 27 },
      { name: 'Morgan Stanley', pre: 100, post: 16 },
      { name: 'Societe Generale', pre: 49, post: 26 },
    ];
    public labelContent(e: AxisLabelContentArgs): string {
        return `${ e.dataItem.time.substring(0, 2) }h`;
    }
  }