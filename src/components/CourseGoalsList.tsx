import CourseGoals from './CourseGoals.tsx';
import { type CourseGoal } from '../App.tsx';
import InfoBox from './InfoBox.tsx';
import { ReactNode } from 'react';
type GoalsList = {
  goals: CourseGoal[];
  onDelete: (id: number) => void;
};

export default function CourseGoalsList({
  goals,
  onDelete,
}: GoalsList) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">Please enter your goals.</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You do too many things at once!
      </InfoBox>
    );
  }

  if (goals.length >= 6) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        Are u mad?!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoals
              title={goal.title}
              onDelete={onDelete}
              id={goal.id}
            >
              {goal.description}
            </CourseGoals>
          </li>
        ))}
      </ul>
    </>
  );
}
