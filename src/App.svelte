<script lang="ts">
  import InputText from "./lib/InputText.svelte";
  import InputNumber from "./lib/InputNumber.svelte";
  import { data } from "./lib/store";
  import TextArea from "./lib/Textarea.svelte";

  let selected = 0;

  $: editData = $data[selected];

  function selectRow(input: number) {
    selected = input;
  }
</script>

<main class="container mx-auto flex h-full bg-gray-50">
  <div class=" w-1/3 bg-gray-200 p-4">
    <ul>
      {#each $data as row, i}
        <li class="cursor-pointer" on:click={() => selectRow(i)}>{row.name}</li>
      {/each}
    </ul>
  </div>
  <div class="flex flex-grow flex-col gap-4 bg-gray-200 p-4">
    <InputText value={editData.name} />
    <InputNumber value={editData.value} />
    <TextArea bind:value={editData.desc} />
  </div>
</main>

<style>
  @import "./assets/style.css";
</style>
