import { flow, Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree";
import { ICategory } from "../types/ICategory";
import { network } from "../utils/network";

const Category = types.model({
    id: types.number,
    imageUrl: types.string,
    text: types.string,
});

const RootStore = types
    .model('RootStore', {
        navigateMenu: types.boolean,
        sign: types.boolean,
        signModal: types.boolean,
    })
    .actions(self => ({
        setNavigateMenu() {
            self.navigateMenu = !self.navigateMenu;
        },
        setSign() {
            self.sign = !self.sign;
        },
        setSignModal() {
            self.signModal = !self.signModal;
        },
        setSignTrue() {
            self.sign = true;
        },
    }));

export const store = RootStore.create({
    navigateMenu: false,
    sign: false,
    signModal: false,
});

export default RootStore;