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
    root.PolyaxonSdk.V1EventAudio = factory(root.PolyaxonSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V1EventAudio model module.
   * @module model/V1EventAudio
   * @version 1.0.74
   */

  /**
   * Constructs a new <code>V1EventAudio</code>.
   * @alias module:model/V1EventAudio
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1EventAudio</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1EventAudio} obj Optional instance to populate.
   * @return {module:model/V1EventAudio} The populated <code>V1EventAudio</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('sample_rate'))
        obj.sample_rate = ApiClient.convertToType(data['sample_rate'], 'Number');
      if (data.hasOwnProperty('num_channels'))
        obj.num_channels = ApiClient.convertToType(data['num_channels'], 'Number');
      if (data.hasOwnProperty('length_frames'))
        obj.length_frames = ApiClient.convertToType(data['length_frames'], 'Number');
      if (data.hasOwnProperty('content_type'))
        obj.content_type = ApiClient.convertToType(data['content_type'], 'String');
      if (data.hasOwnProperty('path'))
        obj.path = ApiClient.convertToType(data['path'], 'String');
    }
    return obj;
  }

  /**
   * Sample rate of the audio in Hz.
   * @member {Number} sample_rate
   */
  exports.prototype.sample_rate = undefined;

  /**
   * Number of channels of audio.
   * @member {Number} num_channels
   */
  exports.prototype.num_channels = undefined;

  /**
   * Length of the audio in frames (samples per channel).
   * @member {Number} length_frames
   */
  exports.prototype.length_frames = undefined;

  /**
   * @member {String} content_type
   */
  exports.prototype.content_type = undefined;

  /**
   * @member {String} path
   */
  exports.prototype.path = undefined;

  return exports;

}));
