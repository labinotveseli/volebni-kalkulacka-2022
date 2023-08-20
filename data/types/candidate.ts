/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Unique identifier of a candidate in the format of UUID
 */
export type ID = string;
/**
 * Unique identifier of a reference in the format of UUID
 */
export type ID1 = string;
/**
 * Type of a reference: either a person or an organization
 */
export type Type = "person" | "organization";

/**
 * Candidate for a calculator
 */
export interface Candidate {
  id: ID;
  reference: PersonOrOrganizationReference;
  [k: string]: unknown;
}
/**
 * Reference to a person or an organization which is a candidate
 */
export interface PersonOrOrganizationReference {
  id: ID1;
  type: Type;
  [k: string]: unknown;
}
