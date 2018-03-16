import { Injectable } from '@angular/core';
import { Settings } from './app-settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Injectable()
export class BusDataService {
  private settings: Settings;
  constructor(private httpModule: HttpClient) {
    this.loadUrlInfo();
  }

  public loadUrlInfo() {
    this.httpModule
      .get("../assets/settings.json").subscribe(data => {
        this.settings = new Settings();
        this.settings.setStationFetchUrl(data['stationFetchUrl']);
        this.settings.setBusDetailsUrl(data['busDetailsUrl']);
      });
  }

  /**
   * getBusData
   * 
   */
  public getBusData(fromLoc: Object, toLoc: Object, dojy: string): Observable<Object>{
    let url: string = this.settings.getBusDetailsUrl();
    console.log(dojy);
    
    //fromCity=123&toCity=71929&doj=17-Mar-2018&src=Chennai&dst=Trichy&isReturn=false
    let qParams = {
      fromCity: fromLoc['ID'],
      toCity: toLoc['ID'],
      doj: dojy,
      src: fromLoc['Name'],
      dst: toLoc['Name'],
      isReturn: "false"
    };
    return this.httpModule.get<Object>(url, {
        params: qParams
      });
  }

  public getStationData(query: string): Observable<Object> {
    let url: string = this.settings.getStationFetchUrl();
    return this.httpModule.get<Object>(url, {
        params: {
          search: query
        }
      });
  }

}
