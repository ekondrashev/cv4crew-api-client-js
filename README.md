# cv4_crew

Cv4Crew - JavaScript client for cv4_crew
API to fill CV for crewing agencies
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://github.com/ekondrashev/cv4crew/](https://github.com/ekondrashev/cv4crew/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cv4_crew --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your cv4_crew from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('cv4_crew')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Cv4Crew = require('cv4_crew');

var defaultClient = Cv4Crew.ApiClient.instance;

// Configure HTTP basic authorization: BearerAuth
var BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.username = 'YOUR USERNAME'
BearerAuth.password = 'YOUR PASSWORD'

var api = new Cv4Crew.DefaultApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPersonalDetails(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://cv4crew-api.herokuapp.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Cv4Crew.DefaultApi* | [**getPersonalDetails**](docs/DefaultApi.md#getPersonalDetails) | **GET** /profile/personal | Get Personal Details
*Cv4Crew.DefaultApi* | [**putPersonalDetails**](docs/DefaultApi.md#putPersonalDetails) | **PUT** /profile/personal | Update Personal Details


## Documentation for Models

 - [Cv4Crew.Birth](docs/Birth.md)
 - [Cv4Crew.Citizenship](docs/Citizenship.md)
 - [Cv4Crew.Countries](docs/Countries.md)
 - [Cv4Crew.Error](docs/Error.md)
 - [Cv4Crew.Genders](docs/Genders.md)
 - [Cv4Crew.Marital](docs/Marital.md)
 - [Cv4Crew.Military](docs/Military.md)
 - [Cv4Crew.Names](docs/Names.md)
 - [Cv4Crew.Nationalities](docs/Nationalities.md)
 - [Cv4Crew.Personal](docs/Personal.md)
 - [Cv4Crew.Residence](docs/Residence.md)


## Documentation for Authorization


### BearerAuth

- **Type**: HTTP basic authentication

