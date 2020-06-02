import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { YoutubeResponse, Video } from "../models/youtube.models";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class YoutubeService {
  private youtubeURL = "https://www.googleapis.com/youtube/v3";
  private apkiKey = "AIzaSyBQhTZwjo7SBWs6OabdbVU_yAul3BLWuGY";
  private playList = "UUuaPTYj15JSkETGnEseaFFg";
  private nextPageToken = "";

  constructor(private http: HttpClient) {}

  getVideos() {
    const url = `${this.youtubeURL}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '15')
      .set('playlistId', this.playList)
      .set('key', this.apkiKey)
      .set('pageToken', this.nextPageToken);
    return this.http
      .get<YoutubeResponse>(url, { params })
      .pipe(
        map((resp) => {
          this.nextPageToken = resp.nextPageToken;
          return resp.items;
        }),
        map((items) => items.map((video) => video.snippet))
      );
  }
}
