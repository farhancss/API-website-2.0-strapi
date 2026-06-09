const { yup, errors } = require('@strapi/utils');
const { YupValidationError } = errors;

const YOUTUBE_URL_REGEX =
  /^https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)[\w-]{11}(?:[&?#][^\s]*)?$/;

const YOUTUBE_URL_ERROR_MESSAGE =
  'Please enter a valid YouTube URL (e.g. https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID).';

const isContentWithVideo = (value) =>
  value?.__component === 'layout.content-with-video' ||
  (value &&
    typeof value === 'object' &&
    'youtubeUrl' in value &&
    ('backgroundImage' in value || 'button' in value));

const validateYoutubeUrl = (url, path) => {
  if (url && !YOUTUBE_URL_REGEX.test(url)) {
    throw new YupValidationError(
      new yup.ValidationError(
        YOUTUBE_URL_ERROR_MESSAGE,
        url,
        [...path, 'youtubeUrl'].join('.')
      )
    );
  }
};

const validateContentWithVideoYoutubeUrls = (data, path = []) => {
  if (!data || typeof data !== 'object') {
    return;
  }

  if (Array.isArray(data)) {
    data.forEach((item, index) =>
      validateContentWithVideoYoutubeUrls(item, [...path, index])
    );
    return;
  }

  if (isContentWithVideo(data)) {
    validateYoutubeUrl(data.youtubeUrl, path);
    return;
  }

  for (const [key, value] of Object.entries(data)) {
    if (key.startsWith('__') || key === 'id' || key === 'documentId') {
      continue;
    }

    validateContentWithVideoYoutubeUrls(value, [...path, key]);
  }
};

module.exports = { validateContentWithVideoYoutubeUrls };
