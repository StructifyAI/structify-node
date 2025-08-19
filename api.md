# User

Types:

- <code><a href="./src/resources/user/user.ts">SurveySubmissionRequest</a></code>
- <code><a href="./src/resources/user/user.ts">SurveySubmissionResponse</a></code>
- <code><a href="./src/resources/user/user.ts">TokenResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UpdateUserParams</a></code>
- <code><a href="./src/resources/user/user.ts">UserInfo</a></code>
- <code><a href="./src/resources/user/user.ts">UserTransactionsResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserUsageResponse</a></code>

Methods:

- <code title="put /user/update">client.user.<a href="./src/resources/user/user.ts">update</a>({ ...params }) -> User</code>
- <code title="get /user/info">client.user.<a href="./src/resources/user/user.ts">info</a>() -> UserInfo</code>
- <code title="post /user/jwt_to_api_token/{jwt}">client.user.<a href="./src/resources/user/user.ts">jwtToAPIToken</a>(jwt) -> TokenResponse</code>
- <code title="post /user/survey/submit">client.user.<a href="./src/resources/user/user.ts">surveySubmit</a>({ ...params }) -> SurveySubmissionResponse</code>
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

# Chat

Types:

- <code><a href="./src/resources/chat.ts">AddChatMessageRequest</a></code>
- <code><a href="./src/resources/chat.ts">AddChatMessageResponse</a></code>
- <code><a href="./src/resources/chat.ts">AddCollaboratorRequest</a></code>
- <code><a href="./src/resources/chat.ts">ChatSession</a></code>
- <code><a href="./src/resources/chat.ts">ChatSessionRole</a></code>
- <code><a href="./src/resources/chat.ts">ChatSessionUser</a></code>
- <code><a href="./src/resources/chat.ts">ChatSessionWithMessages</a></code>
- <code><a href="./src/resources/chat.ts">CreateChatSessionRequest</a></code>
- <code><a href="./src/resources/chat.ts">CreateChatSessionResponse</a></code>
- <code><a href="./src/resources/chat.ts">DeleteChatSessionResponse</a></code>
- <code><a href="./src/resources/chat.ts">ErrorResponse</a></code>
- <code><a href="./src/resources/chat.ts">GetChatSessionResponse</a></code>
- <code><a href="./src/resources/chat.ts">ListChatSessionsResponse</a></code>
- <code><a href="./src/resources/chat.ts">ListCollaboratorsResponse</a></code>
- <code><a href="./src/resources/chat.ts">TogglePublicRequest</a></code>
- <code><a href="./src/resources/chat.ts">TogglePublicResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatAddGitCommitResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatCopyNodeOutputByCodeHashResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatGetGitCommitResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatGetSessionTimelineResponse</a></code>

Methods:

- <code title="post /chat/sessions/{chat_id}/collaborators">client.chat.<a href="./src/resources/chat.ts">addCollaborator</a>(chatId, { ...params }) -> void</code>
- <code title="post /chat/sessions/{session_id}/commits">client.chat.<a href="./src/resources/chat.ts">addGitCommit</a>(sessionId, { ...params }) -> ChatAddGitCommitResponse</code>
- <code title="post /chat/sessions/{session_id}/messages">client.chat.<a href="./src/resources/chat.ts">addMessage</a>(sessionId, { ...params }) -> AddChatMessageResponse</code>
- <code title="post /chat/sessions/{session_id}/nodes/by_code_hash">client.chat.<a href="./src/resources/chat.ts">copyNodeOutputByCodeHash</a>(sessionId, { ...params }) -> string</code>
- <code title="post /chat/sessions">client.chat.<a href="./src/resources/chat.ts">createSession</a>({ ...params }) -> CreateChatSessionResponse</code>
- <code title="delete /chat/sessions/{session_id}">client.chat.<a href="./src/resources/chat.ts">deleteSession</a>(sessionId) -> DeleteChatSessionResponse</code>
- <code title="get /chat/sessions/{chat_id}/commits/{commit_hash}">client.chat.<a href="./src/resources/chat.ts">getGitCommit</a>(chatId, commitHash) -> ChatGetGitCommitResponse</code>
- <code title="get /chat/sessions/{session_id}">client.chat.<a href="./src/resources/chat.ts">getSession</a>(sessionId) -> GetChatSessionResponse</code>
- <code title="get /chat/sessions/{session_id}/timeline">client.chat.<a href="./src/resources/chat.ts">getSessionTimeline</a>(sessionId) -> ChatGetSessionTimelineResponse</code>
- <code title="get /chat/sessions/{chat_id}/collaborators">client.chat.<a href="./src/resources/chat.ts">listCollaborators</a>(chatId) -> ListCollaboratorsResponse</code>
- <code title="get /chat/sessions">client.chat.<a href="./src/resources/chat.ts">listSessions</a>({ ...params }) -> ListChatSessionsResponse</code>
- <code title="delete /chat/sessions/{chat_id}/collaborators/{user_id}">client.chat.<a href="./src/resources/chat.ts">removeCollaborator</a>(chatId, userId) -> void</code>
- <code title="put /chat/sessions/{session_id}/public">client.chat.<a href="./src/resources/chat.ts">togglePublic</a>(sessionId, { ...params }) -> TogglePublicResponse</code>

