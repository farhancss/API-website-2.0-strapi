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

export interface CaseStudyAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_case_study_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<'images', true>;
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'About'>;
  };
}

export interface CaseStudyBrandingSection extends Struct.ComponentSchema {
  collectionName: 'components_case_study_branding_sections';
  info: {
    displayName: 'Branding Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<'images', true>;
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Branding'>;
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

export interface CaseStudyChallengeRow extends Struct.ComponentSchema {
  collectionName: 'components_case_study_challenge_rows';
  info: {
    displayName: 'Challenge Row';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CaseStudyChallengesSection extends Struct.ComponentSchema {
  collectionName: 'components_case_study_challenges_sections';
  info: {
    displayName: 'Challenges Section';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Challenges'>;
    rows: Schema.Attribute.Component<'case-study.challenge-row', true>;
  };
}

export interface CaseStudyDgeProcessSection extends Struct.ComponentSchema {
  collectionName: 'components_case_study_dge_process_sections';
  info: {
    displayName: 'DGE Process Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'case-study.process-card', true>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    highlightText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Digital Growth Engine (DGE)'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface CaseStudyFeaturedReviewSection extends Struct.ComponentSchema {
  collectionName: 'components_case_study_featured_review_sections';
  info: {
    description: 'Full-width testimonial card: Clutch rating sidebar (left) and linked review quote with author (right).';
    displayName: 'Featured Review Section';
  };
  attributes: {
    backgroundPattern: Schema.Attribute.Media<'images' | 'files'>;
    review: Schema.Attribute.Relation<
      'manyToOne',
      'api::clutch-review.clutch-review'
    > &
      Schema.Attribute.Required;
    reviewedOnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Reviewed on'>;
  };
}

export interface CaseStudyGrowthSessionSection extends Struct.ComponentSchema {
  collectionName: 'components_case_study_growth_session_sections';
  info: {
    displayName: 'Growth Session Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    headline: Schema.Attribute.Blocks;
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
    title: Schema.Attribute.Blocks;
  };
}

export interface CaseStudyProcessCard extends Struct.ComponentSchema {
  collectionName: 'components_case_study_process_cards';
  info: {
    displayName: 'Process Card';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    items: Schema.Attribute.Component<'case-study.process-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CaseStudyProcessItem extends Struct.ComponentSchema {
  collectionName: 'components_case_study_process_items';
  info: {
    displayName: 'Process Item';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CaseStudyResponsiveDesignSection
  extends Struct.ComponentSchema {
  collectionName: 'components_case_study_responsive_design_sections';
  info: {
    description: 'Section label, heading, description, responsive mockup images, a row of process steps (icon + title + description), and optional background illustration.';
    displayName: 'Responsive Design Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<'images', true>;
    label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Responsive Design'>;
    steps: Schema.Attribute.Component<'elements.steps', true>;
  };
}

export interface CaseStudyResultCard extends Struct.ComponentSchema {
  collectionName: 'components_case_study_result_cards';
  info: {
    displayName: 'Result Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    metric: Schema.Attribute.String & Schema.Attribute.Required;
    showTrendUp: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CaseStudyResultsSection extends Struct.ComponentSchema {
  collectionName: 'components_case_study_results_sections';
  info: {
    displayName: 'Results Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'case-study.result-card', true>;
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Results'>;
  };
}

export interface CaseStudySocialMediaCard extends Struct.ComponentSchema {
  collectionName: 'components_case_study_social_media_cards';
  info: {
    displayName: 'Social Media Card';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface CaseStudySocialMediaSection extends Struct.ComponentSchema {
  collectionName: 'components_case_study_social_media_sections';
  info: {
    displayName: 'Social Media Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'case-study.social-media-card', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Social Media'>;
  };
}

export interface CaseStudyUserExperienceSection extends Struct.ComponentSchema {
  collectionName: 'components_case_study_user_experience_sections';
  info: {
    displayName: 'User Experience Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<'images', true>;
    label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'User Experience'>;
  };
}

export interface CaseStudyWebsiteDesignSection extends Struct.ComponentSchema {
  collectionName: 'components_case_study_website_design_sections';
  info: {
    displayName: 'Website Design Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<'images', true>;
    label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Website Design'>;
  };
}

export interface ElementsAiCreativeCapabilityItem
  extends Struct.ComponentSchema {
  collectionName: 'components_elements_ai_creative_capability_items';
  info: {
    description: 'Capability card with title, provider tag, image, and supporting description.';
    displayName: 'AI Creative Capability Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    provider: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsAiIndustryUseCaseItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_ai_industry_use_case_items';
  info: {
    description: 'Industry tab with number, title, description, use case checklist, and CTA.';
    displayName: 'AI Industry Use Case Item';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.Blocks;
    useCases: Schema.Attribute.Component<'elements.feature', true>;
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

export interface ElementsCreativeServiceCategoryItem
  extends Struct.ComponentSchema {
  collectionName: 'components_elements_creative_service_category_items';
  info: {
    description: 'Service category card with default and hover graphics, title, service links, and learn-more CTA.';
    displayName: 'Creative Service Category Item';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    hoverImage: Schema.Attribute.Media<'images'>;
    image: Schema.Attribute.Media<'images'>;
    items: Schema.Attribute.Component<'elements.link-basic', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsDesignConversionItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_design_conversion_items';
  info: {
    description: 'Service card with icon, title, description, CTA, and optional highlighted styling.';
    displayName: 'Design Conversion Item';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsDesignInfoRow extends Struct.ComponentSchema {
  collectionName: 'components_elements_design_info_rows';
  info: {
    description: 'Alternating two-column row with heading, description, feature tags, CTA, and image.';
    displayName: 'Design Info Row';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.tag', true>;
    heading: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

export interface ElementsDesignProcessStepItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_design_process_step_items';
  info: {
    description: 'Process step with step label, primary title pill, and secondary task pills.';
    displayName: 'Design Process Step Item';
  };
  attributes: {
    tasks: Schema.Attribute.Component<'shared.tag', true>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'STEP #1'>;
  };
}

export interface ElementsDesignStatItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_design_stat_items';
  info: {
    description: 'Stat callout with label, value, and description.';
    displayName: 'Design Stat Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ElementsDigitalEngineFeatureBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_elements_digital_engine_feature_blocks';
  info: {
    description: 'Two-column block with heading, description, feature list, tech icons, and a visual on the right.';
    displayName: 'Digital Engine Feature Block';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    techIcons: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
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

export interface ElementsIndustryExpertiseCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_industry_expertise_cards';
  info: {
    description: 'Image card with title, description, optional link, and highlighted styling.';
    displayName: 'Industry Expertise Card';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.link-basic', false>;
    title: Schema.Attribute.Blocks;
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

export interface ElementsMarketingStatItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_marketing_stat_items';
  info: {
    description: 'Result stat with value, title, and description.';
    displayName: 'Marketing Stat Item';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ElementsMarketingTechnologyCard
  extends Struct.ComponentSchema {
  collectionName: 'components_elements_marketing_technology_cards';
  info: {
    description: 'Feature card with title, description, illustration, and optional tool icons for featured layout.';
    displayName: 'Marketing Technology Card';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    technologies: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['horizontal', 'featured']> &
      Schema.Attribute.DefaultTo<'horizontal'>;
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

export interface ElementsProvenResultsAccordionItem
  extends Struct.ComponentSchema {
  collectionName: 'components_elements_proven_results_accordion_items';
  info: {
    description: 'Accordion row with title, description, optional highlighted styling, and nested case study slides.';
    displayName: 'Proven Results Accordion Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    slides: Schema.Attribute.Component<'elements.proven-results-slide', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsProvenResultsSlide extends Struct.ComponentSchema {
  collectionName: 'components_elements_proven_results_slides';
  info: {
    description: 'Case study card with summary, chart images, and CTA for the results carousel.';
    displayName: 'Proven Results Slide';
  };
  attributes: {
    chartImages: Schema.Attribute.Media<'images', true>;
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    summary: Schema.Attribute.Text;
  };
}

export interface ElementsSectionNavLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_section_nav_links';
  info: {
    description: 'Anchor link for sticky section navigation.';
    displayName: 'Section Nav Link';
  };
  attributes: {
    name: Schema.Attribute.String;
    sectionId: Schema.Attribute.String;
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

export interface ElementsTabSubItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_tab_sub_items';
  info: {
    description: "A child item shown inside a Tab (e.g. 'Client Service', 'Ownership' under the 'Our Core Values' tab).";
    displayName: 'Tab Sub Item';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTabs extends Struct.ComponentSchema {
  collectionName: 'components_elements_tabs';
  info: {
    displayName: 'Tabs';
  };
  attributes: {
    children: Schema.Attribute.Component<'elements.tab-sub-item', true>;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    href: Schema.Attribute.String;
  };
}

export interface ElementsWebDesignServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_web_design_service_items';
  info: {
    description: 'Service card with title, image, and supporting description.';
    displayName: 'Web Design Service Item';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
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
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    title: Schema.Attribute.String;
    trustedHeading: Schema.Attribute.String;
  };
}

export interface LayoutAgencyHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_agency_hero_sections';
  info: {
    description: 'Dark two-column hero: heading, description, HubSpot proposal form, Clutch rating, trusted logos on the left; background pattern on the right.';
    displayName: 'Agency Hero Section';
  };
  attributes: {
    backgroundPattern: Schema.Attribute.Media<'images'>;
    badgeImage: Schema.Attribute.Media<'images'>;
    clientLogos: Schema.Attribute.Media<'images', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    hubspotForm: Schema.Attribute.Relation<
      'manyToOne',
      'api::hub-spot-form.hub-spot-form'
    >;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    richDescription: Schema.Attribute.Blocks;
    trustedHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Trusted by big companies'>;
  };
}

export interface LayoutAgencyIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_agency_intro_sections';
  info: {
    description: 'Centered heading with a three-column grid of bordered content columns.';
    displayName: 'Agency Intro Section';
  };
  attributes: {
    columns: Schema.Attribute.Component<'shared.tag', true>;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutAgencyProcessSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_agency_process_sections';
  info: {
    description: 'Two-column section: heading, description, CTA, and awards on the left; vertical process steps on the right.';
    displayName: 'Agency Process Section';
  };
  attributes: {
    awards: Schema.Attribute.Media<'images', true>;
    awardsDescription: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'An Award-Winning agency committed to excellence, reflecting innovation and client satisfaction at every step.'>;
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    processSteps: Schema.Attribute.Component<'shared.quote', true>;
  };
}

export interface LayoutAiCreativeCapabilitiesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_ai_creative_capabilities_sections';
  info: {
    description: 'Centered intro with CTA and a multi-card grid of AI-powered creative capabilities.';
    displayName: 'AI Creative Capabilities Section';
  };
  attributes: {
    capabilities: Schema.Attribute.Component<
      'elements.ai-creative-capability-item',
      true
    >;
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutAiCreativesHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_ai_creatives_hero_sections';
  info: {
    description: 'Dark hero with breadcrumb, heading, description, CTA, video panel, and bottom stat callouts.';
    displayName: 'AI Creatives Hero Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    breadcrumb: Schema.Attribute.Component<'elements.link-basic', true>;
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    stats: Schema.Attribute.Component<'elements.badge', true>;
    videoThumbnail: Schema.Attribute.Media<'images'>;
    videoUrl: Schema.Attribute.String;
  };
}

export interface LayoutAiIndustryUseCasesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_ai_industry_use_cases_sections';
  info: {
    description: 'Centered heading with industry tabs on the left and description, use case checklist, and CTA on the right.';
    displayName: 'AI Industry Use Cases Section';
  };
  attributes: {
    heading: Schema.Attribute.Blocks;
    industries: Schema.Attribute.Component<
      'elements.ai-industry-use-case-item',
      true
    >;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutAiPoweredSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_ai_powered_sections';
  info: {
    description: 'Centered heading with two-column layout: AI feature cards on the left and lifestyle image with chat overlays on the right.';
    displayName: 'AI Powered Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutAiServiceCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_ai_service_cta_sections';
  info: {
    description: 'Dark call-to-action banner with icon, heading, description, CTA, background image, and partner logo strip.';
    displayName: 'AI Service CTA Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    partnerLogos: Schema.Attribute.Media<'images', true>;
  };
}

export interface LayoutAwardInsightsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_award_insights_sections';
  info: {
    description: "Featured blog/insight cards related to award wins (e.g. 'Insights from Our Award Wins').";
    displayName: 'Award Insights Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    insights: Schema.Attribute.Component<'shared.award-insight-item', true>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutAwardItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_award_items';
  info: {
    description: 'One award column: badge graphic, title text, and company logo.';
    displayName: 'Award Item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutAwardSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_award_sections';
  info: {
    displayName: 'Award Section';
  };
  attributes: {
    awards: Schema.Attribute.Component<'layout.award-item', true>;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LayoutAwardsRecognitionSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_awards_recognition_sections';
  info: {
    description: 'Partnerships highlight (left/right split) plus a divider and an achievements/awards grid.';
    displayName: 'Awards & Recognition Section';
  };
  attributes: {
    achievementImages: Schema.Attribute.Media<'images', true>;
    achievementsHeading: Schema.Attribute.Blocks;
    description: Schema.Attribute.Blocks;
    featuredPartner: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    partners: Schema.Attribute.Media<'images', true>;
    recognitionCard: Schema.Attribute.Component<
      'shared.recognition-highlight-card',
      false
    >;
    subHeading: Schema.Attribute.String;
  };
}

export interface LayoutBeliefsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_beliefs_sections';
  info: {
    description: 'Eyebrow label, a two-tone intro statement, and a row of belief/value cards (icon + title + description).';
    displayName: 'Beliefs Section';
  };
  attributes: {
    beliefs: Schema.Attribute.Component<'elements.steps', true>;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface LayoutBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_blog_sections';
  info: {
    displayName: 'Blog Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutBrandShowcaseSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_brand_showcase_sections';
  info: {
    description: 'Horizontal row of square brand identity project cards with logo and brand name.';
    displayName: 'Brand Showcase Section';
  };
  attributes: {
    cards: Schema.Attribute.Media<'images', true>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
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
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutCareersCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_careers_cta_sections';
  info: {
    description: 'Centered careers call-to-action with split heading, email line, button, and four decorative images.';
    displayName: 'Careers CTA Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files', true>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutCareersCultureSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_careers_culture_sections';
  info: {
    description: 'Culture band: 5-image gallery grid on top, team testimonials list + quote card below.';
    displayName: 'Careers Culture Section';
  };
  attributes: {
    galleryImageBottomMiddle: Schema.Attribute.Media<'images' | 'files'>;
    galleryImageBottomRight: Schema.Attribute.Media<'images' | 'files'>;
    galleryImageLarge: Schema.Attribute.Media<'images' | 'files'>;
    galleryImageTopMiddle: Schema.Attribute.Media<'images' | 'files'>;
    galleryImageTopRight: Schema.Attribute.Media<'images' | 'files'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    testimonials: Schema.Attribute.Component<
      'layout.careers-team-testimonial-item',
      true
    >;
    testimonialsHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why our team loves Agency Partner'>;
    testimonialsLogo: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface LayoutCareersHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_careers_hero_sections';
  info: {
    description: 'Dark full-width hero: split heading (plain + highlighted word), CTA link, and background image.';
    displayName: 'Careers Hero Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images' | 'files'>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutCareersPerksBenefitsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_careers_perks_benefits_sections';
  info: {
    description: 'Two-column band: split heading + intro copy on the left, accordion perk list on the right.';
    displayName: 'Careers Perks & Benefits Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    perks: Schema.Attribute.Component<'elements.steps', true>;
  };
}

export interface LayoutCareersSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_careers_sections';
  info: {
    description: 'Careers page band: info + stats grid (top) and category selection cards (bottom).';
    displayName: 'Careers Section';
  };
  attributes: {
    categories: Schema.Attribute.Component<'elements.link', true>;
    categoryHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'What are you striving forward?'>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    statistics: Schema.Attribute.Component<'layout.careers-stat-item', true>;
  };
}

export interface LayoutCareersStatItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_careers_stat_items';
  info: {
    description: 'One stat cell: bold value (e.g. 69+) and label underneath.';
    displayName: 'Careers Stat Item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutCareersTeamTestimonialItem
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_careers_team_testimonial_items';
  info: {
    description: 'One team member: profile photo, name, role, and quote for the culture testimonials panel.';
    displayName: 'Careers Team Testimonial Item';
  };
  attributes: {
    designation: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    photo: Schema.Attribute.Media<'images' | 'files'>;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LayoutCaseStudiesListSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_case_studies_list_sections';
  info: {
    description: 'Case studies grid/list with optional industry filter pills. Entries come from the Case Study collection type.';
    displayName: 'Case Studies List Section';
  };
  attributes: {
    caseStudies: Schema.Attribute.Relation<
      'manyToMany',
      'api::case-study.case-study'
    >;
    filterIndustries: Schema.Attribute.Relation<
      'manyToMany',
      'api::industry.industry'
    >;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Case Studies'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    overviewLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'OVERVIEW'>;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    viewCaseStudyLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'View Full Case Study'>;
  };
}

export interface LayoutClientLogoMarqueeSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_client_logo_marquee_sections';
  info: {
    displayName: 'Client Logo Marquee Section';
  };
  attributes: {
    companyImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    heading: Schema.Attribute.String;
    isBlackAndWhite: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutClientShowcaseSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_client_showcase_sections';
  info: {
    displayName: 'Client Showcase Section';
  };
  attributes: {
    clients: Schema.Attribute.Component<'shared.client-showcase-item', true>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutClutchRatingSummary extends Struct.ComponentSchema {
  collectionName: 'components_layout_clutch_rating_summaries';
  info: {
    description: 'Static Clutch summary card: rating, review count, logo, and view-all link.';
    displayName: 'Clutch Rating Summary';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files'>;
    rating: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<4.9>;
    reviewCount: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<60>;
    viewAllCta: Schema.Attribute.Component<'elements.link-basic', false>;
  };
}

export interface LayoutClutchReviewCard extends Struct.ComponentSchema {
  collectionName: 'components_layout_clutch_review_cards';
  info: {
    description: 'One grid tile: Clutch testimonial (logo, rating, quote, author) or statistic (value, label, description).';
    displayName: 'Clutch Review Card';
  };
  attributes: {
    authorDesignation: Schema.Attribute.String;
    authorName: Schema.Attribute.String;
    backgroundVariant: Schema.Attribute.Enumeration<
      ['blue', 'light-blue', 'purple']
    > &
      Schema.Attribute.DefaultTo<'blue'>;
    cardType: Schema.Attribute.Enumeration<['testimonial', 'statistic']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'testimonial'>;
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    quote: Schema.Attribute.Text;
    rating: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
    value: Schema.Attribute.String;
  };
}

export interface LayoutClutchReviewsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_clutch_reviews_sections';
  info: {
    description: 'Mixed grid of Clutch review cards and colored statistic cards.';
    displayName: 'Clutch Reviews Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'layout.clutch-review-card', true>;
    heading: Schema.Attribute.String;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutClutchTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_clutch_testimonial_sections';
  info: {
    description: 'Clutch reviews first, then optional statistic cards below.';
    displayName: 'Clutch Testimonial Section';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Client review'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    review: Schema.Attribute.Relation<
      'manyToMany',
      'api::clutch-review.clutch-review'
    > &
      Schema.Attribute.Required;
    statistics: Schema.Attribute.Component<
      'layout.clutch-testimonial-statistic-item',
      true
    >;
  };
}

export interface LayoutClutchTestimonialStatisticItem
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_clutch_testimonial_statistic_items';
  info: {
    description: 'Statistic card with optional logo, shown after reviews in the section.';
    displayName: 'Clutch Testimonial Statistic';
  };
  attributes: {
    backgroundVariant: Schema.Attribute.Enumeration<
      ['blue', 'light-blue', 'purple']
    > &
      Schema.Attribute.DefaultTo<'blue'>;
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    showAfterReviews: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'0-10'>;
    statisticLabel: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutClutchTestimonialsSliderSection
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_clutch_testimonials_slider_sections';
  info: {
    description: 'Clutch reviews carousel: split heading, rating summary card, and sliding testimonial cards.';
    displayName: 'Clutch Testimonials Slider Section';
  };
  attributes: {
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    reviews: Schema.Attribute.Relation<
      'manyToMany',
      'api::clutch-review.clutch-review'
    >;
    summary: Schema.Attribute.Component<'layout.clutch-rating-summary', false>;
  };
}

export interface LayoutContactQuoteSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_contact_quote_sections';
  info: {
    description: 'Two-column contact section: heading, next steps, phone CTA, and awards on the left; HubSpot quote form card on the right.';
    displayName: 'Contact Quote Section';
  };
  attributes: {
    contactQuote: Schema.Attribute.Relation<
      'manyToOne',
      'api::contact-quote.contact-quote'
    >;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
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
    hubSpotForm: Schema.Attribute.Component<'sections.hub-spot-form', false>;
    keyPoints: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    nextSteps: Schema.Attribute.Component<'elements.steps', true>;
    nextStepsHeading: Schema.Attribute.String;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
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
    heading: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
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
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    youtubeUrl: Schema.Attribute.String;
  };
}

export interface LayoutCreativeServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_creative_services_sections';
  info: {
    description: 'Dark section with intro on the left and service category columns on the right (graphic, title, service list, learn-more link).';
    displayName: 'Creative Services Section';
  };
  attributes: {
    backgroundPattern: Schema.Attribute.Media<'images'>;
    categories: Schema.Attribute.Component<
      'elements.creative-service-category-item',
      true
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutCreativeWebDesignSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_creative_web_design_sections';
  info: {
    description: 'Centered heading and intro with a multi-card grid of web design service offerings.';
    displayName: 'Creative Web Design Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    richDescription: Schema.Attribute.Blocks;
    services: Schema.Attribute.Component<
      'elements.web-design-service-item',
      true
    >;
  };
}

export interface LayoutDesignChallengesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_design_challenges_sections';
  info: {
    description: 'Split header with intro icon and copy on the left, main heading on the right, and a three-column challenge grid below.';
    displayName: 'Design Challenges Section';
  };
  attributes: {
    challenges: Schema.Attribute.Component<'elements.steps', true>;
    heading: Schema.Attribute.Blocks;
    introDescription: Schema.Attribute.Text;
    introIcon: Schema.Attribute.Media<'images'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutDesignConversionSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_design_conversion_sections';
  info: {
    description: 'Dark two-column section: heading and CTA on the left, service cards grid on the right, and a gradient CTA banner at the bottom.';
    displayName: 'Design Conversion Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    ctaBannerButton: Schema.Attribute.Component<'elements.link-basic', false>;
    ctaBannerHeading: Schema.Attribute.Blocks;
    ctaPrompt: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ready to improve your conversion rate?'>;
    heading: Schema.Attribute.Blocks;
    items: Schema.Attribute.Component<'elements.design-conversion-item', true>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutDesignInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_design_info_sections';
  info: {
    description: 'Dark section with stacked alternating rows: image and copy side by side, with feature tags and CTA per row.';
    displayName: 'Design Info Section';
  };
  attributes: {
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    rows: Schema.Attribute.Component<'elements.design-info-row', true>;
  };
}

export interface LayoutDesignServicesHeroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_design_services_hero_sections';
  info: {
    description: 'Dark hero: breadcrumb, heading, description, CTA, Clutch rating, category pills on the left; color palette, logo, and featured image collage on the right.';
    displayName: 'Design Services Hero Section';
  };
  attributes: {
    backgroundPattern: Schema.Attribute.Media<'images'>;
    badgeImage: Schema.Attribute.Media<'images'>;
    breadcrumb: Schema.Attribute.Component<'elements.link-basic', true>;
    categories: Schema.Attribute.Component<'elements.badge', true>;
    categoriesCta: Schema.Attribute.Component<'elements.link-basic', false>;
    categoriesHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Where do you need the most help?'>;
    colorPalette: Schema.Attribute.Media<'images', true>;
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    featuredImage: Schema.Attribute.Media<'videos' | 'images'>;
    heading: Schema.Attribute.Blocks;
    hubspotForm: Schema.Attribute.Relation<
      'manyToOne',
      'api::hub-spot-form.hub-spot-form'
    >;
    logoImage: Schema.Attribute.Media<'images'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutDesignSubscriptionSection
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_design_subscription_sections';
  info: {
    description: 'Two-column section with heading, description, and CTA on the left; accordion feature list on the right.';
    displayName: 'Design Subscription Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    items: Schema.Attribute.Component<'shared.quote', true>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutDesignTechnologiesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_design_technologies_sections';
  info: {
    description: 'Centered heading and description with a row of design tool icons.';
    displayName: 'Design Technologies Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    technologies: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
  };
}

export interface LayoutDesignValueSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_design_value_sections';
  info: {
    description: 'Dark section with stats bar on top and a two-column layout below: intro with graphic and CTA on the left, accordion features on the right.';
    displayName: 'Design Value Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    features: Schema.Attribute.Component<'shared.quote', true>;
    graphic: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    stats: Schema.Attribute.Component<'elements.design-stat-item', true>;
    statsHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Driving value through exceptional design'>;
    tagline: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Your brand deserves designs that stand out'>;
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
    hubSpotForm: Schema.Attribute.Component<'sections.hub-spot-form', false>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutDigitalEngineSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_digital_engine_sections';
  info: {
    description: 'Gradient page band with centered intro, repeatable two-column feature blocks, and a bottom CTA.';
    displayName: 'Digital Engine Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    ctaDescription: Schema.Attribute.Blocks;
    ctaHeading: Schema.Attribute.Blocks;
    description: Schema.Attribute.Blocks;
    featureBlocks: Schema.Attribute.Component<
      'elements.digital-engine-feature-block',
      true
    >;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    techIcons: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
  };
}

export interface LayoutDigitalGrowthFrameworkSection
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_digital_growth_framework_sections';
  info: {
    description: 'Header (split title with highlighted phrase, intro, CTA) and a vertical list of framework steps with icons.';
    displayName: 'Digital Growth Framework Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    steps: Schema.Attribute.Component<'elements.steps', true>;
    title: Schema.Attribute.Blocks;
  };
}

export interface LayoutDigitalProductHeroGallery
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_digital_product_hero_galleries';
  info: {
    description: 'Three-column hero: CTA card, mobile mockup, laptop mockup.';
    displayName: 'Digital Product Hero Gallery';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface LayoutDigitalProductShowcaseSection
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_digital_product_showcase_sections';
  info: {
    description: 'Dark marketing band: hero gallery (CTA + two device mockups), value intro (logo + copy + headline), and a row of feature pillars.';
    displayName: 'Digital Product Showcase Section';
  };
  attributes: {
    featurePillars: Schema.Attribute.Component<'elements.steps', true>;
    heroGallery: Schema.Attribute.Component<
      'layout.digital-product-hero-gallery',
      true
    >;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    valueIntro: Schema.Attribute.Component<'elements.steps', false>;
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

export interface LayoutExploreIndustriesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_explore_industries_sections';
  info: {
    description: 'Two-column section with heading, description, lead form, and phone CTA on the left; industry image cards and accordion grid on the right.';
    displayName: 'Explore Industries Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.Blocks;
    hubspotForm: Schema.Attribute.Relation<
      'manyToOne',
      'api::hub-spot-form.hub-spot-form'
    >;
    industryExpertiseCards: Schema.Attribute.Component<
      'elements.industry-expertise-card',
      true
    >;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    phoneText: Schema.Attribute.Blocks;
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
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutFeatureCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_layout_feature_case_studies';
  info: {
    displayName: 'Feature Case Studies';
  };
  attributes: {
    CaseStudies: Schema.Attribute.Relation<
      'manyToMany',
      'api::case-study.case-study'
    >;
    heading: Schema.Attribute.Blocks;
  };
}

export interface LayoutFirmSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_firm_sections';
  info: {
    displayName: 'Firm Section';
  };
  attributes: {
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
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
    hubSpotForm: Schema.Attribute.Component<'sections.hub-spot-form', false>;
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
    backgroundImage: Schema.Attribute.Media<'images'>;
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
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutGlobalDgeScoreSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_global_dge_score_sections';
  info: {
    description: 'Reuses shared content from DGE Score. Edit once under Content Manager \u2192 DGE Score.';
    displayName: 'Global DGE Score Section';
  };
  attributes: {
    dgeScore: Schema.Attribute.Relation<
      'manyToOne',
      'api::dge-score.dge-score'
    >;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
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
    hubSpotForm: Schema.Attribute.Component<'sections.hub-spot-form', false>;
    image: Schema.Attribute.Media<'images'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutHeroReviewSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_review_sections';
  info: {
    description: 'Two-column hero: eyebrow and heading on the left, description and Clutch rating summary on the right.';
    displayName: 'Hero Review Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'CLIENT SUCCESS. REAL RESULTS.'>;
    heading: Schema.Attribute.Blocks;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    rating: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<4.9>;
    reviewedOnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Reviewed on'>;
    reviewsOnLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Reviews on'>;
  };
}

export interface LayoutHighGrowthSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_high_growth_sections';
  info: {
    description: 'Dark two-column section: heading, description, and CTA on the left; 2x2 grid of bordered feature blocks on the right.';
    displayName: 'High Growth Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.quote', true>;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
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
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
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

export interface LayoutJobOpeningsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_job_openings_sections';
  info: {
    description: 'Careers job list band with heading. Jobs are loaded from the Job collection (search/filter on the frontend).';
    displayName: 'Job Openings Section';
  };
  attributes: {
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
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
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
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
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutMarketingResultsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_marketing_results_sections';
  info: {
    description: 'Centered heading with a row of result stats: value, title, and description.';
    displayName: 'Marketing Results Section';
  };
  attributes: {
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    stats: Schema.Attribute.Component<'elements.marketing-stat-item', true>;
  };
}

export interface LayoutMarketingTechnologySection
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_marketing_technology_sections';
  info: {
    description: 'Dark section with centered heading and a card grid: two horizontal cards on the left and one featured card with tool icons on the right.';
    displayName: 'Marketing Technology Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<
      'elements.marketing-technology-card',
      true
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutMegaMenuCatalog extends Struct.ComponentSchema {
  collectionName: 'components_layout_mega_menu_catalogs';
  info: {
    description: 'Catalog-style mega menu: category sidebar, link columns, industry tags, and CTA panel.';
    displayName: 'Mega Menu Catalog';
  };
  attributes: {
    backgroundPattern: Schema.Attribute.Media<'images'>;
    categories: Schema.Attribute.Component<'layout.mega-menu-category', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    hubspotForm: Schema.Attribute.Relation<
      'manyToOne',
      'api::hub-spot-form.hub-spot-form'
    >;
    sidebarLabel: Schema.Attribute.String;
    tags: Schema.Attribute.Component<'elements.badge', true>;
    tagsHeading: Schema.Attribute.String;
    viewAllCta: Schema.Attribute.Component<'elements.link-basic', false>;
  };
}

export interface LayoutMegaMenuCategory extends Struct.ComponentSchema {
  collectionName: 'components_layout_mega_menu_categories';
  info: {
    description: 'Sidebar category with icon and link columns for catalog-style mega menus.';
    displayName: 'Mega Menu Category';
  };
  attributes: {
    columns: Schema.Attribute.Component<'layout.nav-link-column', true>;
    icon: Schema.Attribute.Media<'images'>;
    isDefault: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface LayoutMegaMenuContent extends Struct.ComponentSchema {
  collectionName: 'components_layout_mega_menu_contents';
  info: {
    description: 'Three-column mega menu: intro panel, link list, and promotional panel.';
    displayName: 'Mega Menu Content';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'elements.link-basic', true>;
    promoBackgroundPattern: Schema.Attribute.Media<'images'>;
    promoCta: Schema.Attribute.Component<'elements.link-basic', false>;
    promoHeading: Schema.Attribute.Blocks;
    promoImages: Schema.Attribute.Media<'images', true>;
  };
}

export interface LayoutMissionVision extends Struct.ComponentSchema {
  collectionName: 'components_layout_mission_visions';
  info: {
    displayName: 'Mission Vision Section';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    missionVisionTabs: Schema.Attribute.Component<'elements.tabs', true>;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutNavItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_nav_items';
  info: {
    description: 'Top navigation item with optional simple link or mega menu dropdown.';
    displayName: 'Nav Item';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    megaMenu: Schema.Attribute.DynamicZone<
      ['layout.mega-menu-content', 'layout.mega-menu-catalog']
    >;
    menuType: Schema.Attribute.Enumeration<['link', 'mega-menu']> &
      Schema.Attribute.DefaultTo<'link'>;
    text: Schema.Attribute.String;
  };
}

export interface LayoutNavLinkColumn extends Struct.ComponentSchema {
  collectionName: 'components_layout_nav_link_columns';
  info: {
    description: 'Grouped navigation links under a column heading.';
    displayName: 'Nav Link Column';
  };
  attributes: {
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'elements.link-basic', true>;
  };
}

export interface LayoutNavMegaMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_nav_mega_menu_links';
  info: {
    description: 'Navigation link with optional badge for mega menus.';
    displayName: 'Nav Mega Menu Link';
  };
  attributes: {
    badge: Schema.Attribute.Component<'elements.badge', false>;
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface LayoutNewsletterSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_newsletter_sections';
  info: {
    description: 'Blue banner with heading, email signup field, submit button, and optional decorative background graphic.';
    displayName: 'Newsletter Section';
  };
  attributes: {
    decorativeImage: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.Blocks;
    hubSpotForm: Schema.Attribute.Component<'sections.hub-spot-form', false>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutNotFoundSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_not_found_sections';
  info: {
    description: '404 error page with centered heading, description, CTA, and optional background imagery.';
    displayName: 'Not Found Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    backgroundPattern: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
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
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutOurClientsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_our_clients_sections';
  info: {
    displayName: 'Our Clients Section';
  };
  attributes: {
    clients: Schema.Attribute.Component<'shared.client-industry-item', true>;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutPageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_page_hero_sections';
  info: {
    displayName: 'Page Hero Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    backgroundPattern: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    hubSpotForm: Schema.Attribute.Component<'sections.hub-spot-form', false>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutPortfolioFilter extends Struct.ComponentSchema {
  collectionName: 'components_layout_portfolio_filters';
  info: {
    description: 'Filter dimension (key) plus UI label. Link Industry, Service, or Technology entries from the API for the options shown for that filter; match key to the relation you populate.';
    displayName: 'Portfolio Filter';
  };
  attributes: {
    industries: Schema.Attribute.Relation<
      'manyToMany',
      'api::industry.industry'
    >;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    services: Schema.Attribute.Relation<'manyToMany', 'api::service.service'>;
    technologies: Schema.Attribute.Relation<
      'manyToMany',
      'api::technology.technology'
    >;
  };
}

export interface LayoutPortfolioListSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_portfolio_list_sections';
  info: {
    description: 'Portfolio grid with Industry / Services / Technology filter config, linked Portfolio entries, and optional load-more CTA.';
    displayName: 'Portfolio List Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    filters: Schema.Attribute.Component<'layout.portfolio-filter', true>;
    heading: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Portfolio'>;
    itemsPerPage: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<6>;
    loadMore: Schema.Attribute.Component<'elements.link-basic', false>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    projects: Schema.Attribute.Relation<
      'manyToMany',
      'api::portfolio.portfolio'
    >;
  };
}

export interface LayoutPortfolioPageFeaturedCaseStudies
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_portfolio_page_featured_case_studies';
  info: {
    displayName: 'Portfolio Page Featured Case Studies';
  };
  attributes: {
    caseStudies: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-study.case-study'
    >;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface LayoutPortfolioProject extends Struct.ComponentSchema {
  collectionName: 'components_layout_portfolio_projects';
  info: {
    displayName: 'Portfolio Project';
  };
  attributes: {
    copyLink: Schema.Attribute.String;
    featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    gallery: Schema.Attribute.Media<'images', true>;
    industry: Schema.Attribute.String;
    integrations: Schema.Attribute.Component<'elements.link-basic', true>;
    overview: Schema.Attribute.Blocks;
    platforms: Schema.Attribute.Media<'images', true>;
    projectName: Schema.Attribute.String & Schema.Attribute.Required;
    projectType: Schema.Attribute.String;
    services: Schema.Attribute.Component<'elements.badge', true>;
    slug: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutPriceGrid extends Struct.ComponentSchema {
  collectionName: 'components_layout_price_grids';
  info: {
    displayName: 'Price Grid';
  };
  attributes: {
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    priceCard: Schema.Attribute.Component<'elements.price-card', true>;
  };
}

export interface LayoutProcessJourneySection extends Struct.ComponentSchema {
  collectionName: 'components_layout_process_journey_sections';
  info: {
    description: 'Dark two-column section with intro text, step carousel on the left, and a zigzag process diagram on the right.';
    displayName: 'Process Journey Section';
  };
  attributes: {
    introHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Yes, the process is simple.'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    pathEndLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'You do have a brand identity'>;
    pathStartLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"You don't have a brand identity">;
    steps: Schema.Attribute.Component<'shared.quote', true>;
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
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    message: Schema.Attribute.String;
    name: Schema.Attribute.String;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    phone: Schema.Attribute.String;
  };
}

export interface LayoutProvenResultsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_proven_results_sections';
  info: {
    description: 'Two-column section with heading and accordion list on the left; case study chart carousel on the right.';
    displayName: 'Proven Results Section';
  };
  attributes: {
    accordionItems: Schema.Attribute.Component<
      'elements.proven-results-accordion-item',
      true
    >;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutRecognitionBadgesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_recognition_badges_sections';
  info: {
    description: 'Horizontal row of award badges: badge image, label, and brand logo per column.';
    displayName: 'Recognition Badges Section';
  };
  attributes: {
    badges: Schema.Attribute.Component<'layout.award-item', true>;
    colored: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    heading: Schema.Attribute.String;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutResourcesAndCareers extends Struct.ComponentSchema {
  collectionName: 'components_layout_resources_and_careers';
  info: {
    displayName: 'Resources & Careers';
  };
  attributes: {
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
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
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    subHeading: Schema.Attribute.Blocks;
  };
}

export interface LayoutSectionNavBar extends Struct.ComponentSchema {
  collectionName: 'components_layout_section_nav_bars';
  info: {
    description: 'Sticky pill-shaped horizontal navigation for jumping to page sections.';
    displayName: 'Section Nav Bar';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.section-nav-link', true>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutSeoExpertiseSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_seo_expertise_sections';
  info: {
    description: 'Heading with two columns below: award badge on the left; description, checklist, and CTA on the right.';
    displayName: 'SEO Expertise Section';
  };
  attributes: {
    badgeCaption: Schema.Attribute.String;
    badgeImage: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Blocks;
    features: Schema.Attribute.Component<'elements.feature', true>;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutSeoServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_seo_services_sections';
  info: {
    description: 'Dark client-logo bar, two-column intro (heading + description), and a grid of SEO service cards.';
    displayName: 'SEO Services Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    services: Schema.Attribute.Component<'shared.quote', true>;
  };
}

export interface LayoutServiceCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_service_cta_sections';
  info: {
    description: 'Full-width gradient banner with centered split heading and a request-service CTA button.';
    displayName: 'Service CTA Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    backgroundTheme: Schema.Attribute.Enumeration<['light', 'dark']> &
      Schema.Attribute.DefaultTo<'light'>;
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    heading: Schema.Attribute.Blocks;
    leftImage: Schema.Attribute.Media<'images'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    rightImage: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutServiceDesignHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_service_design_hero_sections';
  info: {
    description: 'Dark hero: breadcrumb, heading, description, CTA, and Clutch rating on the left; project showcase cards on the right; trusted-by logos at the bottom.';
    displayName: 'Service Design Hero Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    breadcrumb: Schema.Attribute.Component<'elements.link-basic', true>;
    clientLogos: Schema.Attribute.Media<'images', true>;
    clutchRating: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    hubspotForm: Schema.Attribute.Relation<
      'manyToOne',
      'api::hub-spot-form.hub-spot-form'
    >;
    isBlackAndWhite: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    trustedHeading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Trusted by big companies'>;
  };
}

export interface LayoutSitemapSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_sitemap_sections';
  info: {
    description: 'Sitemap page with heading and grouped columns of navigation links.';
    displayName: 'Sitemap Section';
  };
  attributes: {
    columns: Schema.Attribute.Component<'elements.link-basic', true>;
    heading: Schema.Attribute.Blocks;
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
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    stats: Schema.Attribute.Component<'layout.content-with-image', true>;
  };
}

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    description: 'Site header with logo, navigation items (including mega menus), and primary CTA.';
    displayName: 'Top Nav';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    darkThemeLogoImage: Schema.Attribute.Media<'images'>;
    logoImage: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
    navItems: Schema.Attribute.Component<'layout.nav-item', true>;
  };
}

export interface LayoutTransformBusinessSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_transform_business_sections';
  info: {
    description: 'Dark two-column section with heading, description, CTA button on the left and an image on the right.';
    displayName: 'Transform Business Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    richDescription: Schema.Attribute.Blocks;
  };
}

export interface LayoutTrustedBySection extends Struct.ComponentSchema {
  collectionName: 'components_layout_trusted_by_sections';
  info: {
    description: 'Centered heading with a horizontal row of client logos separated by vertical dividers.';
    displayName: 'Trusted By Section';
  };
  attributes: {
    clientLogos: Schema.Attribute.Media<'images', true>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'TRUSTED BY THE TOP COMPANIES'>;
    isBlackAndWhite: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutUxDesignProcessSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_ux_design_process_sections';
  info: {
    description: 'Centered heading and description with a horizontal row of process steps, each with a primary title pill and secondary task pills.';
    displayName: 'UX Design Process Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    mobileImage: Schema.Attribute.Media<'images'>;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutUxUiComparisonSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_ux_ui_comparison_sections';
  info: {
    description: 'Centered heading and description with a before-and-after UX/UI comparison slider, side labels, and sticky note annotations.';
    displayName: 'UX UI Comparison Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images', true>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutValuePropositionSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_value_proposition_sections';
  info: {
    description: 'Two-column section with a heading + description + decorative image on the left and a list of value-prop items on the right.';
    displayName: 'Value Proposition Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    items: Schema.Attribute.Component<'elements.tabs', true>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_values_sections';
  info: {
    description: 'Dark band: split heading + intro on top, 3x2 grid of value cards below.';
    displayName: 'Values Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.steps', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutWebsiteBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_website_benefits_sections';
  info: {
    description: 'Two-column header (heading + intro) with a divider and a row of benefit cards (icon, title, description).';
    displayName: 'Website Benefits Section';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'elements.steps', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    richDescription: Schema.Attribute.Blocks;
  };
}

export interface LayoutWebsiteCapabilitiesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_website_capabilities_sections';
  info: {
    description: 'Dark section with centered heading and description, a grid of capability cards, and a gradient CTA banner at the bottom.';
    displayName: 'Website Capabilities Section';
  };
  attributes: {
    capabilities: Schema.Attribute.Component<
      'layout.website-capability-item',
      true
    >;
    ctaBannerButton: Schema.Attribute.Component<'elements.link-basic', false>;
    ctaBannerHeading: Schema.Attribute.Blocks;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutWebsiteCapabilityItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_website_capability_items';
  info: {
    description: 'Capability card with icon, title, description, request-service link, and optional highlighted styling.';
    displayName: 'Website Capability Item';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    richDescription: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface LayoutWebsiteEngagementSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_website_engagement_sections';
  info: {
    description: 'Two-column section with heading, description, feature checklist, CTA on the left and an image on the right.';
    displayName: 'Website Engagement Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.tag', true>;
    heading: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutWebsiteRedesignSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_website_redesign_sections';
  info: {
    description: 'Two-column section with heading, multi-paragraph description, CTA on the left and an image on the right.';
    displayName: 'Website Redesign Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutWhyChooseUsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_why_choose_us_sections';
  info: {
    description: 'Reuses shared content from Why Choose Us. Edit once under Content Manager \u2192 Why Choose Us.';
    displayName: 'Why Choose Us Section';
  };
  attributes: {
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    whyChooseUs: Schema.Attribute.Relation<
      'manyToOne',
      'api::why-choose-us.why-choose-us'
    >;
  };
}

export interface LayoutWhyWebDesignMattersSection
  extends Struct.ComponentSchema {
  collectionName: 'components_layout_why_web_design_matters_sections';
  info: {
    description: 'Two-column intro with eyebrow label and description, followed by a horizontal stats bar.';
    displayName: 'Why Web Design Matters Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'WHY WEB DESIGN MATTERS?'>;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    stats: Schema.Attribute.Component<'shared.quote', true>;
  };
}

export interface LayoutWorkHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_work_hero_sections';
  info: {
    displayName: 'Work Hero Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    backgroundPattern: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutWorkShowcaseSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_work_showcase_sections';
  info: {
    description: 'Dark two-column section with heading, description, and CTA on the left; masonry grid of portfolio images on the right.';
    displayName: 'Work Showcase Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.link-basic', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    marginBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    marginTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingBottom: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    paddingTop: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface SectionsHubSpotForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_hub_spot_forms';
  info: {
    displayName: 'HubSpot Form';
  };
  attributes: {
    formId: Schema.Attribute.String;
    portalId: Schema.Attribute.String;
    region: Schema.Attribute.String;
    targetSelector: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedAwardInsightItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_award_insight_items';
  info: {
    description: "A single blog/insight card in the 'Insights from Our Award Wins' section.";
    displayName: 'Award Insight Item';
  };
  attributes: {
    date: Schema.Attribute.Date;
    image: Schema.Attribute.Media<'images'>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedClientIndustryItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_client_industry_items';
  info: {
    displayName: 'Client Industry Item';
  };
  attributes: {
    clientImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    industry: Schema.Attribute.Relation<'oneToOne', 'api::industry.industry'>;
  };
}

export interface SharedClientShowcaseItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_client_showcase_items';
  info: {
    displayName: 'Client Showcase Item';
  };
  attributes: {
    category: Schema.Attribute.String;
    clientName: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    logo: Schema.Attribute.Media<'images'>;
    previewImage: Schema.Attribute.Media<'images'>;
    slug: Schema.Attribute.UID<'clientName'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedExternalScript extends Struct.ComponentSchema {
  collectionName: 'components_shared_external_scripts';
  info: {
    description: 'Third-party script loaded from an external URL.';
    displayName: 'External Script';
  };
  attributes: {
    async: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    attributes: Schema.Attribute.JSON;
    defer: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    inline: Schema.Attribute.Text;
    noscript: Schema.Attribute.Text;
    placement: Schema.Attribute.Enumeration<['head', 'body']> &
      Schema.Attribute.DefaultTo<'body'>;
    src: Schema.Attribute.String;
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

export interface SharedRecognitionHighlightCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_recognition_highlight_cards';
  info: {
    description: "Featured recognition card shown on the left of the Awards & Recognition section (e.g. 'Recognition For Excellence').";
    displayName: 'Recognition Highlight Card';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
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
    metaKeywords: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedTag extends Struct.ComponentSchema {
  collectionName: 'components_shared_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {
    label: Schema.Attribute.Text;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    authorDesignation: Schema.Attribute.String;
    authorImage: Schema.Attribute.Media<'images'>;
    authorName: Schema.Attribute.String;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    reviewText: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.text': BlocksText;
      'case-study.about-section': CaseStudyAboutSection;
      'case-study.branding-section': CaseStudyBrandingSection;
      'case-study.category': CaseStudyCategory;
      'case-study.challenge-row': CaseStudyChallengeRow;
      'case-study.challenges-section': CaseStudyChallengesSection;
      'case-study.dge-process-section': CaseStudyDgeProcessSection;
      'case-study.featured-review-section': CaseStudyFeaturedReviewSection;
      'case-study.growth-session-section': CaseStudyGrowthSessionSection;
      'case-study.item': CaseStudyItem;
      'case-study.process-card': CaseStudyProcessCard;
      'case-study.process-item': CaseStudyProcessItem;
      'case-study.responsive-design-section': CaseStudyResponsiveDesignSection;
      'case-study.result-card': CaseStudyResultCard;
      'case-study.results-section': CaseStudyResultsSection;
      'case-study.social-media-card': CaseStudySocialMediaCard;
      'case-study.social-media-section': CaseStudySocialMediaSection;
      'case-study.user-experience-section': CaseStudyUserExperienceSection;
      'case-study.website-design-section': CaseStudyWebsiteDesignSection;
      'elements.ai-creative-capability-item': ElementsAiCreativeCapabilityItem;
      'elements.ai-industry-use-case-item': ElementsAiIndustryUseCaseItem;
      'elements.badge': ElementsBadge;
      'elements.card': ElementsCard;
      'elements.creative-service-category-item': ElementsCreativeServiceCategoryItem;
      'elements.design-conversion-item': ElementsDesignConversionItem;
      'elements.design-info-row': ElementsDesignInfoRow;
      'elements.design-process-step-item': ElementsDesignProcessStepItem;
      'elements.design-stat-item': ElementsDesignStatItem;
      'elements.digital-engine-feature-block': ElementsDigitalEngineFeatureBlock;
      'elements.feature': ElementsFeature;
      'elements.industry-expertise-card': ElementsIndustryExpertiseCard;
      'elements.link': ElementsLink;
      'elements.link-basic': ElementsLinkBasic;
      'elements.marketing-stat-item': ElementsMarketingStatItem;
      'elements.marketing-technology-card': ElementsMarketingTechnologyCard;
      'elements.price-card': ElementsPriceCard;
      'elements.proven-results-accordion-item': ElementsProvenResultsAccordionItem;
      'elements.proven-results-slide': ElementsProvenResultsSlide;
      'elements.section-nav-link': ElementsSectionNavLink;
      'elements.steps': ElementsSteps;
      'elements.tab-sub-item': ElementsTabSubItem;
      'elements.tabs': ElementsTabs;
      'elements.web-design-service-item': ElementsWebDesignServiceItem;
      'layout.about-section': LayoutAboutSection;
      'layout.agency-hero-section': LayoutAgencyHeroSection;
      'layout.agency-intro-section': LayoutAgencyIntroSection;
      'layout.agency-process-section': LayoutAgencyProcessSection;
      'layout.ai-creative-capabilities-section': LayoutAiCreativeCapabilitiesSection;
      'layout.ai-creatives-hero-section': LayoutAiCreativesHeroSection;
      'layout.ai-industry-use-cases-section': LayoutAiIndustryUseCasesSection;
      'layout.ai-powered-section': LayoutAiPoweredSection;
      'layout.ai-service-cta-section': LayoutAiServiceCtaSection;
      'layout.award-insights-section': LayoutAwardInsightsSection;
      'layout.award-item': LayoutAwardItem;
      'layout.award-section': LayoutAwardSection;
      'layout.awards-recognition-section': LayoutAwardsRecognitionSection;
      'layout.beliefs-section': LayoutBeliefsSection;
      'layout.blog-section': LayoutBlogSection;
      'layout.brand-showcase-section': LayoutBrandShowcaseSection;
      'layout.button': LayoutButton;
      'layout.card-grid': LayoutCardGrid;
      'layout.careers-cta-section': LayoutCareersCtaSection;
      'layout.careers-culture-section': LayoutCareersCultureSection;
      'layout.careers-hero-section': LayoutCareersHeroSection;
      'layout.careers-perks-benefits-section': LayoutCareersPerksBenefitsSection;
      'layout.careers-section': LayoutCareersSection;
      'layout.careers-stat-item': LayoutCareersStatItem;
      'layout.careers-team-testimonial-item': LayoutCareersTeamTestimonialItem;
      'layout.case-studies-list-section': LayoutCaseStudiesListSection;
      'layout.client-logo-marquee-section': LayoutClientLogoMarqueeSection;
      'layout.client-showcase-section': LayoutClientShowcaseSection;
      'layout.clutch-rating-summary': LayoutClutchRatingSummary;
      'layout.clutch-review-card': LayoutClutchReviewCard;
      'layout.clutch-reviews-section': LayoutClutchReviewsSection;
      'layout.clutch-testimonial-section': LayoutClutchTestimonialSection;
      'layout.clutch-testimonial-statistic-item': LayoutClutchTestimonialStatisticItem;
      'layout.clutch-testimonials-slider-section': LayoutClutchTestimonialsSliderSection;
      'layout.contact-quote-section': LayoutContactQuoteSection;
      'layout.contact-us-section': LayoutContactUsSection;
      'layout.content-with-image': LayoutContentWithImage;
      'layout.content-with-video': LayoutContentWithVideo;
      'layout.creative-services-section': LayoutCreativeServicesSection;
      'layout.creative-web-design-section': LayoutCreativeWebDesignSection;
      'layout.design-challenges-section': LayoutDesignChallengesSection;
      'layout.design-conversion-section': LayoutDesignConversionSection;
      'layout.design-info-section': LayoutDesignInfoSection;
      'layout.design-services-hero-section': LayoutDesignServicesHeroSection;
      'layout.design-subscription-section': LayoutDesignSubscriptionSection;
      'layout.design-technologies-section': LayoutDesignTechnologiesSection;
      'layout.design-value-section': LayoutDesignValueSection;
      'layout.dge-score-section': LayoutDgeScoreSection;
      'layout.digital-engine-section': LayoutDigitalEngineSection;
      'layout.digital-growth-framework-section': LayoutDigitalGrowthFrameworkSection;
      'layout.digital-product-hero-gallery': LayoutDigitalProductHeroGallery;
      'layout.digital-product-showcase-section': LayoutDigitalProductShowcaseSection;
      'layout.explore': LayoutExplore;
      'layout.explore-industries-section': LayoutExploreIndustriesSection;
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
      'layout.global-dge-score-section': LayoutGlobalDgeScoreSection;
      'layout.heading-with-image': LayoutHeadingWithImage;
      'layout.hero': LayoutHero;
      'layout.hero-review-section': LayoutHeroReviewSection;
      'layout.high-growth-section': LayoutHighGrowthSection;
      'layout.image-slider-section': LayoutImageSliderSection;
      'layout.industry-expertise-section': LayoutIndustryExpertiseSection;
      'layout.industry-item': LayoutIndustryItem;
      'layout.job-openings-section': LayoutJobOpeningsSection;
      'layout.leaders-board': LayoutLeadersBoard;
      'layout.legal-document': LayoutLegalDocument;
      'layout.marketing-results-section': LayoutMarketingResultsSection;
      'layout.marketing-technology-section': LayoutMarketingTechnologySection;
      'layout.mega-menu-catalog': LayoutMegaMenuCatalog;
      'layout.mega-menu-category': LayoutMegaMenuCategory;
      'layout.mega-menu-content': LayoutMegaMenuContent;
      'layout.mission-vision': LayoutMissionVision;
      'layout.nav-item': LayoutNavItem;
      'layout.nav-link-column': LayoutNavLinkColumn;
      'layout.nav-mega-menu-link': LayoutNavMegaMenuLink;
      'layout.newsletter-section': LayoutNewsletterSection;
      'layout.not-found-section': LayoutNotFoundSection;
      'layout.office-section': LayoutOfficeSection;
      'layout.our-clients-section': LayoutOurClientsSection;
      'layout.page-hero-section': LayoutPageHeroSection;
      'layout.portfolio-filter': LayoutPortfolioFilter;
      'layout.portfolio-list-section': LayoutPortfolioListSection;
      'layout.portfolio-page-featured-case-studies': LayoutPortfolioPageFeaturedCaseStudies;
      'layout.portfolio-project': LayoutPortfolioProject;
      'layout.price-grid': LayoutPriceGrid;
      'layout.process-journey-section': LayoutProcessJourneySection;
      'layout.profile-section': LayoutProfileSection;
      'layout.proven-results-section': LayoutProvenResultsSection;
      'layout.recognition-badges-section': LayoutRecognitionBadgesSection;
      'layout.resources-and-careers': LayoutResourcesAndCareers;
      'layout.section-heading': LayoutSectionHeading;
      'layout.section-nav-bar': LayoutSectionNavBar;
      'layout.seo-expertise-section': LayoutSeoExpertiseSection;
      'layout.seo-services-section': LayoutSeoServicesSection;
      'layout.service-cta-section': LayoutServiceCtaSection;
      'layout.service-design-hero-section': LayoutServiceDesignHeroSection;
      'layout.sitemap-section': LayoutSitemapSection;
      'layout.stats-section': LayoutStatsSection;
      'layout.top-nav': LayoutTopNav;
      'layout.transform-business-section': LayoutTransformBusinessSection;
      'layout.trusted-by-section': LayoutTrustedBySection;
      'layout.ux-design-process-section': LayoutUxDesignProcessSection;
      'layout.ux-ui-comparison-section': LayoutUxUiComparisonSection;
      'layout.value-proposition-section': LayoutValuePropositionSection;
      'layout.values-section': LayoutValuesSection;
      'layout.website-benefits-section': LayoutWebsiteBenefitsSection;
      'layout.website-capabilities-section': LayoutWebsiteCapabilitiesSection;
      'layout.website-capability-item': LayoutWebsiteCapabilityItem;
      'layout.website-engagement-section': LayoutWebsiteEngagementSection;
      'layout.website-redesign-section': LayoutWebsiteRedesignSection;
      'layout.why-choose-us-section': LayoutWhyChooseUsSection;
      'layout.why-web-design-matters-section': LayoutWhyWebDesignMattersSection;
      'layout.work-hero-section': LayoutWorkHeroSection;
      'layout.work-showcase-section': LayoutWorkShowcaseSection;
      'sections.hub-spot-form': SectionsHubSpotForm;
      'shared.award-insight-item': SharedAwardInsightItem;
      'shared.client-industry-item': SharedClientIndustryItem;
      'shared.client-showcase-item': SharedClientShowcaseItem;
      'shared.external-script': SharedExternalScript;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.recognition-highlight-card': SharedRecognitionHighlightCard;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.tag': SharedTag;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
