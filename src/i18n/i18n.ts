import { addMessages } from 'svelte-i18n'
import type { LocaleDictionary } from 'svelte-i18n/types/runtime/types/index'
import de from './de.json'

function isLocaleDictionary(dict: LocaleDictionary | unknown): dict is LocaleDictionary {
  return dict instanceof Object
}

if (isLocaleDictionary(de)) {
  addMessages('de', de)
}
