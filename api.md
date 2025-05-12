# User

Types:

- <code><a href="./src/resources/user/user.ts">TokenResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserInfo</a></code>
- <code><a href="./src/resources/user/user.ts">UserTransactionsResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserUsageResponse</a></code>

Methods:

- <code title="get /user/info">client.user.<a href="./src/resources/user/user.ts">info</a>() -> UserInfo</code>
- <code title="post /user/jwt_to_api_token/{jwt}">client.user.<a href="./src/resources/user/user.ts">jwtToAPIToken</a>(jwt) -> TokenResponse</code>
- <code title="get /user/transactions/list">client.user.<a href="./src/resources/user/user.ts">transactions</a>() -> UserTransactionsResponse</code>
- <code title="get /user/usage">client.user.<a href="./src/resources/user/user.ts">usage</a>({ ...params }) -> UserUsageResponse</code>

## Stripe

Types:

- <code><a href="./src/resources/user/stripe.ts">CreateSessionRequest</a></code>
- <code><a href="./src/resources/user/stripe.ts">CreateSessionResponse</a></code>
- <code><a href="./src/resources/user/stripe.ts">CreateSubscriptionRequest</a></code>
- <code><a href="./src/resources/user/stripe.ts">SubscriptionPlan</a></code>

Methods:

- <code title="post /user/transactions/stripe/create_session">client.user.stripe.<a href="./src/resources/user/stripe.ts">createSession</a>({ ...params }) -> CreateSessionResponse</code>
- <code title="post /user/transactions/stripe/create_subscription">client.user.stripe.<a href="./src/resources/user/stripe.ts">createSubscription</a>({ ...params }) -> CreateSessionResponse</code>

# Admin

## HumanLlm

Types:

- <code><a href="./src/resources/admin/human-llm.ts">HumanLlmJob</a></code>
- <code><a href="./src/resources/admin/human-llm.ts">StepChoices</a></code>
- <code><a href="./src/resources/admin/human-llm.ts">HumanLlmAddToDatasetResponse</a></code>
- <code><a href="./src/resources/admin/human-llm.ts">HumanLlmFinishJobResponse</a></code>
- <code><a href="./src/resources/admin/human-llm.ts">HumanLlmGetJobsResponse</a></code>
- <code><a href="./src/resources/admin/human-llm.ts">HumanLlmGetNextStepResponse</a></code>
- <code><a href="./src/resources/admin/human-llm.ts">HumanLlmPrelabelStepResponse</a></code>

Methods:

- <code title="post /admin/human_llm/add_search_for_job">client.admin.humanLlm.<a href="./src/resources/admin/human-llm.ts">addSearchForJob</a>({ ...params }) -> StepChoices</code>
- <code title="post /admin/human_llm/add_to_dataset">client.admin.humanLlm.<a href="./src/resources/admin/human-llm.ts">addToDataset</a>({ ...params }) -> unknown</code>
- <code title="post /admin/human_llm/finish_job">client.admin.humanLlm.<a href="./src/resources/admin/human-llm.ts">finishJob</a>({ ...params }) -> unknown</code>
- <code title="post /admin/human_llm/get_jobs">client.admin.humanLlm.<a href="./src/resources/admin/human-llm.ts">getJobs</a>({ ...params }) -> HumanLlmGetJobsResponse</code>
- <code title="post /admin/human_llm/get_next_step">client.admin.humanLlm.<a href="./src/resources/admin/human-llm.ts">getNextStep</a>({ ...params }) -> HumanLlmGetNextStepResponse</code>
- <code title="post /admin/human_llm/prelabel_step/{step_id}">client.admin.humanLlm.<a href="./src/resources/admin/human-llm.ts">prelabelStep</a>(stepId) -> HumanLlmPrelabelStepResponse</code>
- <code title="post /admin/human_llm/start_next_job">client.admin.humanLlm.<a href="./src/resources/admin/human-llm.ts">startNextJob</a>({ ...params }) -> StepChoices</code>
- <code title="post /admin/human_llm/update_step">client.admin.humanLlm.<a href="./src/resources/admin/human-llm.ts">updateStep</a>({ ...params }) -> StepChoices</code>

## NextAction

Types:

