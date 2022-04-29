import s from '../components/src/misc/theme/styles/Fabric.module.css'
import DateField from "../components/src/inputs/date/DateField";

export default {
    title: "Inputs/DateField",
    component: DateField,
    argTypes: {handleChange: {action: "handleChange"}},
    parameters: {
        layout: 'centered',
        docs: { inlineStories: false, iframeHeight: 600 },
    },
    decorators: [
        (Story) => (
            <div className={s.light}>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
                />
                <Story/>
            </div>
        ),
    ],
}

const Template = args => <DateField {...args} />

export const Default = Template.bind({})
Default.args = {
    label: 'Label',
    placeholder: 'Placeholder'
}

// export const masked= Template.bind({})
// Outlined.args = {
//   variant: 'outlined',
//   children: 'Outlined'
// }
