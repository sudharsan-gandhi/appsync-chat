// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    online
    timestamp
    email
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      online
      timestamp
      email
    }
    nextToken
  }
}
`;
export const getConversation = `query GetConversation($id: ID!) {
  getConversation(id: $id) {
    id
    userone {
      id
      name
      online
      timestamp
      email
    }
    usertwo {
      id
      name
      online
      timestamp
      email
    }
    status
    timestamp
  }
}
`;
export const listConversations = `query ListConversations(
  $filter: ModelConversationFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userone {
        id
        name
        online
        timestamp
        email
      }
      usertwo {
        id
        name
        online
        timestamp
        email
      }
      status
      timestamp
    }
    nextToken
  }
}
`;
export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    message
    sender {
      id
      name
      online
      timestamp
      email
    }
    conversation {
      id
      userone {
        id
        name
        online
        timestamp
        email
      }
      usertwo {
        id
        name
        online
        timestamp
        email
      }
      status
      timestamp
    }
    type
    timestamp
  }
}
`;
export const listMessages = `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      message
      sender {
        id
        name
        online
        timestamp
        email
      }
      conversation {
        id
        status
        timestamp
      }
      type
      timestamp
    }
    nextToken
  }
}
`;
