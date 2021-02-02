import { renderTime } from '../helper-functions/renderTime';

export type ScoreProps = {
	user: { name: string; time: number };
};

export const ScoreComponent = ({ user }: ScoreProps) => {
	return (
		<>
			<div>{user.name}</div>
			<div>{renderTime(user.time)}</div>
		</>
	);
};
