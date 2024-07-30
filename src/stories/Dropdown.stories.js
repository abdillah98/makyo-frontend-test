// import { fn } from '@storybook/test';
import Dropdown from './Dropdown'
// import DropdownContainer from './DropdownContainer'

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  parameters: {
    // layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    renderOption: { control: 'boolean' },
    withSearch: { control: 'boolean' },
    options: { control: 'object' },
    portal: { control: 'boolean' },
    outlined: { control: 'boolean' },
    optionLabel: { control: 'text' },
    id: { control: 'text' },
    zIndex: { control: 'number'}
  },
  args: {
    multiple: true,
    renderOption: true,
    withSearch: true,
    options: [
      { id: 1, label: 'Pohon Pisang' },
      { id: 2, label: 'Motor Honda' },
      { id: 3, label: 'Kucing Persia' },
      { id: 4, label: 'Apel Malang' },
    ],
    portal: false,
    outlined: false,
    optionLabel: 'Dropdown Filter',
    id: 'dropdown',
    zIndex: 1000
  },
};

export const Default = {
  args: {},
};


