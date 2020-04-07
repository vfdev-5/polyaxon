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
    define(['ApiClient', 'model/RuntimeError', 'model/V1ListTeamMembersResponse', 'model/V1ListTeamsResponse', 'model/V1Team', 'model/V1TeamMember'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RuntimeError'), require('../model/V1ListTeamMembersResponse'), require('../model/V1ListTeamsResponse'), require('../model/V1Team'), require('../model/V1TeamMember'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.TeamsV1Api = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.RuntimeError, root.PolyaxonSdk.V1ListTeamMembersResponse, root.PolyaxonSdk.V1ListTeamsResponse, root.PolyaxonSdk.V1Team, root.PolyaxonSdk.V1TeamMember);
  }
}(this, function(ApiClient, RuntimeError, V1ListTeamMembersResponse, V1ListTeamsResponse, V1Team, V1TeamMember) {
  'use strict';

  /**
   * TeamsV1 service.
   * @module api/TeamsV1Api
   * @version 1.0.74
   */

  /**
   * Constructs a new TeamsV1Api. 
   * @alias module:api/TeamsV1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createTeam operation.
     * @callback module:api/TeamsV1Api~createTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Team} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create organization
     * @param {String} owner Owner of the namespace
     * @param {module:model/V1Team} body Team body
     * @param {module:api/TeamsV1Api~createTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Team}
     */
    this.createTeam = function(owner, body, callback) {
      var postBody = body;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createTeam");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTeam");
      }


      var pathParams = {
        'owner': owner
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1Team;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/teams', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createTeamMember operation.
     * @callback module:api/TeamsV1Api~createTeamMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1TeamMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create organization member
     * @param {String} owner Owner of the namespace
     * @param {String} team Team
     * @param {module:model/V1TeamMember} body Team body
     * @param {module:api/TeamsV1Api~createTeamMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1TeamMember}
     */
    this.createTeamMember = function(owner, team, body, callback) {
      var postBody = body;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createTeamMember");
      }

      // verify the required parameter 'team' is set
      if (team === undefined || team === null) {
        throw new Error("Missing the required parameter 'team' when calling createTeamMember");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTeamMember");
      }


      var pathParams = {
        'owner': owner,
        'team': team
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1TeamMember;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/teams/{team}/members', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTeam operation.
     * @callback module:api/TeamsV1Api~deleteTeamCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete organization
     * @param {String} owner Owner of the namespace
     * @param {String} team Team under namesapce
     * @param {module:api/TeamsV1Api~deleteTeamCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTeam = function(owner, team, callback) {
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteTeam");
      }

      // verify the required parameter 'team' is set
      if (team === undefined || team === null) {
        throw new Error("Missing the required parameter 'team' when calling deleteTeam");
      }


      var pathParams = {
        'owner': owner,
        'team': team
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/teams/{team}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTeamMember operation.
     * @callback module:api/TeamsV1Api~deleteTeamMemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete organization member details
     * @param {String} owner Owner of the namespace
     * @param {String} team Team under namesapce
     * @param {String} user Member under team
     * @param {module:api/TeamsV1Api~deleteTeamMemberCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTeamMember = function(owner, team, user, callback) {
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteTeamMember");
      }

      // verify the required parameter 'team' is set
      if (team === undefined || team === null) {
        throw new Error("Missing the required parameter 'team' when calling deleteTeamMember");
      }

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling deleteTeamMember");
      }


      var pathParams = {
        'owner': owner,
        'team': team,
        'user': user
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/teams/{team}/members/{user}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeam operation.
     * @callback module:api/TeamsV1Api~getTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Team} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get organization
     * @param {String} owner Owner of the namespace
     * @param {String} team Team under namesapce
     * @param {module:api/TeamsV1Api~getTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Team}
     */
    this.getTeam = function(owner, team, callback) {
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getTeam");
      }

      // verify the required parameter 'team' is set
      if (team === undefined || team === null) {
        throw new Error("Missing the required parameter 'team' when calling getTeam");
      }


      var pathParams = {
        'owner': owner,
        'team': team
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1Team;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/teams/{team}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeamMember operation.
     * @callback module:api/TeamsV1Api~getTeamMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1TeamMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get organization member details
     * @param {String} owner Owner of the namespace
     * @param {String} team Team under namesapce
     * @param {String} user Member under team
     * @param {module:api/TeamsV1Api~getTeamMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1TeamMember}
     */
    this.getTeamMember = function(owner, team, user, callback) {
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getTeamMember");
      }

      // verify the required parameter 'team' is set
      if (team === undefined || team === null) {
        throw new Error("Missing the required parameter 'team' when calling getTeamMember");
      }

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling getTeamMember");
      }


      var pathParams = {
        'owner': owner,
        'team': team,
        'user': user
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1TeamMember;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/teams/{team}/members/{user}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listTeamMembers operation.
     * @callback module:api/TeamsV1Api~listTeamMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListTeamMembersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get organization members
     * @param {String} owner Owner of the namespace
     * @param {String} team Team under namesapce
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/TeamsV1Api~listTeamMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListTeamMembersResponse}
     */
    this.listTeamMembers = function(owner, team, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listTeamMembers");
      }

      // verify the required parameter 'team' is set
      if (team === undefined || team === null) {
        throw new Error("Missing the required parameter 'team' when calling listTeamMembers");
      }


      var pathParams = {
        'owner': owner,
        'team': team
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1ListTeamMembersResponse;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/teams/{team}/members', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listTeamNames operation.
     * @callback module:api/TeamsV1Api~listTeamNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListTeamsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organizations names
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/TeamsV1Api~listTeamNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListTeamsResponse}
     */
    this.listTeamNames = function(owner, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listTeamNames");
      }


      var pathParams = {
        'owner': owner
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1ListTeamsResponse;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/teams/names', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listTeams operation.
     * @callback module:api/TeamsV1Api~listTeamsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListTeamsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organizations
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/TeamsV1Api~listTeamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListTeamsResponse}
     */
    this.listTeams = function(owner, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listTeams");
      }


      var pathParams = {
        'owner': owner
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1ListTeamsResponse;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/teams', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchTeam operation.
     * @callback module:api/TeamsV1Api~patchTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Team} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch organization
     * @param {String} owner Owner of the namespace
     * @param {String} team_name Name
     * @param {module:model/V1Team} body Team body
     * @param {module:api/TeamsV1Api~patchTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Team}
     */
    this.patchTeam = function(owner, team_name, body, callback) {
      var postBody = body;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchTeam");
      }

      // verify the required parameter 'team_name' is set
      if (team_name === undefined || team_name === null) {
        throw new Error("Missing the required parameter 'team_name' when calling patchTeam");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchTeam");
      }


      var pathParams = {
        'owner': owner,
        'team.name': team_name
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1Team;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/teams/{team.name}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchTeamMember operation.
     * @callback module:api/TeamsV1Api~patchTeamMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1TeamMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch organization member
     * @param {String} owner Owner of the namespace
     * @param {String} team Team
     * @param {String} member_user User
     * @param {module:model/V1TeamMember} body Team body
     * @param {module:api/TeamsV1Api~patchTeamMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1TeamMember}
     */
    this.patchTeamMember = function(owner, team, member_user, body, callback) {
      var postBody = body;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchTeamMember");
      }

      // verify the required parameter 'team' is set
      if (team === undefined || team === null) {
        throw new Error("Missing the required parameter 'team' when calling patchTeamMember");
      }

      // verify the required parameter 'member_user' is set
      if (member_user === undefined || member_user === null) {
        throw new Error("Missing the required parameter 'member_user' when calling patchTeamMember");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchTeamMember");
      }


      var pathParams = {
        'owner': owner,
        'team': team,
        'member.user': member_user
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1TeamMember;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/teams/{team}/members/{member.user}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTeam operation.
     * @callback module:api/TeamsV1Api~updateTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Team} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update organization
     * @param {String} owner Owner of the namespace
     * @param {String} team_name Name
     * @param {module:model/V1Team} body Team body
     * @param {module:api/TeamsV1Api~updateTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Team}
     */
    this.updateTeam = function(owner, team_name, body, callback) {
      var postBody = body;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateTeam");
      }

      // verify the required parameter 'team_name' is set
      if (team_name === undefined || team_name === null) {
        throw new Error("Missing the required parameter 'team_name' when calling updateTeam");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTeam");
      }


      var pathParams = {
        'owner': owner,
        'team.name': team_name
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1Team;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/teams/{team.name}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTeamMember operation.
     * @callback module:api/TeamsV1Api~updateTeamMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1TeamMember} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update organization member
     * @param {String} owner Owner of the namespace
     * @param {String} team Team
     * @param {String} member_user User
     * @param {module:model/V1TeamMember} body Team body
     * @param {module:api/TeamsV1Api~updateTeamMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1TeamMember}
     */
    this.updateTeamMember = function(owner, team, member_user, body, callback) {
      var postBody = body;

      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateTeamMember");
      }

      // verify the required parameter 'team' is set
      if (team === undefined || team === null) {
        throw new Error("Missing the required parameter 'team' when calling updateTeamMember");
      }

      // verify the required parameter 'member_user' is set
      if (member_user === undefined || member_user === null) {
        throw new Error("Missing the required parameter 'member_user' when calling updateTeamMember");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTeamMember");
      }


      var pathParams = {
        'owner': owner,
        'team': team,
        'member.user': member_user
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = V1TeamMember;

      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/teams/{team}/members/{member.user}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
