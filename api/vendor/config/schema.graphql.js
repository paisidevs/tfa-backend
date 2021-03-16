module.exports = {
  definition: `
    type VendorEdge {
      node: Vendor
    }

    type PaginatedVendors {
      edges: [VendorEdge]
      pageInfo: PageInfo
    }
  `,
  query: `
    paginatedVendors(cursor: ID, sort: String, limit: Int, where: JSON): PaginatedVendors
  `,
  resolver: {
    Query: {
      paginatedVendors: {
        description: "Retrieve authenticated user's vendors",
        // policies: ["plugins::users-permissions.isAuthenticated"],
        resolver: "Vendor.paginatedVendors",
      },
    },
  },
};
