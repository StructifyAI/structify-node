# Whitelabel

Types:

- <code><a href="./src/resources/whitelabel.ts">EstimateCostResponse</a></code>

Methods:

- <code title="get /whitelabel/{service}/estimate-cost/{path}">client.whitelabel.<a href="./src/resources/whitelabel.ts">estimateCost</a>(service, path\_) -> EstimateCostResponse</code>
- <code title="get /whitelabel/{service}/{path}">client.whitelabel.<a href="./src/resources/whitelabel.ts">proxyGet</a>(service, path\_) -> void</code>
- <code title="post /whitelabel/{service}/{path}">client.whitelabel.<a href="./src/resources/whitelabel.ts">proxyPost</a>(service, path\_) -> void</code>

# User

Types:

- <code><a href="./src/resources/user/user.ts">EnrichUserParams</a></code>
- <code><a href="./src/resources/user/user.ts">JwtToAPITokenRequest</a></code>
- <code><a href="./src/resources/user/user.ts">RefreshSessionRequest</a></code>
- <code><a href="./src/resources/user/user.ts">RefreshSessionResponse</a></code>
- <code><a href="./src/resources/user/user.ts">SurveySubmissionRequest</a></code>
- <code><a href="./src/resources/user/user.ts">SurveySubmissionResponse</a></code>
- <code><a href="./src/resources/user/user.ts">TokenResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UpdateUserParams</a></code>
- <code><a href="./src/resources/user/user.ts">UserInfo</a></code>
- <code><a href="./src/resources/user/user.ts">UserTransactionsResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserUsageResponse</a></code>

Methods:

- <code title="put /user/update">client.user.<a href="./src/resources/user/user.ts">update</a>({ ...params }) -> User</code>
- <code title="post /user/enrich">client.user.<a href="./src/resources/user/user.ts">enrich</a>({ ...params }) -> void</code>
- <code title="get /user/info">client.user.<a href="./src/resources/user/user.ts">info</a>() -> UserInfo</code>
- <code title="post /user/jwt_to_api_token/{jwt}">client.user.<a href="./src/resources/user/user.ts">jwtToAPIToken</a>(jwt, { ...params }) -> TokenResponse</code>
- <code title="post /user/refresh">client.user.<a href="./src/resources/user/user.ts">refresh</a>({ ...params }) -> RefreshSessionResponse</code>
- <code title="post /user/survey/submit">client.user.<a href="./src/resources/user/user.ts">surveySubmit</a>({ ...params }) -> SurveySubmissionResponse</code>
- <code title="get /user/transactions/list">client.user.<a href="./src/resources/user/user.ts">transactions</a>() -> UserTransactionsResponse</code>
- <code title="get /user/usage">client.user.<a href="./src/resources/user/user.ts">usage</a>({ ...params }) -> UserUsageResponse</code>

## Stripe

Types:

- <code><a href="./src/resources/user/stripe.ts">CreatePortalRequest</a></code>
- <code><a href="./src/resources/user/stripe.ts">CreateSessionRequest</a></code>
- <code><a href="./src/resources/user/stripe.ts">CreateSessionResponse</a></code>
- <code><a href="./src/resources/user/stripe.ts">CreateSubscriptionRequest</a></code>
- <code><a href="./src/resources/user/stripe.ts">SubscriptionPlan</a></code>

Methods:

- <code title="post /user/transactions/stripe/create_portal_session">client.user.stripe.<a href="./src/resources/user/stripe.ts">createPortalSession</a>({ ...params }) -> CreateSessionResponse</code>
- <code title="post /user/transactions/stripe/create_session">client.user.stripe.<a href="./src/resources/user/stripe.ts">createSession</a>({ ...params }) -> CreateSessionResponse</code>
- <code title="post /user/transactions/stripe/create_subscription">client.user.stripe.<a href="./src/resources/user/stripe.ts">createSubscription</a>({ ...params }) -> CreateSessionResponse</code>

## APIKeys

Types:

- <code><a href="./src/resources/user/api-keys.ts">APIKeyInfo</a></code>
- <code><a href="./src/resources/user/api-keys.ts">CreateAPIKeyRequest</a></code>
- <code><a href="./src/resources/user/api-keys.ts">CreateAPIKeyResponse</a></code>
- <code><a href="./src/resources/user/api-keys.ts">ListAPIKeysResponse</a></code>

Methods:

- <code title="post /user/api_keys">client.user.apiKeys.<a href="./src/resources/user/api-keys.ts">create</a>({ ...params }) -> CreateAPIKeyResponse</code>
- <code title="get /user/api_keys">client.user.apiKeys.<a href="./src/resources/user/api-keys.ts">list</a>() -> ListAPIKeysResponse</code>
- <code title="get /user/api_keys/{id}">client.user.apiKeys.<a href="./src/resources/user/api-keys.ts">get</a>(id) -> APIKeyInfo</code>
- <code title="delete /user/api_keys/{id}">client.user.apiKeys.<a href="./src/resources/user/api-keys.ts">revoke</a>(id) -> void</code>

# Chat

Types:

- <code><a href="./src/resources/chat.ts">AddCollaboratorRequest</a></code>
- <code><a href="./src/resources/chat.ts">AdminGrantAccessResponse</a></code>
- <code><a href="./src/resources/chat.ts">AdminIssueFoundRequest</a></code>
- <code><a href="./src/resources/chat.ts">AdminIssueFoundResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatDependency</a></code>
- <code><a href="./src/resources/chat.ts">ChatEvent</a></code>
- <code><a href="./src/resources/chat.ts">ChatSession</a></code>
- <code><a href="./src/resources/chat.ts">ChatSessionRole</a></code>
- <code><a href="./src/resources/chat.ts">ChatSessionUser</a></code>
- <code><a href="./src/resources/chat.ts">ChatSessionWithMessages</a></code>
- <code><a href="./src/resources/chat.ts">ChatTemplate</a></code>
- <code><a href="./src/resources/chat.ts">ChatVisibility</a></code>
- <code><a href="./src/resources/chat.ts">CopyChatSessionRequest</a></code>
- <code><a href="./src/resources/chat.ts">CreateChatSessionRequest</a></code>
- <code><a href="./src/resources/chat.ts">CreateChatSessionResponse</a></code>
- <code><a href="./src/resources/chat.ts">DeleteChatSessionResponse</a></code>
- <code><a href="./src/resources/chat.ts">ErrorResponse</a></code>
- <code><a href="./src/resources/chat.ts">GetChatSessionResponse</a></code>
- <code><a href="./src/resources/chat.ts">GetDependenciesResponse</a></code>
- <code><a href="./src/resources/chat.ts">GrantAdminAccessRequest</a></code>
- <code><a href="./src/resources/chat.ts">ListChatSessionsResponse</a></code>
- <code><a href="./src/resources/chat.ts">ListCollaboratorsResponse</a></code>
- <code><a href="./src/resources/chat.ts">Message</a></code>
- <code><a href="./src/resources/chat.ts">ToolInvocation</a></code>
- <code><a href="./src/resources/chat.ts">ToolResult</a></code>
- <code><a href="./src/resources/chat.ts">UpdateChatSessionFavoriteRequest</a></code>
- <code><a href="./src/resources/chat.ts">UpdateChatSessionRequest</a></code>
- <code><a href="./src/resources/chat.ts">UpdateVisibilityRequest</a></code>
- <code><a href="./src/resources/chat.ts">UpdateVisibilityResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatAddGitCommitResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatCopyNodeOutputByCodeHashResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatDeleteFilesResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatGetGitCommitResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatGetPartialChatsResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatGetSessionTimelineResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatListTemplatesResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatLoadFilesResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatRevertToCommitResponse</a></code>

