import BaseButton from './BaseButton.vue';

// Define metadata object first (CSF 3 pattern)
const meta = {
  title: 'Base/BaseButton', // Organizes the story in the Storybook sidebar
  component: BaseButton,
  // Defines argTypes for controls and documentation
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'text'],
      description: 'The visual style of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    // Default slot content control
    default: {
      control: 'text',
      description: 'Button label text',
    },
    iconLeft: {
      control: 'text',
      description: 'Icon name for the left side',
    },
    iconRight: {
      control: 'text',
      description: 'Icon name for the right side',
    },
  },
  // Default args for the component
  args: {
    default: 'לחץ כאן', // Default Hebrew text (slot content)
    disabled: false,
    variant: 'primary',
    iconLeft: null,
    iconRight: null,
  },
  // Add parameters for design integration or other addons if needed
  // parameters: {
  //   design: { ... }
  // }
};

// Export the metadata object as default
export default meta;

/*
 * Example CSF 3 stories
 * More on writing stories: https://storybook.js.org/docs/writing-stories#defining-stories
 */
export const Primary = {
  args: {
    variant: 'primary',
    default: 'כפתור ראשי',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    default: 'כפתור משני',
  },
};

export const Text = {
  args: {
    variant: 'text',
    default: 'כפתור טקסט',
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    disabled: true,
    default: 'כפתור מנוטרל',
  },
};

export const LongLabel = {
  args: {
    variant: 'primary',
    default: 'כפתור עם תווית ארוכה יותר',
  },
};

// --- New Stories with Icons ---

export const IconLeft = {
  args: {
    variant: 'primary',
    default: 'שלח',
    iconLeft: 'send',
  },
};

export const IconRight = {
  args: {
    variant: 'secondary',
    default: 'הבא',
    // Remember Material Symbols uses logical direction
    iconRight: 'arrow_forward', // Will point left in RTL
  },
};

export const IconOnly = {
  args: {
    variant: 'primary',
    default: '', // No text label
    iconLeft: 'add',
    // Add aria-label for accessibility on icon-only buttons
    'aria-label': 'הוסף', 
  },
  // Need to adjust template slightly for aria-label
  render: (args) => ({
    components: { BaseButton },
    setup() {
      // Separate aria-label from other args passed to BaseButton
      const { default: slotContent, ...buttonArgs } = args;
      return { slotContent, buttonArgs };
    },
    template: '<BaseButton v-bind="buttonArgs">{{ slotContent }}</BaseButton>',
  }),
};

export const IconOnlySecondary = {
  args: {
    variant: 'secondary',
    default: '', // No text label
    iconLeft: 'edit',
    'aria-label': 'ערוך',
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      const { default: slotContent, ...buttonArgs } = args;
      return { slotContent, buttonArgs };
    },
    template: '<BaseButton v-bind="buttonArgs">{{ slotContent }}</BaseButton>',
  }),
};

export const IconOnlyText = {
  args: {
    variant: 'text',
    default: '', // No text label
    iconLeft: 'close',
    'aria-label': 'סגור',
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      const { default: slotContent, ...buttonArgs } = args;
      return { slotContent, buttonArgs };
    },
    template: '<BaseButton v-bind="buttonArgs">{{ slotContent }}</BaseButton>',
  }),
};
