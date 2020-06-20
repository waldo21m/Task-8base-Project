/**
 * This file was generated using 8base CLI.
 *
 * To learn more about writing custom GraphQL resolver functions, visit
 * the 8base documentation at:
 *
 * https://docs.8base.com/8base-console/custom-functions/webhooks
 *
 * To update this functions invocation settings, update its configuration block
 * in the projects 8base.yml file:
 *  functions:
 *    taskIsCompleted:
 *      ...
 *
 * Data that is sent to the function can be accessed on the event argument at:
 *  event.data[KEY_NAME]
 *
 * To invoke this function locally, run:
 *  8base invoke-local taskIsCompleted -p src/webhooks/taskIsCompleted/mocks/request.json
 */

import { gql } from "apollo-boost";
import { GraphQLClient } from "graphql-request";

const taskUpdateAPI = async (taskId, token) => {
  const graphQLClient = new GraphQLClient(
    process.env.APP_WORKSPACE_ENDPOINT + process.env.APP_AUTH_PROFILE_ID,
    {
      headers: {
        authorization: token,
      },
    }
  );

  const TASK_UPDATE_QUERY = gql`
    mutation TaskUpdate($taskId: ID!) {
      taskUpdate(data: { id: $taskId, isCompleted: true }) {
        id
        name
        description
        isCompleted
        users {
          email
          firstName
          lastName
        }
        createdAt
        updatedAt
        createdBy {
          email
          firstName
          lastName
        }
      }
    }
  `;

  const variables = {
    taskId,
  };

  try {
    const response = await graphQLClient.request(TASK_UPDATE_QUERY, variables);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = async (event, ctx) => {
  let { taskId } = event.pathParameters;
  let token = event.headers['Authorization'];
  const result = await taskUpdateAPI(taskId, token);

  return {
    statusCode: 200,
    body: JSON.stringify({
      result
    }),
  };
};