Methods:

- <code title="post /chat/sessions/{chat_id}/collaborators">client.chat.<a href="./src/resources/chat.ts">addCollaborator</a>(chatId, { ...params }) -> void</code>
- <code title="post /chat/sessions/{session_id}/commits">client.chat.<a href="./src/resources/chat.ts">addGitCommit</a>(sessionId, { ...params }) -> ChatAddGitCommitResponse</code>
- <code title="get /chat/sessions/{session_id}/admin/chat_prompt">client.chat.<a href="./src/resources/chat.ts">adminGetChatPrompt</a>(sessionId) -> ChatPrompt</code>
- <code title="post /chat/sessions/{chat_id}/admin/issue_found">client.chat.<a href="./src/resources/chat.ts">adminIssueFound</a>(chatId, { ...params }) -> AdminIssueFoundResponse</code>
- <code title="post /chat/copy">client.chat.<a href="./src/resources/chat.ts">copy</a>({ ...params }) -> ChatSessionWithMessages</code>
- <code title="post /chat/sessions/{session_id}/nodes/by_code_hash">client.chat.<a href="./src/resources/chat.ts">copyNodeOutputByCodeHash</a>(sessionId, { ...params }) -> string</code>
- <code title="post /chat/sessions">client.chat.<a href="./src/resources/chat.ts">createSession</a>({ ...params }) -> CreateChatSessionResponse</code>
- <code title="post /chat/files/delete/{chat_id}">client.chat.<a href="./src/resources/chat.ts">deleteFiles</a>(chatId, { ...params }) -> ChatDeleteFilesResponse</code>
- <code title="delete /chat/sessions/{session_id}">client.chat.<a href="./src/resources/chat.ts">deleteSession</a>(sessionId) -> DeleteChatSessionResponse</code>
- <code title="get /chat/sessions/{session_id}/dependencies">client.chat.<a href="./src/resources/chat.ts">getDependencies</a>(sessionId) -> GetDependenciesResponse</code>
- <code title="get /chat/sessions/{chat_id}/commits/{commit_hash}">client.chat.<a href="./src/resources/chat.ts">getGitCommit</a>(chatId, commitHash) -> ChatGetGitCommitResponse</code>
- <code title="get /chat/{chat_session_id}/partial-chats">client.chat.<a href="./src/resources/chat.ts">getPartialChats</a>(chatSessionId) -> ChatGetPartialChatsResponse</code>
- <code title="get /chat/sessions/{session_id}">client.chat.<a href="./src/resources/chat.ts">getSession</a>(sessionId) -> GetChatSessionResponse</code>
- <code title="get /chat/sessions/{session_id}/timeline">client.chat.<a href="./src/resources/chat.ts">getSessionTimeline</a>(sessionId) -> ChatGetSessionTimelineResponse</code>
- <code title="post /chat/sessions/{chat_id}/admin_override">client.chat.<a href="./src/resources/chat.ts">grantAdminOverride</a>(chatId, { ...params }) -> AdminGrantAccessResponse</code>
- <code title="get /chat/sessions/{chat_id}/collaborators">client.chat.<a href="./src/resources/chat.ts">listCollaborators</a>(chatId) -> ListCollaboratorsResponse</code>
- <code title="get /chat/sessions">client.chat.<a href="./src/resources/chat.ts">listSessions</a>({ ...params }) -> ListChatSessionsResponse</code>
- <code title="get /chat/templates">client.chat.<a href="./src/resources/chat.ts">listTemplates</a>() -> ChatListTemplatesResponse</code>
- <code title="post /chat/files/load">client.chat.<a href="./src/resources/chat.ts">loadFiles</a>({ ...params }) -> ChatLoadFilesResponse</code>
- <code title="patch /chat/sessions/{session_id}/make-permanent">client.chat.<a href="./src/resources/chat.ts">makePermanent</a>(sessionId) -> void</code>
- <code title="delete /chat/sessions/{chat_id}/collaborators/{user_id}">client.chat.<a href="./src/resources/chat.ts">removeCollaborator</a>(chatId, userId) -> void</code>
- <code title="post /chat/sessions/{session_id}/revert">client.chat.<a href="./src/resources/chat.ts">revertToCommit</a>(sessionId, { ...params }) -> ChatRevertToCommitResponse</code>
- <code title="patch /chat/sessions/{session_id}">client.chat.<a href="./src/resources/chat.ts">updateSession</a>(sessionId, { ...params }) -> ChatSession</code>
- <code title="patch /chat/sessions/{session_id}/favorite">client.chat.<a href="./src/resources/chat.ts">updateSessionFavorite</a>(sessionId, { ...params }) -> ChatSession</code>
- <code title="put /chat/sessions/{session_id}/visibility">client.chat.<a href="./src/resources/chat.ts">updateVisibility</a>(sessionId, { ...params }) -> UpdateVisibilityResponse</code>

# Teams

Types:

- <code><a href="./src/resources/teams.ts">AcceptInvitationRequest</a></code>
- <code><a href="./src/resources/teams.ts">AcceptInvitationResponse</a></code>
- <code><a href="./src/resources/teams.ts">AddMemberRequest</a></code>
- <code><a href="./src/resources/teams.ts">AddMemberResponse</a></code>
- <code><a href="./src/resources/teams.ts">CreateProjectRequest</a></code>
- <code><a href="./src/resources/teams.ts">CreateTeamRequest</a></code>
- <code><a href="./src/resources/teams.ts">CreateTeamResponse</a></code>
- <code><a href="./src/resources/teams.ts">CreditsUsageRequest</a></code>
- <code><a href="./src/resources/teams.ts">CreditsUsageResponse</a></code>
- <code><a href="./src/resources/teams.ts">CreditsUsageTimeseriesPoint</a></code>
- <code><a href="./src/resources/teams.ts">DeleteTeamResponse</a></code>
- <code><a href="./src/resources/teams.ts">GetTeamResponse</a></code>
- <code><a href="./src/resources/teams.ts">Granularity</a></code>
- <code><a href="./src/resources/teams.ts">InvitationDetailsResponse</a></code>
- <code><a href="./src/resources/teams.ts">ListMembersResponse</a></code>
- <code><a href="./src/resources/teams.ts">ListProjectsResponse</a></code>
- <code><a href="./src/resources/teams.ts">ListTeamsResponse</a></code>
- <code><a href="./src/resources/teams.ts">RemoveMemberResponse</a></code>
- <code><a href="./src/resources/teams.ts">SelectTeamResponse</a></code>
- <code><a href="./src/resources/teams.ts">Team</a></code>
- <code><a href="./src/resources/teams.ts">TeamRole</a></code>
- <code><a href="./src/resources/teams.ts">TeamSubscriptionStatus</a></code>
- <code><a href="./src/resources/teams.ts">TeamWithRole</a></code>
- <code><a href="./src/resources/teams.ts">TeamsLinkCodeRequest</a></code>
- <code><a href="./src/resources/teams.ts">TeamsLinkCodeResponse</a></code>
- <code><a href="./src/resources/teams.ts">UpdateMemberRoleRequest</a></code>
- <code><a href="./src/resources/teams.ts">UpdateMemberRoleResponse</a></code>
- <code><a href="./src/resources/teams.ts">UpdateTeamRequest</a></code>
- <code><a href="./src/resources/teams.ts">UpdateTeamResponse</a></code>
- <code><a href="./src/resources/teams.ts">UsageGroupKey</a></code>

Methods:

