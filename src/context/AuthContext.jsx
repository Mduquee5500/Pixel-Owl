import React, { createContext, useState, useContext } from "react";

// 1. Crear el contexto
const AuthContext = createContext(null);

// 2. Crear el provider que mantiene el estado del usuario
export const AuthProvider = ({ children }) => {
  // Estado para guardar info del usuario logueado
  const [user, setUser] = useState(null);

  // Función para hacer login (setear usuario)
  const login = (userData) => {
    setUser(userData);
  };

  // Función para hacer logout (limpiar usuario)
  const logout = () => {
    setUser(null);
  };

  // Proveer el estado y funciones a los componentes hijos
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar fácil el contexto en otros componentes
export const useAuth = () => useContext(AuthContext);
