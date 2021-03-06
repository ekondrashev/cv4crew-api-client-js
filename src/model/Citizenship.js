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
    define(['ApiClient', 'model/Nationalities'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Nationalities'));
  } else {
    // Browser globals (root is window)
    if (!root.Cv4Crew) {
      root.Cv4Crew = {};
    }
    root.Cv4Crew.Citizenship = factory(root.Cv4Crew.ApiClient, root.Cv4Crew.Nationalities);
  }
}(this, function(ApiClient, Nationalities) {
  'use strict';



  /**
   * The Citizenship model module.
   * @module model/Citizenship
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Citizenship</code>.
   * List of citizenships
   * @alias module:model/Citizenship
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Citizenship</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Citizenship} obj Optional instance to populate.
   * @return {module:model/Citizenship} The populated <code>Citizenship</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [Nationalities]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Nationalities>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


