import React, { createContext, useState, useContext } from 'react';

const GoalContext = createContext();

export const useGoalContext = () => useContext(GoalContext);

export const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  return (
    <GoalContext.Provider value={{ goals, addGoal }}>
      {children}
    </GoalContext.Provider>
  );
};

export default GoalContext;
