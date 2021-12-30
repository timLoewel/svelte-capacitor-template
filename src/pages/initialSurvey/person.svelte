<script lang="ts">
  export let scoped: { step: number }

  let step: number
  $: ({ step } = scoped)
</script>

<div class="card">
  <div class="card-title">Person {step}</div>
</div>
