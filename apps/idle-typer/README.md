# Idle Typer

## Deploy process with existing environment

`deploy.sh MyProject` should upload the content of AppScript folder into your
AppScript project

## Defining new environment

Presuming that:

1. You have an AppScript project named `MyProject`
2. The project has both `Drive API` and `Google Slides API` turned ON in --
   `Resources -> Advanced Google services...`
3. The project has both `Drive API` and `Google Slides API` enabled in
   `Resources -> Advanced Google services...`, click on `Google API Console`
   hyperlink at bottom of modal, search for and enable both APIs

* That project must be an AppScript project in Google Drive - it is if it has
  "Share" button on the right side of toolbar.

  * If it doesn't have the "Share" button ask Lake or Misha how to configure a
    new project

* Create directory `environment/MyProject`
  ```
  mkdir -p environment/new-environment-name
  ```
* Configure OAuth credentials for deploy procedure
  * In menu choose `Resources -> Cloud Platform project`
  * Click on `View API Console` button
  * Google Cloud Platform Console should open
  * Choose `APIs & services -> Credentials` in sidebar
  * Click on `Create credentials` button and choose `OAuth client ID` in popup
  * For Application Type choose `Other`
  * Enter `Deploy` as a name
  * OK in OAuth credentials dialogs
  * Download credentials JSON by clicking on download button
  * Authenticate `gapps` client: \*
    ```
    gapps auth <path-to-downloaded-json>
    mv ~/.gapps environment/myProject
    ```
* Configure Script ID

  * Copy gapps.config.json from some other environment

```
cp environment/PicoTest/gapps.config.json environment/myProject
```

* Figure out your project Script ID, it is a string between /d/ and /edit

In
`https://script.google.com/d/1hTspxtDfBtqeA019SAbX3pOGQAyFP_S7kpfoX6Z_h-MDr5Xn4LgavPZS/edit?splash=yes`

it is

`1hTspxtDfBtqeA019SAbX3pOGQAyFP_S7kpfoX6Z_h-MDr5Xn4LgavPZS/`

Copy and paste it into `gapps.config.json`'s `fileId` field.
