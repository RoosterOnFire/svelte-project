import { writable } from "svelte/store";

export const data = writable([
  {
    name: "test 1",
    value: 1,
    desc: "1",
  },
  {
    name: "test 2",
    value: 2,
    desc: "2",
  },
  {
    name: "test 3",
    value: 3,
    desc: "",
  },
]);
