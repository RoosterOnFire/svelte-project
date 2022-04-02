<script lang="ts">
  export let readonly: boolean = true;
  export let value: string;
</script>

<textarea
  name="textarea"
  id="textarea"
  cols="30"
  rows="10"
  class="p-2"
  {readonly}
  {value}
/>
