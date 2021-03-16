"use strict";

const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve authenticated user's vendors
   * @returns paginated vendors
   */
  paginatedVendors: async (ctx) => {
    try {
      const vendors = await strapi.query("vendor").find();

      const sanitizedVendors = vendors.map((vendor) =>
        sanitizeEntity(vendor, { model: strapi.models.vendor })
      );

      return await strapi.services.common.paginateEntities(
        sanitizedVendors || [],
        ctx
      );
    } catch (error) {
      ctx.throw(error);
    }
  },
};
