'use strict';

/**
 * portfolio-shared service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::portfolio-shared.portfolio-shared');

