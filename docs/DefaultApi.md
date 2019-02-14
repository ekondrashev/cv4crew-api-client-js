# Cv4Crew.DefaultApi

All URIs are relative to *https://agile-sierra-32951.herokuapp.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPersonalDetails**](DefaultApi.md#getPersonalDetails) | **GET** /profile/personal | Get Personal Details
[**putPersonalDetails**](DefaultApi.md#putPersonalDetails) | **PUT** /profile/personal | Update Personal Details


<a name="getPersonalDetails"></a>
# **getPersonalDetails**
> Personal getPersonalDetails()

Get Personal Details

Route to get seaman personal details information

### Example
```javascript
var Cv4Crew = require('cv4_crew');
var defaultClient = Cv4Crew.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BearerAuth
var BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.username = 'YOUR USERNAME';
BearerAuth.password = 'YOUR PASSWORD';

var apiInstance = new Cv4Crew.DefaultApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPersonalDetails(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Personal**](Personal.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putPersonalDetails"></a>
# **putPersonalDetails**
> putPersonalDetails(opts)

Update Personal Details

Route to update seaman personal details information

### Example
```javascript
var Cv4Crew = require('cv4_crew');
var defaultClient = Cv4Crew.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

// Configure HTTP basic authorization: BearerAuth
var BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.username = 'YOUR USERNAME';
BearerAuth.password = 'YOUR PASSWORD';

var apiInstance = new Cv4Crew.DefaultApi();
var opts = {
  'personal': new Cv4Crew.Personal() // Personal | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putPersonalDetails(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personal** | [**Personal**](Personal.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