# Teams

Types:

- <code><a href="./src/resources/teams.ts">AddMemberRequest</a></code>
- <code><a href="./src/resources/teams.ts">AddMemberResponse</a></code>
- <code><a href="./src/resources/teams.ts">CreateProjectRequest</a></code>
- <code><a href="./src/resources/teams.ts">CreateProjectResponse</a></code>
- <code><a href="./src/resources/teams.ts">CreateTeamRequest</a></code>
- <code><a href="./src/resources/teams.ts">CreateTeamResponse</a></code>
- <code><a href="./src/resources/teams.ts">DeleteTeamResponse</a></code>
- <code><a href="./src/resources/teams.ts">GetTeamResponse</a></code>
- <code><a href="./src/resources/teams.ts">ListMembersResponse</a></code>
- <code><a href="./src/resources/teams.ts">ListProjectsResponse</a></code>
- <code><a href="./src/resources/teams.ts">ListTeamsResponse</a></code>
- <code><a href="./src/resources/teams.ts">RemoveMemberResponse</a></code>
- <code><a href="./src/resources/teams.ts">Team</a></code>
- <code><a href="./src/resources/teams.ts">TeamRole</a></code>
- <code><a href="./src/resources/teams.ts">TeamWithRole</a></code>
- <code><a href="./src/resources/teams.ts">UpdateTeamRequest</a></code>
- <code><a href="./src/resources/teams.ts">UpdateTeamResponse</a></code>
- <code><a href="./src/resources/teams.ts">UserTeam</a></code>

Methods:

- <code title="post /team/create">client.teams.<a href="./src/resources/teams.ts">create</a>({ ...params }) -> CreateTeamResponse</code>
- <code title="put /team/{team_id}">client.teams.<a href="./src/resources/teams.ts">update</a>(teamId, { ...params }) -> UpdateTeamResponse</code>
- <code title="get /team/list">client.teams.<a href="./src/resources/teams.ts">list</a>() -> ListTeamsResponse</code>
- <code title="delete /team/{team_id}">client.teams.<a href="./src/resources/teams.ts">delete</a>(teamId) -> DeleteTeamResponse</code>
- <code title="post /team/{team_id}/members">client.teams.<a href="./src/resources/teams.ts">addMember</a>(teamId, { ...params }) -> AddMemberResponse</code>
- <code title="post /team/{team_id}/projects">client.teams.<a href="./src/resources/teams.ts">createProject</a>(teamId, { ...params }) -> CreateProjectResponse</code>
- <code title="get /team/{team_id}">client.teams.<a href="./src/resources/teams.ts">get</a>(teamId) -> GetTeamResponse</code>
- <code title="get /team/{team_id}/members">client.teams.<a href="./src/resources/teams.ts">listMembers</a>(teamId) -> ListMembersResponse</code>
- <code title="get /team/{team_id}/projects">client.teams.<a href="./src/resources/teams.ts">listProjects</a>(teamId) -> ListProjectsResponse</code>
- <code title="delete /team/{team_id}/members/{user_id}">client.teams.<a href="./src/resources/teams.ts">removeMember</a>(teamId, userId) -> RemoveMemberResponse</code>

