# Structify Node MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Via Claude Desktop

See [the user guide](https://modelcontextprotocol.io/quickstart/user) for setup.

Once it's set up, find your `claude_desktop_config.json` file:

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

Add the following value to your `mcpServers` section. Make sure to provide any necessary environment variables (like API keys) as well.

```json
{
  "mcpServers": {
    "structifyai_api": {
      "command": "npx",
      "args": ["-y", "structifyai-mcp"],
      "env": {
        "STRUCTIFY_API_TOKEN": "My API Key"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`:

```sh
$ npx -y structifyai-mcp --help
```

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Available Tools

The following tools are available in this MCP server.

### Resource `user`:

- `info_user` (`read`): Enable a source
- `jwt_to_api_token_user` (`write`): JWTs are commonly used for authentication in web applications. They contain
  encoded information about the user and are typically short-lived for security reasons.

This endpoint exists to allow clients who have authenticated via JWT (e.g., through
Supabase) to obtain a long-lived API token. The API token can then be used
for subsequent requests to the API without requiring frequent re-authentication.

This conversion process enhances security by separating the authentication mechanism
(JWT) from the API access mechanism (API token), while providing a seamless experience
for users transitioning from web-based authentication to API usage.

- `transactions_user` (`read`):
- `usage_user` (`read`): Returns usage statistics for the user.

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
- `label_training_datum_admin_next_action` (`write`): Label an existing action training datum

### Resource `admin.users`:

- `create_admin_users` (`write`): Create a user, returing their API token.
- `update_admin_users` (`write`): Update a user's permissions and type.
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

### Resource `datasets`:

- `create_datasets` (`write`): Creates a dataset.
- `list_datasets` (`read`): Gets all datasets owned by the current user
- `delete_datasets` (`write`): Permanently delete a dataset and all its contents
- `add_property_datasets` (`write`): Add a property descriptor to a table in the dataset schema
- `get_datasets` (`read`): Grab a dataset by its name.
- `match_datasets` (`write`): Returns: The matched subgraph and a score for the match.
- `remove_property_datasets` (`write`): Remove a property descriptor from a table in the dataset schema
- `update_property_datasets` (`write`): Update a property descriptor in a table in the dataset schema
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
- `upload_documents` (`write`): Add a new file to the database

### Resource `jobs`:

- `list_jobs` (`read`): List all the executions
- `delete_jobs` (`write`): Delete a job
- `cancel_jobs` (`write`): You successfully cancelled a job.
- `get_jobs` (`read`): Retrieve a job from structify.
- `get_step_jobs` (`read`): Retrieve a step from structify.
- `get_step_graph_jobs` (`read`):
- `get_steps_jobs` (`read`): Retrieve a job from structify.
- `schedule_jobs` (`write`): One example use case is every single day check the news websites and
  pull them into my dataset.

### Resource `server`:

- `version_server` (`read`): Gets the version of the API server.

### Resource `sources`:

- `list_sources` (`read`): Get all sources for a given entity

### Resource `entities`:

- `delete_entities` (`write`): Delete an entity manually
- `add_entities` (`write`): Add an entity (or entities) to a dataset given a graph representation of the entity (or entities).
- `add_batch_entities` (`write`): Add a batch of entities to a dataset given a list of graph representations of the entities.
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

### Resource `plan`:

- `create_plan` (`write`): Create a plan to run consecutive jobs as each step finishes.
- `list_plan` (`read`): List all plans for your user account in the database.
- `list_with_jobs_plan` (`read`): List all plans for your user account in the database. with their associated jobs.
- `pause_all_plan` (`read`): Pause all running plans for your user account in the database.
- `resume_all_plan` (`read`): Resume all paused plans for your user account in the database.

### Resource `report`:

- `missing_report` (`write`): Returns a success message if the report was added successfully
  Throws an error if the property for this entity has already been reported
- `relationship_report` (`write`): Reports a missing relationship between entities
- `step_report` (`write`): Report a step
- `wrong_report` (`write`): Reports a wrong property for an entity

### Resource `structure`:

- `enhance_property_structure` (`write`): Returns a job id that can be waited on until the request is finished.
- `enhance_relationship_structure` (`write`): Returns a job id that can be waited on until the request is finished.
- `find_relationship_structure` (`write`): Attempt to find the given relation between two entities.
- `is_complete_structure` (`write`): Wait for all specified async tasks to be completed.
- `job_status_structure` (`write`): Wait for all specified async tasks to be completed. Returns the state of the job tasks
- `run_async_structure` (`write`): Returns a token that can be waited on until the request is finished.
