import { useState } from 'react';
import { Scoreboard, Score } from '../styled-components/scoreScreenModalStyles';
import { useFirestore } from 'reactfire';
import { renderTime } from '../helper-functions/renderTime';

export const ScoreboardComponent = () => {
    const [users, setUsers] = useState([])

    const usersQuery = useFirestore()
        .collection('users').orderBy('time', 'asc')

    //Start listening to the query.
    usersQuery.onSnapshot(
        (snapshot) => {
            let userArray: any = []
            snapshot.docChanges().forEach((change) => {
                const user = {
                    name: change.doc.data().name,
                    time: change.doc.data().time,
                }
                if (change.type === 'added') {
                    userArray.push(user);
                }
            })
            setUsers(userArray)
        })

    return (
        <Scoreboard>
            HIGH SCORES
            {users.length === 1 || 0 ? <div>Loading...</div> :
                users.map((user: any) => {
                    return (<Score>
                        <div>{user.name}</div>
                        <div>{renderTime(user.time)}</div>
                    </Score>)
                })}
        </Scoreboard>
    );
};