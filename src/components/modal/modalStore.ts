import type { ComponentType } from "svelte";
import { customAlphabet } from "nanoid";
import { writable } from "svelte/store";

const ID_CHARS = "0123456789abcdefghijklmnopqrstuvwxyz";
const ID_LENGTH = 6;
const nanoid = customAlphabet(ID_CHARS, ID_LENGTH);

export interface ModalInit {
	id?: string;
	title: string;
	slot: ComponentType;
	onClose?: () => void;
}

export interface ModalBody extends ModalInit {
	id: string;
}

function createModalStore() {
	const { set, subscribe, update } = writable<ModalBody[]>([]);

	return {
		subscribe,

		trigger(modal: ModalInit) {
			const id = modal.id ?? nanoid();

			update((store) => {
				store.push({ ...modal, id });
				return store;
			});
		},

		close: () => {
			update((store) => {
				if (store.length <= 0) return store;

				const modal = store.pop();

				if (modal && modal.onClose) {
					modal.onClose();
				}

				return store;
			});
		},

		clear: () => set([])
	};
}

export const modalStore = createModalStore();
