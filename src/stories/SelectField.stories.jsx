import s from '../components/src/misc/theme/styles/Fabric.module.css'
import TextField from "../components/src/inputs/text/TextField";

export default {
  title: "Inputs/TextField",
  component: TextField,
    argTypes: { handleChange: { action: "handleChange" } },
  decorators: [
    (Story) => (
        <div className={s.light}>
          <Story />
        </div>
    ),
  ],
}

const Template = args =><TextField {...args} />

export const Default = Template.bind({})
Default.args = {
    label: 'Label',
    placeholder: 'Placeholder'
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
    label: 'Label',
    placeholder: 'Placeholder',
    value: '123-testing'
}
export const Area = Template.bind({})
Area.args = {
  variant: 'area',
    label: 'Label',
    placeholder: 'Placeholder'
}


// export const masked= Template.bind({})
// Outlined.args = {
//   variant: 'outlined',
//   children: 'Outlined'
// }
