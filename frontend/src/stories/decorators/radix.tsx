import { Theme } from '@radix-ui/themes';
import '../task.css';

export const Radix = (Story) => {
    return <Theme>
        <Story />
    </Theme>
}