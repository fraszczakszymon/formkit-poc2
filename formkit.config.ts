import { genesisIcons } from "@formkit/icons"
import { rootClasses } from "./formkit.theme"
import { DefaultConfigOptions } from '@formkit/vue'
import { form } from './src/inputs/form';
import { text as email } from './src/inputs/email';

const config: DefaultConfigOptions = {
  icons: { ...genesisIcons },
  config: { rootClasses },
  inputs: {
    customForm: form,
    customEmail: email,
  }
}

export default config
