// Action Constants
export const ADD_TODO = '[TODO].Add';
export const REMOVE_TODO = '[TODO].Remove'

// Action Creators
export class AddTodo {
    readonly type = ADD_TODO;
    constructor(private payload: any) {
    }
}

export class RemoveTodo {
    readonly type = REMOVE_TODO;
    constructor(private payload: any) {
    }
}