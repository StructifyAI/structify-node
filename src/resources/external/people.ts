// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class People extends APIResource {
  /**
   * Search for companies using various filters and criteria
   */
  companiesSearch(
    body: PersonCompaniesSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CompaniesSearchResponse> {
    return this._client.post('/external/people/mixed_companies/search', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific organization
   */
  organizationDetail(id: string, options?: Core.RequestOptions): Core.APIPromise<OrganizationDetail> {
    return this._client.get(`/external/people/organizations/${id}`, options);
  }

  /**
   * Retrieve job postings for a specific organization
   */
  organizationJobPostings(
    organizationId: string,
    query?: PersonOrganizationJobPostingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobPostingsResponse>;
  organizationJobPostings(
    organizationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobPostingsResponse>;
  organizationJobPostings(
    organizationId: string,
    query: PersonOrganizationJobPostingsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobPostingsResponse> {
    if (isRequestOptions(query)) {
      return this.organizationJobPostings(organizationId, {}, query);
    }
    return this._client.get(`/external/people/organizations/${organizationId}/job_postings`, {
      query,
      ...options,
    });
  }

  /**
   * Enrich organization data using Apollo.io's organization enrichment
   */
  organizationsEnrich(
    query?: PersonOrganizationsEnrichParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EnrichedOrganization>;
  organizationsEnrich(options?: Core.RequestOptions): Core.APIPromise<EnrichedOrganization>;
  organizationsEnrich(
    query: PersonOrganizationsEnrichParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EnrichedOrganization> {
    if (isRequestOptions(query)) {
      return this.organizationsEnrich({}, query);
    }
    return this._client.get('/external/people/organizations/enrich', { query, ...options });
  }

  /**
   * Enrich a single person's profile data using Apollo.io's person matching
   */
  peopleMatch(
    body: PersonPeopleMatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeopleMatchResponse> {
    return this._client.post('/external/people/people/match', { body, ...options });
  }

  /**
   * Search for people using various filters and criteria
   */
  peopleSearch(
    body: PersonPeopleSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PeopleSearchResponse> {
    return this._client.post('/external/people/mixed_people/search', { body, ...options });
  }
}

export interface CompaniesSearchRequest {
  /**
   * Organization department headcount ranges
   */
  organization_department_headcount_ranges?: Array<string> | null;

  /**
   * Organization founded year maximum
   */
  organization_founded_year_max?: number | null;

  /**
   * Organization founded year minimum
   */
  organization_founded_year_min?: number | null;

  /**
   * Organization locations
   */
  organization_locations?: Array<string> | null;

  /**
   * Organization NAICS codes
   */
  organization_naics_codes?: Array<string> | null;

  /**
   * Organization ids to exclude
   */
  organization_not_ids?: Array<string> | null;

  /**
   * Organization num employees ranges
   */
  organization_num_employees_ranges?: Array<string> | null;

  /**
   * Organization revenue ranges
   */
  organization_revenue_ranges?: Array<string> | null;

  /**
   * Organization SIC codes
   */
  organization_sic_codes?: Array<string> | null;

  /**
   * Organization technologies
   */
  organization_technologies?: Array<string> | null;

  /**
   * Page number (default: 1)
   */
  page?: number | null;

  /**
   * Number of results per page (max 200)
   */
  per_page?: number | null;

  /**
   * Keywords to search for
   */
  q_keywords?: string | null;

  /**
   * Organization industries
   */
  q_organization_industry_tag_ids?: Array<string> | null;

  /**
   * Organization keyword tags
   */
  q_organization_keyword_tags?: Array<string> | null;

  /**
   * Sort ascending
   */
  sort_ascending?: boolean | null;

  /**
   * Sort by field
   */
  sort_by_field?: string | null;
}

export interface CompaniesSearchResponse {
  /**
   * Array of organization results
   */
  organizations: Array<CompanySearchResult>;

  /**
   * Pagination information
   */
  pagination: unknown;

  /**
   * Breadcrumbs
   */
  breadcrumbs?: Array<{ [key: string]: unknown }> | null;

  /**
   * Disable eu prospecting
   */
  disable_eu_prospecting?: boolean | null;

  /**
   * Partial results limit
   */
  partial_results_limit?: number | null;

  /**
   * Partial results only
   */
  partial_results_only?: boolean | null;
}

export interface CompanySearchResult {
  /**
   * Organization ID
   */
  id: string;

  /**
   * Organization name
   */
  name: string;

  /**
   * Annual revenue
   */
  annual_revenue?: string | null;

  /**
   * Blog URL
   */
  blog_url?: string | null;

  /**
   * Description
   */
  description?: string | null;

  /**
   * Facebook URL
   */
  facebook_url?: string | null;

  /**
   * Founded year
   */
  founded_year?: number | null;

  /**
   * Headquarters location
   */
  headquarters?: unknown;

  /**
   * Industry
   */
  industry?: string | null;

  /**
   * LinkedIn URL
   */
  linkedin_url?: string | null;

  /**
   * Logo URL
   */
  logo_url?: string | null;

  /**
   * NAICS codes
   */
  naics_codes?: Array<string> | null;

  /**
   * Number of employees
   */
  num_employees?: number | null;

  /**
   * Number of employees range
   */
  num_employees_range?: string | null;

  /**
   * Phone number
   */
  phone?: string | null;

  /**
   * Publicly traded symbol
   */
  publicly_traded_symbol?: string | null;

  /**
   * SIC codes
   */
  sic_codes?: Array<string> | null;

  /**
   * Technologies used
   */
  technologies?: Array<{ [key: string]: unknown }> | null;

  /**
   * Twitter URL
   */
  twitter_url?: string | null;

  /**
   * Website URL
   */
  website_url?: string | null;
}

export interface EnrichedOrganization {
  /**
   * Unique organization ID in Apollo
   */
  id: string;

  /**
   * Organization name
   */
  name: string;

  /**
   * Annual revenue
   */
  annual_revenue?: string | null;

  /**
   * Blog URL
   */
  blog_url?: string | null;

  /**
   * Description
   */
  description?: string | null;

  /**
   * Facebook URL
   */
  facebook_url?: string | null;

  /**
   * Founded year
   */
  founded_year?: number | null;

  /**
   * Headquarters
   */
  headquarters?: unknown;

  /**
   * Industry
   */
  industry?: string | null;

  /**
   * LinkedIn URL
   */
  linkedin_url?: string | null;

  /**
   * Logo URL
   */
  logo_url?: string | null;

  /**
   * NAICS codes
   */
  naics_codes?: Array<string> | null;

  /**
   * Employee count
   */
  num_employees?: number | null;

  /**
   * Company size
   */
  num_employees_range?: string | null;

  /**
   * Phone number
   */
  phone?: string | null;

  /**
   * Publicly traded status
   */
  publicly_traded_symbol?: string | null;

  /**
   * SIC codes
   */
  sic_codes?: Array<string> | null;

  /**
   * Technologies used
   */
  technologies?: Array<{ [key: string]: unknown }> | null;

  /**
   * Twitter URL
   */
  twitter_url?: string | null;

  /**
   * Website domain
   */
  website_url?: string | null;
}

export interface JobPosting {
  /**
   * Job posting ID
   */
  id: string;

  /**
   * Job title
   */
  title: string;

  /**
   * Application URL
   */
  application_url?: string | null;

  /**
   * Department
   */
  department?: string | null;

  /**
   * Job description
   */
  description?: string | null;

  /**
   * Education required
   */
  education_required?: string | null;

  /**
   * Employment type (full-time, part-time, contract, etc.)
   */
  employment_type?: string | null;

  /**
   * Experience required
   */
  experience_required?: string | null;

  /**
   * Job function
   */
  job_function?: string | null;

  /**
   * Location
   */
  location?: string | null;

  /**
   * Posted date
   */
  posted_date?: string | null;

  /**
   * Remote work allowed
   */
  remote_allowed?: boolean | null;

  /**
   * Salary range
   */
  salary_range?: string | null;

  /**
   * Seniority level
   */
  seniority_level?: string | null;

  /**
   * Job posting URL
   */
  url?: string | null;
}

export interface JobPostingsQuery {
  /**
   * Page number (default: 1)
   */
  page?: number | null;

  /**
   * Number of results per page (max 200)
   */
  per_page?: number | null;
}

export interface JobPostingsResponse {
  /**
   * Array of job postings
   */
  job_postings: Array<JobPosting>;

  /**
   * Pagination information
   */
  pagination: unknown;

  /**
   * Organization information
   */
  organization?: unknown;
}

export interface OrganizationDetail {
  /**
   * Unique organization ID in Apollo
   */
  id: string;

  /**
   * Organization name
   */
  name: string;

  /**
   * Annual revenue
   */
  annual_revenue?: string | null;

  /**
   * Blog URL
   */
  blog_url?: string | null;

  /**
   * Competitors
   */
  competitors?: Array<{ [key: string]: unknown }> | null;

  /**
   * Department headcounts
   */
  department_headcounts?: unknown;

  /**
   * Description
   */
  description?: string | null;

  /**
   * Employee growth rate
   */
  employee_growth_rate?: number | null;

  /**
   * Facebook URL
   */
  facebook_url?: string | null;

  /**
   * Founded year
   */
  founded_year?: number | null;

  /**
   * Funding information
   */
  funding?: unknown;

  /**
   * Headquarters information
   */
  headquarters?: unknown;

  /**
   * Industry
   */
  industry?: string | null;

  /**
   * Keywords
   */
  keywords?: Array<string> | null;

  /**
   * LinkedIn URL
   */
  linkedin_url?: string | null;

  /**
   * Logo URL
   */
  logo_url?: string | null;

  /**
   * NAICS codes
   */
  naics_codes?: Array<string> | null;

  /**
   * Employee count
   */
  num_employees?: number | null;

  /**
   * Company size
   */
  num_employees_range?: string | null;

  /**
   * Phone number
   */
  phone?: string | null;

  /**
   * Publicly traded status
   */
  publicly_traded_symbol?: string | null;

  /**
   * Recent news
   */
  recent_news?: Array<{ [key: string]: unknown }> | null;

  /**
   * SIC codes
   */
  sic_codes?: Array<string> | null;

  /**
   * Technologies used
   */
  technologies?: Array<{ [key: string]: unknown }> | null;

  /**
   * Twitter URL
   */
  twitter_url?: string | null;

  /**
   * Website domain
   */
  website_url?: string | null;
}

export interface OrganizationEnrichQuery {
  /**
   * Organization domain (e.g., "apollo.io")
   */
  domain?: string | null;

  /**
   * Organization name
   */
  organization_name?: string | null;
}

export interface PeopleMatchRequest {
  /**
   * Company domain
   */
  company_domain?: string | null;

  /**
   * Company name
   */
  company_name?: string | null;

  /**
   * Email address
   */
  email?: string | null;

  /**
   * First name
   */
  first_name?: string | null;

  /**
   * Last name
   */
  last_name?: string | null;

  /**
   * LinkedIn URL
   */
  linkedin_url?: string | null;

  /**
   * Location (city, state, country)
   */
  location?: string | null;

  /**
   * Full name (alternative to first/last)
   */
  name?: string | null;

  /**
   * Phone number
   */
  phone?: string | null;

  /**
   * Whether to reveal personal email
   */
  reveal_personal_emails?: boolean | null;

  /**
   * Whether to reveal phone numbers
   */
  reveal_phone_number?: boolean | null;

  /**
   * Whether to reveal work email
   */
  reveal_professional_emails?: boolean | null;

  /**
   * Job title
   */
  title?: string | null;
}

export interface PeopleMatchResponse {
  /**
   * Whether this is an exact match
   */
  is_likely_to_engage?: boolean | null;

  /**
   * Match confidence
   */
  match_confidence?: number | null;

  person?: PersonMatch | null;
}

export interface PeopleSearchRequest {
  /**
   * Contact email status
   */
  contact_email_status?: Array<string> | null;

  /**
   * Organization ids
   */
  organization_ids?: Array<string> | null;

  /**
   * Organization locations
   */
  organization_locations?: Array<string> | null;

  /**
   * Organization num employees ranges
   */
  organization_num_employees_ranges?: Array<string> | null;

  /**
   * Page number (default: 1)
   */
  page?: number | null;

  /**
   * Number of results per page (max 200)
   */
  per_page?: number | null;

  /**
   * Person departments
   */
  person_departments?: Array<string> | null;

  /**
   * Person locations
   */
  person_locations?: Array<string> | null;

  /**
   * Person seniorities
   */
  person_seniorities?: Array<string> | null;

  /**
   * Person titles to include
   */
  person_titles?: Array<string> | null;

  /**
   * Keywords
   */
  q_keywords?: string | null;

  /**
   * Organization industries
   */
  q_organization_industry_tag_ids?: Array<string> | null;

  /**
   * Reveal personal emails
   */
  reveal_personal_emails?: boolean | null;

  /**
   * Reveal phone numbers
   */
  reveal_phone_number?: boolean | null;

  /**
   * Reveal work emails
   */
  reveal_professional_emails?: boolean | null;
}

export interface PeopleSearchResponse {
  /**
   * Pagination information
   */
  pagination: unknown;

  /**
   * Array of people results
   */
  people: Array<PersonSearchResult>;

  /**
   * Breadcrumbs
   */
  breadcrumbs?: Array<{ [key: string]: unknown }> | null;

  /**
   * Disable eu prospecting
   */
  disable_eu_prospecting?: boolean | null;

  /**
   * Partial results limit
   */
  partial_results_limit?: number | null;

  /**
   * Partial results only
   */
  partial_results_only?: boolean | null;
}

export interface PersonMatch {
  /**
   * Unique person ID in Apollo
   */
  id: string;

  /**
   * Location
   */
  city?: string | null;

  /**
   * Country
   */
  country?: string | null;

  /**
   * Email addresses
   */
  email?: string | null;

  /**
   * Employment history
   */
  employment_history?: Array<{ [key: string]: unknown }> | null;

  /**
   * First name
   */
  first_name?: string | null;

  /**
   * Confidence score
   */
  headline?: string | null;

  /**
   * Last name
   */
  last_name?: string | null;

  /**
   * LinkedIn URL
   */
  linkedin_url?: string | null;

  /**
   * Apollo match confidence
   */
  match_score?: number | null;

  /**
   * Full name
   */
  name?: string | null;

  /**
   * Company information
   */
  organization?: unknown;

  /**
   * Personal emails
   */
  personal_emails?: Array<string> | null;

  /**
   * Phone numbers
   */
  phone_numbers?: Array<{ [key: string]: unknown }> | null;

  /**
   * State
   */
  state?: string | null;

  /**
   * Job title
   */
  title?: string | null;

  /**
   * Work email
   */
  work_email?: string | null;
}

export interface PersonSearchResult {
  /**
   * Person ID
   */
  id: string;

  /**
   * City
   */
  city?: string | null;

  /**
   * Country
   */
  country?: string | null;

  /**
   * Email address
   */
  email?: string | null;

  /**
   * Employment history
   */
  employment_history?: Array<{ [key: string]: unknown }> | null;

  /**
   * First name
   */
  first_name?: string | null;

  /**
   * Last name
   */
  last_name?: string | null;

  /**
   * LinkedIn URL
   */
  linkedin_url?: string | null;

  /**
   * Full name
   */
  name?: string | null;

  /**
   * Organization
   */
  organization?: unknown;

  /**
   * Phone numbers
   */
  phone_numbers?: Array<{ [key: string]: unknown }> | null;

  /**
   * State
   */
  state?: string | null;

  /**
   * Job title
   */
  title?: string | null;
}

export interface PersonCompaniesSearchParams {
  /**
   * Organization department headcount ranges
   */
  organization_department_headcount_ranges?: Array<string> | null;

  /**
   * Organization founded year maximum
   */
  organization_founded_year_max?: number | null;

  /**
   * Organization founded year minimum
   */
  organization_founded_year_min?: number | null;

  /**
   * Organization locations
   */
  organization_locations?: Array<string> | null;

  /**
   * Organization NAICS codes
   */
  organization_naics_codes?: Array<string> | null;

  /**
   * Organization ids to exclude
   */
  organization_not_ids?: Array<string> | null;

  /**
   * Organization num employees ranges
   */
  organization_num_employees_ranges?: Array<string> | null;

  /**
   * Organization revenue ranges
   */
  organization_revenue_ranges?: Array<string> | null;

  /**
   * Organization SIC codes
   */
  organization_sic_codes?: Array<string> | null;

  /**
   * Organization technologies
   */
  organization_technologies?: Array<string> | null;

  /**
   * Page number (default: 1)
   */
  page?: number | null;

  /**
   * Number of results per page (max 200)
   */
  per_page?: number | null;

  /**
   * Keywords to search for
   */
  q_keywords?: string | null;

  /**
   * Organization industries
   */
  q_organization_industry_tag_ids?: Array<string> | null;

  /**
   * Organization keyword tags
   */
  q_organization_keyword_tags?: Array<string> | null;

  /**
   * Sort ascending
   */
  sort_ascending?: boolean | null;

  /**
   * Sort by field
   */
  sort_by_field?: string | null;
}

export interface PersonOrganizationJobPostingsParams {
  /**
   * Page number
   */
  page?: number | null;

  /**
   * Results per page
   */
  per_page?: number | null;
}

export interface PersonOrganizationsEnrichParams {
  /**
   * Organization domain
   */
  domain?: string | null;

  /**
   * Organization name
   */
  organization_name?: string | null;
}

export interface PersonPeopleMatchParams {
  /**
   * Company domain
   */
  company_domain?: string | null;

  /**
   * Company name
   */
  company_name?: string | null;

  /**
   * Email address
   */
  email?: string | null;

  /**
   * First name
   */
  first_name?: string | null;

  /**
   * Last name
   */
  last_name?: string | null;

  /**
   * LinkedIn URL
   */
  linkedin_url?: string | null;

  /**
   * Location (city, state, country)
   */
  location?: string | null;

  /**
   * Full name (alternative to first/last)
   */
  name?: string | null;

  /**
   * Phone number
   */
  phone?: string | null;

  /**
   * Whether to reveal personal email
   */
  reveal_personal_emails?: boolean | null;

  /**
   * Whether to reveal phone numbers
   */
  reveal_phone_number?: boolean | null;

  /**
   * Whether to reveal work email
   */
  reveal_professional_emails?: boolean | null;

  /**
   * Job title
   */
  title?: string | null;
}

export interface PersonPeopleSearchParams {
  /**
   * Contact email status
   */
  contact_email_status?: Array<string> | null;

  /**
   * Organization ids
   */
  organization_ids?: Array<string> | null;

  /**
   * Organization locations
   */
  organization_locations?: Array<string> | null;

  /**
   * Organization num employees ranges
   */
  organization_num_employees_ranges?: Array<string> | null;

  /**
   * Page number (default: 1)
   */
  page?: number | null;

  /**
   * Number of results per page (max 200)
   */
  per_page?: number | null;

  /**
   * Person departments
   */
  person_departments?: Array<string> | null;

  /**
   * Person locations
   */
  person_locations?: Array<string> | null;

  /**
   * Person seniorities
   */
  person_seniorities?: Array<string> | null;

  /**
   * Person titles to include
   */
  person_titles?: Array<string> | null;

  /**
   * Keywords
   */
  q_keywords?: string | null;

  /**
   * Organization industries
   */
  q_organization_industry_tag_ids?: Array<string> | null;

  /**
   * Reveal personal emails
   */
  reveal_personal_emails?: boolean | null;

  /**
   * Reveal phone numbers
   */
  reveal_phone_number?: boolean | null;

  /**
   * Reveal work emails
   */
  reveal_professional_emails?: boolean | null;
}

export declare namespace People {
  export {
    type CompaniesSearchRequest as CompaniesSearchRequest,
    type CompaniesSearchResponse as CompaniesSearchResponse,
    type CompanySearchResult as CompanySearchResult,
    type EnrichedOrganization as EnrichedOrganization,
    type JobPosting as JobPosting,
    type JobPostingsQuery as JobPostingsQuery,
    type JobPostingsResponse as JobPostingsResponse,
    type OrganizationDetail as OrganizationDetail,
    type OrganizationEnrichQuery as OrganizationEnrichQuery,
    type PeopleMatchRequest as PeopleMatchRequest,
    type PeopleMatchResponse as PeopleMatchResponse,
    type PeopleSearchRequest as PeopleSearchRequest,
    type PeopleSearchResponse as PeopleSearchResponse,
    type PersonMatch as PersonMatch,
    type PersonSearchResult as PersonSearchResult,
    type PersonCompaniesSearchParams as PersonCompaniesSearchParams,
    type PersonOrganizationJobPostingsParams as PersonOrganizationJobPostingsParams,
    type PersonOrganizationsEnrichParams as PersonOrganizationsEnrichParams,
    type PersonPeopleMatchParams as PersonPeopleMatchParams,
    type PersonPeopleSearchParams as PersonPeopleSearchParams,
  };
}
