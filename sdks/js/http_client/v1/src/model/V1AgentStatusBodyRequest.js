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
    define(['ApiClient', 'model/V1StatusCondition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1StatusCondition'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1AgentStatusBodyRequest = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.V1StatusCondition);
  }
}(this, function(ApiClient, V1StatusCondition) {
  'use strict';

  /**
   * The V1AgentStatusBodyRequest model module.
   * @module model/V1AgentStatusBodyRequest
   * @version 1.0.74
   */

  /**
   * Constructs a new <code>V1AgentStatusBodyRequest</code>.
   * @alias module:model/V1AgentStatusBodyRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1AgentStatusBodyRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1AgentStatusBodyRequest} obj Optional instance to populate.
   * @return {module:model/V1AgentStatusBodyRequest} The populated <code>V1AgentStatusBodyRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('owner'))
        obj.owner = ApiClient.convertToType(data['owner'], 'String');
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
      if (data.hasOwnProperty('condition'))
        obj.condition = V1StatusCondition.constructFromObject(data['condition']);
    }
    return obj;
  }

  /**
   * @member {String} owner
   */
  exports.prototype.owner = undefined;

  /**
   * @member {String} uuid
   */
  exports.prototype.uuid = undefined;

  /**
   * @member {module:model/V1StatusCondition} condition
   */
  exports.prototype.condition = undefined;

  return exports;

}));
