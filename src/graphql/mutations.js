// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    online
    timestamp
    email
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    online
    timestamp
    email
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    name
    online
    timestamp
    email
  }
}
`;
export const createConversation = `mutation CreateConversation($input: CreateConversationInput!) {
  createConversation(input: $input) {
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
export const updateConversation = `mutation UpdateConversation($input: UpdateConversationInput!) {
  updateConversation(input: $input) {
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
export const deleteConversation = `mutation DeleteConversation($input: DeleteConversationInput!) {
  deleteConversation(input: $input) {
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
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
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
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
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
export const deleteMessage = `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
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
