"use strict";

const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve authenticated user's estimates
   * @returns paginated estimates
   */
  paginatedEstimates: async (ctx) => {
    try {
      const estimates = await strapi.query("estimate").find();

      const sanitizedEstimates = estimates.map((estimate) =>
        sanitizeEntity(estimate, { model: strapi.models.estimate })
      );

      return await strapi.services.common.paginateEntities(
        sanitizedEstimates || [],
        ctx
      );
    } catch (error) {
      ctx.throw(error);
    }
  },
};
