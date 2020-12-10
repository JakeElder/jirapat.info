module.exports = {
  async redirects() {
    return [
      {
        source: "/course-material",
        destination: "/",
        permanent: false,
      },
    ];
  },
};
