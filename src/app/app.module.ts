import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScaleToFitDirective } from './services/scale-to-fit.directive';
import { RoomBookingChartComponent } from './components/room-booking-chart/room-booking-chart.component';
import { CallPanelComponent } from './components/call-panel/call-panel.component';
import { TablesComponent } from './components/tables/tables.component';
import { ClockComponent } from './components/clock/clock.component';
import { RoughComponent } from './components/rough/rough.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SingleTableComponent } from './components/single-table/single-table.component';
import { CoinComponent } from './components/coin/coin.component';
import { TotalCostComponent } from './components/total-cost/total-cost.component';

@NgModule({
  declarations: [
    AppComponent,
    ScaleToFitDirective,
    HomeComponent,
    RoomBookingChartComponent,
    CallPanelComponent,
    TablesComponent,
    ClockComponent,
    RoughComponent,
    SingleTableComponent,
    CoinComponent,
    TotalCostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
