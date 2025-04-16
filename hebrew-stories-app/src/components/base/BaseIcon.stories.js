import BaseIcon from './BaseIcon.vue';

// Define metadata object (CSF 3 pattern)
const meta = {
  title: 'Base/BaseIcon',
  component: BaseIcon,
  argTypes: {
    name: {
      control: 'text',
      description: 'Name of the Material Symbols icon (e.g., "home", "settings", "arrow_back")',
    },
    size: {
      control: 'text', // Use text control for flexibility (e.g., '24px', '1.5rem', 32)
      description: 'Size of the icon (maps to font-size). E.g., "24px", "1.5rem", 32 (for px)',
    },
    color: {
      control: { type: 'color' }, // Use color picker, but allow text input too
      description: 'Color of the icon. Can be hex, rgb, or CSS variable name (e.g., "--color-primary")',
    },
  },
  args: {
    name: 'home', // Default icon
    size: null, // Default size (inherit)
    color: null, // Default color (inherit)
  },
};

export default meta;

/*
 * Example CSF 3 stories
 */

export const Default = {
  args: {
    name: 'home',
  },
};

export const Settings = {
  args: {
    name: 'settings',
  },
};

export const CustomSize = {
  args: {
    name: 'favorite',
    size: '36px', // Example size
  },
};

export const CustomSizeRem = {
  args: {
    name: 'star',
    size: '2.5rem', // Example size in rem
  },
};

export const CustomColor = {
  args: {
    name: 'thumb_up',
    color: 'green', // Example color name
  },
};

export const CustomColorHex = {
  args: {
    name: 'pets',
    color: '#ff69b4', // Example hex color
  },
};

export const ColorFromVariable = {
  args: {
    name: 'verified',
    color: '--color-primary', // Use CSS variable name
    size: '2rem',
  },
};

// Example showing icon alongside text
export const WithText = (args) => ({
  components: { BaseIcon },
  setup() { return { args }; },
  template: `
    <div style="display: flex; align-items: center; gap: var(--space-sm); font-size: 1.2rem;">
      <BaseIcon :name="args.name" :size="args.size" :color="args.color" />
      <span>{{ args.text }}</span>
    </div>
  `,
});
WithText.args = {
  name: 'info',
  size: '1.2rem', // Match surrounding text size
  color: '--color-secondary',
  text: 'מידע חשוב',
};

// Example showing icon for RTL context (e.g., back arrow)
export const BackArrow = {
  args: {
    name: 'arrow_forward', // Material Symbols uses logical direction, so 'forward' points left in RTL
    size: '24px',
  },
};