# Projects

Types:

- <code><a href="./src/resources/projects.ts">DeleteProjectResponse</a></code>
- <code><a href="./src/resources/projects.ts">GetProjectResponse</a></code>
- <code><a href="./src/resources/projects.ts">Project</a></code>

Methods:

- <code title="delete /team/{team_id}/project/{project_id}">client.projects.<a href="./src/resources/projects.ts">delete</a>(teamId, projectId) -> DeleteProjectResponse</code>
- <code title="get /team/{team_id}/project/{project_id}">client.projects.<a href="./src/resources/projects.ts">get</a>(teamId, projectId) -> GetProjectResponse</code>

# Secrets

Types:

- <code><a href="./src/resources/secrets.ts">CreateSecretRequest</a></code>
- <code><a href="./src/resources/secrets.ts">GetSecretResponse</a></code>
- <code><a href="./src/resources/secrets.ts">ProjectSecret</a></code>
- <code><a href="./src/resources/secrets.ts">ProjectSecretSummary</a></code>
- <code><a href="./src/resources/secrets.ts">UpdateSecretRequest</a></code>
- <code><a href="./src/resources/secrets.ts">UpdateSecretResponse</a></code>
- <code><a href="./src/resources/secrets.ts">SecretListResponse</a></code>

Methods:

- <code title="post /project/{project_id}/secrets">client.secrets.<a href="./src/resources/secrets.ts">create</a>(projectId, { ...params }) -> void</code>
- <code title="put /project/{project_id}/secrets/{secret_name}">client.secrets.<a href="./src/resources/secrets.ts">update</a>(projectId, secretName, { ...params }) -> UpdateSecretResponse</code>
- <code title="get /project/{project_id}/secrets">client.secrets.<a href="./src/resources/secrets.ts">list</a>(projectId) -> SecretListResponse</code>
- <code title="delete /project/{project_id}/secrets/{secret_name}">client.secrets.<a href="./src/resources/secrets.ts">delete</a>(projectId, secretName) -> void</code>
- <code title="get /project/{project_id}/secrets/{secret_name}">client.secrets.<a href="./src/resources/secrets.ts">get</a>(projectId, secretName) -> GetSecretResponse</code>

# Admin

## Dataset

Types:

- <code><a href="./src/resources/admin/dataset.ts">AdminDatasetReturn</a></code>

Methods:

- <code title="get /admin/dataset/get_by_id">client.admin.dataset.<a href="./src/resources/admin/dataset.ts">getById</a>({ ...params }) -> AdminDatasetReturn</code>

## Jobs

Types:

- <code><a href="./src/resources/admin/jobs.ts">AdminListJobsRequestParams</a></code>
- <code><a href="./src/resources/admin/jobs.ts">AdminListJobsResponse</a></code>

Methods:

- <code title="get /admin/jobs/list">client.admin.jobs.<a href="./src/resources/admin/jobs.ts">list</a>({ ...params }) -> AdminListJobsResponsesJobsList</code>

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
- <code><a href="./src/resources/admin/next-action.ts">GetBatchedActionTrainingDataRequest</a></code>
- <code><a href="./src/resources/admin/next-action.ts">LabelActionTrainingDatumRequest</a></code>

Methods:

