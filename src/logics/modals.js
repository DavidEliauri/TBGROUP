import {useModalsStore} from "@/stores/modals.js";

const $MODALS_STORE = useModalsStore();
export const closeAnyModal = () => {
console.log("closeAnyModal function");
    $MODALS_STORE.closeAnyModal()
}
export const openModal = (name = null, params = null) => {
    console.log("openModal function");
    $MODALS_STORE.openModal(name, params)
}
