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

- <code><a href="./src/resources/admin/users.ts">UserNode</a></code>
- <code><a href="./src/resources/admin/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /admin/users/list">client.admin.users.<a href="./src/resources/admin/users.ts">list</a>() -> UserListResponse</code>

# Datasets

Types:

- <code><a href="./src/resources/datasets.ts">DatasetDescriptor</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetNode</a></code>
- <code><a href="./src/resources/datasets.ts">KgEntity</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetViewResponse</a></code>

Methods:

- <code title="post /dataset/create">client.datasets.<a href="./src/resources/datasets.ts">create</a>({ ...params }) -> void</code>
- <code title="get /dataset/info">client.datasets.<a href="./src/resources/datasets.ts">retrieve</a>({ ...params }) -> DatasetDescriptor | null</code>
- <code title="get /dataset/list">client.datasets.<a href="./src/resources/datasets.ts">list</a>() -> DatasetListResponse</code>
- <code title="delete /dataset/delete">client.datasets.<a href="./src/resources/datasets.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /dataset/view">client.datasets.<a href="./src/resources/datasets.ts">view</a>({ ...params }) -> DatasetViewResponse</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">DocumentListResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentDownloadResponse</a></code>

Methods:

- <code title="get /documents/list">client.documents.<a href="./src/resources/documents.ts">list</a>() -> DocumentListResponse</code>
- <code title="delete /documents/delete/{path}">client.documents.<a href="./src/resources/documents.ts">delete</a>(path) -> void</code>
- <code title="get /documents/download/{id}">client.documents.<a href="./src/resources/documents.ts">download</a>(id) -> string</code>
- <code title="post /documents/upload">client.documents.<a href="./src/resources/documents.ts">upload</a>({ ...params }) -> void</code>

# Runs

Types:

- <code><a href="./src/resources/runs.ts">RunListResponse</a></code>

Methods:

- <code title="get /runs/list">client.runs.<a href="./src/resources/runs.ts">list</a>() -> RunListResponse</code>

# Server

Types:

- <code><a href="./src/resources/server.ts">ServerInformation</a></code>

Methods:

- <code title="get /server/version">client.server.<a href="./src/resources/server.ts">version</a>() -> ServerInformation</code>

# Sources

Types:

- <code><a href="./src/resources/sources.ts">Source</a></code>

Methods:

- <code title="get /source/get_sources">client.sources.<a href="./src/resources/sources.ts">list</a>({ ...params }) -> Source</code>

# Structure

## IsComplete

Types:

- <code><a href="./src/resources/structure/is-complete.ts">IsComplete</a></code>

Methods:

- <code title="post /structure/is_complete">client.structure.isComplete.<a href="./src/resources/structure/is-complete.ts">create</a>([ ...body ]) -> IsComplete</code>

## JobStatus

Types:

- <code><a href="./src/resources/structure/job-status.ts">JobStatusCreateResponse</a></code>

Methods:

- <code title="post /structure/job_status">client.structure.jobStatus.<a href="./src/resources/structure/job-status.ts">create</a>([ ...body ]) -> unknown</code>

## Run

Types:

- <code><a href="./src/resources/structure/run.ts">RunCreateResponse</a></code>

Methods:

- <code title="post /structure/run">client.structure.run.<a href="./src/resources/structure/run.ts">create</a>({ ...params }) -> unknown</code>

## RunAsync

Types:

- <code><a href="./src/resources/structure/run-async.ts">RunAsyncCreateResponse</a></code>

Methods:

- <code title="post /structure/run_async">client.structure.runAsync.<a href="./src/resources/structure/run-async.ts">create</a>({ ...params }) -> unknown</code>

# Usage

## GetJobInfo

Types:

- <code><a href="./src/resources/usage/get-job-info.ts">GetJobInfoCreateResponse</a></code>

Methods:

- <code title="post /usage/get_job_info">client.usage.getJobInfo.<a href="./src/resources/usage/get-job-info.ts">create</a>({ ...params }) -> unknown</code>
