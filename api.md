# Users

Types:

- <code><a href="./src/resources/users.ts">UserNode</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /admin/users/list">client.users.<a href="./src/resources/users.ts">list</a>() -> UserListResponse</code>

# Datasets

Types:

- <code><a href="./src/resources/datasets.ts">DatasetDescriptor</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetNode</a></code>
- <code><a href="./src/resources/datasets.ts">KgEntity</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetViewResponse</a></code>

Methods:

- <code title="post /dataset/create">client.datasets.<a href="./src/resources/datasets.ts">create</a>({ ...params }) -> void</code>
- <code title="get /dataset/list">client.datasets.<a href="./src/resources/datasets.ts">list</a>() -> DatasetListResponse</code>
- <code title="delete /dataset/delete">client.datasets.<a href="./src/resources/datasets.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /dataset/info">client.datasets.<a href="./src/resources/datasets.ts">retrieveInfo</a>({ ...params }) -> DatasetDescriptor | null</code>
- <code title="get /dataset/view">client.datasets.<a href="./src/resources/datasets.ts">view</a>({ ...params }) -> DatasetViewResponse</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">SourceNode</a></code>
- <code><a href="./src/resources/documents.ts">UserFile</a></code>
- <code><a href="./src/resources/documents.ts">DocumentListResponse</a></code>

Methods:

- <code title="get /documents/list">client.documents.<a href="./src/resources/documents.ts">list</a>() -> DocumentListResponse</code>
- <code title="delete /documents/delete/{path}">client.documents.<a href="./src/resources/documents.ts">delete</a>(path) -> void</code>
- <code title="get /documents/download/{path}">client.documents.<a href="./src/resources/documents.ts">download</a>(path) -> Response</code>
- <code title="get /source/get_sources">client.documents.<a href="./src/resources/documents.ts">getSources</a>({ ...params }) -> SourceNode</code>
- <code title="post /documents/upload">client.documents.<a href="./src/resources/documents.ts">upload</a>({ ...params }) -> void</code>

# Label

## LlmAssist

Types:

- <code><a href="./src/resources/label/llm-assist.ts">ToolInput</a></code>
- <code><a href="./src/resources/label/llm-assist.ts">LlmAssistRetrieveResponse</a></code>

Methods:

- <code title="get /label/llm_assist/{uuid}">client.label.llmAssist.<a href="./src/resources/label/llm-assist.ts">retrieve</a>(uuid) -> LlmAssistRetrieveResponse</code>

## Refresh

Types:

- <code><a href="./src/resources/label/refresh.ts">RefreshResponse</a></code>

Methods:

- <code title="get /label/refresh">client.label.refresh.<a href="./src/resources/label/refresh.ts">retrieve</a>({ ...params }) -> RefreshResponse | null</code>

## RunAsync

Types:

- <code><a href="./src/resources/label/run-async.ts">RunAsyncCreateResponse</a></code>

Methods:

- <code title="post /label/run_async">client.label.runAsync.<a href="./src/resources/label/run-async.ts">create</a>({ ...params }) -> string</code>

## Submit

Types:

- <code><a href="./src/resources/label/submit.ts">SubmitCreateResponse</a></code>

Methods:

- <code title="post /label/submit/{uuid}">client.label.submit.<a href="./src/resources/label/submit.ts">create</a>(uuid, [ ...body ]) -> string</code>

## Update

Types:

- <code><a href="./src/resources/label/update.ts">UpdateCreateResponse</a></code>

Methods:

- <code title="post /label/update/{run_uuid}/{run_idx}">client.label.update.<a href="./src/resources/label/update.ts">create</a>(runUuid, runIdx, [ ...body ]) -> string</code>

# Runs

Types:

- <code><a href="./src/resources/runs.ts">ExecutionHistory</a></code>
- <code><a href="./src/resources/runs.ts">JobNode</a></code>
- <code><a href="./src/resources/runs.ts">RunListResponse</a></code>
- <code><a href="./src/resources/runs.ts">RunDeleteResponse</a></code>

Methods:

- <code title="get /runs/get/{uuid}">client.runs.<a href="./src/resources/runs.ts">retrieve</a>(uuid) -> ExecutionHistory</code>
- <code title="get /runs/list">client.runs.<a href="./src/resources/runs.ts">list</a>() -> RunListResponse</code>
- <code title="post /runs/delete/{uuid}">client.runs.<a href="./src/resources/runs.ts">delete</a>(uuid) -> string</code>
- <code title="post /runs/cancel/{uuid}">client.runs.<a href="./src/resources/runs.ts">cancel</a>(uuid) -> JobNode</code>
- <code title="post /runs/schedule">client.runs.<a href="./src/resources/runs.ts">schedule</a>() -> void</code>

# Server

Types:

- <code><a href="./src/resources/server.ts">ServerInformation</a></code>

Methods:

- <code title="get /server/version">client.server.<a href="./src/resources/server.ts">version</a>() -> ServerInformation</code>

# Structure

Types:

- <code><a href="./src/resources/structure.ts">StructureIsCompleteResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureJobStatusResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureRunAsyncResponse</a></code>

Methods:

- <code title="post /structure/is_complete">client.structure.<a href="./src/resources/structure.ts">isComplete</a>([ ...body ]) -> string</code>
- <code title="post /structure/job_status">client.structure.<a href="./src/resources/structure.ts">jobStatus</a>([ ...body ]) -> unknown</code>
- <code title="post /structure/run_async">client.structure.<a href="./src/resources/structure.ts">runAsync</a>({ ...params }) -> string</code>

# Usage

Types:

- <code><a href="./src/resources/usage.ts">UsageGetJobInfoResponse</a></code>

Methods:

- <code title="post /usage/get_job_info">client.usage.<a href="./src/resources/usage.ts">getJobInfo</a>({ ...params }) -> unknown</code>

# Account

Types:

- <code><a href="./src/resources/account.ts">NewToken</a></code>
- <code><a href="./src/resources/account.ts">UserInfoResponse</a></code>

Methods:

- <code title="post /user/create_test_token">client.account.<a href="./src/resources/account.ts">createTestToken</a>() -> NewToken</code>
- <code title="get /user/info">client.account.<a href="./src/resources/account.ts">info</a>() -> UserInfoResponse</code>