- <code title="post /admin/next_action/add_action_training_datum">client.admin.nextAction.<a href="./src/resources/admin/next-action.ts">addTrainingDatum</a>({ ...params }) -> void</code>
- <code title="delete /admin/next_action/delete_action_training_data">client.admin.nextAction.<a href="./src/resources/admin/next-action.ts">deleteTrainingData</a>({ ...params }) -> DeleteActionTrainingDataResponse</code>
- <code title="post /admin/next_action/get_batched_action_training_data">client.admin.nextAction.<a href="./src/resources/admin/next-action.ts">getBatchedTrainingData</a>({ ...params }) -> ActionTrainingDataResponse</code>
- <code title="get /admin/next_action/get_action_training_data">client.admin.nextAction.<a href="./src/resources/admin/next-action.ts">getTrainingData</a>({ ...params }) -> ActionTrainingDataResponse</code>
- <code title="get /admin/next_action/get_action_training_datum">client.admin.nextAction.<a href="./src/resources/admin/next-action.ts">getTrainingDatum</a>({ ...params }) -> ActionTrainingDataEntry</code>
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
- <code title="post /dataset/update_relationship">client.datasets.<a href="./src/resources/datasets/datasets.ts">updateRelationship</a>({ ...params }) -> void</code>
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
- <code title="post /documents/structure">client.documents.<a href="./src/resources/documents.ts">structure</a>({ ...params }) -> DocumentStructureResponse</code>
- <code title="post /documents/upload">client.documents.<a href="./src/resources/documents.ts">upload</a>({ ...params }) -> void</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobDeleteResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobCancelResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobGetResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobGetScrapersResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobGetSourceEntitiesResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobGetStepResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobGetStepGraphResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobGetStepsResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobStatusResponse</a></code>

Methods:

- <code title="get /jobs/list">client.jobs.<a href="./src/resources/jobs.ts">list</a>({ ...params }) -> JobListResponsesJobsList</code>
- <code title="post /jobs/delete/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">delete</a>(jobId) -> string</code>
- <code title="post /jobs/cancel/{uuid}">client.jobs.<a href="./src/resources/jobs.ts">cancel</a>(uuid) -> JobCancelResponse</code>
- <code title="get /jobs/get/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">get</a>(jobId) -> JobGetResponse</code>
- <code title="get /jobs/get_scrapers/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">getScrapers</a>(jobId) -> JobGetScrapersResponse</code>
- <code title="get /jobs/get_source_entities/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">getSourceEntities</a>(jobId) -> JobGetSourceEntitiesResponse</code>
- <code title="get /jobs/get_step/{step_id}">client.jobs.<a href="./src/resources/jobs.ts">getStep</a>(stepId) -> JobGetStepResponse</code>
- <code title="get /jobs/get_step_graph/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">getStepGraph</a>(jobId) -> JobGetStepGraphResponse</code>
- <code title="get /jobs/get_steps/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">getSteps</a>(jobId) -> JobGetStepsResponse</code>
- <code title="post /jobs/schedule">client.jobs.<a href="./src/resources/jobs.ts">schedule</a>() -> void</code>
- <code title="post /jobs/status_aggregated">client.jobs.<a href="./src/resources/jobs.ts">status</a>({ ...params }) -> JobStatusResponse</code>

# Sessions

Types:

- <code><a href="./src/resources/sessions.ts">CreateWorkflowEdgeRequest</a></code>
- <code><a href="./src/resources/sessions.ts">CreateWorkflowNodeRequest</a></code>
- <code><a href="./src/resources/sessions.ts">CreateWorkflowSessionRequest</a></code>
- <code><a href="./src/resources/sessions.ts">GetSessionEventsResponse</a></code>
- <code><a href="./src/resources/sessions.ts">JobEventBody</a></code>
- <code><a href="./src/resources/sessions.ts">MarkWorkflowSessionErroredRequest</a></code>
- <code><a href="./src/resources/sessions.ts">UpdateWorkflowNodeProgressRequest</a></code>
- <code><a href="./src/resources/sessions.ts">UpdateWorkflowNodeRequest</a></code>
- <code><a href="./src/resources/sessions.ts">WorkflowDag</a></code>
- <code><a href="./src/resources/sessions.ts">WorkflowNodeExecutionStatus</a></code>
- <code><a href="./src/resources/sessions.ts">WorkflowSession</a></code>
- <code><a href="./src/resources/sessions.ts">WorkflowSessionEdge</a></code>
- <code><a href="./src/resources/sessions.ts">WorkflowSessionNode</a></code>
- <code><a href="./src/resources/sessions.ts">SessionGetNodeProgressResponse</a></code>

Methods:

