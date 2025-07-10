# Structify Node MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export STRUCTIFY_API_TOKEN="My API Key"
export STRUCTIFY_ENVIRONMENT="production"
npx -y structifyai-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "structifyai_api": {
      "command": "npx",
      "args": ["-y", "structifyai-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "STRUCTIFY_API_TOKEN": "My API Key",
        "STRUCTIFY_ENVIRONMENT": "production"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "structifyai-mcp/server";

// import a specific tool
import updateUser from "structifyai-mcp/tools/user/update-user";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [updateUser, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `user`:

- `update_user` (`write`): Update a user's permissions and type.
- `info_user` (`read`): Enable a source
- `jwt_to_api_token_user` (`write`): JWTs are commonly used for authentication in web applications. They contain
  encoded information about the user and are typically short-lived for security reasons.

  This endpoint exists to allow clients who have authenticated via JWT (e.g., through
  Supabase) to obtain a long-lived API token. The API token can then be used
  for subsequent requests to the API without requiring frequent re-authentication.

  This conversion process enhances security by separating the authentication mechanism
  (JWT) from the API access mechanism (API token), while providing a seamless experience
  for users transitioning from web-based authentication to API usage.

- `survey_submit_user` (`write`): Submit user onboarding survey
- `transactions_user` (`read`):
- `usage_user` (`read`): Returns usage statistics for the user.

### Resource `user.stripe`:

- `create_session_user_stripe` (`write`):
- `create_subscription_user_stripe` (`write`):

### Resource `chat`:

- `add_git_commit_chat` (`write`): Add a git commit to a chat session
- `add_message_chat` (`write`): Add a message to a chat session
- `create_session_chat` (`write`): Create a new chat session with an initial message
- `delete_session_chat` (`write`): Delete a chat session
- `get_git_commit_chat` (`read`): Get a specific git commit by its hash for a chat session
- `get_session_chat` (`read`): Get a chat session with all its messages
- `get_session_timeline_chat` (`read`): Get chronological timeline of messages and commits for a chat session
- `list_sessions_chat` (`read`): List all chat sessions for the authenticated user.

### Resource `teams`:

- `create_teams` (`write`):
- `update_teams` (`write`):
- `list_teams` (`read`):
- `delete_teams` (`write`):
- `add_member_teams` (`write`):
- `create_project_teams` (`write`):
- `get_teams` (`read`):
- `list_members_teams` (`read`):
- `list_projects_teams` (`read`):
- `remove_member_teams` (`write`):

### Resource `projects`:

- `delete_projects` (`write`):
- `get_projects` (`read`):

### Resource `secrets`:

- `create_secrets` (`write`): Create a new project secret using envelope encryption with Google Cloud KMS
- `update_secrets` (`write`): Update an existing project secret with a new value
- `list_secrets` (`read`): List all project secrets (metadata only, no sensitive data)
- `delete_secrets` (`write`): Delete a project secret by name
- `get_secrets` (`read`): Get a secret by name

### Resource `admin.human_llm`:

- `add_search_for_job_admin_human_llm` (`write`):
- `add_to_dataset_admin_human_llm` (`write`): Adds the given step to the HumanLLM dataset.
- `finish_job_admin_human_llm` (`write`):
- `get_jobs_admin_human_llm` (`write`): Start the next human llm job in the queue
- `get_next_step_admin_human_llm` (`write`): Given a step id, get the next formatted step to label.
- `prelabel_step_admin_human_llm` (`write`): Update a step by setting and preparing the given tool calls, then return possible next steps with descriptions.
- `start_next_job_admin_human_llm` (`write`): Start the next human llm job in the queue
- `update_step_admin_human_llm` (`write`): Update a step by setting and preparing the given tool calls, then return possible next steps with descriptions.

### Resource `admin.next_action`:

- `add_training_datum_admin_next_action` (`write`): Add a new action training datum
- `delete_training_data_admin_next_action` (`write`):
- `get_training_data_admin_next_action` (`read`):
- `get_training_datum_admin_next_action` (`read`):
- `label_training_datum_admin_next_action` (`write`): Label an existing action training datum

### Resource `admin.users`:

- `create_admin_users` (`write`): Create a user, returing their API token.
- `list_admin_users` (`read`): Lists all the users in the system along with their associated API tokens.
- `get_credits_admin_users` (`write`): get the credit balance of a user by email.
- `get_stats_admin_users` (`write`):
- `set_credits_admin_users` (`write`): set the credit balance of a user, returing that new credit balance.

### Resource `admin.training_datasets`:

- `list_admin_training_datasets` (`read`): Lists all training datasets.
- `delete_admin_training_datasets` (`write`):
- `add_admin_training_datasets` (`write`): Creates a new training dataset with the given name.
- `add_datum_admin_training_datasets` (`write`): Adds a new training datum to the specified dataset.
- `download_datum_admin_training_datasets` (`read`): Lists all training datums for a dataset.
- `get_datum_info_admin_training_datasets` (`read`): This includes the status, step, last updated time, and all updates.
  If the datum does not exist, a 204 status is returned.
- `get_labeller_stats_admin_training_datasets` (`read`): Gets statistics about labellers' work on a dataset.
- `get_next_for_labeling_admin_training_datasets` (`read`): Returns None if no datum is available.
- `get_next_for_qa_admin_training_datasets` (`read`): Returns None if no datum is available.
- `get_next_suspicious_admin_training_datasets` (`read`): Returns None if no datum is available.
- `label_datum_admin_training_datasets` (`write`): Updates the status and content of an existing training datum.
- `list_datums_admin_training_datasets` (`read`): Lists all training datums for a dataset.
- `mark_datum_suspicious_admin_training_datasets` (`write`): Marks a training datum update as suspicious.
- `remove_datum_admin_training_datasets` (`write`): Removes a training datum from the specified dataset.
- `size_admin_training_datasets` (`write`): Returns the number of training data in the specified dataset, filtered by status.
- `suspicious_count_admin_training_datasets` (`read`): Returns the number of suspicious training datums for the current user's labels.
- `switch_dataset_admin_training_datasets` (`write`): Switches a training datum to a new dataset.
- `update_datum_status_admin_training_datasets` (`write`):
- `upload_labeled_step_admin_training_datasets` (`write`): Uploads a new training datum to the specified dataset.
- `verify_datum_admin_training_datasets` (`write`): Verifies a training datum update.

### Resource `workflow`:

- `create_workflow` (`write`): Create a new workflow
- `update_workflow` (`write`): Update an existing workflow
- `list_workflow` (`write`): list a new workflow
- `delete_workflow` (`write`): Delete an existing workflow
- `get_workflow` (`read`): Get a workflow by ID
- `job_progress_workflow` (`read`): Get the job status breakdown of a workflow
- `jobs_workflow` (`read`):
- `trigger_workflow` (`write`): Trigger a workflow on a set of entities

### Resource `datasets`:

- `create_datasets` (`write`): Creates a dataset.
- `list_datasets` (`read`): Gets all datasets owned by the current user
- `delete_datasets` (`write`): Permanently delete a dataset and all its contents
- `add_property_datasets` (`write`): Add a property descriptor to a table in the dataset schema
- `enrichment_progress_datasets` (`read`): Get the enrichment progress for a dataset
- `export_to_csv_datasets` (`read`): You need to specify a dataset and a table_name
- `export_to_excel_datasets` (`read`): Each table and relationship type will be in its own sheet
- `get_datasets` (`read`): Grab a dataset by its name.
- `match_datasets` (`write`): Returns: The matched subgraph and a score for the match.
- `remove_property_datasets` (`write`): Remove a property descriptor from a table in the dataset schema
- `reorder_properties_datasets` (`write`):
- `set_primary_column_datasets` (`write`):
- `update_property_datasets` (`write`): Update a property descriptor in a table in the dataset schema
- `update_relationship_datasets` (`write`): Update a relationship descriptor in the dataset schema
- `view_relationships_datasets` (`read`): You need to specify a dataset and the name of the relationship
- `view_table_datasets` (`read`): You need to specify a dataset and a table_name
- `view_tables_with_relationships_datasets` (`read`): the relationships for each entity and the targets for each relationship.

### Resource `datasets.evaluate`:

- `list_datasets_evaluate` (`read`): List all dataset evaluation results with pagination
- `delete_datasets_evaluate` (`write`): Delete a dataset evaluation result by ID
- `get_datasets_evaluate` (`read`): Get a dataset evaluation result by ID
- `run_datasets_evaluate` (`write`): Evaluate two datasets
- `status_datasets_evaluate` (`read`): Get the status of a dataset evaluation

### Resource `documents`:

- `list_documents` (`read`): List all files for your user account in the database.
- `delete_documents` (`write`): Delete a file from the database
- `download_documents` (`write`): Download a file from the database
- `structure_documents` (`write`): Returns the structured data as JSON.
- `upload_documents` (`write`): Add a new file to the database

### Resource `jobs`:

- `list_jobs` (`read`): List all the executions
- `delete_jobs` (`write`): Delete a job
- `cancel_jobs` (`write`): You successfully cancelled a job.
- `get_jobs` (`read`): Retrieve a job from structify using a job_id.
- `get_scrapers_jobs` (`read`): Retrieve scrapers associated with a job from structify.
- `get_step_jobs` (`read`): Retrieve a step from structify.
- `get_step_graph_jobs` (`read`):
- `get_steps_jobs` (`read`): Retrieve a job from structify.
- `schedule_jobs` (`write`): One example use case is every single day check the news websites and
  pull them into my dataset.

### Resource `sessions`:

- `get_events_sessions` (`read`): Get events from all jobs in a session's event queue (without removing them).

### Resource `server`:

- `version_server` (`read`): Gets the version of the API server.

### Resource `sources`:

- `list_sources` (`read`): Get all sources for a given entity
- `delete_entity_sources` (`write`):
- `delete_relationship_sources` (`write`):

### Resource `entities`:

- `delete_entities` (`write`): Delete an entity manually
- `add_entities` (`write`): Add an entity (or entities) to a dataset given a graph representation of the entity (or entities).
- `add_batch_entities` (`write`): Add a batch of entities to a dataset given a list of graph representations of the entities.
- `add_relationship_entities` (`write`): Add a relationship between two entities in a dataset
- `agent_merge_entities` (`write`): Use LLM to analyze and automatically merge entities based on sources and properties
- `delete_relationship_entities` (`write`): delete a relationship between two entities in a dataset
- `derive_entities` (`write`): Derive a new property value based on existing source properties
- `get_entities` (`read`): Get entity with a given id
- `get_local_subgraph_entities` (`read`):
- `get_merges_entities` (`read`): Get all historical merges for a given entity
- `get_source_entities_entities` (`read`):
- `list_jobs_entities` (`read`): list jobs for a given entity
- `merge_entities` (`write`): merge an entity manually
- `search_entities` (`write`): Search for entities based on the given query
- `summarize_entities` (`write`): Search for entities based on the given query
- `trigger_merge_entities` (`write`): Trigger our merge process for a given entity
- `update_property_entities` (`write`): update an entity manually
- `verify_entities` (`write`): verify a kg against the dataset
- `view_entities` (`read`):

### Resource `report`:

- `missing_report` (`write`): Returns a success message if the report was added successfully
  Throws an error if the property for this entity has already been reported
- `relationship_report` (`write`): Reports a missing relationship between entities
- `step_report` (`write`): Report a step
- `wrong_report` (`write`): Reports a wrong property for an entity

### Resource `scrape`:

- `list_scrape` (`write`): Scrape a list from a URL and return a knowledge graph

### Resource `structure`:

- `enhance_property_structure` (`write`): Returns a job id that can be waited on until the request is finished.
- `enhance_relationship_structure` (`write`): Returns a job id that can be waited on until the request is finished.
- `find_relationship_structure` (`write`): Attempt to find the given relation between two entities.
- `is_complete_structure` (`write`): Wait for all specified async tasks to be completed.
- `job_status_structure` (`write`): Get status for specified jobs with detailed information similar to websocket endpoint
- `run_async_structure` (`write`): Returns a token that can be waited on until the request is finished.
