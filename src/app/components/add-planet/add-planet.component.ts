import { Component, OnInit } from '@angular/core';
import { Planet } from '../../models/planet';
import { PlanetService } from '../../services/planet.service';
import { Router } from '@angular/router';
import { HttpClient, HttpEvent, HttpResponse, HttpEventType, HttpParams, HttpRequest } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {

    newPlanet = new Planet();
    selectedFile: File = null;
    isLoading: boolean = false;

    constructor(private planetService: PlanetService, private router: Router, private http: HttpClient, private toastr: ToastrService) { }

    ngOnInit(): void
    {
    }

    addPlanet() : void
    {
        // this.onUploadImage(); // Pour upload une image
        this.isLoading = true;
        this.planetService.addPlanetServiceHttp(this.newPlanet).subscribe(data => {
                this.isLoading = false;
                this.router.navigate(['/planets']);
                this.toastr.success('La planète ' + this.newPlanet.nom + " à été ajouté");
            }
        );
    }

    onFileChanged(event)
    {
        this.selectedFile  = <File>event.target.files[0]
        // console.log(this.selectedFile);
    }

    onUploadImage()
    {
        // TODO - A faire quand serveur back-end
        console.log(this.selectedFile);

        this.http.post('/assets/images/planets/', this.selectedFile)
        .subscribe(event => {
          console.log(event);
        });
    }

}
