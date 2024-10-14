# User

Types:

- <code><a href="./src/resources/user.ts">TokenResponse</a></code>
- <code><a href="./src/resources/user.ts">UserInfo</a></code>
- <code><a href="./src/resources/user.ts">UserTransactionsResponse</a></code>
- <code><a href="./src/resources/user.ts">UserUsageResponse</a></code>

Methods:

- <code title="post /user/create_test_token">client.user.<a href="./src/resources/user.ts">createTestToken</a>({ ...params }) -> TokenResponse</code>
- <code title="get /user/info">client.user.<a href="./src/resources/user.ts">info</a>() -> UserInfo</code>
- <code title="post /user/jwt_to_api_token/{jwt}">client.user.<a href="./src/resources/user.ts">jwtToAPIToken</a>(jwt) -> TokenResponse</code>
- <code title="get /user/transactions/list">client.user.<a href="./src/resources/user.ts">transactions</a>() -> UserTransactionsResponse</code>
- <code title="get /user/usage">client.user.<a href="./src/resources/user.ts">usage</a>({ ...params }) -> UserUsageResponse</code>

# Admin

## Users

Types:

- <code><a href="./src/resources/admin/users.ts">User</a></code>
- <code><a href="./src/resources/admin/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /admin/users/list">client.admin.users.<a href="./src/resources/admin/users.ts">list</a>() -> UserListResponse</code>

## TrainingDatasets

Types:

- <code><a href="./src/resources/admin/training-datasets.ts">AddDatumRequest</a></code>
- <code><a href="./src/resources/admin/training-datasets.ts">TrainingDatumResponse</a></code>
- <code><a href="./src/resources/admin/training-datasets.ts">UpdateDatumRequest</a></code>
- <code><a href="./src/resources/admin/training-datasets.ts">TrainingDatasetListResponse</a></code>
- <code><a href="./src/resources/admin/training-datasets.ts">TrainingDatasetListDatumsResponse</a></code>
- <code><a href="./src/resources/admin/training-datasets.ts">TrainingDatasetSizeResponse</a></code>

Methods:

- <code title="get /admin/training_datasets/list">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">list</a>() -> TrainingDatasetListResponse</code>
- <code title="post /admin/training_datasets/add_dataset">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">add</a>({ ...params }) -> void</code>
- <code title="post /admin/training_datasets/add_datum">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">addDatum</a>({ ...params }) -> void</code>
- <code title="get /admin/training_datasets/next_unverified">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">getNextUnverified</a>({ ...params }) -> TrainingDatumResponse</code>
- <code title="get /admin/training_datasets/get_step_by_id">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">getStepById</a>({ ...params }) -> ExecutionStep</code>
- <code title="get /admin/training_datasets/list_datums">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">listDatums</a>({ ...params }) -> TrainingDatasetListDatumsResponse</code>
- <code title="delete /admin/training_datasets/remove_datum">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">removeDatum</a>({ ...params }) -> void</code>
- <code title="post /admin/training_datasets/reset_pending">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">resetPending</a>({ ...params }) -> void</code>
- <code title="post /admin/training_datasets/size">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">size</a>({ ...params }) -> TrainingDatasetSizeResponse</code>
- <code title="put /admin/training_datasets/update_datum">client.admin.trainingDatasets.<a href="./src/resources/admin/training-datasets.ts">updateDatum</a>({ ...params }) -> void</code>

# Datasets

Types:

- <code><a href="./src/resources/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetGetResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetMatchResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetViewRelationshipsResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetViewTableResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetViewTablesWithRelationshipsResponse</a></code>

Methods:

- <code title="post /dataset/create">client.datasets.<a href="./src/resources/datasets.ts">create</a>({ ...params }) -> void</code>
- <code title="get /dataset/list">client.datasets.<a href="./src/resources/datasets.ts">list</a>() -> DatasetListResponse</code>
- <code title="delete /dataset/delete">client.datasets.<a href="./src/resources/datasets.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /dataset/info">client.datasets.<a href="./src/resources/datasets.ts">get</a>({ ...params }) -> DatasetGetResponse</code>
- <code title="post /dataset/match">client.datasets.<a href="./src/resources/datasets.ts">match</a>({ ...params }) -> DatasetMatchResponse</code>
- <code title="get /dataset/view_relationships">client.datasets.<a href="./src/resources/datasets.ts">viewRelationships</a>({ ...params }) -> DatasetViewRelationshipsResponsesJobsList</code>
- <code title="get /dataset/view_table">client.datasets.<a href="./src/resources/datasets.ts">viewTable</a>({ ...params }) -> DatasetViewTableResponsesJobsList</code>
- <code title="get /dataset/view_tables_with_relationships">client.datasets.<a href="./src/resources/datasets.ts">viewTablesWithRelationships</a>({ ...params }) -> DatasetViewTablesWithRelationshipsResponse</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">DocumentListResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentDownloadResponse</a></code>