- <code title="post /sessions/{session_id}/edges">client.sessions.<a href="./src/resources/sessions.ts">createEdge</a>(sessionId, { ...params }) -> WorkflowSessionEdge</code>
- <code title="post /sessions/{session_id}/nodes">client.sessions.<a href="./src/resources/sessions.ts">createNode</a>(sessionId, { ...params }) -> WorkflowSessionNode</code>
- <code title="post /sessions">client.sessions.<a href="./src/resources/sessions.ts">createSession</a>({ ...params }) -> WorkflowSession</code>
- <code title="get /sessions/{session_id}/dag">client.sessions.<a href="./src/resources/sessions.ts">getDag</a>(sessionId) -> WorkflowDag</code>
- <code title="get /sessions/{session_id}/events">client.sessions.<a href="./src/resources/sessions.ts">getEvents</a>(sessionId, { ...params }) -> GetSessionEventsResponse</code>
- <code title="get /sessions/nodes/{node_id}/output_data">client.sessions.<a href="./src/resources/sessions.ts">getNodeOutputData</a>(nodeId) -> Response</code>
- <code title="get /sessions/nodes/{node_id}/progress">client.sessions.<a href="./src/resources/sessions.ts">getNodeProgress</a>(nodeId) -> SessionGetNodeProgressResponse</code>
- <code title="patch /sessions/{session_id}/error">client.sessions.<a href="./src/resources/sessions.ts">markErrored</a>(sessionId, { ...params }) -> WorkflowSession</code>
- <code title="patch /sessions/nodes/{node_id}">client.sessions.<a href="./src/resources/sessions.ts">updateNode</a>(nodeId, { ...params }) -> WorkflowSessionNode</code>
- <code title="patch /sessions/nodes/{node_id}/progress">client.sessions.<a href="./src/resources/sessions.ts">updateNodeProgress</a>(nodeId, { ...params }) -> WorkflowSessionNode</code>
- <code title="post /sessions/nodes/{node_id}/output_data">client.sessions.<a href="./src/resources/sessions.ts">uploadNodeOutputData</a>(nodeId, { ...params }) -> WorkflowSessionNode</code>

# WorkflowSchedule

Types:

- <code><a href="./src/resources/workflow-schedule.ts">CreateWorkflowScheduleRequest</a></code>
- <code><a href="./src/resources/workflow-schedule.ts">GetWorkflowScheduleSessionsRequest</a></code>
- <code><a href="./src/resources/workflow-schedule.ts">GetWorkflowScheduleSessionsResponse</a></code>
- <code><a href="./src/resources/workflow-schedule.ts">UpdateWorkflowScheduleRequest</a></code>
- <code><a href="./src/resources/workflow-schedule.ts">WorkflowScheduleInfo</a></code>
- <code><a href="./src/resources/workflow-schedule.ts">WorkflowScheduleGetResponse</a></code>
- <code><a href="./src/resources/workflow-schedule.ts">WorkflowScheduleGetAllResponse</a></code>

Methods:

- <code title="post /workflow-schedule/{chat_session_id}">client.workflowSchedule.<a href="./src/resources/workflow-schedule.ts">create</a>(chatSessionId, { ...params }) -> WorkflowScheduleInfo</code>
- <code title="put /workflow-schedule/{schedule_id}">client.workflowSchedule.<a href="./src/resources/workflow-schedule.ts">update</a>(scheduleId, { ...params }) -> WorkflowScheduleInfo</code>
- <code title="delete /workflow-schedule/{schedule_id}">client.workflowSchedule.<a href="./src/resources/workflow-schedule.ts">delete</a>(scheduleId) -> void</code>
- <code title="get /workflow-schedule/{chat_session_id}">client.workflowSchedule.<a href="./src/resources/workflow-schedule.ts">get</a>(chatSessionId) -> WorkflowScheduleGetResponse</code>
- <code title="get /workflow-schedule">client.workflowSchedule.<a href="./src/resources/workflow-schedule.ts">getAll</a>() -> WorkflowScheduleGetAllResponse</code>
- <code title="post /workflow-schedule/{schedule_id}/sessions">client.workflowSchedule.<a href="./src/resources/workflow-schedule.ts">getSessions</a>(scheduleId, { ...params }) -> GetWorkflowScheduleSessionsResponse</code>

