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
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CaseStudyResponsiveDesignSection
  extends Struct.ComponentSchema {
  collectionName: 'components_case_study_responsive_design_sections';
  info: {
    displayName: 'Responsive Design Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<'images', true>;
    label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Responsive Design'>;
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
    altText: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'elements.link', false>;
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
    title: Schema.Attribute.String;
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
    overviewLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'OVERVIEW'>;
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
    hubSpotForm: Schema.Attribute.Component<'sections.hub-spot-form', false>;
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

export interface LayoutOurClientsSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_our_clients_sections';
  info: {
    displayName: 'Our Clients Section';
  };
  attributes: {
    clients: Schema.Attribute.Component<'shared.client-industry-item', true>;
    heading: Schema.Attribute.Blocks;
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
    message: Schema.Attribute.String;
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
    label: Schema.Attribute.String;
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
      'elements.badge': ElementsBadge;
      'elements.card': ElementsCard;
      'elements.feature': ElementsFeature;
      'elements.link': ElementsLink;
      'elements.link-basic': ElementsLinkBasic;
      'elements.price-card': ElementsPriceCard;
      'elements.steps': ElementsSteps;
      'elements.tab-sub-item': ElementsTabSubItem;
      'elements.tabs': ElementsTabs;
      'layout.about-section': LayoutAboutSection;
      'layout.award-insights-section': LayoutAwardInsightsSection;
      'layout.award-section': LayoutAwardSection;
      'layout.awards-recognition-section': LayoutAwardsRecognitionSection;
      'layout.beliefs-section': LayoutBeliefsSection;
      'layout.button': LayoutButton;
      'layout.card-grid': LayoutCardGrid;
      'layout.case-studies-list-section': LayoutCaseStudiesListSection;
      'layout.client-logo-marquee-section': LayoutClientLogoMarqueeSection;
      'layout.client-showcase-section': LayoutClientShowcaseSection;
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
      'layout.our-clients-section': LayoutOurClientsSection;
      'layout.page-hero-section': LayoutPageHeroSection;
      'layout.portfolio-filter': LayoutPortfolioFilter;
      'layout.portfolio-list-section': LayoutPortfolioListSection;
      'layout.portfolio-page-featured-case-studies': LayoutPortfolioPageFeaturedCaseStudies;
      'layout.portfolio-project': LayoutPortfolioProject;
      'layout.price-grid': LayoutPriceGrid;
      'layout.profile-section': LayoutProfileSection;
      'layout.resources-and-careers': LayoutResourcesAndCareers;
      'layout.section-heading': LayoutSectionHeading;
      'layout.stats-section': LayoutStatsSection;
      'layout.top-nav': LayoutTopNav;
      'layout.value-proposition-section': LayoutValuePropositionSection;
      'sections.hub-spot-form': SectionsHubSpotForm;
      'shared.award-insight-item': SharedAwardInsightItem;
      'shared.client-industry-item': SharedClientIndustryItem;
      'shared.client-showcase-item': SharedClientShowcaseItem;
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
