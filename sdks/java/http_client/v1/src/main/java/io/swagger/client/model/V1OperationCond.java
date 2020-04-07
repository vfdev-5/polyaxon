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


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.V1IoCond;
import io.swagger.client.model.V1StatusCond;
import java.io.IOException;

/**
 * V1OperationCond
 */

public class V1OperationCond {
  @SerializedName("io_conidtion")
  private V1IoCond ioConidtion = null;

  @SerializedName("status_condition")
  private V1StatusCond statusCondition = null;

  public V1OperationCond ioConidtion(V1IoCond ioConidtion) {
    this.ioConidtion = ioConidtion;
    return this;
  }

   /**
   * Get ioConidtion
   * @return ioConidtion
  **/
  @ApiModelProperty(value = "")
  public V1IoCond getIoConidtion() {
    return ioConidtion;
  }

  public void setIoConidtion(V1IoCond ioConidtion) {
    this.ioConidtion = ioConidtion;
  }

  public V1OperationCond statusCondition(V1StatusCond statusCondition) {
    this.statusCondition = statusCondition;
    return this;
  }

   /**
   * Get statusCondition
   * @return statusCondition
  **/
  @ApiModelProperty(value = "")
  public V1StatusCond getStatusCondition() {
    return statusCondition;
  }

  public void setStatusCondition(V1StatusCond statusCondition) {
    this.statusCondition = statusCondition;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1OperationCond v1OperationCond = (V1OperationCond) o;
    return Objects.equals(this.ioConidtion, v1OperationCond.ioConidtion) &&
        Objects.equals(this.statusCondition, v1OperationCond.statusCondition);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ioConidtion, statusCondition);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1OperationCond {\n");
    
    sb.append("    ioConidtion: ").append(toIndentedString(ioConidtion)).append("\n");
    sb.append("    statusCondition: ").append(toIndentedString(statusCondition)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

