import {addParameters, addDecorator} from '@storybook/react'
import {withContexts} from '@storybook/addon-contexts/react'
import {withKnobs} from '@storybook/addon-knobs'
import {contexts} from './contexts'

addParameters({
  background: [
    {name: 'Default Theme', value: '#FFFFFF', default: true},
    {name: 'Dark Theme', value: '#050449'},
  ],
})

addDecorator(withContexts(contexts))
addDecorator(withKnobs)
