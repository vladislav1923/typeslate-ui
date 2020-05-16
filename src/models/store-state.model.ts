export class StoreStateModel<T> {
    public byId: Map<string, T> = new Map();
    public allIds: string[] = [];

    constructor(byId: Map<string, T> = new Map(), allIds: string[] = []) {
        this.byId = byId;
        this.allIds = allIds;
    }
}