- <code title="post /team/create">client.teams.<a href="./src/resources/teams.ts">create</a>({ ...params }) -> CreateTeamResponse</code>
- <code title="put /team/{team_id}">client.teams.<a href="./src/resources/teams.ts">update</a>(teamId, { ...params }) -> UpdateTeamResponse</code>
- <code title="get /team/list">client.teams.<a href="./src/resources/teams.ts">list</a>() -> ListTeamsResponse</code>
- <code title="delete /team/{team_id}">client.teams.<a href="./src/resources/teams.ts">delete</a>(teamId) -> DeleteTeamResponse</code>
- <code title="post /team/invitations/accept">client.teams.<a href="./src/resources/teams.ts">acceptInvitation</a>({ ...params }) -> AcceptInvitationResponse</code>
- <code title="post /team/{team_id}/members">client.teams.<a href="./src/resources/teams.ts">addMember</a>(teamId, { ...params }) -> AddMemberResponse</code>
- <code title="post /teams/link-code">client.teams.<a href="./src/resources/teams.ts">createLinkCode</a>({ ...params }) -> TeamsLinkCodeResponse</code>
- <code title="post /team/{team_id}/projects">client.teams.<a href="./src/resources/teams.ts">createProject</a>(teamId, { ...params }) -> Project</code>
- <code title="get /team/{team_id}/credits/usage">client.teams.<a href="./src/resources/teams.ts">creditsUsage</a>(teamId, { ...params }) -> CreditsUsageResponse</code>
- <code title="get /team/{team_id}">client.teams.<a href="./src/resources/teams.ts">get</a>(teamId) -> GetTeamResponse</code>
- <code title="get /team/invitations/details/{token}">client.teams.<a href="./src/resources/teams.ts">invitationDetails</a>(token) -> InvitationDetailsResponse</code>
- <code title="get /team/{team_id}/members">client.teams.<a href="./src/resources/teams.ts">listMembers</a>(teamId) -> ListMembersResponse</code>
- <code title="get /team/{team_id}/projects">client.teams.<a href="./src/resources/teams.ts">listProjects</a>(teamId) -> ListProjectsResponse</code>
- <code title="delete /team/{team_id}/members/{user_id}">client.teams.<a href="./src/resources/teams.ts">removeMember</a>(teamId, userId) -> RemoveMemberResponse</code>
- <code title="post /team/{team_id}/select">client.teams.<a href="./src/resources/teams.ts">select</a>(teamId) -> SelectTeamResponse</code>
- <code title="patch /team/{team_id}/members/{user_id}/role">client.teams.<a href="./src/resources/teams.ts">updateMemberRole</a>(teamId, userId, { ...params }) -> UpdateMemberRoleResponse</code>

# Wiki

Types:

- <code><a href="./src/resources/wiki.ts">CreateWikiPageRequest</a></code>
- <code><a href="./src/resources/wiki.ts">UpdateWikiPageRequest</a></code>
- <code><a href="./src/resources/wiki.ts">WikiConnectorReference</a></code>
- <code><a href="./src/resources/wiki.ts">WikiPage</a></code>
- <code><a href="./src/resources/wiki.ts">WikiPageWithReferences</a></code>
- <code><a href="./src/resources/wiki.ts">WikiListResponse</a></code>

Methods:

- <code title="post /team/{team_id}/wiki">client.wiki.<a href="./src/resources/wiki.ts">create</a>(teamId, { ...params }) -> WikiPage</code>
- <code title="put /team/{team_id}/wiki/{slug}">client.wiki.<a href="./src/resources/wiki.ts">update</a>(teamId, slug, { ...params }) -> WikiPage</code>
- <code title="get /team/{team_id}/wiki">client.wiki.<a href="./src/resources/wiki.ts">list</a>(teamId) -> WikiListResponse</code>
- <code title="delete /team/{team_id}/wiki/{slug}">client.wiki.<a href="./src/resources/wiki.ts">delete</a>(teamId, slug) -> void</code>
- <code title="get /team/{team_id}/wiki/{slug}">client.wiki.<a href="./src/resources/wiki.ts">get</a>(teamId, slug) -> WikiPageWithReferences</code>

# Projects

Types:

- <code><a href="./src/resources/projects.ts">DeleteProjectResponse</a></code>
- <code><a href="./src/resources/projects.ts">Project</a></code>
- <code><a href="./src/resources/projects.ts">ProjectCollaboratorInput</a></code>
- <code><a href="./src/resources/projects.ts">ProjectMember</a></code>
- <code><a href="./src/resources/projects.ts">ProjectVisibility</a></code>
- <code><a href="./src/resources/projects.ts">UpdateProjectRequest</a></code>
- <code><a href="./src/resources/projects.ts">ProjectGetResponse</a></code>

Methods:

- <code title="patch /team/{team_id}/project/{project_id}">client.projects.<a href="./src/resources/projects.ts">update</a>(teamId, projectId, { ...params }) -> Project</code>
- <code title="delete /team/{team_id}/project/{project_id}">client.projects.<a href="./src/resources/projects.ts">delete</a>(teamId, projectId) -> DeleteProjectResponse</code>
- <code title="get /team/{team_id}/project/{project_id}">client.projects.<a href="./src/resources/projects.ts">get</a>(teamId, projectId) -> ProjectGetResponse</code>

# Admin

## Teams

Types:

- <code><a href="./src/resources/admin/teams.ts">AdminTeamsListResponse</a></code>
- <code><a href="./src/resources/admin/teams.ts">CancelSubscriptionRequest</a></code>
- <code><a href="./src/resources/admin/teams.ts">CancelSubscriptionResponse</a></code>
- <code><a href="./src/resources/admin/teams.ts">CreateSubscriptionResponse</a></code>
- <code><a href="./src/resources/admin/teams.ts">CreateTeamSubscriptionRequest</a></code>
- <code><a href="./src/resources/admin/teams.ts">ExpireGrantsRequest</a></code>
- <code><a href="./src/resources/admin/teams.ts">ExpireGrantsResponse</a></code>
- <code><a href="./src/resources/admin/teams.ts">ExtendTrialRequest</a></code>
- <code><a href="./src/resources/admin/teams.ts">ExtendTrialResponse</a></code>
- <code><a href="./src/resources/admin/teams.ts">GrantCreditsRequest</a></code>
- <code><a href="./src/resources/admin/teams.ts">GrantCreditsResponse</a></code>

Methods:

- <code title="get /admin/team/list">client.admin.teams.<a href="./src/resources/admin/teams.ts">list</a>({ ...params }) -> AdminTeamsListResponsesJobsList</code>
- <code title="post /admin/team/cancel_subscription">client.admin.teams.<a href="./src/resources/admin/teams.ts">cancelSubscription</a>({ ...params }) -> CancelSubscriptionResponse</code>
- <code title="post /admin/team/create_subscription">client.admin.teams.<a href="./src/resources/admin/teams.ts">createSubscription</a>({ ...params }) -> CreateSubscriptionResponse</code>
- <code title="post /admin/team/expire_grants">client.admin.teams.<a href="./src/resources/admin/teams.ts">expireGrants</a>({ ...params }) -> ExpireGrantsResponse</code>
- <code title="post /admin/team/extend_trial">client.admin.teams.<a href="./src/resources/admin/teams.ts">extendTrial</a>({ ...params }) -> ExtendTrialResponse</code>
- <code title="post /admin/team/grant_credits">client.admin.teams.<a href="./src/resources/admin/teams.ts">grantCredits</a>({ ...params }) -> GrantCreditsResponse</code>

## Dataset

Types:

- <code><a href="./src/resources/admin/dataset.ts">AdminDatasetReturn</a></code>

Methods:

