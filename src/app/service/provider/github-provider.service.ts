import { Injectable } from "@angular/core";
import { GithubCounters, OthGithubName } from "src/app/data/constant";
import { environment } from "../../../environments/environment";
import { UtilService } from "../util/util.service";

@Injectable({
  providedIn: "root",
})
export class GithubProviderService {
  constructor(private util: UtilService) {}

  getGithubCounters = async (productKey: string) => {
    var uri = `${environment.provider.github.repo}/${OthGithubName}/${productKey}`;

    var counters = [];
    // Using Xml Http Request because http.get cause CORS issue
    var response = await this.util.corsRequest(uri);
    if (response != null) {
      var json = JSON.parse(response as string);
      counters.push({
        name: GithubCounters.Stars,
        value: json.stargazers_count ? json.stargazers_count : "0",
      });

      counters.push({
        name: GithubCounters.Forks,
        value: json.forks_count ? json.forks_count : "0",
      });

      counters.push({
        name: GithubCounters.Subscribers,
        value: json.subscribers_count ? json.subscribers_count : "0",
      });
    }

    const releaseVersion = await this.getReleaseVersion(productKey);
    if (releaseVersion != null) {
      counters.push({
        name: GithubCounters.ReleaseVersion,
        value: releaseVersion,
      });
    }
    return counters;
  };

  getReleaseVersion = async (productKey: string) => {
    var uri = `${environment.provider.github.repo}/${OthGithubName}/${productKey}/releases`;
    var response = await this.util.corsRequest(uri);
    if (response != null) {
      var json = JSON.parse(response as string);
      return json[0].name;
    }

    return null;
  };
}
