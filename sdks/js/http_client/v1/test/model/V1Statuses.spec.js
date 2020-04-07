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
    describe('V1Statuses', function() {
      beforeEach(function() {
        instance = PolyaxonSdk.V1Statuses;
      });

      it('should create an instance of V1Statuses', function() {
        // TODO: update the code to test V1Statuses
        expect(instance).to.be.a('object');
      });

      it('should have the property created', function() {
        expect(instance).to.have.property('created');
        expect(instance.created).to.be("created");
      });

      it('should have the property resuming', function() {
        expect(instance).to.have.property('resuming');
        expect(instance.resuming).to.be("resuming");
      });

      it('should have the property warning', function() {
        expect(instance).to.have.property('warning');
        expect(instance.warning).to.be("warning");
      });

      it('should have the property unschedulable', function() {
        expect(instance).to.have.property('unschedulable');
        expect(instance.unschedulable).to.be("unschedulable");
      });

      it('should have the property queued', function() {
        expect(instance).to.have.property('queued');
        expect(instance.queued).to.be("queued");
      });

      it('should have the property scheduled', function() {
        expect(instance).to.have.property('scheduled');
        expect(instance.scheduled).to.be("scheduled");
      });

      it('should have the property starting', function() {
        expect(instance).to.have.property('starting');
        expect(instance.starting).to.be("starting");
      });

      it('should have the property running', function() {
        expect(instance).to.have.property('running');
        expect(instance.running).to.be("running");
      });

      it('should have the property succeeded', function() {
        expect(instance).to.have.property('succeeded');
        expect(instance.succeeded).to.be("succeeded");
      });

      it('should have the property failed', function() {
        expect(instance).to.have.property('failed');
        expect(instance.failed).to.be("failed");
      });

      it('should have the property upstream_failed', function() {
        expect(instance).to.have.property('upstream_failed');
        expect(instance.upstream_failed).to.be("upstream_failed");
      });

      it('should have the property stopping', function() {
        expect(instance).to.have.property('stopping');
        expect(instance.stopping).to.be("stopping");
      });

      it('should have the property stopped', function() {
        expect(instance).to.have.property('stopped');
        expect(instance.stopped).to.be("stopped");
      });

      it('should have the property skipped', function() {
        expect(instance).to.have.property('skipped');
        expect(instance.skipped).to.be("skipped");
      });

      it('should have the property retrying', function() {
        expect(instance).to.have.property('retrying');
        expect(instance.retrying).to.be("retrying");
      });

      it('should have the property unknown', function() {
        expect(instance).to.have.property('unknown');
        expect(instance.unknown).to.be("unknown");
      });

    });
  });

}));
