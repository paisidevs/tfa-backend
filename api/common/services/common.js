"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  /**
   * Paginates entities and returns a relay-style object
   */
  paginateEntities: async (entities, ctx) => {
    const { _cursor } = ctx.query;

    const cursorIndex = _cursor
      ? entities.map(({ id }) => id.toString()).indexOf(_cursor) + 1
      : 0;
    const limit = parseInt(ctx.query._limit, 10);

    const nodes = entities.slice(cursorIndex, cursorIndex + limit);
    const endCursor = nodes.length > 0 ? nodes[nodes.length - 1].id : "";
    const hasNextPage = cursorIndex + limit < entities.length;

    return {
      edges: nodes.map((node) => ({ node: node })),
      pageInfo: {
        endCursor,
        hasNextPage,
      },
    };
  },
};
