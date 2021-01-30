import { useFirestore, useFirestoreDocData } from 'reactfire';

export const useCheckFirebaseCollection = async (character: string) => {
    const characterPositionsQuery = useFirestore()
        .collection('characters')
        .doc(character);

    return useFirestoreDocData(characterPositionsQuery).data
}