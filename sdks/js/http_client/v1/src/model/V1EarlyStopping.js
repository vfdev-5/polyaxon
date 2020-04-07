// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * OpenAPI spec version: 1.0.74
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/V1DiffStoppingPolicy', 'model/V1FailureEarlyStopping', 'model/V1MedianStoppingPolicy', 'model/V1MetricEarlyStopping', 'model/V1TruncationStoppingPolicy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1DiffStoppingPolicy'), require('./V1FailureEarlyStopping'), require('./V1MedianStoppingPolicy'), require('./V1MetricEarlyStopping'), require('./V1TruncationStoppingPolicy'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1EarlyStopping = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.V1DiffStoppingPolicy, root.PolyaxonSdk.V1FailureEarlyStopping, root.PolyaxonSdk.V1MedianStoppingPolicy, root.PolyaxonSdk.V1MetricEarlyStopping, root.PolyaxonSdk.V1TruncationStoppingPolicy);
  }
}(this, function(ApiClient, V1DiffStoppingPolicy, V1FailureEarlyStopping, V1MedianStoppingPolicy, V1MetricEarlyStopping, V1TruncationStoppingPolicy) {
  'use strict';

  /**
   * The V1EarlyStopping model module.
   * @module model/V1EarlyStopping
   * @version 1.0.74
   */

  /**
   * Constructs a new <code>V1EarlyStopping</code>.
   * @alias module:model/V1EarlyStopping
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1EarlyStopping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1EarlyStopping} obj Optional instance to populate.
   * @return {module:model/V1EarlyStopping} The populated <code>V1EarlyStopping</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('median'))
        obj.median = V1MedianStoppingPolicy.constructFromObject(data['median']);
      if (data.hasOwnProperty('diff'))
        obj.diff = V1DiffStoppingPolicy.constructFromObject(data['diff']);
      if (data.hasOwnProperty('truncation'))
        obj.truncation = V1TruncationStoppingPolicy.constructFromObject(data['truncation']);
      if (data.hasOwnProperty('metric'))
        obj.metric = V1MetricEarlyStopping.constructFromObject(data['metric']);
      if (data.hasOwnProperty('failure'))
        obj.failure = V1FailureEarlyStopping.constructFromObject(data['failure']);
    }
    return obj;
  }

  /**
   * @member {module:model/V1MedianStoppingPolicy} median
   */
  exports.prototype.median = undefined;

  /**
   * @member {module:model/V1DiffStoppingPolicy} diff
   */
  exports.prototype.diff = undefined;

  /**
   * @member {module:model/V1TruncationStoppingPolicy} truncation
   */
  exports.prototype.truncation = undefined;

  /**
   * @member {module:model/V1MetricEarlyStopping} metric
   */
  exports.prototype.metric = undefined;

  /**
   * @member {module:model/V1FailureEarlyStopping} failure
   */
  exports.prototype.failure = undefined;

  return exports;

}));
