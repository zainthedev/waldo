import { useFirestore, useFirestoreDocData } from 'reactfire';

//Try to include .jakPositions in this
export const useCheckFirebaseCollection = async (character: string) => {
    const characterPositionsQuery = useFirestore()
        .collection('characters')
        .doc(character);
    return useFirestoreDocData(characterPositionsQuery).data
}