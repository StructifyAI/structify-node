# User

Types:

- <code><a href="./src/resources/user.ts">TokenResponse</a></code>
- <code><a href="./src/resources/user.ts">UserInfo</a></code>
- <code><a href="./src/resources/user.ts">UserTransactionsResponse</a></code>
- <code><a href="./src/resources/user.ts">UserUsageResponse</a></code>

Methods:

- <code title="get /user/info">client.user.<a href="./src/resources/user.ts">info</a>() -> UserInfo</code>
- <code title="post /user/jwt_to_api_token/{jwt}">client.user.<a href="./src/resources/user.ts">jwtToAPIToken</a>(jwt) -> TokenResponse</code>
- <code title="get /user/transactions/list">client.user.<a href="./src/resources/user.ts">transactions</a>() -> UserTransactionsResponse</code>
- <code title="get /user/usage">client.user.<a href="./src/resources/user.ts">usage</a>({ ...params }) -> UserUsageResponse</code>

# Admin

## HumanLlm

## NextAction

Types:

- <code><a href="./src/resources/admin/next-action.ts">ActionTrainingDataEntry</a></code>
- <code><a href="./src/resources/admin/next-action.ts">NextActionDeleteTrainingDataResponse</a></code>
- <code><a href="./src/resources/admin/next-action.ts">NextActionGetTrainingDataResponse</a></code>

Methods:

- <code title="post /admin/next_action/add_action_training_datum">client.admin.nextAction.<a href="./src/resources/admin/next-action.ts">addTrainingDatum</a>({ ...params }) -> void</code>
- <code title="delete /admin/next_action/delete_action_training_data">client.admin.nextAction.<a href="./src/resources/admin/next-action.ts">deleteTrainingData</a>({ ...params }) -> unknown</code>
- <code title="get /admin/next_action/get_action_training_data">client.admin.nextAction.<a href="./src/resources/admin/next-action.ts">getTrainingData</a>({ ...params }) -> unknown</code>
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

- <code><a href="./src/resources/admin/training-datasets.ts">DatumStatus</a></code>
- <code><a href="./src/resources/admin/training-datasets.ts">LabelingStats</a></code>

# Datasets

Types:

- <code><a href="./src/resources/datasets/datasets.ts">MergeConfig</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">RelationshipMergeStrategy</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">Strategy</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">DatasetGetResponse</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">DatasetMatchResponse</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">DatasetViewRelationshipsResponse</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">DatasetViewTableResponse</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">DatasetViewTablesWithRelationshipsResponse</a></code>

Methods:

- <code title="post /dataset/create">client.datasets.<a href="./src/resources/datasets/datasets.ts">create</a>({ ...params }) -> void</code>
- <code title="get /dataset/list">client.datasets.<a href="./src/resources/datasets/datasets.ts">list</a>() -> DatasetListResponse</code>
- <code title="delete /dataset/delete">client.datasets.<a href="./src/resources/datasets/datasets.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /dataset/info">client.datasets.<a href="./src/resources/datasets/datasets.ts">get</a>({ ...params }) -> DatasetGetResponse</code>
- <code title="post /dataset/match">client.datasets.<a href="./src/resources/datasets/datasets.ts">match</a>({ ...params }) -> DatasetMatchResponse</code>
- <code title="get /dataset/view_relationships">client.datasets.<a href="./src/resources/datasets/datasets.ts">viewRelationships</a>({ ...params }) -> DatasetViewRelationshipsResponsesJobsList</code>
- <code title="get /dataset/view_table">client.datasets.<a href="./src/resources/datasets/datasets.ts">viewTable</a>({ ...params }) -> DatasetViewTableResponsesJobsList</code>
- <code title="get /dataset/view_tables_with_relationships">client.datasets.<a href="./src/resources/datasets/datasets.ts">viewTablesWithRelationships</a>({ ...params }) -> DatasetViewTablesWithRelationshipsResponse</code>

## Evaluate

# Documents

Types:

- <code><a href="./src/resources/documents.ts">DocumentListResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentDownloadResponse</a></code>

Methods:

- <code title="get /documents/list">client.documents.<a href="./src/resources/documents.ts">list</a>({ ...params }) -> DocumentListResponse</code>
- <code title="delete /documents/delete">client.documents.<a href="./src/resources/documents.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /documents/download">client.documents.<a href="./src/resources/documents.ts">download</a>({ ...params }) -> DocumentDownloadResponse</code>
- <code title="post /documents/upload">client.documents.<a href="./src/resources/documents.ts">upload</a>({ ...params }) -> void</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobDeleteResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobCancelResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobGetResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobGetStepGraphResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobGetStepsResponse</a></code>

Methods:

