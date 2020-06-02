import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

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
      .set("part", "snippet")
      .set("maxResults", "10")
      .set("playlistId", this.playList)
      .set("key", this.apkiKey);
    return this.http.get(url, { params });
  }
}
