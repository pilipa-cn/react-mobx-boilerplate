/**
 * Created by oyhanyu on 2018/1/17.
 */
import { types, applySnapshot } from "mobx-state-tree";

const User = types.model({
    id: types.identifier(types.string),
    name: types.optional(types.string, ""),
    email: types.string
})
    .actions((self) => ({
        test() {
            console.log('test');
        },

        afterCreate() {
            console.log("user store created");
        }
    }));

export default User;