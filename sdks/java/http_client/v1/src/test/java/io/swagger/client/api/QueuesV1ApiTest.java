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
 * Do not edit the class manually.
 */


package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.model.RuntimeError;
import io.swagger.client.model.V1Agent;
import io.swagger.client.model.V1ListQueuesResponse;
import io.swagger.client.model.V1Queue;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for QueuesV1Api
 */
@Ignore
public class QueuesV1ApiTest {

    private final QueuesV1Api api = new QueuesV1Api();

    
    /**
     * Update agent
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createQueueTest() throws ApiException {
        String owner = null;
        String agent = null;
        V1Queue body = null;
        V1Agent response = api.createQueue(owner, agent, body);

        // TODO: test validations
    }
    
    /**
     * Sync agent
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteQueueTest() throws ApiException {
        String owner = null;
        String agent = null;
        String uuid = null;
        api.deleteQueue(owner, agent, uuid);

        // TODO: test validations
    }
    
    /**
     * Patch agent
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getQueueTest() throws ApiException {
        String owner = null;
        String agent = null;
        String uuid = null;
        V1Queue response = api.getQueue(owner, agent, uuid);

        // TODO: test validations
    }
    
    /**
     * List agents names
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listOrganizationQueueNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListQueuesResponse response = api.listOrganizationQueueNames(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * List agents
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listOrganizationQueuesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListQueuesResponse response = api.listOrganizationQueues(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Create agent
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listQueueNamesTest() throws ApiException {
        String owner = null;
        String agent = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListQueuesResponse response = api.listQueueNames(owner, agent, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Get agent
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listQueuesTest() throws ApiException {
        String owner = null;
        String agent = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListQueuesResponse response = api.listQueues(owner, agent, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Get State (queues/runs)
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchQueueTest() throws ApiException {
        String owner = null;
        String queueAgent = null;
        String queueUuid = null;
        V1Queue body = null;
        V1Queue response = api.patchQueue(owner, queueAgent, queueUuid, body);

        // TODO: test validations
    }
    
    /**
     * Delete agent
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateQueueTest() throws ApiException {
        String owner = null;
        String queueAgent = null;
        String queueUuid = null;
        V1Queue body = null;
        V1Queue response = api.updateQueue(owner, queueAgent, queueUuid, body);

        // TODO: test validations
    }
    
}
