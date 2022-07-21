/**
 * @jest-environment jsdom
 */

import { renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import { useModalState } from "../index";

describe("useDisclosure", () => {
  test("Test useMyCustomHook", () => {
    const { result } = renderHook(() => useModalState(), {
      wrapper: RecoilRoot,
    });
    expect(result.current).toEqual(false);
  });
});
