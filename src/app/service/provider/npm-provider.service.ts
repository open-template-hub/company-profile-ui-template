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

  loadNpmPackagesDownloadCount = (downloadCount: number) => {
    var today = this.util.formatDate(new Date());
    for (let p of NpmPackages) {
      this.http
        .get<any>(
          `${environment.provider.npm.download}/${OthStartDate}:${today}/${p}`
        )
        .subscribe((data: any) => {
          downloadCount += data.downloads;
        });
    }
  };
}
