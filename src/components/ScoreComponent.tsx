import { renderTime } from '../helper-functions/renderTime';

export type ScoreComponentProps = {
    user: { name: string, time: number },
};

export const ScoreComponent = ({ user }: ScoreComponentProps) => {
    return (
        <>
            <div>{user.name}</div>
            <div>{renderTime(user.time)}</div>
        </>
    )
};