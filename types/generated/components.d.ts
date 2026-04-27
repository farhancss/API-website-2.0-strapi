import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface CaseStudyCategory extends Struct.ComponentSchema {
  collectionName: 'components_case_study_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    items: Schema.Attribute.Component<'case-study.item', true>;
    name: Schema.Attribute.String;
  };
}

export interface CaseStudyItem extends Struct.ComponentSchema {
  collectionName: 'components_case_study_items';
  info: {
    displayName: 'Case Study Item';
  };
  attributes: {
    author_designation: Schema.Attribute.String;
    author_image: Schema.Attribute.Media<'images'>;
    author_name: Schema.Attribute.String;
    company_name: Schema.Attribute.String;
    funding_info: Schema.Attribute.String;
    main_image: Schema.Attribute.Media<'images'>;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    review_text: Schema.Attribute.Text;
    service_label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsBadge extends Struct.ComponentSchema {
  collectionName: 'components_elements_badges';
  info: {
    description: 'Hero badge with text and trailing icon';
    displayName: 'Badge';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['Frame', 'Download', 'Globe', 'Sparkles', 'LayoutPanelLeft', 'Palette']
    >;
    text: Schema.Attribute.Text;
  };
}

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isPrimary: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsPriceCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_price_cards';
  info: {
    description: '';
    displayName: 'Price Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'elements.feature', true>;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
    price: Schema.Attribute.String;
    selected: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface LayoutButton extends Struct.ComponentSchema {
  collectionName: 'components_layout_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
  };
}

export interface LayoutCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_layout_card_grids';
  info: {
    description: '';
    displayName: 'Card Grid';
  };
  attributes: {
    cardItems: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface LayoutContentWithImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_content_with_images';
  info: {
    displayName: 'Content With Image';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutContentWithVideo extends Struct.ComponentSchema {
  collectionName: 'components_layout_content_with_videos';
  info: {
    displayName: 'Content With Video';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button: Schema.Attribute.Component<'layout.button', false>;
    youtubeUrl: Schema.Attribute.String;
  };
}

export interface LayoutFeatureCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_layout_feature_case_studies';
  info: {
    displayName: 'Feature Case Studies';
  };
  attributes: {
    categories: Schema.Attribute.Component<'case-study.category', true>;
    heading: Schema.Attribute.Blocks;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    accordionSections: Schema.Attribute.Component<
      'layout.footer-accordion-section',
      true
    >;
    addressHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Address'>;
    addressText: Schema.Attribute.Text;
    awards: Schema.Attribute.Component<'layout.footer-award-item', true>;
    companyProfileLink: Schema.Attribute.String;
    companyProfileMeta: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'PDF, 3 mb'>;
    companyProfileTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Company Profile'>;
    contactHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Contact'>;
    copyrightText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    footerLinks: Schema.Attribute.Component<'layout.footer-link-item', true>;
    legalLinks: Schema.Attribute.Component<'elements.link', true>;
    logoImage: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
    newsletterButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Subscribe'>;
    newsletterPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter Your Email'>;
    newsletterTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Subscribe To Our Newsletter'>;
    phone: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'layout.footer-social-link', true>;
  };
}

export interface LayoutFooterAccordionSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_accordion_sections';
  info: {
    displayName: 'Footer Accordion Section';
  };
  attributes: {
    industries: Schema.Attribute.Component<'elements.link', true>;
    solutionGroups: Schema.Attribute.Component<
      'layout.footer-solution-group',
      true
    >;
    technologies: Schema.Attribute.Component<
      'layout.footer-technology-item',
      true
    >;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['solutions', 'industries', 'technologies']
    >;
  };
}

export interface LayoutFooterAwardItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_award_items';
  info: {
    displayName: 'Footer Award Item';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooterLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_link_items';
  info: {
    displayName: 'Footer Link Item';
  };
  attributes: {
    children: Schema.Attribute.Component<'elements.link', true>;
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface LayoutFooterSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_social_links';
  info: {
    displayName: 'Footer Social Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutFooterSolutionGroup extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_solution_groups';
  info: {
    displayName: 'Footer Solution Group';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooterTechnologyItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_technology_items';
  info: {
    displayName: 'Footer Technology Item';
  };
  attributes: {
    iconImage: Schema.Attribute.Media<'images'>;
    iconText: Schema.Attribute.String;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    arrowImage: Schema.Attribute.Media<'images'>;
    assistText: Schema.Attribute.String;
    badgeImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    badgeItems: Schema.Attribute.Component<'elements.badge', true>;
    clientLogos: Schema.Attribute.Media<'images', true>;
    experienceText: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    headingHighlight: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutLegalDocument extends Struct.ComponentSchema {
  collectionName: 'components_layout_legal_documents';
  info: {
    displayName: 'Legal Document';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.Blocks;
  };
}

export interface LayoutPriceGrid extends Struct.ComponentSchema {
  collectionName: 'components_layout_price_grids';
  info: {
    displayName: 'Price Grid';
  };
  attributes: {
    priceCard: Schema.Attribute.Component<'elements.price-card', true>;
  };
}

export interface LayoutSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_layout_section_headings';
  info: {
    displayName: 'DGE Section';
  };
  attributes: {
    DGEImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Schema.Attribute.Blocks;
    items: Schema.Attribute.Component<'blocks.text', true>;
    subHeading: Schema.Attribute.Blocks;
  };
}

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    description: '';
    displayName: 'Top Nav';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    logoImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logoText: Schema.Attribute.String;
    navItems: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.text': BlocksText;
      'case-study.category': CaseStudyCategory;
      'case-study.item': CaseStudyItem;
      'elements.badge': ElementsBadge;
      'elements.card': ElementsCard;
      'elements.feature': ElementsFeature;
      'elements.link': ElementsLink;
      'elements.price-card': ElementsPriceCard;
      'layout.button': LayoutButton;
      'layout.card-grid': LayoutCardGrid;
      'layout.content-with-image': LayoutContentWithImage;
      'layout.content-with-video': LayoutContentWithVideo;
      'layout.feature-case-studies': LayoutFeatureCaseStudies;
      'layout.footer': LayoutFooter;
      'layout.footer-accordion-section': LayoutFooterAccordionSection;
      'layout.footer-award-item': LayoutFooterAwardItem;
      'layout.footer-link-item': LayoutFooterLinkItem;
      'layout.footer-social-link': LayoutFooterSocialLink;
      'layout.footer-solution-group': LayoutFooterSolutionGroup;
      'layout.footer-technology-item': LayoutFooterTechnologyItem;
      'layout.hero': LayoutHero;
      'layout.legal-document': LayoutLegalDocument;
      'layout.price-grid': LayoutPriceGrid;
      'layout.section-heading': LayoutSectionHeading;
      'layout.top-nav': LayoutTopNav;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
