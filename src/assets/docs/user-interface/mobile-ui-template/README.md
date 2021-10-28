<p align="center">
  <a href="https://opentemplatehub.com">
    <img src="https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/logo/ui/mobile-ui-logo.png" alt="Logo" width=200>
  </a>
</p>

<h1 align="center">
Open Template Hub - Mobile UI Template v3
</h1>

[![License](https://img.shields.io/github/license/open-template-hub/mobile-ui-template?color=43b043&style=for-the-badge)](LICENSE)
[![Issues](https://img.shields.io/github/issues/open-template-hub/mobile-ui-template?color=43b043&style=for-the-badge)](https://github.com/open-template-hub/mobile-ui-template/issues)
[![PRCLosed](https://img.shields.io/github/issues-pr-closed-raw/open-template-hub/mobile-ui-template?color=43b043&style=for-the-badge)](https://github.com/open-template-hub/mobile-ui-template/pulls?q=is%3Apr+is%3Aclosed)
[![LastCommit](https://img.shields.io/github/last-commit/open-template-hub/mobile-ui-template?color=43b043&style=for-the-badge)](https://github.com/open-template-hub/mobile-ui-template/commits/master)
[![Release](https://img.shields.io/github/release/open-template-hub/mobile-ui-template?include_prereleases&color=43b043&style=for-the-badge)](https://github.com/open-template-hub/mobile-ui-template/releases)
[![SonarCloud](https://img.shields.io/sonar/quality_gate/open-template-hub_mobile-ui-template?server=https%3A%2F%2Fsonarcloud.io&label=Sonar%20Cloud&style=for-the-badge&logo=sonarcloud)](https://sonarcloud.io/dashboard?id=open-template-hub_mobile-ui-template)
[![BTC](https://img.shields.io/badge/Donate-BTC-ORANGE?color=F5922F&style=for-the-badge&logo=bitcoin)](https://commerce.coinbase.com/checkout/8313af5f-de48-498d-b2cb-d98819ca7d5e)

Mobile UI Template is modern, responsive and customisable mobile ui template for your business. It contains reusable components, theme color and design support along with dark theme support.

<p align="center">
  <a href="https://opentemplatehub.com">
    <img src="https://raw.githubusercontent.com/open-template-hub/open-template-hub.github.io/master/assets/demo/ui/mobile-ui-ios-demo-light.png" alt="Screenshot" width="300px">
  </a>
</p>

## Ways to Begin

### 1. Start with UI Generator

Create your UI with UI Generator Package

[![NPM](https://img.shields.io/badge/NPM-ui_generator-cb3837.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@open-template-hub/app-generator)

### 2. GitHub Template

Use this repository as a Template

[![GitHubTemplate](https://img.shields.io/badge/GitHub-Template-24292e.svg?style=for-the-badge&logo=github)](https://github.com/open-template-hub/mobile-ui-template/generate)

## Installations

Install **nodejs** and **npm** via **[nodejs.org](https://nodejs.org)**.

Check installed versions of **nodejs** and **npm** via running following commands:

```
node -v
npm -v
```

Check project's current **nodejs** and **npm** version from **[package.json](package.json)**.

## Configuration

* Open **app/config/app.config.ts** and update values for all config items with your product.

* Set you App Menu Style preference in **constant/theme.constant.ts**, you can choose Left Menu or Tab Menu.

## Architecture

* **component**
  Holds app components

* **config**
  Holds app configuration

* **constant**
  Holds app constants

* **controller**
  Holds app controllers, api communications

* **enum**
  Holds app enumarations

* **i18n**
  Holds localizations

* **interface**
  Holds app interfaces

* **screen**
  Holds app screens

* **util**
  Holds app utilizations

## Configuration For Rebuild (Risky)

* Update your App name in **app.json**

* To rebuild android and ios folders, remove them and run command:
  For Linux and Mac:
    ```
    npm run-script build
    ```

  For Windows:
    ```
    npm run-script build-windows
    ```

* Open build.gradle under android folder and update from:
    ```
    classpath("com.android.tools.build:gradle:3.5.3")
    ```
  **to**:
    ```
    classpath("com.android.tools.build:gradle:3.5.4")
    ```

* Enable multidex
    ```
    android {

        defaultConfig {
            ...

            // Enabling multidex support.
            multiDexEnabled true
        }
        ...
    }
    ```

* Make sure set proper memory in gradle.properties:
    ```
    org.gradle.jvmargs=-Xmx4096m
    ```

* Initialize your Facebook & Google Apps and update **app.config.ts** under app/config

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/furknyavuz"><img src="https://avatars0.githubusercontent.com/u/2248168?s=460&u=435ef6ade0785a7a135ce56cae751fb3ade1d126&v=4" width="100px;" alt=""/><br /><sub><b>Furkan Yavuz</b></sub></a><br /><a href="https://github.com/open-template-hub/mobile-ui-template/issues/created_by/furknyavuz" title="Answering Questions">💬</a> <a href="https://github.com/open-template-hub/mobile-ui-template/commits?author=furknyavuz" title="Documentation">📖</a> <a href="https://github.com/open-template-hub/mobile-ui-template/pulls?q=is%3Apr+reviewed-by%3Afurknyavuz" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/fatihturker"><img src="https://avatars1.githubusercontent.com/u/2202179?s=460&u=261b1129e7106c067783cb022ab9999aad833bdc&v=4" width="100px;" alt=""/><br /><sub><b>Fatih Turker</b></sub></a><br /><a href="https://github.com/open-template-hub/mobile-ui-template/issues/created_by/fatihturker" title="Answering Questions">💬</a> <a href="https://github.com/open-template-hub/mobile-ui-template/commits?author=fatihturker" title="Documentation">📖</a> <a href="https://github.com/open-template-hub/mobile-ui-template/pulls?q=is%3Apr+reviewed-by%3Afatihturker" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## Contributing

Refer to **[CONTRIBUTING.md](https://github.com/open-template-hub/.github/blob/master/docs/CONTRIBUTING.md)** to see how to contribute to Open Template Hub.

<br/>

## Code of Conduct

Refer to **[CODE_OF_CONDUCT.md](https://github.com/open-template-hub/.github/blob/master/docs/CODE_OF_CONDUCT.md)** to see contributor covenant code of conduct.

<br/>

## LICENSE

The source code for this project is released under the [MIT License](LICENSE).

