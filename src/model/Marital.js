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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Cv4Crew) {
      root.Cv4Crew = {};
    }
    root.Cv4Crew.Marital = factory(root.Cv4Crew.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class Marital.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "married"
     * @const
     */
    "married": "married",
    /**
     * value: "single"
     * @const
     */
    "single": "single",
    /**
     * value: "divorced"
     * @const
     */
    "divorced": "divorced",
    /**
     * value: "widowed"
     * @const
     */
    "widowed": "widowed"  };

  /**
   * Returns a <code>Marital</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/Marital} The enum <code>Marital</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


