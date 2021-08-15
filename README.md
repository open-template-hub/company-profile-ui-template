<p align="center">
  <a href="https://www.linkedin.com/company/open-template-hub">
    <img src="https://avatars2.githubusercontent.com/u/65504426?s=200&v=4" alt="Logo">
  </a>
</p>

<h1 align="center">
Open Template Hub - Web UI Template
</h1>

[![License](https://img.shields.io/github/license/open-template-hub/web-ui-template?color=2F7488&style=for-the-badge)](LICENSE)
[![Issues](https://img.shields.io/github/issues/open-template-hub/web-ui-template?color=2F7488&style=for-the-badge)](https://github.com/open-template-hub/web-ui-template/issues)
[![PRCLosed](https://img.shields.io/github/issues-pr-closed-raw/open-template-hub/web-ui-template?color=2F7488&style=for-the-badge)](https://github.com/open-template-hub/web-ui-template/pulls?q=is%3Apr+is%3Aclosed)
[![LastCommit](https://img.shields.io/github/last-commit/open-template-hub/web-ui-template?color=2F7488&style=for-the-badge)](https://github.com/open-template-hub/web-ui-template/commits/master)
[![Release](https://img.shields.io/github/release/open-template-hub/web-ui-template?include_prereleases&color=2F7488&style=for-the-badge)](https://github.com/open-template-hub/web-ui-template/releases)
[![SonarCloud](https://img.shields.io/sonar/quality_gate/open-template-hub_web-ui-template?server=https%3A%2F%2Fsonarcloud.io&label=Sonar%20Cloud&style=for-the-badge&logo=sonarcloud)](https://sonarcloud.io/dashboard?id=open-template-hub_web-ui-template)
[![BTC](https://img.shields.io/badge/Donate-BTC-ORANGE?color=F5922F&style=for-the-badge&logo=bitcoin)](https://commerce.coinbase.com/checkout/8313af5f-de48-498d-b2cb-d98819ca7d5e)

Responsive Web UI template with sign-up, login and social login functionality

<h3 align="center">
  For demo click the image below ⬇️
</p>

<p align="center">
  <a href="https://oth-web-app.herokuapp.com">
    <img src="https://github.com/open-template-hub/open-template-hub.github.io/blob/master/assets/products/web-ui/demonstration.png?raw=true" alt="Screenshot" width="800px">
  </a>
</p>

## Ways to Begin

### 1. Express Deploy

Deploy this template to Heroku

[![Deploy](https://img.shields.io/badge/Deploy_to-Heroku-7056bf.svg?style=for-the-badge&logo=heroku)](https://heroku.com/deploy?template=https://github.com/open-template-hub/web-ui-template)

### 2. GitHub Template

Use this repository as a Template

[![GitHubTemplate](https://img.shields.io/badge/GitHub-Template-24292e.svg?style=for-the-badge&logo=github)](https://github.com/open-template-hub/web-ui-template/generate)

## Installations

Install **nodejs** and **npm** via **[nodejs.org](https://nodejs.org)**.

Check installed versions of **nodejs** and **npm** via running following commands:

```
node -v
npm -v
```

## WebStorm Configurations

If you imported project into **WebStorm** you will see following run configurations:

### 1. Install

**[install.run.xml](.run/install.run.xml)**

### 2. Build

**[buildLocal.run.xml](.run/buildLocal.run.xml)**

**[buildLocalToStagingApi.run.xml](.run/buildLocalToStagingApi.run.xml)**

**[buildStaging.run.xml](.run/buildStaging.run.xml)**

**[buildProd.run.xml](.run/buildProd.run.xml)**

### 3. Start

**[startLocal.run.xml](.run/startLocal.run.xml)**

**[startLocalFromIPhone.run.xml](.run/startLocalFromIPhone.run.xml)**

**[startLocalToStagingApi.run.xml](.run/startLocalToStagingApi.run.xml)**

**[startLocalFromIPhoneToStagingApi.run.xml](.run/startLocalFromIPhoneToStagingApi.run.xml)**

**[startStaging.run.xml](.run/startStaging.run.xml)**

**[start.run.xml](.run/start.run.xml)**

### 4. Debug

**[debug.run.xml](.run/debug.run.xml)**

### 5. Dependency Management

**[outdated.run.xml](.run/outdated.run.xml)**

**[update.run.xml](.run/update.run.xml)**

<br/>

## Local Deployment and Debug

In order to deploy and debug locally, run following configurations in order:

1. **[install.run.xml](.run/install.run.xml)**
2. **[buildLocal.run.xml](.run/buildLocal.run.xml)**
3. **startLocal**
    1. **[startLocal.run.xml](.run/startLocal.run.xml) (uses local api)**
    2. **[startLocalFromIPhone.run.xml](.run/startLocalFromIPhone.run.xml) (uses local api - accessible from iphone)**
    3. **[startLocalToStagingApi.run.xml](.run/startLocalToStagingApi.run.xml) (uses staging api)**
    4. **[startLocalFromIPhoneToStagingApi.run.xml](.run/startLocalFromIPhoneToStagingApi.run.xml) (uses staging api - accessible from iphone)**
4. **[debug.run.xml](.run/debug.run.xml)**

<br/>

## Environment Variables

If you run **WebStorm**'s **[env.run.xml](.run/env.run.xml)** configuration you will see following variables generated in **.env** file. Set them appropriately.

```applescript
PORT=4200
```

<br/>


Check project's current **nodejs** and **npm** version from **[package.json](package.json)**.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/furknyavuz"><img src="https://avatars0.githubusercontent.com/u/2248168?s=460&u=435ef6ade0785a7a135ce56cae751fb3ade1d126&v=4" width="100px;" alt=""/><br /><sub><b>Furkan Yavuz</b></sub></a><br /><a href="https://github.com/open-template-hub/web-ui-template/issues/created_by/furknyavuz" title="Answering Questions">💬</a> <a href="https://github.com/open-template-hub/web-ui-template/commits?author=furknyavuz" title="Documentation">📖</a> <a href="https://github.com/open-template-hub/web-ui-template/pulls?q=is%3Apr+reviewed-by%3Afurknyavuz" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/fatihturker"><img src="https://avatars1.githubusercontent.com/u/2202179?s=460&u=261b1129e7106c067783cb022ab9999aad833bdc&v=4" width="100px;" alt=""/><br /><sub><b>Fatih Turker</b></sub></a><br /><a href="https://github.com/open-template-hub/web-ui-template/issues/created_by/fatihturker" title="Answering Questions">💬</a> <a href="https://github.com/open-template-hub/web-ui-template/commits?author=fatihturker" title="Documentation">📖</a> <a href="https://github.com/open-template-hub/web-ui-template/pulls?q=is%3Apr+reviewed-by%3Afatihturker" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/mertlsarac"><img src="https://avatars1.githubusercontent.com/u/38442589?s=400&u=aa3cda11724fc297a0bfa6beb35c9be81687cf3c&v=4" width="100px;" alt=""/><br /><sub><b>Mert Sarac</b></sub></a><br /><a href="https://github.com/open-template-hub/web-ui-template/issues/created_by/mertlsarac" title="Answering Questions">💬</a> <a href="https://github.com/open-template-hub/web-ui-template/commits?author=mertlsarac" title="Documentation">📖</a> <a href="https://github.com/open-template-hub/web-ui-template/pulls?q=is%3Apr+reviewed-by%3Amertlsarac" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## Contributing

* Fork it
* Create your update branch (git checkout -b my-feature-branch)
* Commit your changes (git commit -am 'Add some features')
* Push to the branch (git push origin my-feature-branch)
* Create new Pull Request

## LICENSE

The source code for this project is released under the [MIT License](LICENSE).
