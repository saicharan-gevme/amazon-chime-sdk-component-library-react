type tileMap = {
    [key: string]: string;
};
type attendeeMap = {
    [key: string]: number;
};
export type State = {
    tiles: number[];
    tileIdToAttendeeId: tileMap;
    attendeeIdToTileId: attendeeMap;
    size: number;
};
export declare enum VideoTileActionType {
    UPDATE = 0,
    REMOVE = 1,
    RESET = 2
}
type UpdateAction = {
    type: VideoTileActionType.UPDATE;
    payload: {
        tileId: number;
        attendeeId: string;
    };
};
type RemoveAction = {
    type: VideoTileActionType.REMOVE;
    payload: {
        tileId: number;
        attendeeId?: string;
    };
};
type ResetAction = {
    type: VideoTileActionType.RESET;
    payload?: any;
};
export type Action = UpdateAction | RemoveAction | ResetAction;
export declare const initialState: State;
export declare function reducer(state: State, { type, payload }: Action): State;
export {};
