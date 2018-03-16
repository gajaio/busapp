import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BusDataService } from '../bus-data.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrls: ['./bus-search.component.css']
})
export class BusSearchComponent {
  fromControl: FormControl;
  fromList: Object[];

  toControl: FormControl;
  toList: Object[];

  srcLocation: Object;
  dstLocation: Object;
  doj: Date;

  searchData: Object = {};
  dateOfJourney: string = "-";
  listBuses: Object[]=[];

  months = new Array( "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

  constructor(private dataService: BusDataService) {
    this.fromControl = new FormControl();
    this.toControl = new FormControl();
    this.listenFormControl(
      this.fromControl, 
      (list) => {this.fromList = list; console.log(this.fromList);}
    );
    this.listenFormControl(this.toControl, (list1) => {this.toList = list1});
  }

  public searchBuses(){
    console.log(this.doj);
    this.dateOfJourney = this.doj.getDate()+"-"+this.months[this.doj.getMonth()].substring(0,3)+"-"+this.doj.getFullYear();
    let busDeatils = this.dataService.getBusData(this.srcLocation, this.dstLocation, this.dateOfJourney);
    busDeatils.subscribe(
      data => {
        this.searchData = data;
        this.listBuses = data['SRD'][0]['RIN'];
        console.log(this.listBuses);
      }
    );
    
  }

  private listenFormControl(ctrl: FormControl, func: (value: Object[]) => any){
    ctrl.valueChanges
      .debounceTime(800)
      .distinctUntilChanged()
      .subscribe(data => {
        this.dataService.getStationData(data).subscribe(
          res => {
            func(res['response']['docs']);            
          }
        )
      });
  }

  loadSrc(item: Object){
    this.srcLocation = item;    
  }

  loadDst(item: Object){
    this.dstLocation = item;
  }

  getColor(rating: number): string{
    console.log(rating);
    
    if(rating <= -1){
      return 'darkgrey';
    }else if(rating >=0 && rating <=2){
      return 'red';
    }else if(rating > 2 && rating <=3){
      return '#ff5722';
    }else if(rating > 3 && rating<4){
      return 'lightgreen';
    }else if(rating > 4 && rating<4.5){
      return '#8bc34a';
    }else{
      return '#009688';
    }
  }

}