- <code title="get /jobs/list">client.jobs.<a href="./src/resources/jobs.ts">list</a>({ ...params }) -> JobListResponsesJobsList</code>
- <code title="post /jobs/delete/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">delete</a>(jobId) -> string</code>
- <code title="post /jobs/cancel/{uuid}">client.jobs.<a href="./src/resources/jobs.ts">cancel</a>(uuid) -> JobCancelResponse</code>
- <code title="get /jobs/get/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">get</a>(jobId) -> JobGetResponse</code>
- <code title="get /jobs/get_step/{step_id}">client.jobs.<a href="./src/resources/jobs.ts">getStep</a>(stepId) -> ExecutionStep</code>
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
- <code><a href="./src/resources/entities.ts">EntityGetResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityGetLocalSubgraphResponse</a></code>
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
- <code title="get /entity/get">client.entities.<a href="./src/resources/entities.ts">get</a>({ ...params }) -> EntityGetResponse</code>
- <code title="get /entity/get_local_subgraph">client.entities.<a href="./src/resources/entities.ts">getLocalSubgraph</a>({ ...params }) -> EntityGetLocalSubgraphResponse</code>
- <code title="get /entity/get_source_entities">client.entities.<a href="./src/resources/entities.ts">getSourceEntities</a>({ ...params }) -> EntityGetSourceEntitiesResponse</code>
- <code title="get /entity/list_jobs">client.entities.<a href="./src/resources/entities.ts">listJobs</a>({ ...params }) -> EntityListJobsResponse</code>
- <code title="post /entity/merge">client.entities.<a href="./src/resources/entities.ts">merge</a>({ ...params }) -> EntityMergeResponse</code>
- <code title="post /entity/search">client.entities.<a href="./src/resources/entities.ts">search</a>({ ...params }) -> EntitySearchResponse</code>
- <code title="post /entity/summarize">client.entities.<a href="./src/resources/entities.ts">summarize</a>({ ...params }) -> EntitySummarizeResponse</code>
- <code title="post /entity/trigger_merge">client.entities.<a href="./src/resources/entities.ts">triggerMerge</a>({ ...params }) -> EntityTriggerMergeResponse</code>
- <code title="post /entity/update">client.entities.<a href="./src/resources/entities.ts">updateProperty</a>({ ...params }) -> EntityUpdatePropertyResponse</code>
- <code title="post /entity/verify">client.entities.<a href="./src/resources/entities.ts">verify</a>({ ...params }) -> KnowledgeGraph</code>
- <code title="get /entity/view">client.entities.<a href="./src/resources/entities.ts">view</a>({ ...params }) -> EntityViewResponse</code>

# Images

Types:

- <code><a href="./src/resources/images.ts">ImageGetResponse</a></code>

Methods:

- <code title="get /images/{hash}">client.images.<a href="./src/resources/images.ts">get</a>(hash) -> ImageGetResponse</code>

# Plan

Types:

- <code><a href="./src/resources/plan.ts">EnhanceProperty</a></code>
- <code><a href="./src/resources/plan.ts">EnhanceRelationship</a></code>
- <code><a href="./src/resources/plan.ts">FindRelationship</a></code>
- <code><a href="./src/resources/plan.ts">Plan</a></code>
- <code><a href="./src/resources/plan.ts">PlanCreateResponse</a></code>
- <code><a href="./src/resources/plan.ts">PlanListResponse</a></code>
- <code><a href="./src/resources/plan.ts">PlanPauseAllResponse</a></code>
- <code><a href="./src/resources/plan.ts">PlanResumeAllResponse</a></code>

Methods:

- <code title="post /plan/create">client.plan.<a href="./src/resources/plan.ts">create</a>({ ...params }) -> string</code>
- <code title="get /plan/list">client.plan.<a href="./src/resources/plan.ts">list</a>() -> PlanListResponse</code>
- <code title="get /plan/pause_all">client.plan.<a href="./src/resources/plan.ts">pauseAll</a>({ ...params }) -> PlanPauseAllResponse</code>
- <code title="get /plan/resume_all">client.plan.<a href="./src/resources/plan.ts">resumeAll</a>({ ...params }) -> PlanResumeAllResponse</code>

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
- <code title="post /structure/job_status">client.structure.<a href="./src/resources/structure.ts">jobStatus</a>([ ...job ]) -> StructureJobStatusResponse</code>
- <code title="post /structure/run_async">client.structure.<a href="./src/resources/structure.ts">runAsync</a>({ ...params }) -> string</code>

# Shared

Types:

- <code><a href="./src/resources/shared.ts">DatasetDescriptor</a></code>
- <code><a href="./src/resources/shared.ts">Entity</a></code>
- <code><a href="./src/resources/shared.ts">Image</a></code>
- <code><a href="./src/resources/shared.ts">KnowledgeGraph</a></code>
- <code><a href="./src/resources/shared.ts">MatchedEntity</a></code>
- <code><a href="./src/resources/shared.ts">PropertyType</a></code>
- <code><a href="./src/resources/shared.ts">Relationship</a></code>
- <code><a href="./src/resources/shared.ts">Table</a></code>
