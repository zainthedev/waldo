import { useState } from 'react';
import { useFirestore } from 'reactfire';
import { Scoreboard, Score, PlayerScore } from '../styled-components/scoreScreenModalStyles';
import { ScoreComponent } from './ScoreComponent';

export type ScoreboardComponentProps = {
    playerName: string,
};

export const ScoreboardComponent = ({ playerName }: ScoreboardComponentProps) => {
    const [users, setUsers] = useState([]);

    //Create the query to load the users and listen for new ones
    const usersQuery = useFirestore().collection('users').orderBy('time', 'asc').limit(10);

    //Start listening to the query
    usersQuery.onSnapshot(
        (snapshot) => {
            let userArray: any = []
            snapshot.docChanges().forEach((change) => {
                const user = {
                    name: change.doc.data().name,
                    time: change.doc.data().time,
                };
                if (change.type === 'added') {
                    userArray.push(user);
                };
            });
            setUsers(userArray);
        });

    return (
        <Scoreboard>
            HIGH SCORES
            {users.length === 1 || 0 ? <div>Loading...</div> :
                users.map((user: any) => {
                    return user.name === playerName ?
                        <PlayerScore>
                            <ScoreComponent user={user} />
                        </PlayerScore>
                        :
                        <Score>
                            <ScoreComponent user={user} />
                        </Score>
                })}
        </Scoreboard>
    );
};