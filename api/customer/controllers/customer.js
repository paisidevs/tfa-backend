"use strict";

const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve authenticated user's customers
   * @returns paginated customers
   */
  paginatedCustomers: async (ctx) => {
    try {
      const customers = await strapi.query("customer").find();

      const sanitizedCustomers = customers.map((customer) =>
        sanitizeEntity(customer, { model: strapi.models.customer })
      );

      return await strapi.services.common.paginateEntities(
        sanitizedCustomers || [],
        ctx
      );
    } catch (error) {
      ctx.throw(error);
    }
  },
};
