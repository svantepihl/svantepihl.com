// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Svante Pihl',
  siteDescription: 'Personal website for Svante Pihl. Currently searching for jobs within tech! (Located in Uppsala/Stockholm, Sweden)',
  titleTemplate: 'Svante Pihl - hire me!',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
  ],
}
