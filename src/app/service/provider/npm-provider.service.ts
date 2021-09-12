import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NpmPackages, OthStartDate } from "src/app/data/constant";
import { environment } from "../../../environments/environment";
import { UtilService } from "../util/util.service";

@Injectable({
  providedIn: "root",
})
export class NpmProviderService {
  constructor(private http: HttpClient, private util: UtilService) {}

  loadNpmPackagesDownloadCount = (downloadCount: number) => {
    var today = this.util.formatDate(new Date());
    for (let p of NpmPackages) {
      var uri = `${environment.provider.npm.download}/${OthStartDate}:${today}/${p}`;
      this.http.get<any>(uri).subscribe((data: any) => {
        console.log("Npm Downloads: Uri: {0}, Count: {1}", uri, data.downloads);
        downloadCount += data.downloads;
      });
    }
  };
}