# Server

Types:

- <code><a href="./src/resources/server.ts">ServerInformation</a></code>

Methods:

- <code title="get /server/version">client.server.<a href="./src/resources/server.ts">version</a>() -> ServerInformation</code>

# Sources

Types:

- <code><a href="./src/resources/sources.ts">DeleteSourceEntityParams</a></code>
- <code><a href="./src/resources/sources.ts">DeleteSourceEntityResponse</a></code>
- <code><a href="./src/resources/sources.ts">DeleteSourceRelationshipParams</a></code>
- <code><a href="./src/resources/sources.ts">DeleteSourceRelationshipResponse</a></code>
- <code><a href="./src/resources/sources.ts">Source</a></code>
- <code><a href="./src/resources/sources.ts">SourceListResponse</a></code>

Methods:

- <code title="get /source/get_sources">client.sources.<a href="./src/resources/sources.ts">list</a>({ ...params }) -> SourceListResponse</code>
- <code title="delete /source/entity">client.sources.<a href="./src/resources/sources.ts">deleteEntity</a>({ ...params }) -> DeleteSourceEntityResponse</code>
- <code title="delete /source/relationship">client.sources.<a href="./src/resources/sources.ts">deleteRelationship</a>({ ...params }) -> DeleteSourceRelationshipResponse</code>

# Entities

Types:

- <code><a href="./src/resources/entities.ts">EntityDeleteResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityAddResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityAddBatchResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityAddRelationshipResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityAgentMergeResponse</a></code>
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
- <code title="post /entity/agent_merge">client.entities.<a href="./src/resources/entities.ts">agentMerge</a>({ ...params }) -> EntityAgentMergeResponse</code>
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

# Sandbox

Types:

- <code><a href="./src/resources/sandbox.ts">GetSandboxRequest</a></code>
- <code><a href="./src/resources/sandbox.ts">Sandbox</a></code>
- <code><a href="./src/resources/sandbox.ts">SandboxListResponse</a></code>

Methods:

- <code title="post /sandbox/{chat_id}">client.sandbox.<a href="./src/resources/sandbox.ts">create</a>(chatId) -> Sandbox</code>
- <code title="get /sandbox/list/{chat_id}">client.sandbox.<a href="./src/resources/sandbox.ts">list</a>(chatId) -> SandboxListResponse</code>
- <code title="post /sandbox/live/{chat_id}">client.sandbox.<a href="./src/resources/sandbox.ts">get</a>(chatId, { ...params }) -> Sandbox</code>
- <code title="patch /sandbox/{sandbox_id}/status">client.sandbox.<a href="./src/resources/sandbox.ts">updateStatus</a>(sandboxId, { ...params }) -> Sandbox</code>

# Scrape

Types:

- <code><a href="./src/resources/scrape.ts">ScrapeListRequest</a></code>
- <code><a href="./src/resources/scrape.ts">ScrapeRequest</a></code>
- <code><a href="./src/resources/scrape.ts">ScrapeListResponse</a></code>
- <code><a href="./src/resources/scrape.ts">ScrapeScrapeResponse</a></code>

Methods:

- <code title="post /scrape/list">client.scrape.<a href="./src/resources/scrape.ts">list</a>({ ...params }) -> ScrapeListResponse</code>
- <code title="post /scrape">client.scrape.<a href="./src/resources/scrape.ts">scrape</a>({ ...params }) -> ScrapeScrapeResponse</code>

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

# PublicSessions

Methods:

- <code title="get /public/chat/{chat_session_id}/latest-workflow">client.publicSessions.<a href="./src/resources/public-sessions.ts">getLatestWorkflow</a>(chatSessionId) -> WorkflowDag</code>
- <code title="get /public/nodes/{node_id}/output_data">client.publicSessions.<a href="./src/resources/public-sessions.ts">getNodeOutputData</a>(nodeId) -> Response</code>

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
