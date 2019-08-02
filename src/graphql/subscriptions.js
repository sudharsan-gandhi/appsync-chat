// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    name
    online
    timestamp
    email
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    name
    online
    timestamp
    email
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    name
    online
    timestamp
    email
  }
}
`;
export const onCreateConversation = `subscription OnCreateConversation {
  onCreateConversation {
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
export const onUpdateConversation = `subscription OnUpdateConversation {
  onUpdateConversation {
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
export const onDeleteConversation = `subscription OnDeleteConversation {
  onDeleteConversation {
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
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
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
export const onUpdateMessage = `subscription OnUpdateMessage {
  onUpdateMessage {
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
export const onDeleteMessage = `subscription OnDeleteMessage {
  onDeleteMessage {
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
