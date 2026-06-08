'use strict';
const bootstrap = require("./bootstrap");
const { validateFooterPhone } = require('./api/global/validate-footer-phone');
const { validateLinkHrefFields } = require('./utils/validate-link-basic-href');
const {
  validateContentWithVideoYoutubeUrls,
} = require('./utils/validate-youtube-url');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    strapi.documents.use(async (context, next) => {
      if (!['create', 'update'].includes(context.action)) {
        return next();
      }

      const data = context.params.data;

      validateLinkHrefFields(data);
      validateContentWithVideoYoutubeUrls(data);

      if (context.uid === 'api::global.global') {
        validateFooterPhone(data);
      }

      return next();
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap,
};
