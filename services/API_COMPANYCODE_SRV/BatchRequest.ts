/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import { CompanyCode } from './index';

/**
 * Batch builder for operations supported on the Api Companycode Srv.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadApiCompanycodeSrvRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadApiCompanycodeSrvRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadApiCompanycodeSrvRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadApiCompanycodeSrvRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadApiCompanycodeSrvRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultApiCompanycodeSrvPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Api Companycode Srv.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteApiCompanycodeSrvRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteApiCompanycodeSrvRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteApiCompanycodeSrvRequestBuilder<DeSerializersT>
    | Array<WriteApiCompanycodeSrvRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteApiCompanycodeSrvRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultApiCompanycodeSrvPath =
  '/sap/opu/odata/sap/API_COMPANYCODE_SRV';
export type ReadApiCompanycodeSrvRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<CompanyCode<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CompanyCode<DeSerializersT>, DeSerializersT>;
export type WriteApiCompanycodeSrvRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<CompanyCode<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CompanyCode<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CompanyCode<DeSerializersT>, DeSerializersT>;
