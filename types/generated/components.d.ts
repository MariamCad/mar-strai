import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    Heading: Attribute.String;
    CTADescribtion: Attribute.Text;
    form: Attribute.Component<'elements.form'>;
  };
}

export interface BlocksHeroSection extends Schema.Component {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    Heading: Attribute.String;
    Text: Attribute.Text;
    Link: Attribute.Component<'elements.button-link'>;
    image: Attribute.Media<'images'>;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    pricingText1: Attribute.String;
    pricingDescriptionText1: Attribute.String;
    plan: Attribute.Component<'elements.pricing-plan', true>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    card: Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
    icon: '';
  };
  attributes: {
    buttonTitle: Attribute.String;
    buttonLink: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDERY ']>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    imagecard: Attribute.Media<'images'>;
    HeaderCard: Attribute.String;
    CardText: Attribute.Text;
  };
}

export interface ElementsForm extends Schema.Component {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'Form';
    description: '';
  };
  attributes: {
    Header: Attribute.String;
    FormDescription: Attribute.Text;
    FormInput: Attribute.Component<'elements.input', true>;
    FormButton: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsInput extends Schema.Component {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    Placeholder: Attribute.String;
    Label: Attribute.String;
    inputType: Attribute.String;
  };
}

export interface ElementsPricingPlan extends Schema.Component {
  collectionName: 'components_elements_pricing_plans';
  info: {
    displayName: 'PricingPlan';
  };
  attributes: {
    Plantype: Attribute.String;
    planPrice: Attribute.String;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    services: Attribute.Relation<
      'elements.pricing-plan',
      'oneToMany',
      'api::service.service'
    >;
    pricingButton: Attribute.Component<'elements.button-link', true>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDescription: Attribute.Text;
    MetaImage: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.cta': BlocksCta;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.pricing': BlocksPricing;
      'blocks.row': BlocksRow;
      'elements.button-link': ElementsButtonLink;
      'elements.card': ElementsCard;
      'elements.form': ElementsForm;
      'elements.input': ElementsInput;
      'elements.pricing-plan': ElementsPricingPlan;
      'seo.meta-data': SeoMetaData;
    }
  }
}
