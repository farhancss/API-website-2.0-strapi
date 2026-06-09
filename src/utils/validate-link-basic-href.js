const { yup, errors } = require('@strapi/utils');
const { YupValidationError } = errors;

const HREF_REGEX =
  /^(https?:\/\/[^\s]+|\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?\/?|#[a-zA-Z0-9_-]*)$/;

const HREF_ERROR_MESSAGE =
  'Please enter a valid link (e.g. https://example.com, /about-us, or #section).';

const isRecognitionHighlightCard = (value) =>
  value?.__component === 'shared.recognition-highlight-card' ||
  (value &&
    typeof value === 'object' &&
    'href' in value &&
    'isExternal' in value &&
    'title' in value &&
    'description' in value &&
    !('image' in value) &&
    !('text' in value) &&
    !('children' in value) &&
    !('label' in value));

const isFooterLinkItem = (value) =>
  value?.__component === 'layout.footer-link-item' ||
  (value &&
    typeof value === 'object' &&
    'href' in value &&
    'text' in value &&
    'isExternal' in value &&
    'children' in value);

const isLinkBasic = (value) =>
  value?.__component === 'elements.link-basic' ||
  (value &&
    typeof value === 'object' &&
    'href' in value &&
    'text' in value &&
    'isExternal' in value &&
    !('label' in value) &&
    !('isPrimary' in value) &&
    !('image' in value) &&
    !('logo' in value) &&
    !('children' in value));

const isLink = (value) =>
  value?.__component === 'elements.link' ||
  (value &&
    typeof value === 'object' &&
    'href' in value &&
    ('label' in value || 'isPrimary' in value || 'image' in value));

const isLinkComponent = (value) => isLink(value) || isLinkBasic(value);

const validateHref = (href, path) => {
  if (href && !HREF_REGEX.test(href)) {
    throw new YupValidationError(
      new yup.ValidationError(HREF_ERROR_MESSAGE, href, [...path, 'href'].join('.'))
    );
  }
};

const validateLinkHrefFields = (data, path = []) => {
  if (!data || typeof data !== 'object') {
    return;
  }

  if (Array.isArray(data)) {
    data.forEach((item, index) => validateLinkHrefFields(item, [...path, index]));
    return;
  }

  if (isFooterLinkItem(data)) {
    validateHref(data.href, path);
  } else if (isRecognitionHighlightCard(data)) {
    validateHref(data.href, path);
    return;
  } else if (isLinkComponent(data)) {
    validateHref(data.href, path);
    return;
  }

  for (const [key, value] of Object.entries(data)) {
    if (key.startsWith('__') || key === 'id' || key === 'documentId') {
      continue;
    }

    validateLinkHrefFields(value, [...path, key]);
  }
};

module.exports = { validateLinkHrefFields };
