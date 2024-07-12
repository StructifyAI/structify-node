// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as SharedAPI from './shared';

export class Shared extends APIResource {}

export interface Entity {
  id: number;

  properties: Record<string, string>;

  type: string;
}

/**
 * Knowledge graph info structured to deserialize and display in the same format
 * that the LLM outputs. Also the first representation of an LLM output in the
 * pipeline from raw tool output to being merged into a Neo4j DB
 */
export interface KnowledgeGraph {
  entities?: Array<Entity>;

  relationships?: Array<Relationship>;
}

export interface Relationship {
  source: number;

  target: number;

  type: string;
}

export interface StructifyID {
  id: string;

  id_type: 'Job' | 'Step' | 'Logger' | 'None';
}

export namespace Shared {
  export import Entity = SharedAPI.Entity;
  export import KnowledgeGraph = SharedAPI.KnowledgeGraph;
  export import Relationship = SharedAPI.Relationship;
  export import StructifyID = SharedAPI.StructifyID;
}
