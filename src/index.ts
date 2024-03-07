import { getInput } from '@actions/core'

const variable = getInput("nombre")

console.log(`${variable}`)