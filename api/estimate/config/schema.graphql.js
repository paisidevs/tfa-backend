module.exports = {
  definition: `
    type EstimateEdge {
      node: Estimate
    }

    type PaginatedEstimates {
      edges: [EstimateEdge]
      pageInfo: PageInfo
    }
  `,
  query: `
    paginatedEstimates(cursor: ID, sort: String, limit: Int, where: JSON): PaginatedEstimates
  `,
  resolver: {
    Query: {
      paginatedEstimates: {
        description: "Retrieve authenticated user's vendors",
        // policies: ["plugins::users-permissions.isAuthenticated"],
        resolver: "Estimate.paginatedEstimates",
      },
    },
  },
};
