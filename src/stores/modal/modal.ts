import { useCallback } from "react";

import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const modalRecoilState = atom<boolean>({
  key: "modalState",
  default: false,
});

/**
 * @package
 */
export const useModalState = () => {
  return useRecoilValue(modalRecoilState);
};

/**
 * @package
 */
export const useModalMutation = () => {
  const setState = useSetRecoilState(modalRecoilState);

  const closeModal = useCallback(() => setState(false), [setState]);
  const openModal = useCallback(() => setState(true), [setState]);

  return { closeModal, openModal };
};
