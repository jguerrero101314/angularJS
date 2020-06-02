import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../service/youtube.service";
import { Video } from '../../models/youtube.models';
import Swal from 'sweetalert2';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  videos: Video[] = [];
  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.youtubeService.getVideos().subscribe((resp) => {
      this.videos.push(...resp);
      console.log(this.videos);
    });
  }
  mostrarVideo( video: Video){
    console.log(video);
    Swal.fire({
      html: `
      <h4>${video.title}</h4>
      <hr>
      <iframe width="100%"
              height="315"
              src="https://www.youtube.com/embed/${video.resourceId.videoId}"
              frameborder="0"
              allow="accelerometer;
              autoplay; encrypted-media;
              gyroscope; picture-in-picture"
              allowfullscreen></iframe>
      `
    })
  }
}
