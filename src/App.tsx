import CourseGoalsList from './components/CourseGoalsList.tsx';
import Header from './components/Header.tsx';
import headerImg from './assets/goals.jpg';
import { useState } from 'react';
import NewGoal from './components/NewGoal.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(title: string, description: string) {
    setGoals((prevState) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title,
        description,
      };
      return [...prevState, newGoal];
    });
  }

  function handleDeleteGoal(id: number){
      setGoals((prevState)=> prevState.filter((goal)=> goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: headerImg, alt: 'Some text you see' }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoal onAdd={handleAddGoal} />
      <CourseGoalsList goals={goals} onDelete={handleDeleteGoal}  />
    </main>
  );
}
