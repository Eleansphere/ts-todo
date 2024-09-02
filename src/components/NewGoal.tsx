import { type FormEvent } from 'react';
import { useRef } from 'react';

type dataValues = {
  onAdd: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAdd }: dataValues) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;
    event.currentTarget.reset();
    onAdd(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" id="goal" ref={goalRef} required />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" ref={summaryRef} required />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
}
