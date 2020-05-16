export interface StoreStateInterface<T> {
    byId: Map<string, T>;
    allIds: string[];
}