Methods:

- <code title="get /documents/list">client.documents.<a href="./src/resources/documents.ts">list</a>() -> DocumentListResponse</code>
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
- <code><a href="./src/resources/entities.ts">EntityGetResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityGetLocalSubgraphResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityGetSourceEntitiesResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityMergeResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntitySearchResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntitySummarizeResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityViewResponse</a></code>

Methods:

- <code title="delete /entity/delete">client.entities.<a href="./src/resources/entities.ts">delete</a>({ ...params }) -> EntityDeleteResponse</code>
- <code title="post /entity/add">client.entities.<a href="./src/resources/entities.ts">add</a>({ ...params }) -> EntityAddResponse</code>
- <code title="get /entity/get">client.entities.<a href="./src/resources/entities.ts">get</a>({ ...params }) -> EntityGetResponse</code>
- <code title="get /entity/get_local_subgraph">client.entities.<a href="./src/resources/entities.ts">getLocalSubgraph</a>({ ...params }) -> EntityGetLocalSubgraphResponse</code>
- <code title="get /entity/get_source_entities">client.entities.<a href="./src/resources/entities.ts">getSourceEntities</a>({ ...params }) -> EntityGetSourceEntitiesResponse</code>
- <code title="post /entity/merge">client.entities.<a href="./src/resources/entities.ts">merge</a>({ ...params }) -> EntityMergeResponse</code>
- <code title="post /entity/search">client.entities.<a href="./src/resources/entities.ts">search</a>({ ...params }) -> EntitySearchResponse</code>
- <code title="post /entity/summarize">client.entities.<a href="./src/resources/entities.ts">summarize</a>({ ...params }) -> EntitySummarizeResponse</code>
- <code title="get /entity/view">client.entities.<a href="./src/resources/entities.ts">view</a>({ ...params }) -> EntityViewResponse</code>

# Report

Types:

- <code><a href="./src/resources/report.ts">ReportEntityResponse</a></code>
- <code><a href="./src/resources/report.ts">ReportStepResponse</a></code>

Methods:

- <code title="post /report/entity">client.report.<a href="./src/resources/report.ts">entity</a>({ ...params }) -> string</code>
- <code title="post /report/step">client.report.<a href="./src/resources/report.ts">step</a>({ ...params }) -> string</code>

# Structure

Types:

- <code><a href="./src/resources/structure.ts">ChatPrompt</a></code>
- <code><a href="./src/resources/structure.ts">ExecutionStep</a></code>
- <code><a href="./src/resources/structure.ts">ExtractionCriteria</a></code>
- <code><a href="./src/resources/structure.ts">ToolMetadata</a></code>
- <code><a href="./src/resources/structure.ts">StructureEnhanceResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureIsCompleteResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureJobStatusResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureRunAsyncResponse</a></code>

Methods:

- <code title="post /structure/enhance">client.structure.<a href="./src/resources/structure.ts">enhance</a>({ ...params }) -> string</code>
- <code title="post /structure/is_complete">client.structure.<a href="./src/resources/structure.ts">isComplete</a>([ ...job ]) -> string</code>
- <code title="post /structure/job_status">client.structure.<a href="./src/resources/structure.ts">jobStatus</a>([ ...job ]) -> StructureJobStatusResponse</code>
- <code title="post /structure/run_async">client.structure.<a href="./src/resources/structure.ts">runAsync</a>({ ...params }) -> string</code>

# Label

Types:

- <code><a href="./src/resources/label.ts">LabelVerifyResponse</a></code>

Methods:

- <code title="post /label/verify">client.label.<a href="./src/resources/label.ts">verify</a>({ ...params }) -> LabelVerifyResponse</code>

# Shared

Types:

- <code><a href="./src/resources/shared.ts">DatasetDescriptor</a></code>
- <code><a href="./src/resources/shared.ts">Entity</a></code>
- <code><a href="./src/resources/shared.ts">KnowledgeGraph</a></code>
- <code><a href="./src/resources/shared.ts">PropertyType</a></code>
- <code><a href="./src/resources/shared.ts">Relationship</a></code>
- <code><a href="./src/resources/shared.ts">Table</a></code>
