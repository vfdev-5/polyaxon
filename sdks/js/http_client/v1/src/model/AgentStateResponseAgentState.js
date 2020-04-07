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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.AgentStateResponseAgentState = factory(root.PolyaxonSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AgentStateResponseAgentState model module.
   * @module model/AgentStateResponseAgentState
   * @version 1.0.74
   */

  /**
   * Constructs a new <code>AgentStateResponseAgentState</code>.
   * @alias module:model/AgentStateResponseAgentState
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AgentStateResponseAgentState</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AgentStateResponseAgentState} obj Optional instance to populate.
   * @return {module:model/AgentStateResponseAgentState} The populated <code>AgentStateResponseAgentState</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('schedules'))
        obj.schedules = ApiClient.convertToType(data['schedules'], Object);
      if (data.hasOwnProperty('notifier'))
        obj.notifier = ApiClient.convertToType(data['notifier'], Object);
      if (data.hasOwnProperty('watchdogs'))
        obj.watchdogs = ApiClient.convertToType(data['watchdogs'], Object);
      if (data.hasOwnProperty('tuners'))
        obj.tuners = ApiClient.convertToType(data['tuners'], Object);
      if (data.hasOwnProperty('queued'))
        obj.queued = ApiClient.convertToType(data['queued'], Object);
      if (data.hasOwnProperty('stopping'))
        obj.stopping = ApiClient.convertToType(data['stopping'], Object);
      if (data.hasOwnProperty('apply'))
        obj.apply = ApiClient.convertToType(data['apply'], Object);
      if (data.hasOwnProperty('full'))
        obj.full = ApiClient.convertToType(data['full'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Object} schedules
   */
  exports.prototype.schedules = undefined;

  /**
   * @member {Object} notifier
   */
  exports.prototype.notifier = undefined;

  /**
   * @member {Object} watchdogs
   */
  exports.prototype.watchdogs = undefined;

  /**
   * @member {Object} tuners
   */
  exports.prototype.tuners = undefined;

  /**
   * @member {Object} queued
   */
  exports.prototype.queued = undefined;

  /**
   * @member {Object} stopping
   */
  exports.prototype.stopping = undefined;

  /**
   * @member {Object} apply
   */
  exports.prototype.apply = undefined;

  /**
   * @member {Boolean} full
   */
  exports.prototype.full = undefined;

  return exports;

}));
