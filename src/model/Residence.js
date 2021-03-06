/**
 * CV4CREW
 * API to fill CV for crewing agencies
 *
 * OpenAPI spec version: 1.0.0
 * Contact: eugene.kondrashev@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Countries'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Countries'));
  } else {
    // Browser globals (root is window)
    if (!root.Cv4Crew) {
      root.Cv4Crew = {};
    }
    root.Cv4Crew.Residence = factory(root.Cv4Crew.ApiClient, root.Cv4Crew.Countries);
  }
}(this, function(ApiClient, Countries) {
  'use strict';



  /**
   * The Residence model module.
   * @module model/Residence
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Residence</code>.
   * @alias module:model/Residence
   * @class
   * @param country {module:model/Countries} 
   * @param region {String} 
   * @param airport {String} 
   */
  var exports = function(country, region, airport) {
    var _this = this;

    _this['country'] = country;
    _this['region'] = region;
    _this['airport'] = airport;
  };

  /**
   * Constructs a <code>Residence</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Residence} obj Optional instance to populate.
   * @return {module:model/Residence} The populated <code>Residence</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('country')) {
        obj['country'] = Countries.constructFromObject(data['country']);
      }
      if (data.hasOwnProperty('region')) {
        obj['region'] = ApiClient.convertToType(data['region'], 'String');
      }
      if (data.hasOwnProperty('airport')) {
        obj['airport'] = ApiClient.convertToType(data['airport'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Countries} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {String} region
   */
  exports.prototype['region'] = undefined;
  /**
   * @member {String} airport
   */
  exports.prototype['airport'] = undefined;



  return exports;
}));


