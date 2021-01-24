module.exports = {
  build: {
    src: "src",
    dist: "release",
    temp: ".tmp",
    public: "public",
    paths: {
      styles: 'src/assets/styles/*.scss',
      scripts: 'src/assets/scripts/*.js',
      pages: 'src/*.html',
      images: 'src/assets/images/**',
      fonts: 'src/assets/fonts/**',
    }
  },
  data : {
    menus: [
      {
        name: 'Home',
        icon: 'aperture',
        link: 'index.html'
      },
      {
        name: 'About',
        link: 'about.html'
      },
      {
        name: 'Contact',
        link: '#',
        children: [
          {
            name: 'divider'
          },
          {
            name: 'About',
            link: 'https://github.com/zce'
          }
        ]
      }
    ],
    pkg: require('./package.json'),
    date: new Date()
  }
}