- <code title="get /admin/dataset/get_by_id">client.admin.dataset.<a href="./src/resources/admin/dataset.ts">getById</a>({ ...params }) -> AdminDatasetReturn</code>

## Jobs

Types:

- <code><a href="./src/resources/admin/jobs.ts">AdminDeleteJobsRequest</a></code>
- <code><a href="./src/resources/admin/jobs.ts">AdminDeleteJobsResponse</a></code>
- <code><a href="./src/resources/admin/jobs.ts">AdminListJobsRequestParams</a></code>
- <code><a href="./src/resources/admin/jobs.ts">AdminListJobsResponse</a></code>

Methods:

- <code title="get /admin/jobs/list">client.admin.jobs.<a href="./src/resources/admin/jobs.ts">list</a>({ ...params }) -> AdminListJobsResponsesJobsList</code>
- <code title="post /admin/jobs/delete">client.admin.jobs.<a href="./src/resources/admin/jobs.ts">delete</a>({ ...params }) -> AdminDeleteJobsResponse</code>

## Sandbox

Types:

- <code><a href="./src/resources/admin/sandbox.ts">AdminSandbox</a></code>
- <code><a href="./src/resources/admin/sandbox.ts">SandboxType</a></code>

Methods:

- <code title="get /admin/sandbox/list">client.admin.sandbox.<a href="./src/resources/admin/sandbox.ts">list</a>({ ...params }) -> AdminSandboxesJobsList</code>

## FunctionalTests

Types:

- <code><a href="./src/resources/admin/functional-tests.ts">CreateFunctionalTestRequest</a></code>
- <code><a href="./src/resources/admin/functional-tests.ts">FunctionalTest</a></code>
- <code><a href="./src/resources/admin/functional-tests.ts">FunctionalTestResultsResponse</a></code>
- <code><a href="./src/resources/admin/functional-tests.ts">GetResultsQuery</a></code>
- <code><a href="./src/resources/admin/functional-tests.ts">LinkChatToFunctionalTestRequest</a></code>
- <code><a href="./src/resources/admin/functional-tests.ts">UpdateFunctionalTestResultsRequest</a></code>
- <code><a href="./src/resources/admin/functional-tests.ts">FunctionalTestListResponse</a></code>
- <code><a href="./src/resources/admin/functional-tests.ts">FunctionalTestSystemPromptResponse</a></code>

Methods:

- <code title="post /admin/functional_tests/create">client.admin.functionalTests.<a href="./src/resources/admin/functional-tests.ts">create</a>({ ...params }) -> FunctionalTest</code>
- <code title="get /admin/functional_tests/list">client.admin.functionalTests.<a href="./src/resources/admin/functional-tests.ts">list</a>() -> FunctionalTestListResponse</code>
- <code title="get /admin/functional_tests/results">client.admin.functionalTests.<a href="./src/resources/admin/functional-tests.ts">getResults</a>({ ...params }) -> FunctionalTestResultsResponse</code>
- <code title="post /admin/functional_tests/link">client.admin.functionalTests.<a href="./src/resources/admin/functional-tests.ts">linkChat</a>({ ...params }) -> void</code>
- <code title="get /admin/functional_tests/system_prompt">client.admin.functionalTests.<a href="./src/resources/admin/functional-tests.ts">systemPrompt</a>() -> string</code>
- <code title="put /admin/functional_tests/update_results">client.admin.functionalTests.<a href="./src/resources/admin/functional-tests.ts">updateResults</a>({ ...params }) -> void</code>

## Users

Types:

- <code><a href="./src/resources/admin/users.ts">ImpersonateRequest</a></code>
- <code><a href="./src/resources/admin/users.ts">ImpersonateResponse</a></code>
- <code><a href="./src/resources/admin/users.ts">User</a></code>
- <code><a href="./src/resources/admin/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/admin/users.ts">UserGetStatsResponse</a></code>

Methods:

- <code title="post /admin/users/create">client.admin.users.<a href="./src/resources/admin/users.ts">create</a>({ ...params }) -> TokenResponse</code>
- <code title="get /admin/users/list">client.admin.users.<a href="./src/resources/admin/users.ts">list</a>() -> UserListResponse</code>
- <code title="post /admin/users/get_stats">client.admin.users.<a href="./src/resources/admin/users.ts">getStats</a>({ ...params }) -> UserGetStatsResponse</code>
- <code title="post /admin/users/impersonate">client.admin.users.<a href="./src/resources/admin/users.ts">impersonate</a>({ ...params }) -> ImpersonateResponse</code>

## ChatTemplates

Types:

- <code><a href="./src/resources/admin/chat-templates.ts">AdminChatTemplateListQuery</a></code>
- <code><a href="./src/resources/admin/chat-templates.ts">CreateChatTemplateRequest</a></code>
- <code><a href="./src/resources/admin/chat-templates.ts">UpdateChatTemplateRequest</a></code>
- <code><a href="./src/resources/admin/chat-templates.ts">ChatTemplateListResponse</a></code>

Methods:

- <code title="post /admin/chat/templates">client.admin.chatTemplates.<a href="./src/resources/admin/chat-templates.ts">create</a>({ ...params }) -> ChatTemplate</code>
- <code title="patch /admin/chat/templates/{template_id}">client.admin.chatTemplates.<a href="./src/resources/admin/chat-templates.ts">update</a>(templateId, { ...params }) -> ChatTemplate</code>
- <code title="get /admin/chat/templates">client.admin.chatTemplates.<a href="./src/resources/admin/chat-templates.ts">list</a>({ ...params }) -> ChatTemplateListResponse</code>

## Connector

Types:

- <code><a href="./src/resources/admin/connector.ts">CloneConnectorItem</a></code>
- <code><a href="./src/resources/admin/connector.ts">CloneConnectorsRequest</a></code>
- <code><a href="./src/resources/admin/connector.ts">CloneConnectorsResponse</a></code>

Methods:

- <code title="post /admin/connector/clone">client.admin.connector.<a href="./src/resources/admin/connector.ts">clone</a>({ ...params }) -> CloneConnectorsResponse</code>

# Datasets

Types:

- <code><a href="./src/resources/datasets.ts">MergeConfig</a></code>
- <code><a href="./src/resources/datasets.ts">RelationshipMergeStrategy</a></code>
- <code><a href="./src/resources/datasets.ts">Strategy</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetCreateResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetCountMissingEmbeddingsResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetEnrichmentProgressResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetGetResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetMatchResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetViewRelationshipsResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetViewTableResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetViewTablesWithRelationshipsResponse</a></code>

Methods:

