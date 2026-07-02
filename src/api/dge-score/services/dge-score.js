'use strict';

/**
 * dge-score service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dge-score.dge-score');
