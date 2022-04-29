import s from '../components/src/misc/theme/styles/Fabric.module.css'
import Button from "../components/src/inputs/button/Button";

export default {
  title: "Inputs/Button",
  component: Button,
  decorators: [
    (Story) => (
        <div className={s.light}>
          <Story />
        </div>
    ),
  ],
}

const Template = args =><Button {...args} />

export const Minimal = Template.bind({})
Minimal.args = {
  variant: 'minimal',
  children: 'Minimal'
}

export const MinimalHorizontal = Template.bind({})
MinimalHorizontal.args = {
  variant: 'minimal-horizontal',
  children: 'MinimalHorizontal'
}
export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  children: 'Outlined'
}

export const Filled = Template.bind({})
Filled.args = {
  variant: 'filled',
  children: 'Filled'
}
