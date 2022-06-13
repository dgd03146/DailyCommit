import React from 'react';

const AuthContext = React.createContext({
  data: {},
  create: (date, content, emotion) => {},
  remove: (targetId) => {},
  edit: (targetId, date, content, emotion) => {}
});

export default AuthContext;