- <code><a href="./src/resources/admin/next-action.ts">ActionTrainingDataEntry</a></code>
- <code><a href="./src/resources/admin/next-action.ts">ActionTrainingDataResponse</a></code>
- <code><a href="./src/resources/admin/next-action.ts">AddActionTrainingDatumRequest</a></code>
- <code><a href="./src/resources/admin/next-action.ts">DeleteActionTrainingDataParams</a></code>
- <code><a href="./src/resources/admin/next-action.ts">DeleteActionTrainingDataResponse</a></code>
- <code><a href="./src/resources/admin/next-action.ts">GetActionTrainingDataParams</a></code>
- <code><a href="./src/resources/admin/next-action.ts">LabelActionTrainingDatumRequest</a></code>

Methods:

- <code title="post /admin/next_action/add_action_training_datum">client.admin.nextAction.<a href="./src/resources/admin/next-action.ts">addTrainingDatum</a>({ ...params }) -> void</code>
- <code title="delete /admin/next_action/delete_action_training_data">client.admin.nextAction.<a href="./src/resources/admin/next-action.ts">deleteTrainingData</a>({ ...params }) -> DeleteActionTrainingDataResponse</code>
- <code title="get /admin/next_action/get_action_training_data">client.admin.nextAction.<a href="./src/resources/admin/next-action.ts">getTrainingData</a>({ ...params }) -> ActionTrainingDataResponse</code>
- <code title="put /admin/next_action/label_action_training_datum">client.admin.nextAction.<a href="./src/resources/admin/next-action.ts">labelTrainingDatum</a>({ ...params }) -> void</code>

## Users

Types:

- <code><a href="./src/resources/admin/users.ts">User</a></code>
- <code><a href="./src/resources/admin/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/admin/users.ts">UserGetCreditsResponse</a></code>
- <code><a href="./src/resources/admin/users.ts">UserGetStatsResponse</a></code>
- <code><a href="./src/resources/admin/users.ts">UserSetCreditsResponse</a></code>

Methods:

- <code title="post /admin/users/create">client.admin.users.<a href="./src/resources/admin/users.ts">create</a>({ ...params }) -> TokenResponse</code>
- <code title="put /admin/users/update">client.admin.users.<a href="./src/resources/admin/users.ts">update</a>({ ...params }) -> User</code>
- <code title="get /admin/users/list">client.admin.users.<a href="./src/resources/admin/users.ts">list</a>() -> UserListResponse</code>
- <code title="post /admin/users/get_credits">client.admin.users.<a href="./src/resources/admin/users.ts">getCredits</a>({ ...params }) -> UserGetCreditsResponse</code>
- <code title="post /admin/users/get_stats">client.admin.users.<a href="./src/resources/admin/users.ts">getStats</a>({ ...params }) -> UserGetStatsResponse</code>
- <code title="post /admin/users/set_credits">client.admin.users.<a href="./src/resources/admin/users.ts">setCredits</a>({ ...params }) -> UserSetCreditsResponse</code>

## TrainingDatasets

Types:

- <code><a href="./src/resources/admin/training-datasets.ts">AddDatumRequest</a></code>
- <code><a href="./src/resources/admin/training-datasets.ts">DatumStatus</a></code>
- <code><a href="./src/resources/admin/training-datasets.ts">LabelingStats</a></code>
- <code><a href="./src/resources/admin/training-datasets.ts">TrainingDatumResponse</a></code>
- <code><a href="./src/resources/admin/training-datasets.ts">UpdateDatumStatusRequest</a></code>
- <code><a href="./src/resources/admin/training-datasets.ts">TrainingDatasetListResponse</a></code>
- <code><a href="./src/resources/admin/training-datasets.ts">TrainingDatasetGetLabellerStatsResponse</a></code>
- <code><a href="./src/resources/admin/training-datasets.ts">TrainingDatasetListDatumsResponse</a></code>
- <code><a href="./src/resources/admin/training-datasets.ts">TrainingDatasetSizeResponse</a></code>
- <code><a href="./src/resources/admin/training-datasets.ts">TrainingDatasetSuspiciousCountResponse</a></code>

Methods:

