# User

Types:

- <code><a href="./src/resources/user.ts">NewToken</a></code>
- <code><a href="./src/resources/user.ts">UserInfo</a></code>

Methods:

- <code title="post /user/create_test_token">client.user.<a href="./src/resources/user.ts">createTestToken</a>() -> NewToken</code>
- <code title="get /user/info">client.user.<a href="./src/resources/user.ts">info</a>() -> UserInfo</code>

# Admin

## Users

Types:

- <code><a href="./src/resources/admin/users.ts">User</a></code>
- <code><a href="./src/resources/admin/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /admin/users/list">client.admin.users.<a href="./src/resources/admin/users.ts">list</a>() -> UserListResponse</code>

# Datasets

Types:

- <code><a href="./src/resources/datasets.ts">Dataset</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetDescriptor</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetViewResponse</a></code>

Methods:

- <code title="post /dataset/create">client.datasets.<a href="./src/resources/datasets.ts">create</a>({ ...params }) -> void</code>
- <code title="get /dataset/list">client.datasets.<a href="./src/resources/datasets.ts">list</a>() -> DatasetListResponse</code>
- <code title="delete /dataset/delete">client.datasets.<a href="./src/resources/datasets.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /dataset/info">client.datasets.<a href="./src/resources/datasets.ts">get</a>({ ...params }) -> DatasetDescriptor | null</code>
- <code title="get /dataset/view">client.datasets.<a href="./src/resources/datasets.ts">view</a>({ ...params }) -> DatasetViewResponse</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">DocumentListResponse</a></code>

Methods:

- <code title="get /documents/list">client.documents.<a href="./src/resources/documents.ts">list</a>() -> DocumentListResponse</code>
- <code title="delete /documents/delete/{path}">client.documents.<a href="./src/resources/documents.ts">delete</a>(path) -> void</code>
- <code title="get /documents/download/{path}">client.documents.<a href="./src/resources/documents.ts">download</a>(path) -> Response</code>
- <code title="post /documents/upload">client.documents.<a href="./src/resources/documents.ts">upload</a>({ ...params }) -> void</code>

# Runs

Types:

- <code><a href="./src/resources/runs.ts">RunListResponse</a></code>
- <code><a href="./src/resources/runs.ts">RunDeleteResponse</a></code>
- <code><a href="./src/resources/runs.ts">RunCancelResponse</a></code>
- <code><a href="./src/resources/runs.ts">RunGetResponse</a></code>

Methods:

- <code title="get /runs/list">client.runs.<a href="./src/resources/runs.ts">list</a>() -> RunListResponse</code>
- <code title="post /runs/delete/{uuid}">client.runs.<a href="./src/resources/runs.ts">delete</a>(uuid) -> string</code>
- <code title="post /runs/cancel/{uuid}">client.runs.<a href="./src/resources/runs.ts">cancel</a>(uuid) -> RunCancelResponse</code>
- <code title="get /runs/get/{uuid}">client.runs.<a href="./src/resources/runs.ts">get</a>(uuid) -> RunGetResponse</code>
- <code title="post /runs/schedule">client.runs.<a href="./src/resources/runs.ts">schedule</a>() -> void</code>

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

# Structure

Types:

- <code><a href="./src/resources/structure.ts">ChatPrompt</a></code>
- <code><a href="./src/resources/structure.ts">ExecutionStep</a></code>
- <code><a href="./src/resources/structure.ts">ExtractionCriteria</a></code>
- <code><a href="./src/resources/structure.ts">ToolMetadata</a></code>
- <code><a href="./src/resources/structure.ts">StructureIsCompleteResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureJobStatusResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureRunAsyncResponse</a></code>

Methods:

- <code title="post /structure/is_complete">client.structure.<a href="./src/resources/structure.ts">isComplete</a>([ ...job ]) -> string</code>
- <code title="post /structure/job_status">client.structure.<a href="./src/resources/structure.ts">jobStatus</a>([ ...job ]) -> StructureJobStatusResponse</code>
- <code title="post /structure/run_async">client.structure.<a href="./src/resources/structure.ts">runAsync</a>({ ...params }) -> string</code>

# Label

Types:

- <code><a href="./src/resources/label.ts">LabelUpdateResponse</a></code>
- <code><a href="./src/resources/label.ts">LabelGetMessagesResponse</a></code>
- <code><a href="./src/resources/label.ts">LabelLlmAssistResponse</a></code>
- <code><a href="./src/resources/label.ts">LabelRunResponse</a></code>
- <code><a href="./src/resources/label.ts">LabelSubmitResponse</a></code>

Methods:

- <code title="post /label/update/{run_uuid}/{run_idx}">client.label.<a href="./src/resources/label.ts">update</a>(runUuid, runIdx, [ ...step_update ]) -> string</code>
- <code title="get /label/refresh">client.label.<a href="./src/resources/label.ts">getMessages</a>({ ...params }) -> LabelGetMessagesResponse | null</code>
- <code title="get /label/llm_assist/{uuid}">client.label.<a href="./src/resources/label.ts">llmAssist</a>(uuid) -> LabelLlmAssistResponse</code>
- <code title="post /label/run_async">client.label.<a href="./src/resources/label.ts">run</a>({ ...params }) -> string</code>
- <code title="post /label/submit/{uuid}">client.label.<a href="./src/resources/label.ts">submit</a>(uuid, [ ...label ]) -> string</code>

# Usage

Types:

- <code><a href="./src/resources/usage.ts">UsageGetJobInfoResponse</a></code>

Methods:

- <code title="post /usage/get_job_info">client.usage.<a href="./src/resources/usage.ts">getJobInfo</a>({ ...params }) -> UsageGetJobInfoResponse</code>

# Shared

Types:

- <code><a href="./src/resources/shared.ts">Entity</a></code>
- <code><a href="./src/resources/shared.ts">KnowledgeGraph</a></code>
- <code><a href="./src/resources/shared.ts">Relationship</a></code>
