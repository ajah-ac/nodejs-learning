
    interface HasId {
    id: number;
}

export function getById<T extends HasId>(
    data: T[],
    id: number
): T | undefined {
    return data.find(item => item.id === id);
}