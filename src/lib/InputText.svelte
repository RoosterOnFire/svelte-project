<script lang="ts">
  export let value: string;

  let mode: "show" | "edit" = "show";

  function toggleMode() {
    mode = mode === "edit" ? "show" : "edit";
  }
</script>

{#if mode === "edit"}
  <input class="px-2" type="text" bind:value on:dblclick={toggleMode} />
{:else}
  <p class="cursor-pointer px-2" on:dblclick={toggleMode}>
    {value}
  </p>
{/if}
