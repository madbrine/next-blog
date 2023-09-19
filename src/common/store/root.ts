import { types } from "mobx-state-tree";

const RootStore = types
    .model('RootStore', {
        navigateMenu: types.boolean,
        sign: types.boolean,
        signModal: types.boolean
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
        }
    }));

export default RootStore;