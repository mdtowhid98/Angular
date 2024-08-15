import { Beneficiary } from './beneficiary';
import { Client } from './client';
import { Product } from './product';
import { Document } from './document';
export interface Policy {
  id?: number;
  client: Client;
  product: Product;
  policyNumber: string;
  beneficiaries: Beneficiary[];
  documents: Document[];
  issueDate: Date;
  coverageStartDate: Date;
  coverageEndDate: Date;
}
