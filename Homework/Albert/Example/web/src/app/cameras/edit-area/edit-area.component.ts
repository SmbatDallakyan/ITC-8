import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { CamerasService } from '../cameras.service';

@Component({
  selector: 'id-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css']
})

export class EditAreaComponent implements OnInit {
  @Input() cam;
  @Input() name;
  @Input() latitude;
  @Input() longitude;
  @Input() description;
  @Input() online;

  constructor( private camerasService:CamerasService) { 
  }

  ngOnInit() {
  }

  /**
  * Edit camera detailes 
  * 
  * @param cam camera field 
  */
  edit() {
    if (this.name == "" || this.description == "") {
      console.log("Empty name or descriptioin.");  
    } else if (isNaN(Number(this.latitude)) || isNaN(Number(this.longitude)) || this.latitude == null || this.longitude == null) {
      console.log("Not a number");
    } else {       
      this.camerasService.editCamera(this.cam.id, this.name, this.latitude, this.longitude, this.description, this.online).subscribe(
        data => {
            this.cam.camera_name = this.name;
            this.cam.online = this.online;
            this.cam.location.x = this.latitude;
            this.cam.location.y = this.longitude;
            this.cam.description = this.description;
            console.log(data);
        },
        error => console.log(error),
        () => console.log("Done")
      );  
    } 
  }
}
