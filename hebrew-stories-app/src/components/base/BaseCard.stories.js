import BaseCard from './BaseCard.vue';
import BaseButton from './BaseButton.vue'; // Import button for footer example

// Define metadata object (CSF 3 pattern)
const meta = {
  title: 'Base/BaseCard',
  component: BaseCard,
  // Define argTypes for slots, using 'text' control for simplicity
  argTypes: {
    default: { control: 'text', description: 'Main content for the card body' },
    header: { control: 'text', description: 'Content for the card header' },
    footer: { control: 'text', description: 'Content for the card footer' },
    image: { control: 'text', description: 'Placeholder text/URL for image slot' },
  },
  // Default args for the component slots
  args: {
    header: 'כותרת הכרטיס',
    default: 'זהו תוכן ברירת המחדל של גוף הכרטיס. אפשר להוסיף כאן טקסט נוסף.',
    footer: 'תוכן תחתון',
    image: '', // Default to no image unless specified in story
  },
};

// Export the metadata object as default
export default meta;

/*
 * Example CSF 3 stories
 */

// Base template rendering slots based on args
const Template = (args) => ({
  components: { BaseCard, BaseButton },
  setup() { return { args }; },
  template: `
    <BaseCard style="max-width: 400px;">
      <template v-if="args.image" #image>
        <img 
          :src="args.image" 
          alt="Card Image" 
          style="display: block; width: 100%; height: auto;" 
        />
      </template>
      <template v-if="args.header" #header>
        <h2>{{ args.header }}</h2>
      </template>
      <template v-if="args.default" #default>
        <p>{{ args.default }}</p>
      </template>
      <template v-if="args.footer" #footer>
        <span>{{ args.footer }}</span>
      </template>
    </BaseCard>
  `,
});

export const Default = Template.bind({});
Default.args = {
  // Uses args from meta, but explicitly set image to ''
  image: '', 
  header: 'כרטיס ברירת מחדל',
  default: 'תוכן גוף הכרטיס כאן.',
  footer: 'תחתית ברירת מחדל',
};

export const WithImage = Template.bind({});
WithImage.args = {
  header: 'כרטיס עם תמונה',
  default: 'כרטיס זה כולל תמונה בחלקו העליון.',
  image: 'https://placehold.co/400x200/orange/white?text=Test+Image', // Use placehold.co
  footer: 'תחתית עם תמונה',
};

export const NoImage = Template.bind({});
NoImage.args = {
  header: 'כרטיס ללא תמונה',
  default: 'כרטיס זה מציג רק תוכן טקסטואלי.',
  image: '', // Explicitly empty
  footer: 'תחתית ללא תמונה',
};

export const NoFooter = Template.bind({});
NoFooter.args = {
  header: 'כרטיס ללא תחתית',
  default: 'לכרטיס זה אין אזור תחתון.',
  image: 'https://placehold.co/400x200/lightblue/black?text=No+Footer', // Use placehold.co
  footer: '', // Explicitly empty
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  header: 'רק טקסט',
  default: 'כרטיס פשוט המכיל רק כותרת וגוף טקסט.',
  image: '',
  footer: '',
};

// Story with button needs its own template because the footer slot content is more complex
export const WithButtonInFooter = (args) => ({
  components: { BaseCard, BaseButton },
  setup() { return { args }; },
  template: `
    <BaseCard style="max-width: 400px;">
      <template v-if="args.image" #image>
         <img 
          :src="args.image" 
          alt="Card Image" 
          style="display: block; width: 100%; height: auto;" 
        />
      </template>
      <template v-if="args.header" #header><h2>{{ args.header }}</h2></template>
      <template v-if="args.default" #default><p>{{ args.default }}</p></template>
      <template #footer>
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
          <span>{{ args.footer }}</span>
          <BaseButton variant="secondary" size="small">קרא עוד</BaseButton>
        </div>
      </template>
    </BaseCard>
  `,
});
WithButtonInFooter.args = {
  header: 'פעולה בתחתית',
  default: 'כרטיס זה כולל כפתור באזור התחתון.',
  image: '', // No image by default for this story
  footer: 'מידע נוסף:',
};
