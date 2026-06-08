const { validateFooterPhone } = require('../api/global/validate-footer-phone');
const { validateLinkHrefFields } = require('../utils/validate-link-basic-href');
const {
  validateContentWithVideoYoutubeUrls,
} = require('../utils/validate-youtube-url');

module.exports = () => {
  return async (ctx, next) => {
    const { method, url, body } = ctx.request;
    const isWrite = method === 'PUT' || method === 'POST';
    const isAdminContent =
      url.includes('/content-manager/') && url.includes('api::');

    if (isWrite && isAdminContent) {
      const data = body?.data ?? body;

      validateLinkHrefFields(data);
      validateContentWithVideoYoutubeUrls(data);

      if (url.includes('api::global.global')) {
        validateFooterPhone(data);
      }
    }

    await next();
  };
};