- <code title="post /dataset/create">client.datasets.<a href="./src/resources/datasets.ts">create</a>({ ...params }) -> string</code>
- <code title="get /dataset/list">client.datasets.<a href="./src/resources/datasets.ts">list</a>() -> DatasetListResponse</code>
- <code title="delete /dataset/delete">client.datasets.<a href="./src/resources/datasets.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /dataset/add_property">client.datasets.<a href="./src/resources/datasets.ts">addProperty</a>({ ...params }) -> void</code>
- <code title="get /dataset/count_missing_embeddings">client.datasets.<a href="./src/resources/datasets.ts">countMissingEmbeddings</a>({ ...params }) -> DatasetCountMissingEmbeddingsResponse</code>
- <code title="get /dataset/enrichment_progress">client.datasets.<a href="./src/resources/datasets.ts">enrichmentProgress</a>({ ...params }) -> DatasetEnrichmentProgressResponse</code>
- <code title="get /dataset/export_to_csv">client.datasets.<a href="./src/resources/datasets.ts">exportToCsv</a>({ ...params }) -> void</code>
- <code title="get /dataset/export_to_excel">client.datasets.<a href="./src/resources/datasets.ts">exportToExcel</a>({ ...params }) -> void</code>
- <code title="get /dataset/info">client.datasets.<a href="./src/resources/datasets.ts">get</a>({ ...params }) -> DatasetGetResponse</code>
- <code title="post /dataset/match">client.datasets.<a href="./src/resources/datasets.ts">match</a>({ ...params }) -> DatasetMatchResponse</code>
- <code title="post /dataset/remove_property">client.datasets.<a href="./src/resources/datasets.ts">removeProperty</a>({ ...params }) -> void</code>
- <code title="post /dataset/reorder_properties">client.datasets.<a href="./src/resources/datasets.ts">reorderProperties</a>({ ...params }) -> void</code>
- <code title="post /dataset/set_primary_column">client.datasets.<a href="./src/resources/datasets.ts">setPrimaryColumn</a>({ ...params }) -> void</code>
- <code title="post /dataset/update_property">client.datasets.<a href="./src/resources/datasets.ts">updateProperty</a>({ ...params }) -> void</code>
- <code title="post /dataset/update_relationship">client.datasets.<a href="./src/resources/datasets.ts">updateRelationship</a>({ ...params }) -> void</code>
- <code title="get /dataset/view_relationships">client.datasets.<a href="./src/resources/datasets.ts">viewRelationships</a>({ ...params }) -> DatasetViewRelationshipsResponsesJobsList</code>
- <code title="get /dataset/view_table">client.datasets.<a href="./src/resources/datasets.ts">viewTable</a>({ ...params }) -> DatasetViewTableResponsesJobsList</code>
- <code title="get /dataset/view_tables_with_relationships">client.datasets.<a href="./src/resources/datasets.ts">viewTablesWithRelationships</a>({ ...params }) -> DatasetViewTablesWithRelationshipsResponse</code>

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

- <code><a href="./src/resources/jobs.ts">GetJobEventsResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobCancelResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobGetScrapersResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobGetSourceEntitiesResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobStatusResponse</a></code>

Methods:

- <code title="get /jobs/list">client.jobs.<a href="./src/resources/jobs.ts">list</a>({ ...params }) -> JobListResponsesJobsList</code>
- <code title="post /jobs/cancel/{uuid}">client.jobs.<a href="./src/resources/jobs.ts">cancel</a>(uuid) -> JobCancelResponse</code>
- <code title="get /jobs/{job_id}/events">client.jobs.<a href="./src/resources/jobs.ts">getEvents</a>(jobId) -> GetJobEventsResponse</code>
- <code title="get /jobs/get_scrapers/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">getScrapers</a>(jobId) -> JobGetScrapersResponse</code>
- <code title="get /jobs/get_source_entities/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">getSourceEntities</a>(jobId) -> JobGetSourceEntitiesResponse</code>
- <code title="post /jobs/schedule">client.jobs.<a href="./src/resources/jobs.ts">schedule</a>() -> void</code>
- <code title="post /jobs/status_aggregated">client.jobs.<a href="./src/resources/jobs.ts">status</a>({ ...params }) -> JobStatusResponse</code>

# Match

Types:

- <code><a href="./src/resources/match.ts">CreateMatchJobsRequest</a></code>
- <code><a href="./src/resources/match.ts">CreateMatchJobsResponse</a></code>
- <code><a href="./src/resources/match.ts">ListMatchResultsParams</a></code>
- <code><a href="./src/resources/match.ts">MatchResult</a></code>

Methods:

- <code title="post /match/create_jobs">client.match.<a href="./src/resources/match.ts">createJobs</a>({ ...params }) -> CreateMatchJobsResponse</code>
- <code title="get /match/list_results">client.match.<a href="./src/resources/match.ts">listResults</a>({ ...params }) -> MatchResultsJobsList</code>

# Sessions

Types:

- <code><a href="./src/resources/sessions.ts">AutofixContext</a></code>
- <code><a href="./src/resources/sessions.ts">CellEdit</a></code>
- <code><a href="./src/resources/sessions.ts">ConfirmNodeRequest</a></code>
- <code><a href="./src/resources/sessions.ts">CreateWorkflowSessionRequest</a></code>
- <code><a href="./src/resources/sessions.ts">Dashboard</a></code>
- <code><a href="./src/resources/sessions.ts">DashboardComponent</a></code>
- <code><a href="./src/resources/sessions.ts">DashboardPage</a></code>
- <code><a href="./src/resources/sessions.ts">EdgeSpec</a></code>
- <code><a href="./src/resources/sessions.ts">EditNodeOutputRequest</a></code>
- <code><a href="./src/resources/sessions.ts">FinalizeDagRequest</a></code>
- <code><a href="./src/resources/sessions.ts">FinalizeDagResponse</a></code>
- <code><a href="./src/resources/sessions.ts">GetNodeLogsResponse</a></code>
- <code><a href="./src/resources/sessions.ts">GetNodeResponse</a></code>
- <code><a href="./src/resources/sessions.ts">JobEventBody</a></code>
- <code><a href="./src/resources/sessions.ts">MarkWorkflowSessionErroredRequest</a></code>
- <code><a href="./src/resources/sessions.ts">NodeSpec</a></code>
- <code><a href="./src/resources/sessions.ts">ParquetEdit</a></code>
- <code><a href="./src/resources/sessions.ts">RequestConfirmationRequest</a></code>
- <code><a href="./src/resources/sessions.ts">UpdateWorkflowNodeProgressRequest</a></code>
- <code><a href="./src/resources/sessions.ts">UpdateWorkflowNodeRequest</a></code>
- <code><a href="./src/resources/sessions.ts">UploadDashboardLayoutRequest</a></code>
- <code><a href="./src/resources/sessions.ts">UploadNodeVisualizationOutputRequest</a></code>
- <code><a href="./src/resources/sessions.ts">WorkflowDag</a></code>
- <code><a href="./src/resources/sessions.ts">WorkflowNodeExecutionStatus</a></code>
- <code><a href="./src/resources/sessions.ts">WorkflowNodeLog</a></code>
- <code><a href="./src/resources/sessions.ts">WorkflowSession</a></code>
- <code><a href="./src/resources/sessions.ts">WorkflowSessionEdge</a></code>
- <code><a href="./src/resources/sessions.ts">WorkflowSessionNode</a></code>
- <code><a href="./src/resources/sessions.ts">SessionEditNodeOutputResponse</a></code>
- <code><a href="./src/resources/sessions.ts">SessionGetEventsResponse</a></code>
- <code><a href="./src/resources/sessions.ts">SessionGetNodeProgressResponse</a></code>
- <code><a href="./src/resources/sessions.ts">SessionKillJobsResponse</a></code>

Methods:

