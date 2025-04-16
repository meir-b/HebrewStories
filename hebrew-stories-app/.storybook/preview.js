/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },

  // Add global types for RTL support
  globalTypes: {
    direction: {
      name: 'Direction',
      description: 'Set the text direction',
      defaultValue: 'rtl', // Default to RTL for this project
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'ltr', title: 'LTR' },
          { value: 'rtl', title: 'RTL' },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },

  // Add decorators to apply the direction to the story
  decorators: [
    (story, context) => {
      const { direction } = context.globals;
      // Apply the direction to a wrapper div or directly to the story root
      // depending on how components are structured. A wrapper is often safer.
      return {
        template: `<div dir="${direction}"><story /></div>`,
      };
    },
  ],
};

export default preview;
