// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import update_user from './user/update-user';
import info_user from './user/info-user';
import jwt_to_api_token_user from './user/jwt-to-api-token-user';
import survey_submit_user from './user/survey-submit-user';
import transactions_user from './user/transactions-user';
import usage_user from './user/usage-user';
import create_session_user_stripe from './user/stripe/create-session-user-stripe';
import create_subscription_user_stripe from './user/stripe/create-subscription-user-stripe';
import add_git_commit_chat from './chat/add-git-commit-chat';
import add_message_chat from './chat/add-message-chat';
import create_session_chat from './chat/create-session-chat';
import delete_session_chat from './chat/delete-session-chat';
import get_git_commit_chat from './chat/get-git-commit-chat';
import get_session_chat from './chat/get-session-chat';
import get_session_timeline_chat from './chat/get-session-timeline-chat';
import list_sessions_chat from './chat/list-sessions-chat';
import create_teams from './teams/create-teams';
import update_teams from './teams/update-teams';
import list_teams from './teams/list-teams';
import delete_teams from './teams/delete-teams';
import add_member_teams from './teams/add-member-teams';
import create_project_teams from './teams/create-project-teams';
import get_teams from './teams/get-teams';
import list_members_teams from './teams/list-members-teams';
import list_projects_teams from './teams/list-projects-teams';
import remove_member_teams from './teams/remove-member-teams';
import delete_projects from './projects/delete-projects';
import get_projects from './projects/get-projects';
import create_secrets from './secrets/create-secrets';
import update_secrets from './secrets/update-secrets';
import list_secrets from './secrets/list-secrets';
import delete_secrets from './secrets/delete-secrets';
import get_secrets from './secrets/get-secrets';
import add_search_for_job_admin_human_llm from './admin/human-llm/add-search-for-job-admin-human-llm';
import add_to_dataset_admin_human_llm from './admin/human-llm/add-to-dataset-admin-human-llm';
import finish_job_admin_human_llm from './admin/human-llm/finish-job-admin-human-llm';
import get_jobs_admin_human_llm from './admin/human-llm/get-jobs-admin-human-llm';
import get_next_step_admin_human_llm from './admin/human-llm/get-next-step-admin-human-llm';
import prelabel_step_admin_human_llm from './admin/human-llm/prelabel-step-admin-human-llm';
import start_next_job_admin_human_llm from './admin/human-llm/start-next-job-admin-human-llm';
import update_step_admin_human_llm from './admin/human-llm/update-step-admin-human-llm';
import add_training_datum_admin_next_action from './admin/next-action/add-training-datum-admin-next-action';
import delete_training_data_admin_next_action from './admin/next-action/delete-training-data-admin-next-action';
import get_training_data_admin_next_action from './admin/next-action/get-training-data-admin-next-action';
import get_training_datum_admin_next_action from './admin/next-action/get-training-datum-admin-next-action';
import label_training_datum_admin_next_action from './admin/next-action/label-training-datum-admin-next-action';
import create_admin_users from './admin/users/create-admin-users';
import list_admin_users from './admin/users/list-admin-users';
import get_credits_admin_users from './admin/users/get-credits-admin-users';
import get_stats_admin_users from './admin/users/get-stats-admin-users';
import set_credits_admin_users from './admin/users/set-credits-admin-users';
import list_admin_training_datasets from './admin/training-datasets/list-admin-training-datasets';
import delete_admin_training_datasets from './admin/training-datasets/delete-admin-training-datasets';
import add_admin_training_datasets from './admin/training-datasets/add-admin-training-datasets';
import add_datum_admin_training_datasets from './admin/training-datasets/add-datum-admin-training-datasets';
import download_datum_admin_training_datasets from './admin/training-datasets/download-datum-admin-training-datasets';
import get_datum_info_admin_training_datasets from './admin/training-datasets/get-datum-info-admin-training-datasets';
import get_labeller_stats_admin_training_datasets from './admin/training-datasets/get-labeller-stats-admin-training-datasets';
import get_next_for_labeling_admin_training_datasets from './admin/training-datasets/get-next-for-labeling-admin-training-datasets';
import get_next_for_qa_admin_training_datasets from './admin/training-datasets/get-next-for-qa-admin-training-datasets';
import get_next_suspicious_admin_training_datasets from './admin/training-datasets/get-next-suspicious-admin-training-datasets';
import label_datum_admin_training_datasets from './admin/training-datasets/label-datum-admin-training-datasets';
import list_datums_admin_training_datasets from './admin/training-datasets/list-datums-admin-training-datasets';
import mark_datum_suspicious_admin_training_datasets from './admin/training-datasets/mark-datum-suspicious-admin-training-datasets';
import remove_datum_admin_training_datasets from './admin/training-datasets/remove-datum-admin-training-datasets';
import size_admin_training_datasets from './admin/training-datasets/size-admin-training-datasets';
import suspicious_count_admin_training_datasets from './admin/training-datasets/suspicious-count-admin-training-datasets';
import switch_dataset_admin_training_datasets from './admin/training-datasets/switch-dataset-admin-training-datasets';
import update_datum_status_admin_training_datasets from './admin/training-datasets/update-datum-status-admin-training-datasets';
import upload_labeled_step_admin_training_datasets from './admin/training-datasets/upload-labeled-step-admin-training-datasets';
import verify_datum_admin_training_datasets from './admin/training-datasets/verify-datum-admin-training-datasets';
import create_workflow from './workflow/create-workflow';
import update_workflow from './workflow/update-workflow';
import list_workflow from './workflow/list-workflow';
import delete_workflow from './workflow/delete-workflow';
import get_workflow from './workflow/get-workflow';
import job_progress_workflow from './workflow/job-progress-workflow';
import jobs_workflow from './workflow/jobs-workflow';
import trigger_workflow from './workflow/trigger-workflow';
import create_datasets from './datasets/create-datasets';
import list_datasets from './datasets/list-datasets';
import delete_datasets from './datasets/delete-datasets';
import add_property_datasets from './datasets/add-property-datasets';
import enrichment_progress_datasets from './datasets/enrichment-progress-datasets';
import export_to_csv_datasets from './datasets/export-to-csv-datasets';
import export_to_excel_datasets from './datasets/export-to-excel-datasets';
import get_datasets from './datasets/get-datasets';
import match_datasets from './datasets/match-datasets';
import remove_property_datasets from './datasets/remove-property-datasets';
import reorder_properties_datasets from './datasets/reorder-properties-datasets';
import set_primary_column_datasets from './datasets/set-primary-column-datasets';
import update_property_datasets from './datasets/update-property-datasets';
import update_relationship_datasets from './datasets/update-relationship-datasets';
import view_relationships_datasets from './datasets/view-relationships-datasets';
import view_table_datasets from './datasets/view-table-datasets';
import view_tables_with_relationships_datasets from './datasets/view-tables-with-relationships-datasets';
import list_datasets_evaluate from './datasets/evaluate/list-datasets-evaluate';
import delete_datasets_evaluate from './datasets/evaluate/delete-datasets-evaluate';
import get_datasets_evaluate from './datasets/evaluate/get-datasets-evaluate';
import run_datasets_evaluate from './datasets/evaluate/run-datasets-evaluate';
import status_datasets_evaluate from './datasets/evaluate/status-datasets-evaluate';
import list_documents from './documents/list-documents';
import delete_documents from './documents/delete-documents';
import download_documents from './documents/download-documents';
import structure_documents from './documents/structure-documents';
import upload_documents from './documents/upload-documents';
import list_jobs from './jobs/list-jobs';
import delete_jobs from './jobs/delete-jobs';
import cancel_jobs from './jobs/cancel-jobs';
import get_jobs from './jobs/get-jobs';
import get_scrapers_jobs from './jobs/get-scrapers-jobs';
import get_step_jobs from './jobs/get-step-jobs';
import get_step_graph_jobs from './jobs/get-step-graph-jobs';
import get_steps_jobs from './jobs/get-steps-jobs';
import schedule_jobs from './jobs/schedule-jobs';
import get_events_sessions from './sessions/get-events-sessions';
import version_server from './server/version-server';
import list_sources from './sources/list-sources';
import delete_entity_sources from './sources/delete-entity-sources';
import delete_relationship_sources from './sources/delete-relationship-sources';
import delete_entities from './entities/delete-entities';
import add_entities from './entities/add-entities';
import add_batch_entities from './entities/add-batch-entities';
import add_relationship_entities from './entities/add-relationship-entities';
import agent_merge_entities from './entities/agent-merge-entities';
import delete_relationship_entities from './entities/delete-relationship-entities';
import derive_entities from './entities/derive-entities';
import get_entities from './entities/get-entities';
import get_local_subgraph_entities from './entities/get-local-subgraph-entities';
import get_merges_entities from './entities/get-merges-entities';
import get_source_entities_entities from './entities/get-source-entities-entities';
import list_jobs_entities from './entities/list-jobs-entities';
import merge_entities from './entities/merge-entities';
import search_entities from './entities/search-entities';
import summarize_entities from './entities/summarize-entities';
import trigger_merge_entities from './entities/trigger-merge-entities';
import update_property_entities from './entities/update-property-entities';
import verify_entities from './entities/verify-entities';
import view_entities from './entities/view-entities';
import missing_report from './report/missing-report';
import relationship_report from './report/relationship-report';
import step_report from './report/step-report';
import wrong_report from './report/wrong-report';
import list_scrape from './scrape/list-scrape';
import enhance_property_structure from './structure/enhance-property-structure';
import enhance_relationship_structure from './structure/enhance-relationship-structure';
import find_relationship_structure from './structure/find-relationship-structure';
import is_complete_structure from './structure/is-complete-structure';
import job_status_structure from './structure/job-status-structure';
import run_async_structure from './structure/run-async-structure';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(update_user);
addEndpoint(info_user);
addEndpoint(jwt_to_api_token_user);
addEndpoint(survey_submit_user);
addEndpoint(transactions_user);
addEndpoint(usage_user);
addEndpoint(create_session_user_stripe);
addEndpoint(create_subscription_user_stripe);
addEndpoint(add_git_commit_chat);
addEndpoint(add_message_chat);
addEndpoint(create_session_chat);
addEndpoint(delete_session_chat);
addEndpoint(get_git_commit_chat);
addEndpoint(get_session_chat);
addEndpoint(get_session_timeline_chat);
addEndpoint(list_sessions_chat);
addEndpoint(create_teams);
addEndpoint(update_teams);
addEndpoint(list_teams);
addEndpoint(delete_teams);
addEndpoint(add_member_teams);
addEndpoint(create_project_teams);
addEndpoint(get_teams);
addEndpoint(list_members_teams);
addEndpoint(list_projects_teams);
addEndpoint(remove_member_teams);
addEndpoint(delete_projects);
addEndpoint(get_projects);
addEndpoint(create_secrets);
addEndpoint(update_secrets);
addEndpoint(list_secrets);
addEndpoint(delete_secrets);
addEndpoint(get_secrets);
addEndpoint(add_search_for_job_admin_human_llm);
addEndpoint(add_to_dataset_admin_human_llm);
addEndpoint(finish_job_admin_human_llm);
addEndpoint(get_jobs_admin_human_llm);
addEndpoint(get_next_step_admin_human_llm);
addEndpoint(prelabel_step_admin_human_llm);
addEndpoint(start_next_job_admin_human_llm);
addEndpoint(update_step_admin_human_llm);
addEndpoint(add_training_datum_admin_next_action);
addEndpoint(delete_training_data_admin_next_action);
addEndpoint(get_training_data_admin_next_action);
addEndpoint(get_training_datum_admin_next_action);
addEndpoint(label_training_datum_admin_next_action);
addEndpoint(create_admin_users);
addEndpoint(list_admin_users);
addEndpoint(get_credits_admin_users);
addEndpoint(get_stats_admin_users);
addEndpoint(set_credits_admin_users);
addEndpoint(list_admin_training_datasets);
addEndpoint(delete_admin_training_datasets);
addEndpoint(add_admin_training_datasets);
addEndpoint(add_datum_admin_training_datasets);
addEndpoint(download_datum_admin_training_datasets);
addEndpoint(get_datum_info_admin_training_datasets);
addEndpoint(get_labeller_stats_admin_training_datasets);
addEndpoint(get_next_for_labeling_admin_training_datasets);
addEndpoint(get_next_for_qa_admin_training_datasets);
addEndpoint(get_next_suspicious_admin_training_datasets);
addEndpoint(label_datum_admin_training_datasets);
addEndpoint(list_datums_admin_training_datasets);
addEndpoint(mark_datum_suspicious_admin_training_datasets);
addEndpoint(remove_datum_admin_training_datasets);
addEndpoint(size_admin_training_datasets);
addEndpoint(suspicious_count_admin_training_datasets);
addEndpoint(switch_dataset_admin_training_datasets);
addEndpoint(update_datum_status_admin_training_datasets);
addEndpoint(upload_labeled_step_admin_training_datasets);
addEndpoint(verify_datum_admin_training_datasets);
addEndpoint(create_workflow);
addEndpoint(update_workflow);
addEndpoint(list_workflow);
addEndpoint(delete_workflow);
addEndpoint(get_workflow);
addEndpoint(job_progress_workflow);
addEndpoint(jobs_workflow);
addEndpoint(trigger_workflow);
addEndpoint(create_datasets);
addEndpoint(list_datasets);
addEndpoint(delete_datasets);
addEndpoint(add_property_datasets);
addEndpoint(enrichment_progress_datasets);
addEndpoint(export_to_csv_datasets);
addEndpoint(export_to_excel_datasets);
addEndpoint(get_datasets);
addEndpoint(match_datasets);
addEndpoint(remove_property_datasets);
addEndpoint(reorder_properties_datasets);
addEndpoint(set_primary_column_datasets);
addEndpoint(update_property_datasets);
addEndpoint(update_relationship_datasets);
addEndpoint(view_relationships_datasets);
addEndpoint(view_table_datasets);
addEndpoint(view_tables_with_relationships_datasets);
addEndpoint(list_datasets_evaluate);
addEndpoint(delete_datasets_evaluate);
addEndpoint(get_datasets_evaluate);
addEndpoint(run_datasets_evaluate);
addEndpoint(status_datasets_evaluate);
addEndpoint(list_documents);
addEndpoint(delete_documents);
addEndpoint(download_documents);
addEndpoint(structure_documents);
addEndpoint(upload_documents);
addEndpoint(list_jobs);
addEndpoint(delete_jobs);
addEndpoint(cancel_jobs);
addEndpoint(get_jobs);
addEndpoint(get_scrapers_jobs);
addEndpoint(get_step_jobs);
addEndpoint(get_step_graph_jobs);
addEndpoint(get_steps_jobs);
addEndpoint(schedule_jobs);
addEndpoint(get_events_sessions);
addEndpoint(version_server);
addEndpoint(list_sources);
addEndpoint(delete_entity_sources);
addEndpoint(delete_relationship_sources);
addEndpoint(delete_entities);
addEndpoint(add_entities);
addEndpoint(add_batch_entities);
addEndpoint(add_relationship_entities);
addEndpoint(agent_merge_entities);
addEndpoint(delete_relationship_entities);
addEndpoint(derive_entities);
addEndpoint(get_entities);
addEndpoint(get_local_subgraph_entities);
addEndpoint(get_merges_entities);
addEndpoint(get_source_entities_entities);
addEndpoint(list_jobs_entities);
addEndpoint(merge_entities);
addEndpoint(search_entities);
addEndpoint(summarize_entities);
addEndpoint(trigger_merge_entities);
addEndpoint(update_property_entities);
addEndpoint(verify_entities);
addEndpoint(view_entities);
addEndpoint(missing_report);
addEndpoint(relationship_report);
addEndpoint(step_report);
addEndpoint(wrong_report);
addEndpoint(list_scrape);
addEndpoint(enhance_property_structure);
addEndpoint(enhance_relationship_structure);
addEndpoint(find_relationship_structure);
addEndpoint(is_complete_structure);
addEndpoint(job_status_structure);
addEndpoint(run_async_structure);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