- <code title="post /sessions/nodes/{node_id}/confirm">client.sessions.<a href="./src/resources/sessions.ts">confirmNode</a>(nodeId, { ...params }) -> WorkflowSessionNode</code>
- <code title="post /sessions">client.sessions.<a href="./src/resources/sessions.ts">createSession</a>({ ...params }) -> WorkflowSession</code>
- <code title="post /sessions/nodes/{node_id}/edit_output">client.sessions.<a href="./src/resources/sessions.ts">editNodeOutput</a>(nodeId, { ...params }) -> SessionEditNodeOutputResponse</code>
- <code title="post /sessions/{session_id}/dag_ready">client.sessions.<a href="./src/resources/sessions.ts">finalizeDag</a>(sessionId, { ...params }) -> FinalizeDagResponse</code>
- <code title="get /sessions/{session_id}/dag">client.sessions.<a href="./src/resources/sessions.ts">getDag</a>(sessionId) -> WorkflowDag</code>
- <code title="get /sessions/nodes/{node_id}/events">client.sessions.<a href="./src/resources/sessions.ts">getEvents</a>(nodeId, { ...params }) -> SessionGetEventsResponse</code>
- <code title="get /sessions/nodes/{node_id}">client.sessions.<a href="./src/resources/sessions.ts">getNode</a>(nodeId) -> GetNodeResponse</code>
- <code title="get /sessions/node/{node_id}/logs">client.sessions.<a href="./src/resources/sessions.ts">getNodeLogs</a>(nodeId) -> GetNodeLogsResponse</code>
- <code title="get /sessions/nodes/{node_id}/output_data">client.sessions.<a href="./src/resources/sessions.ts">getNodeOutputData</a>(nodeId) -> Response</code>
- <code title="get /sessions/nodes/{node_id}/progress">client.sessions.<a href="./src/resources/sessions.ts">getNodeProgress</a>(nodeId) -> SessionGetNodeProgressResponse</code>
- <code title="post /sessions/{session_id}/kill_jobs">client.sessions.<a href="./src/resources/sessions.ts">killJobs</a>(sessionId, { ...params }) -> SessionKillJobsResponse</code>
- <code title="patch /sessions/{session_id}/error">client.sessions.<a href="./src/resources/sessions.ts">markErrored</a>(sessionId, { ...params }) -> WorkflowSession</code>
- <code title="post /sessions/nodes/{node_id}/request_confirmation">client.sessions.<a href="./src/resources/sessions.ts">requestConfirmation</a>(nodeId, { ...params }) -> WorkflowSessionNode</code>
- <code title="patch /sessions/nodes/{node_id}">client.sessions.<a href="./src/resources/sessions.ts">updateNode</a>(nodeId, { ...params }) -> WorkflowSessionNode</code>
- <code title="patch /sessions/nodes/{node_id}/progress">client.sessions.<a href="./src/resources/sessions.ts">updateNodeProgress</a>(nodeId, { ...params }) -> WorkflowSessionNode</code>
- <code title="post /sessions/{session_id}/dashboard_layout">client.sessions.<a href="./src/resources/sessions.ts">uploadDashboardLayout</a>(sessionId, { ...params }) -> WorkflowSession</code>
- <code title="post /sessions/nodes/{node_id}/output_data">client.sessions.<a href="./src/resources/sessions.ts">uploadNodeOutputData</a>(nodeId, { ...params }) -> WorkflowSessionNode</code>
- <code title="post /sessions/nodes/{node_id}/visualization_output">client.sessions.<a href="./src/resources/sessions.ts">uploadNodeVisualizationOutput</a>(nodeId, { ...params }) -> WorkflowSessionNode</code>

# WorkflowSchedule

Types:

- <code><a href="./src/resources/workflow-schedule.ts">CreateWorkflowScheduleRequest</a></code>
- <code><a href="./src/resources/workflow-schedule.ts">GetWorkflowScheduleSessionsRequest</a></code>
- <code><a href="./src/resources/workflow-schedule.ts">GetWorkflowScheduleSessionsResponse</a></code>
- <code><a href="./src/resources/workflow-schedule.ts">UpdateWorkflowScheduleRequest</a></code>
- <code><a href="./src/resources/workflow-schedule.ts">WorkflowScheduleInfo</a></code>
- <code><a href="./src/resources/workflow-schedule.ts">WorkflowScheduleGetAllResponse</a></code>

Methods:

- <code title="post /workflow-schedule/{chat_session_id}">client.workflowSchedule.<a href="./src/resources/workflow-schedule.ts">create</a>(chatSessionId, { ...params }) -> WorkflowScheduleInfo</code>
- <code title="put /workflow-schedule/{schedule_id}">client.workflowSchedule.<a href="./src/resources/workflow-schedule.ts">update</a>(scheduleId, { ...params }) -> WorkflowScheduleInfo</code>
- <code title="delete /workflow-schedule/{schedule_id}">client.workflowSchedule.<a href="./src/resources/workflow-schedule.ts">delete</a>(scheduleId) -> void</code>
- <code title="get /workflow-schedule/{chat_session_id}">client.workflowSchedule.<a href="./src/resources/workflow-schedule.ts">get</a>(chatSessionId) -> WorkflowScheduleInfo | null</code>
- <code title="get /workflow-schedule">client.workflowSchedule.<a href="./src/resources/workflow-schedule.ts">getAll</a>() -> WorkflowScheduleGetAllResponse</code>
- <code title="post /workflow-schedule/{schedule_id}/sessions">client.workflowSchedule.<a href="./src/resources/workflow-schedule.ts">getSessions</a>(scheduleId, { ...params }) -> GetWorkflowScheduleSessionsResponse</code>
- <code title="patch /workflow-schedule/{schedule_id}/pause">client.workflowSchedule.<a href="./src/resources/workflow-schedule.ts">pause</a>(scheduleId, { ...params }) -> WorkflowScheduleInfo</code>
- <code title="post /workflow-schedule/{schedule_id}/run">client.workflowSchedule.<a href="./src/resources/workflow-schedule.ts">run</a>(scheduleId) -> void</code>

# Workflow

Types:

- <code><a href="./src/resources/workflow.ts">RunWorkflowRequest</a></code>
- <code><a href="./src/resources/workflow.ts">StopWorkflowRequest</a></code>

Methods:

- <code title="post /workflow/run">client.workflow.<a href="./src/resources/workflow.ts">run</a>({ ...params }) -> void</code>
- <code title="post /workflow/stop">client.workflow.<a href="./src/resources/workflow.ts">stop</a>({ ...params }) -> void</code>

# Connectors

Types:

- <code><a href="./src/resources/connectors/connectors.ts">Connector</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ConnectorCategory</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ConnectorExplorerChat</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ConnectorStoreResponse</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ConnectorSummariesRequest</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ConnectorSummary</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ConnectorTableInfo</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ConnectorWithSecrets</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ConnectorWithSnippets</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">CreateConnectorRequest</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">CreateSecretRequest</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">DeleteSchemaObjectRequest</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">DeleteSchemaObjectResponse</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ExplorationPhaseID</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ExplorationRun</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ExplorationRunsResponse</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ExplorationStatus</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ExploreConnectorRequest</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ExploreStatusResponse</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ExplorerChatResponse</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ListTablesResponse</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">LlmInformationStore</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">SchemaObjectID</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">UpdateColumnRequest</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">UpdateConnectorRequest</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">UpdateTableRequest</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">UpdateTableResponse</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ConnectorAddSchemaObjectResponse</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ConnectorGetResponse</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ConnectorGetClarificationRequestsResponse</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ConnectorListWithSnippetsResponse</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ConnectorSearchTablesResponse</a></code>
- <code><a href="./src/resources/connectors/connectors.ts">ConnectorSummariesResponse</a></code>

Methods:

