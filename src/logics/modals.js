import {useModalsStore} from "@/stores/modals.js";

export const closeAnyModal = () => {
const $MODALS_STORE = useModalsStore();
    $MODALS_STORE.closeAnyModal()
}
export const openModal = (name = null, params = null) => {
    const $MODALS_STORE = useModalsStore();
    $MODALS_STORE.openModal(name, params)
}