- <code title="get /admin/training_datasets/list">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">list</a>() -> TrainingDatasetListResponse</code>
- <code title="delete /admin/training_datasets/delete_dataset">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /admin/training_datasets/add_dataset">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">add</a>({ ...params }) -> void</code>
- <code title="post /admin/training_datasets/add_datum">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">addDatum</a>({ ...params }) -> void</code>
- <code title="get /admin/training_datasets/download_datum_step">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">downloadDatum</a>({ ...params }) -> Response</code>
- <code title="get /admin/training_datasets/get_datum_info">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">getDatumInfo</a>({ ...params }) -> TrainingDatumResponse</code>
- <code title="get /admin/training_datasets/labeller_stats">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">getLabellerStats</a>({ ...params }) -> TrainingDatasetGetLabellerStatsResponse</code>
- <code title="get /admin/training_datasets/get_next_for_labeling">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">getNextForLabeling</a>({ ...params }) -> TrainingDatumResponse | null</code>
- <code title="get /admin/training_datasets/get_next_for_qa">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">getNextForQa</a>({ ...params }) -> TrainingDatumResponse | null</code>
- <code title="get /admin/training_datasets/get_next_suspicious">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">getNextSuspicious</a>({ ...params }) -> TrainingDatumResponse | null</code>
- <code title="put /admin/training_datasets/label_datum">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">labelDatum</a>({ ...params }) -> void</code>
- <code title="get /admin/training_datasets/list_datums">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">listDatums</a>({ ...params }) -> TrainingDatasetListDatumsResponse</code>
- <code title="put /admin/training_datasets/mark_datum_suspicious">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">markDatumSuspicious</a>({ ...params }) -> void</code>
- <code title="delete /admin/training_datasets/remove_from_dataset">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">removeDatum</a>({ ...params }) -> void</code>
- <code title="post /admin/training_datasets/size">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">size</a>({ ...params }) -> TrainingDatasetSizeResponse</code>
- <code title="get /admin/training_datasets/suspicious_count">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">suspiciousCount</a>({ ...params }) -> TrainingDatasetSuspiciousCountResponse</code>
- <code title="post /admin/training_datasets/switch_dataset">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">switchDataset</a>({ ...params }) -> void</code>
- <code title="post /admin/training_datasets/update_datum_status">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">updateDatumStatus</a>({ ...params }) -> void</code>
- <code title="post /admin/training_datasets/upload_labeled_step">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">uploadLabeledStep</a>({ ...params }) -> void</code>
- <code title="put /admin/training_datasets/verify_datum">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">verifyDatum</a>({ ...params }) -> void</code>

# Workflow

Types:

- <code><a href="./src/resources/workflow.ts">ExistingWorkflow</a></code>
- <code><a href="./src/resources/workflow.ts">ID</a></code>
- <code><a href="./src/resources/workflow.ts">Workflow</a></code>
- <code><a href="./src/resources/workflow.ts">WorkflowListResponse</a></code>
- <code><a href="./src/resources/workflow.ts">WorkflowTriggerResponse</a></code>

Methods:

- <code title="post /workflow/create">client.workflow.<a href="./src/resources/workflow.ts">create</a>({ ...params }) -> string</code>
- <code title="put /workflow/update">client.workflow.<a href="./src/resources/workflow.ts">update</a>({ ...params }) -> string</code>
- <code title="post /workflow/list">client.workflow.<a href="./src/resources/workflow.ts">list</a>({ ...params }) -> WorkflowListResponse</code>
- <code title="delete /workflow/delete">client.workflow.<a href="./src/resources/workflow.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /workflow/get">client.workflow.<a href="./src/resources/workflow.ts">get</a>({ ...params }) -> ExistingWorkflow</code>
- <code title="post /workflow/trigger">client.workflow.<a href="./src/resources/workflow.ts">trigger</a>({ ...params }) -> unknown</code>

# Datasets

Types:

- <code><a href="./src/resources/datasets/datasets.ts">MergeConfig</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">RelationshipMergeStrategy</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">Strategy</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">DatasetCreateResponse</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">DatasetEnrichmentProgressResponse</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">DatasetGetResponse</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">DatasetMatchResponse</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">DatasetViewRelationshipsResponse</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">DatasetViewTableResponse</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">DatasetViewTablesWithRelationshipsResponse</a></code>

Methods:

- <code title="post /dataset/create">client.datasets.<a href="./src/resources/datasets/datasets.ts">create</a>({ ...params }) -> string</code>
- <code title="get /dataset/list">client.datasets.<a href="./src/resources/datasets/datasets.ts">list</a>() -> DatasetListResponse</code>
- <code title="delete /dataset/delete">client.datasets.<a href="./src/resources/datasets/datasets.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /dataset/add_property">client.datasets.<a href="./src/resources/datasets/datasets.ts">addProperty</a>({ ...params }) -> void</code>
- <code title="get /dataset/enrichment_progress">client.datasets.<a href="./src/resources/datasets/datasets.ts">enrichmentProgress</a>({ ...params }) -> DatasetEnrichmentProgressResponse</code>
- <code title="get /dataset/export_to_csv">client.datasets.<a href="./src/resources/datasets/datasets.ts">exportToCsv</a>({ ...params }) -> void</code>
- <code title="get /dataset/export_to_excel">client.datasets.<a href="./src/resources/datasets/datasets.ts">exportToExcel</a>({ ...params }) -> void</code>
- <code title="get /dataset/info">client.datasets.<a href="./src/resources/datasets/datasets.ts">get</a>({ ...params }) -> DatasetGetResponse</code>
- <code title="post /dataset/match">client.datasets.<a href="./src/resources/datasets/datasets.ts">match</a>({ ...params }) -> DatasetMatchResponse</code>
- <code title="post /dataset/remove_property">client.datasets.<a href="./src/resources/datasets/datasets.ts">removeProperty</a>({ ...params }) -> void</code>
- <code title="post /dataset/reorder_properties">client.datasets.<a href="./src/resources/datasets/datasets.ts">reorderProperties</a>({ ...params }) -> void</code>
- <code title="post /dataset/set_primary_column">client.datasets.<a href="./src/resources/datasets/datasets.ts">setPrimaryColumn</a>({ ...params }) -> void</code>
- <code title="post /dataset/update_property">client.datasets.<a href="./src/resources/datasets/datasets.ts">updateProperty</a>({ ...params }) -> void</code>
- <code title="get /dataset/view_relationships">client.datasets.<a href="./src/resources/datasets/datasets.ts">viewRelationships</a>({ ...params }) -> DatasetViewRelationshipsResponsesJobsList</code>
- <code title="get /dataset/view_table">client.datasets.<a href="./src/resources/datasets/datasets.ts">viewTable</a>({ ...params }) -> DatasetViewTableResponsesJobsList</code>
- <code title="get /dataset/view_tables_with_relationships">client.datasets.<a href="./src/resources/datasets/datasets.ts">viewTablesWithRelationships</a>({ ...params }) -> DatasetViewTablesWithRelationshipsResponse</code>

## Evaluate

Types:

- <code><a href="./src/resources/datasets/evaluate.ts">EvaluateListResponse</a></code>
- <code><a href="./src/resources/datasets/evaluate.ts">EvaluateGetResponse</a></code>
- <code><a href="./src/resources/datasets/evaluate.ts">EvaluateRunResponse</a></code>
- <code><a href="./src/resources/datasets/evaluate.ts">EvaluateStatusResponse</a></code>

Methods:

- <code title="get /dataset/evaluate/list">client.datasets.evaluate.<a href="./src/resources/datasets/evaluate.ts">list</a>({ ...params }) -> EvaluateListResponsesJobsList</code>
- <code title="delete /dataset/evaluate/delete">client.datasets.evaluate.<a href="./src/resources/datasets/evaluate.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /dataset/evaluate/get">client.datasets.evaluate.<a href="./src/resources/datasets/evaluate.ts">get</a>({ ...params }) -> EvaluateGetResponse</code>
- <code title="post /dataset/evaluate/run">client.datasets.evaluate.<a href="./src/resources/datasets/evaluate.ts">run</a>({ ...params }) -> string</code>
- <code title="get /dataset/evaluate/status">client.datasets.evaluate.<a href="./src/resources/datasets/evaluate.ts">status</a>({ ...params }) -> EvaluateStatusResponse</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">DocumentListResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentDownloadResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentStructureResponse</a></code>

Methods:

