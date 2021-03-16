module.exports = {
  definition: `
    type CustomerEdge {
      node: Customer
    }

    type PaginatedCustomers {
      edges: [CustomerEdge]
      pageInfo: PageInfo
    }
  `,
  query: `
    paginatedCustomers(cursor: ID, sort: String, limit: Int, where: JSON): PaginatedCustomers
  `,
  resolver: {
    Query: {
      paginatedCustomers: {
        description: "Retrieve authenticated user's customers",
        // policies: ["plugins::users-permissions.isAuthenticated"],
        resolver: "Customer.paginatedCustomers",
      },
    },
  },
};
