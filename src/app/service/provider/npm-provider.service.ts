import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NpmPackages, OthStartDate } from "src/app/data/constant";
import { environment } from "../../../environments/environment";
import { UtilService } from "../util/util.service";

@Injectable({
  providedIn: "root",
})
export class NpmProviderService {
  constructor(private http: HttpClient, private util: UtilService) {}

  getNpmPackagesDownloadCount = async () => {
    var today = this.util.formatDate(new Date());
    var count = 0;
    for (let p of NpmPackages) {
      var uri = `${environment.provider.npm.download}/${OthStartDate}:${today}/${p}`;

      // Using Xml Http Request because http.get cause CORS issue
      var response = await this.util.corsRequest(uri);
      var json = JSON.parse(response as string);
      count += json.downloads;
    }
    return count;
  };
}
