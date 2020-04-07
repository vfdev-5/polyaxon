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
    describe('V1KFReplica', function() {
      beforeEach(function() {
        instance = new PolyaxonSdk.V1KFReplica();
      });

      it('should create an instance of V1KFReplica', function() {
        // TODO: update the code to test V1KFReplica
        expect(instance).to.be.a(PolyaxonSdk.V1KFReplica);
      });

      it('should have the property replicas (base name: "replicas")', function() {
        // TODO: update the code to test the property replicas
        expect(instance).to.have.property('replicas');
        // expect(instance.replicas).to.be(expectedValueLiteral);
      });

      it('should have the property environment (base name: "environment")', function() {
        // TODO: update the code to test the property environment
        expect(instance).to.have.property('environment');
        // expect(instance.environment).to.be(expectedValueLiteral);
      });

      it('should have the property connections (base name: "connections")', function() {
        // TODO: update the code to test the property connections
        expect(instance).to.have.property('connections');
        // expect(instance.connections).to.be(expectedValueLiteral);
      });

      it('should have the property volumes (base name: "volumes")', function() {
        // TODO: update the code to test the property volumes
        expect(instance).to.have.property('volumes');
        // expect(instance.volumes).to.be(expectedValueLiteral);
      });

      it('should have the property init (base name: "init")', function() {
        // TODO: update the code to test the property init
        expect(instance).to.have.property('init');
        // expect(instance.init).to.be(expectedValueLiteral);
      });

      it('should have the property sidecars (base name: "sidecars")', function() {
        // TODO: update the code to test the property sidecars
        expect(instance).to.have.property('sidecars');
        // expect(instance.sidecars).to.be(expectedValueLiteral);
      });

      it('should have the property container (base name: "container")', function() {
        // TODO: update the code to test the property container
        expect(instance).to.have.property('container');
        // expect(instance.container).to.be(expectedValueLiteral);
      });

    });
  });

}));
