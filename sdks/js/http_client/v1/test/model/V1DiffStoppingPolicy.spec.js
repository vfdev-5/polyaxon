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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('V1DiffStoppingPolicy', function() {
      beforeEach(function() {
        instance = new PolyaxonSdk.V1DiffStoppingPolicy();
      });

      it('should create an instance of V1DiffStoppingPolicy', function() {
        // TODO: update the code to test V1DiffStoppingPolicy
        expect(instance).to.be.a(PolyaxonSdk.V1DiffStoppingPolicy);
      });

      it('should have the property kind (base name: "kind")', function() {
        // TODO: update the code to test the property kind
        expect(instance).to.have.property('kind');
        // expect(instance.kind).to.be(expectedValueLiteral);
      });

      it('should have the property percent (base name: "percent")', function() {
        // TODO: update the code to test the property percent
        expect(instance).to.have.property('percent');
        // expect(instance.percent).to.be(expectedValueLiteral);
      });

      it('should have the property evaluation_interval (base name: "evaluation_interval")', function() {
        // TODO: update the code to test the property evaluation_interval
        expect(instance).to.have.property('evaluation_interval');
        // expect(instance.evaluation_interval).to.be(expectedValueLiteral);
      });

      it('should have the property min_interval (base name: "min_interval")', function() {
        // TODO: update the code to test the property min_interval
        expect(instance).to.have.property('min_interval');
        // expect(instance.min_interval).to.be(expectedValueLiteral);
      });

      it('should have the property min_samples (base name: "min_samples")', function() {
        // TODO: update the code to test the property min_samples
        expect(instance).to.have.property('min_samples');
        // expect(instance.min_samples).to.be(expectedValueLiteral);
      });

    });
  });

}));
