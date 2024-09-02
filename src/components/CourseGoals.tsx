import { type ReactNode } from 'react';

type CourseProps = {
    id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number)=> void;
};

export default function CourseGoals({
  title,
  children,
  onDelete,
  id
}: CourseProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={()=> onDelete(id)}>DELETE</button>
    </article>
  );
}