- <code title="get /documents/list">client.documents.<a href="./src/resources/documents.ts">list</a>({ ...params }) -> DocumentListResponse</code>
- <code title="delete /documents/delete">client.documents.<a href="./src/resources/documents.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /documents/download">client.documents.<a href="./src/resources/documents.ts">download</a>({ ...params }) -> DocumentDownloadResponse</code>
- <code title="post /documents/structure">client.documents.<a href="./src/resources/documents.ts">structure</a>({ ...params }) -> string</code>
- <code title="post /documents/upload">client.documents.<a href="./src/resources/documents.ts">upload</a>({ ...params }) -> void</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobDeleteResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobCancelResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobGetResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobGetStepResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobGetStepGraphResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobGetStepsResponse</a></code>

Methods:

- <code title="get /jobs/list">client.jobs.<a href="./src/resources/jobs.ts">list</a>({ ...params }) -> JobListResponsesJobsList</code>
- <code title="post /jobs/delete/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">delete</a>(jobId) -> string</code>
- <code title="post /jobs/cancel/{uuid}">client.jobs.<a href="./src/resources/jobs.ts">cancel</a>(uuid) -> JobCancelResponse</code>
- <code title="get /jobs/get/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">get</a>(jobId) -> JobGetResponse</code>
- <code title="get /jobs/get_step/{step_id}">client.jobs.<a href="./src/resources/jobs.ts">getStep</a>(stepId) -> JobGetStepResponse</code>
- <code title="get /jobs/get_step_graph/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">getStepGraph</a>(jobId) -> JobGetStepGraphResponse</code>
- <code title="get /jobs/get_steps/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">getSteps</a>(jobId) -> JobGetStepsResponse</code>
- <code title="post /jobs/schedule">client.jobs.<a href="./src/resources/jobs.ts">schedule</a>() -> void</code>

# Server

Types:

- <code><a href="./src/resources/server.ts">ServerInformation</a></code>

Methods:

- <code title="get /server/version">client.server.<a href="./src/resources/server.ts">version</a>() -> ServerInformation</code>

# Sources

Types:

- <code><a href="./src/resources/sources.ts">Source</a></code>
- <code><a href="./src/resources/sources.ts">SourceListResponse</a></code>

Methods:

- <code title="get /source/get_sources">client.sources.<a href="./src/resources/sources.ts">list</a>({ ...params }) -> SourceListResponse</code>

# Entities

Types:

- <code><a href="./src/resources/entities.ts">EntityDeleteResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityAddResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityAddBatchResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityAddRelationshipResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityDeleteRelationshipResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityDeriveResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityGetResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityGetLocalSubgraphResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityGetMergesResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityGetSourceEntitiesResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityListJobsResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityMergeResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntitySearchResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntitySummarizeResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityTriggerMergeResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityUpdatePropertyResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityViewResponse</a></code>

Methods:

- <code title="delete /entity/delete">client.entities.<a href="./src/resources/entities.ts">delete</a>({ ...params }) -> EntityDeleteResponse</code>
- <code title="post /entity/add">client.entities.<a href="./src/resources/entities.ts">add</a>({ ...params }) -> EntityAddResponse</code>
- <code title="post /entity/add_batch">client.entities.<a href="./src/resources/entities.ts">addBatch</a>({ ...params }) -> EntityAddBatchResponse</code>
- <code title="post /entity/add_relationship">client.entities.<a href="./src/resources/entities.ts">addRelationship</a>({ ...params }) -> EntityAddRelationshipResponse</code>
- <code title="post /entity/delete_relationship">client.entities.<a href="./src/resources/entities.ts">deleteRelationship</a>({ ...params }) -> unknown</code>
- <code title="post /entity/derive">client.entities.<a href="./src/resources/entities.ts">derive</a>({ ...params }) -> string</code>
- <code title="get /entity/get">client.entities.<a href="./src/resources/entities.ts">get</a>({ ...params }) -> EntityGetResponse</code>
- <code title="get /entity/get_local_subgraph">client.entities.<a href="./src/resources/entities.ts">getLocalSubgraph</a>({ ...params }) -> EntityGetLocalSubgraphResponse</code>
- <code title="get /entity/get_merges">client.entities.<a href="./src/resources/entities.ts">getMerges</a>({ ...params }) -> EntityGetMergesResponse</code>
- <code title="get /entity/get_source_entities">client.entities.<a href="./src/resources/entities.ts">getSourceEntities</a>({ ...params }) -> EntityGetSourceEntitiesResponse</code>
- <code title="get /entity/list_jobs">client.entities.<a href="./src/resources/entities.ts">listJobs</a>({ ...params }) -> EntityListJobsResponse</code>
- <code title="post /entity/merge">client.entities.<a href="./src/resources/entities.ts">merge</a>({ ...params }) -> EntityMergeResponse</code>
- <code title="post /entity/search">client.entities.<a href="./src/resources/entities.ts">search</a>({ ...params }) -> EntitySearchResponse</code>
- <code title="post /entity/summarize">client.entities.<a href="./src/resources/entities.ts">summarize</a>({ ...params }) -> EntitySummarizeResponse</code>
- <code title="post /entity/trigger_merge">client.entities.<a href="./src/resources/entities.ts">triggerMerge</a>({ ...params }) -> EntityTriggerMergeResponse</code>
- <code title="post /entity/update">client.entities.<a href="./src/resources/entities.ts">updateProperty</a>({ ...params }) -> EntityUpdatePropertyResponse</code>
- <code title="post /entity/verify">client.entities.<a href="./src/resources/entities.ts">verify</a>({ ...params }) -> KnowledgeGraph</code>
- <code title="get /entity/view">client.entities.<a href="./src/resources/entities.ts">view</a>({ ...params }) -> EntityViewResponse</code>

