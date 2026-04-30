import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
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
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isPrimary: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLinkBasic extends Struct.ComponentSchema {
  collectionName: 'components_elements_link_basics';
  info: {
    displayName: 'Link Basic';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
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

export interface ElementsSteps extends Struct.ComponentSchema {
  collectionName: 'components_elements_steps';
  info: {
    displayName: 'Steps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsTabs extends Struct.ComponentSchema {
  collectionName: 'components_elements_tabs';
  info: {
    displayName: 'Tabs';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface LayoutAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    aboutBadges: Schema.Attribute.Component<'elements.badge', true>;
    companyImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
    trustedHeading: Schema.Attribute.String;
  };
}

export interface LayoutAwardSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_award_sections';
  info: {
    displayName: 'Award Section';
  };
  attributes: {
    awards: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface LayoutContactUsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_contact_us_sections';
  info: {
    displayName: 'Contact Us Section';
  };
  attributes: {
    badges: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    contactPerson: Schema.Attribute.Component<'layout.profile-section', true>;
    exploreSection: Schema.Attribute.Component<'layout.explore', true>;
    exploreSectionHeading: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    keyPoints: Schema.Attribute.Blocks;
    nextSteps: Schema.Attribute.Component<'elements.steps', true>;
    nextStepsHeading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    successMessage: Schema.Attribute.String;
    successSubText: Schema.Attribute.Text;
  };
}

export interface LayoutContentWithImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_content_with_images';
  info: {
    displayName: 'Content With Image';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', true>;
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

export interface LayoutDgeScoreSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_dge_score_sections';
  info: {
    displayName: 'DGE Score Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
  };
}

export interface LayoutExplore extends Struct.ComponentSchema {
  collectionName: 'components_layout_explores';
  info: {
    displayName: 'Explore';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'elements.link-basic', true>;
    images: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface LayoutFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    contactCard: Schema.Attribute.Component<'layout.profile-section', false>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    faqs: Schema.Attribute.Component<'layout.faq-item', true>;
    heading: Schema.Attribute.Blocks;
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

export interface LayoutFirmSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_firm_sections';
  info: {
    displayName: 'Firm Section';
  };
  attributes: {
    sectionTitle: Schema.Attribute.Component<'elements.tabs', true>;
    topHeading: Schema.Attribute.String;
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
    legalLinks: Schema.Attribute.Component<'elements.link-basic', true>;
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

export interface LayoutFounderSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_founder_sections';
  info: {
    displayName: 'Founder Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', true>;
    designation: Schema.Attribute.String;
    dna: Schema.Attribute.String;
    founderImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    founderName: Schema.Attribute.String;
    funderDescription: Schema.Attribute.Blocks;
  };
}

export interface LayoutHeadingWithImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_heading_with_images';
  info: {
    displayName: 'Heading With Image';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Schema.Attribute.String;
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

export interface LayoutImageSliderSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_image_slider_sections';
  info: {
    displayName: 'Image Slider Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', true>;
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface LayoutIndustryExpertiseSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_industry_expertise_sections';
  info: {
    displayName: 'Industry Expertise Section';
  };
  attributes: {
    heading: Schema.Attribute.Blocks;
    industries: Schema.Attribute.Component<'layout.industry-item', true>;
  };
}

export interface LayoutIndustryItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_industry_items';
  info: {
    displayName: 'Industry Item';
  };
  attributes: {
    clientLogos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Blocks;
    tags: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutLeadersBoard extends Struct.ComponentSchema {
  collectionName: 'components_layout_leaders_boards';
  info: {
    displayName: 'Leaders Board Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', true>;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.Blocks;
    profile: Schema.Attribute.Component<'layout.profile-section', true>;
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

export interface LayoutMissionVision extends Struct.ComponentSchema {
  collectionName: 'components_layout_mission_visions';
  info: {
    displayName: 'Mission Vision Section';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    missionVisionTabs: Schema.Attribute.Component<'elements.tabs', true>;
  };
}

export interface LayoutOfficeSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_office_sections';
  info: {
    displayName: 'Office Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    Locations: Schema.Attribute.Component<'layout.heading-with-image', true>;
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

export interface LayoutProfileSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_profile_sections';
  info: {
    displayName: 'Profile Section';
  };
  attributes: {
    designation: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkedinUrl: Schema.Attribute.String;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface LayoutResourcesAndCareers extends Struct.ComponentSchema {
  collectionName: 'components_layout_resources_and_careers';
  info: {
    displayName: 'Resources & Careers';
  };
  attributes: {
    sectionWithImage: Schema.Attribute.Component<
      'layout.content-with-image',
      true
    >;
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

export interface LayoutStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_stats_sections';
  info: {
    displayName: 'Stats Section';
  };
  attributes: {
    awardsImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    clutchImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    stats: Schema.Attribute.Component<'layout.content-with-image', true>;
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
      'elements.link-basic': ElementsLinkBasic;
      'elements.price-card': ElementsPriceCard;
      'elements.steps': ElementsSteps;
      'elements.tabs': ElementsTabs;
      'layout.about-section': LayoutAboutSection;
      'layout.award-section': LayoutAwardSection;
      'layout.button': LayoutButton;
      'layout.card-grid': LayoutCardGrid;
      'layout.contact-us-section': LayoutContactUsSection;
      'layout.content-with-image': LayoutContentWithImage;
      'layout.content-with-video': LayoutContentWithVideo;
      'layout.dge-score-section': LayoutDgeScoreSection;
      'layout.explore': LayoutExplore;
      'layout.faq-item': LayoutFaqItem;
      'layout.faq-section': LayoutFaqSection;
      'layout.feature-case-studies': LayoutFeatureCaseStudies;
      'layout.firm-section': LayoutFirmSection;
      'layout.footer': LayoutFooter;
      'layout.footer-accordion-section': LayoutFooterAccordionSection;
      'layout.footer-award-item': LayoutFooterAwardItem;
      'layout.footer-link-item': LayoutFooterLinkItem;
      'layout.footer-social-link': LayoutFooterSocialLink;
      'layout.footer-solution-group': LayoutFooterSolutionGroup;
      'layout.footer-technology-item': LayoutFooterTechnologyItem;
      'layout.founder-section': LayoutFounderSection;
      'layout.heading-with-image': LayoutHeadingWithImage;
      'layout.hero': LayoutHero;
      'layout.image-slider-section': LayoutImageSliderSection;
      'layout.industry-expertise-section': LayoutIndustryExpertiseSection;
      'layout.industry-item': LayoutIndustryItem;
      'layout.leaders-board': LayoutLeadersBoard;
      'layout.legal-document': LayoutLegalDocument;
      'layout.mission-vision': LayoutMissionVision;
      'layout.office-section': LayoutOfficeSection;
      'layout.price-grid': LayoutPriceGrid;
      'layout.profile-section': LayoutProfileSection;
      'layout.resources-and-careers': LayoutResourcesAndCareers;
      'layout.section-heading': LayoutSectionHeading;
      'layout.stats-section': LayoutStatsSection;
      'layout.top-nav': LayoutTopNav;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
