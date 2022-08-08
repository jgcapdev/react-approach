import React from 'react';

// Valor del objeto si intentamos consumirlo y no tenemos acceso al objeto
const Context = React.createContext({
  name: 'esto-es-sin-provider',
  usandoContext: true,
});

export default Context;