# Report

Types:

- <code><a href="./src/resources/report.ts">ReportMissingResponse</a></code>
- <code><a href="./src/resources/report.ts">ReportRelationshipResponse</a></code>
- <code><a href="./src/resources/report.ts">ReportStepResponse</a></code>
- <code><a href="./src/resources/report.ts">ReportWrongResponse</a></code>

Methods:

- <code title="post /report/entity/missing">client.report.<a href="./src/resources/report.ts">missing</a>({ ...params }) -> string</code>
- <code title="post /report/relationship/missing">client.report.<a href="./src/resources/report.ts">relationship</a>({ ...params }) -> string</code>
- <code title="post /report/step">client.report.<a href="./src/resources/report.ts">step</a>({ ...params }) -> string</code>
- <code title="post /report/entity/wrong">client.report.<a href="./src/resources/report.ts">wrong</a>({ ...params }) -> string</code>

# Structure

Types:

- <code><a href="./src/resources/structure.ts">ChatPrompt</a></code>
- <code><a href="./src/resources/structure.ts">ExecutionStep</a></code>
- <code><a href="./src/resources/structure.ts">SaveRequirement</a></code>
- <code><a href="./src/resources/structure.ts">ToolMetadata</a></code>
- <code><a href="./src/resources/structure.ts">StructureEnhancePropertyResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureEnhanceRelationshipResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureFindRelationshipResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureIsCompleteResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureJobStatusResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureRunAsyncResponse</a></code>

Methods:

- <code title="post /structure/enhance_property">client.structure.<a href="./src/resources/structure.ts">enhanceProperty</a>({ ...params }) -> string</code>
- <code title="post /structure/enhance_relationship">client.structure.<a href="./src/resources/structure.ts">enhanceRelationship</a>({ ...params }) -> string</code>
- <code title="post /structure/find_relationship">client.structure.<a href="./src/resources/structure.ts">findRelationship</a>({ ...params }) -> string</code>
- <code title="post /structure/is_complete">client.structure.<a href="./src/resources/structure.ts">isComplete</a>([ ...job ]) -> string</code>
- <code title="post /structure/job_status">client.structure.<a href="./src/resources/structure.ts">jobStatus</a>({ ...params }) -> StructureJobStatusResponse</code>
- <code title="post /structure/run_async">client.structure.<a href="./src/resources/structure.ts">runAsync</a>({ ...params }) -> string</code>

# Shared

Types:

- <code><a href="./src/resources/shared.ts">DatasetDescriptor</a></code>
- <code><a href="./src/resources/shared.ts">Entity</a></code>
- <code><a href="./src/resources/shared.ts">EntityMatch</a></code>
- <code><a href="./src/resources/shared.ts">Image</a></code>
- <code><a href="./src/resources/shared.ts">KnowledgeGraph</a></code>
- <code><a href="./src/resources/shared.ts">PropertyType</a></code>
- <code><a href="./src/resources/shared.ts">Relationship</a></code>
- <code><a href="./src/resources/shared.ts">Table</a></code>
