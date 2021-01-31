import { useFirestore, useFirestoreCollectionData } from 'reactfire';

export const useGetFirebaseUsers = async () => {
    const usersQuery = useFirestore()
        .collection('users')

    return useFirestoreCollectionData(usersQuery)
}