import { useState } from 'react';
import { Scoreboard } from '../styled-components/scoreScreenModalStyles';
import { useFirestore } from 'reactfire';

export const ScoreboardComponent = () => {
    const [users, setUsers] = useState([])

    const usersQuery = useFirestore()
        .collection('users')

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
            {users.map((user: any) => {
                return <div>Name: {user.name}, Time: {user.time}</div>;
            })}
        </Scoreboard>
    );
};