- <code title="post /connectors">client.connectors.<a href="./src/resources/connectors/connectors.ts">create</a>({ ...params }) -> Connector</code>
- <code title="patch /connectors/{connector_id}">client.connectors.<a href="./src/resources/connectors/connectors.ts">update</a>(connectorId, { ...params }) -> void</code>
- <code title="get /connectors">client.connectors.<a href="./src/resources/connectors/connectors.ts">list</a>({ ...params }) -> ConnectorWithSecretsJobsList</code>
- <code title="delete /connectors/{connector_id}">client.connectors.<a href="./src/resources/connectors/connectors.ts">delete</a>(connectorId) -> void</code>
- <code title="post /connectors/{connector_id}/schema_object">client.connectors.<a href="./src/resources/connectors/connectors.ts">addSchemaObject</a>(connectorId, { ...params }) -> ConnectorAddSchemaObjectResponse</code>
- <code title="post /connectors/{connector_id}/secrets">client.connectors.<a href="./src/resources/connectors/connectors.ts">createSecret</a>(connectorId, { ...params }) -> void</code>
- <code title="delete /connectors/{connector_id}/schema_object">client.connectors.<a href="./src/resources/connectors/connectors.ts">deleteSchemaObject</a>(connectorId, { ...params }) -> DeleteSchemaObjectResponse</code>
- <code title="delete /connectors/{connector_id}/secrets/{secret_name}">client.connectors.<a href="./src/resources/connectors/connectors.ts">deleteSecret</a>(connectorId, secretName) -> void</code>
- <code title="post /connectors/{connector_id}/explore">client.connectors.<a href="./src/resources/connectors/connectors.ts">explore</a>(connectorId, { ...params }) -> void</code>
- <code title="get /connectors/{connector_id}">client.connectors.<a href="./src/resources/connectors/connectors.ts">get</a>(connectorId) -> ConnectorGetResponse</code>
- <code title="get /connectors/{connector_id}/clarification-requests">client.connectors.<a href="./src/resources/connectors/connectors.ts">getClarificationRequests</a>(connectorId) -> ConnectorGetClarificationRequestsResponse</code>
- <code title="get /connectors/{connector_id}/explore/runs">client.connectors.<a href="./src/resources/connectors/connectors.ts">getExplorationRuns</a>(connectorId) -> ExplorationRunsResponse</code>
- <code title="get /connectors/{connector_id}/explore/status">client.connectors.<a href="./src/resources/connectors/connectors.ts">getExplorationStatus</a>(connectorId) -> ExploreStatusResponse</code>
- <code title="get /connectors/{connector_id}/explore/chat">client.connectors.<a href="./src/resources/connectors/connectors.ts">getExplorerChat</a>(connectorId, { ...params }) -> ExplorerChatResponse</code>
- <code title="get /connectors/{connector_id}/store">client.connectors.<a href="./src/resources/connectors/connectors.ts">getStore</a>(connectorId) -> ConnectorStoreResponse</code>
- <code title="get /connectors/{connector_id}/tables">client.connectors.<a href="./src/resources/connectors/connectors.ts">listTables</a>(connectorId) -> ListTablesResponse</code>
- <code title="get /connectors/with-snippets">client.connectors.<a href="./src/resources/connectors/connectors.ts">listWithSnippets</a>({ ...params }) -> ConnectorListWithSnippetsResponse</code>
- <code title="patch /connectors/clarification-requests/{clarification_id}/resolve">client.connectors.<a href="./src/resources/connectors/connectors.ts">resolveClarification</a>(clarificationId) -> void</code>
- <code title="get /connectors/search-tables">client.connectors.<a href="./src/resources/connectors/connectors.ts">searchTables</a>({ ...params }) -> ConnectorSearchTablesResponse</code>
- <code title="post /connectors/summaries">client.connectors.<a href="./src/resources/connectors/connectors.ts">summaries</a>({ ...params }) -> ConnectorSummariesResponse</code>
- <code title="patch /connectors/columns/{column_id}">client.connectors.<a href="./src/resources/connectors/connectors.ts">updateColumn</a>(columnId, { ...params }) -> void</code>
- <code title="patch /connectors/tables/{table_id}">client.connectors.<a href="./src/resources/connectors/connectors.ts">updateTable</a>(tableId, { ...params }) -> UpdateTableResponse</code>

## TypeSnippets

Types:

- <code><a href="./src/resources/connectors/type-snippets.ts">Snippet</a></code>
- <code><a href="./src/resources/connectors/type-snippets.ts">UpsertRequest</a></code>

Methods:

- <code title="put /connector-type-snippets/{connector_type}">client.connectors.typeSnippets.<a href="./src/resources/connectors/type-snippets.ts">upsert</a>(connectorType, { ...params }) -> Snippet</code>

# ConnectorCatalog

Types:

- <code><a href="./src/resources/connector-catalog/connector-catalog.ts">ConnectorAuthMethod</a></code>
- <code><a href="./src/resources/connector-catalog/connector-catalog.ts">ConnectorAuthMethodWithFields</a></code>
- <code><a href="./src/resources/connector-catalog/connector-catalog.ts">ConnectorCatalog</a></code>
- <code><a href="./src/resources/connector-catalog/connector-catalog.ts">ConnectorCatalogWithMethods</a></code>
- <code><a href="./src/resources/connector-catalog/connector-catalog.ts">ConnectorCredentialField</a></code>
- <code><a href="./src/resources/connector-catalog/connector-catalog.ts">ConnectorCatalogListResponse</a></code>

Methods:

- <code title="get /connector-catalog">client.connectorCatalog.<a href="./src/resources/connector-catalog/connector-catalog.ts">list</a>({ ...params }) -> ConnectorCatalogListResponse</code>
- <code title="get /connector-catalog/{slug}">client.connectorCatalog.<a href="./src/resources/connector-catalog/connector-catalog.ts">get</a>(slug) -> ConnectorCatalogWithMethods</code>
- <code title="get /connector-catalog/{slug}/logo">client.connectorCatalog.<a href="./src/resources/connector-catalog/connector-catalog.ts">getLogo</a>(slug) -> Response</code>

## Admin

Types:

- <code><a href="./src/resources/connector-catalog/admin.ts">BatchCreateCredentialFieldsRequest</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">BatchCreateScopesRequest</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">BatchCreateScopesResponse</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">ConnectorAuthMethodScope</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">CreateAuthMethodRequest</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">CreateCatalogRequest</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">CreateCredentialFieldRequest</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">CreateScopeRequest</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">ListScopesResponse</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">PendingNangoIntegration</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">UpdateAuthMethodRequest</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">UpdateCatalogRequest</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">UpdateCredentialFieldRequest</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">UpdateScopeRequest</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">UploadLogoResponse</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">AdminBatchCreateCredentialFieldsResponse</a></code>
- <code><a href="./src/resources/connector-catalog/admin.ts">AdminListNangoPendingResponse</a></code>

Methods:

