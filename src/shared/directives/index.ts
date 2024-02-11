import { DirectiveBinding } from "vue"

export const vFocus = {
    mounted: (element:HTMLTextAreaElement) => element.focus()
}


export const vClear = {
    unmounted: (element:any, binding:any) => binding.value()
}