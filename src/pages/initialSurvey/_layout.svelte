<script lang="ts">
  import { goto } from '@roxi/routify'
  let step: number
  $: step = 0
  const routes: string[] = ['goal', 'fitnessTest', 'person', 'result']

  function stepColor(thisStep: number, currentStep: number) {
    return thisStep <= currentStep ? 'step-primary' : ''
  }
  function back() {
    if (step > 0) step -= 1
  }
  function forward() {
    if (step < 4) step += 1
  }

  $: {
    if (step < routes.length) {
      const newRoute = `./${routes[step]}`
      $goto(newRoute)
    }
  }
</script>

<div class="w-full bg-green-400 h-full">
  <div class="overflow-x-auto">
    <ul class="w-full steps">
      <li class="step font-bold {stepColor(0, step)}">Ziel</li>
      <li class="step font-bold {stepColor(1, step)}">Fitness</li>
      <li class="step font-bold {stepColor(2, step)}">Person</li>
      <li class="step font-bold {stepColor(3, step)}">Ergebnis</li>
    </ul>
  </div>
  <slot scoped={{ step }}>
    <!-- pages in this folder and subfolders
     will be rendered here -->
  </slot>
  <div class="absolute text-center inset-x-0 bottom-0 h-16">
    <button class="btn btn-secondary" on:click={back}>zurück</button>
    <button class="btn btn-primary" on:click={forward}>vor</button>
  </div>
</div>