- <code title="post /admin/connector-catalog/credential-fields/batch">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">batchCreateCredentialFields</a>({ ...params }) -> AdminBatchCreateCredentialFieldsResponse</code>
- <code title="post /admin/connector-catalog/scopes/batch">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">batchCreateScopes</a>({ ...params }) -> BatchCreateScopesResponse</code>
- <code title="post /admin/connector-catalog/auth-methods">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">createAuthMethod</a>({ ...params }) -> ConnectorAuthMethod</code>
- <code title="post /admin/connector-catalog">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">createCatalog</a>({ ...params }) -> ConnectorCatalog</code>
- <code title="post /admin/connector-catalog/credential-fields">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">createCredentialField</a>({ ...params }) -> ConnectorCredentialField</code>
- <code title="post /admin/connector-catalog/scopes">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">createScope</a>({ ...params }) -> ConnectorAuthMethodScope</code>
- <code title="delete /admin/connector-catalog/{id}">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">deleteCatalog</a>(id) -> void</code>
- <code title="delete /admin/connector-catalog/credential-fields/{id}">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">deleteCredentialField</a>(id) -> void</code>
- <code title="delete /admin/connector-catalog/scopes/{id}">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">deleteScope</a>(id) -> void</code>
- <code title="get /admin/connector-catalog/nango-pending">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">listNangoPending</a>() -> AdminListNangoPendingResponse</code>
- <code title="get /admin/connector-catalog/scopes">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">listScopes</a>({ ...params }) -> ListScopesResponse</code>
- <code title="patch /admin/connector-catalog/auth-methods/{id}">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">updateAuthMethod</a>(id, { ...params }) -> ConnectorAuthMethod</code>
- <code title="patch /admin/connector-catalog/{id}">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">updateCatalog</a>(id, { ...params }) -> ConnectorCatalog</code>
- <code title="patch /admin/connector-catalog/credential-fields/{id}">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">updateCredentialField</a>(id, { ...params }) -> ConnectorCredentialField</code>
- <code title="patch /admin/connector-catalog/scopes/{id}">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">updateScope</a>(id, { ...params }) -> ConnectorAuthMethodScope</code>
- <code title="put /admin/connector-catalog/{slug}/logo">client.connectorCatalog.admin.<a href="./src/resources/connector-catalog/admin.ts">uploadLogo</a>(slug, { ...params }) -> UploadLogoResponse</code>

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
- <code><a href="./src/resources/entities.ts">EntityDeleteRelationshipResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityDeriveResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityDeriveAllResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityGetResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityGetLocalSubgraphResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityGetSourceEntitiesResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityListJobsResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntitySearchResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntitySummarizeResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityUpdatePropertyResponse</a></code>
- <code><a href="./src/resources/entities.ts">EntityViewResponse</a></code>

Methods:

- <code title="delete /entity/delete">client.entities.<a href="./src/resources/entities.ts">delete</a>({ ...params }) -> EntityDeleteResponse</code>
- <code title="post /entity/add">client.entities.<a href="./src/resources/entities.ts">add</a>({ ...params }) -> EntityAddResponse</code>
- <code title="post /entity/add_batch">client.entities.<a href="./src/resources/entities.ts">addBatch</a>({ ...params }) -> EntityAddBatchResponse</code>
- <code title="post /entity/add_relationship">client.entities.<a href="./src/resources/entities.ts">addRelationship</a>({ ...params }) -> EntityAddRelationshipResponse</code>
- <code title="post /entity/delete_relationship">client.entities.<a href="./src/resources/entities.ts">deleteRelationship</a>({ ...params }) -> unknown</code>
- <code title="post /entity/derive">client.entities.<a href="./src/resources/entities.ts">derive</a>({ ...params }) -> string</code>
- <code title="post /entity/derive_all">client.entities.<a href="./src/resources/entities.ts">deriveAll</a>({ ...params }) -> EntityDeriveAllResponse</code>
- <code title="get /entity/get">client.entities.<a href="./src/resources/entities.ts">get</a>({ ...params }) -> EntityGetResponse</code>
- <code title="get /entity/get_local_subgraph">client.entities.<a href="./src/resources/entities.ts">getLocalSubgraph</a>({ ...params }) -> EntityGetLocalSubgraphResponse</code>
- <code title="get /entity/get_source_entities">client.entities.<a href="./src/resources/entities.ts">getSourceEntities</a>({ ...params }) -> EntityGetSourceEntitiesResponse</code>
- <code title="get /entity/list_jobs">client.entities.<a href="./src/resources/entities.ts">listJobs</a>({ ...params }) -> EntityListJobsResponse</code>
- <code title="post /entity/search">client.entities.<a href="./src/resources/entities.ts">search</a>({ ...params }) -> EntitySearchResponse</code>
- <code title="post /entity/summarize">client.entities.<a href="./src/resources/entities.ts">summarize</a>({ ...params }) -> EntitySummarizeResponse</code>
- <code title="post /entity/update">client.entities.<a href="./src/resources/entities.ts">updateProperty</a>({ ...params }) -> EntityUpdatePropertyResponse</code>
- <code title="post /entity/upload_parquet">client.entities.<a href="./src/resources/entities.ts">uploadParquet</a>({ ...params }) -> void</code>
- <code title="post /entity/verify">client.entities.<a href="./src/resources/entities.ts">verify</a>({ ...params }) -> KnowledgeGraph</code>
- <code title="get /entity/view">client.entities.<a href="./src/resources/entities.ts">view</a>({ ...params }) -> EntityViewResponse</code>

# Sandbox

Types:

- <code><a href="./src/resources/sandbox.ts">GetSandboxRequest</a></code>
- <code><a href="./src/resources/sandbox.ts">Sandbox</a></code>
- <code><a href="./src/resources/sandbox.ts">SandboxListResponse</a></code>

Methods:

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

# Code

Types:

- <code><a href="./src/resources/code.ts">GenerateCodeRequest</a></code>
- <code><a href="./src/resources/code.ts">InterruptGenerationRequest</a></code>

Methods:

- <code title="post /code/generate-code">client.code.<a href="./src/resources/code.ts">generateCode</a>({ ...params }) -> void</code>
- <code title="post /code/interrupt-generation">client.code.<a href="./src/resources/code.ts">interruptGeneration</a>({ ...params }) -> void</code>

# Structure

Types:

- <code><a href="./src/resources/structure.ts">ChatPrompt</a></code>
- <code><a href="./src/resources/structure.ts">SaveRequirement</a></code>
- <code><a href="./src/resources/structure.ts">ToolMetadata</a></code>
- <code><a href="./src/resources/structure.ts">StructureEnhancePropertyResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureEnhanceRelationshipResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureFindRelationshipResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureIsCompleteResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureJobStatusResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructurePdfResponse</a></code>
- <code><a href="./src/resources/structure.ts">StructureRunAsyncResponse</a></code>

Methods:

- <code title="post /structure/enhance_property">client.structure.<a href="./src/resources/structure.ts">enhanceProperty</a>({ ...params }) -> string</code>
- <code title="post /structure/enhance_relationship">client.structure.<a href="./src/resources/structure.ts">enhanceRelationship</a>({ ...params }) -> string</code>
- <code title="post /structure/find_relationship">client.structure.<a href="./src/resources/structure.ts">findRelationship</a>({ ...params }) -> string</code>
- <code title="post /structure/is_complete">client.structure.<a href="./src/resources/structure.ts">isComplete</a>([ ...job ]) -> string</code>
- <code title="post /structure/job_status">client.structure.<a href="./src/resources/structure.ts">jobStatus</a>({ ...params }) -> StructureJobStatusResponse</code>
- <code title="post /structure/pdf">client.structure.<a href="./src/resources/structure.ts">pdf</a>({ ...params }) -> StructurePdfResponse</code>
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

# Slack

Types:

- <code><a href="./src/resources/slack.ts">SlackAPIResponse</a></code>
- <code><a href="./src/resources/slack.ts">SlackEventPayload</a></code>

Methods:

- <code title="post /slack/events">client.slack.<a href="./src/resources/slack.ts">events</a>({ ...params }) -> SlackAPIResponse</code>

# Nango

Types:

- <code><a href="./src/resources/nango.ts">ConnectSession</a></code>
- <code><a href="./src/resources/nango.ts">CreateNangoSessionRequest</a></code>
- <code><a href="./src/resources/nango.ts">Integration</a></code>
- <code><a href="./src/resources/nango.ts">NangoCreateSessionResponse</a></code>
- <code><a href="./src/resources/nango.ts">NangoListIntegrationsResponse</a></code>

Methods:

- <code title="post /nango/session">client.nango.<a href="./src/resources/nango.ts">createSession</a>({ ...params }) -> NangoCreateSessionResponse</code>
- <code title="get /nango/integrations">client.nango.<a href="./src/resources/nango.ts">listIntegrations</a>() -> NangoListIntegrationsResponse</code>
