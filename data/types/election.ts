/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Unique identifier of an election in the format of UUID
 */
export type ID = string;
/**
 * Human-friendly unique key of an election in the hyphen-separated lowercased format
 */
export type Key = string;
/**
 * Time of the creation of an election in the ISO 8601 format
 */
export type CreatedAt = string;
/**
 * Time of the last update of an election group in the ISO 8601 format
 */
export type UpdatedAt = string;
/**
 * Time when an election group should be published in the ISO 8601 format
 */
export type PublishedAt = string;
/**
 * Title of an election
 */
export type Title = string;
/**
 * Short title of an election with a maximum of 25 characters
 */
export type ShortTitle = string;
/**
 * Description of an election
 */
export type Description = string;
/**
 * Ordered list of tags
 *
 * @minItems 1
 */
export type Tags = [Tag, ...Tag[]];
/**
 * Tag with max. 25 characters
 */
export type Tag = string;
/**
 * Unique identifier of a calculator group in the format of UUID
 */
export type ID1 = string;
/**
 * Human-friendly unique key of a calculator group in the hyphen-separated lowercased format
 */
export type Key1 = string;
/**
 * @minItems 1
 */
export type OrderedListOfElectionDistricts = [District, ...District[]];
/**
 * Human-friendly unique key of a district in the hyphen-separated lowercased format
 */
export type Key2 = string;
/**
 * Official district code assigned by the election authority
 */
export type Code = string;
/**
 * @minItems 1
 */
export type OrderedListOfElectionRounds = [Round, ...Round[]];
/**
 * Round ordinal number from 0
 */
export type Number = number;
/**
 * One or multiple voting hours for the round
 *
 * @minItems 1
 */
export type VotingHours = [TimePeriod, ...TimePeriod[]];
/**
 * Start date (or time) of a voting period in the ISO 8601 format
 */
export type StartTime = string | string;
/**
 * End date (or time) of a voting period in the ISO 8601 format
 */
export type EndTime = string | string;
/**
 * One or multiple voting hours for the election
 *
 * @minItems 1
 */
export type VotingHours1 = [TimePeriod, ...TimePeriod[]];

/**
 * Election provides various details about an election such as districts and rounds
 */
export interface Election {
  id: ID;
  key: Key;
  createdAt: CreatedAt;
  updatedAt?: UpdatedAt;
  publishedAt?: PublishedAt;
  title: Title;
  shortTitle: ShortTitle;
  description?: Description;
  tags?: Tags;
  calculatorGroup: CalculatorGroup;
  districts?: OrderedListOfElectionDistricts;
  rounds?: OrderedListOfElectionRounds;
  votingHours?: VotingHours1;
  [k: string]: unknown;
}
/**
 * Reference to a calculator group with election calculators
 */
export interface CalculatorGroup {
  id: ID1;
  key: Key1;
  [k: string]: unknown;
}
/**
 * Geographical area of an election
 */
export interface District {
  key: Key2;
  code?: Code;
  [k: string]: unknown;
}
/**
 * Round of an election
 */
export interface Round {
  number: Number;
  votingHours?: VotingHours;
  [k: string]: unknown;
}
/**
 * Time period from–to
 */
export interface TimePeriod {
  start: StartTime;
  end: EndTime;
  [k: string]: unknown;
}
