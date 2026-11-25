export const profile = {
  name: 'ანდრია ურუმაშვილი',
  shortName: 'ანდრია',
  initials: 'AU',
  role: 'დამწყები ვებ-დეველოპერი',
  tagline: 'დამწყები ვებ-დეველოპერი, რომელიც ქმნის მარტივ და თანამედროვე ვებგვერდებს.',
  location: 'თბილისი, საქართველო',
  email: 'andria.urumashvilite06@geolab.edu.ge',
  github: 'https://github.com/ANDRIANOTCAUGHT',
  linkedin: 'https://linkedin.com',
  status: 'ღია ვარ ახალი შესაძლებლობებისთვის',
}

export const navLinks = [
  { id: 'home', label: 'მთავარი', to: '/', end: true },
  { id: 'about', label: 'ჩემ შესახებ', to: '/about' },
  { id: 'users', label: 'თანამშრომლები', to: '/users' },
  { id: 'projects', label: 'პროექტები', to: '/#projects' },
  { id: 'contact', label: 'კონტაქტი', to: '/#contact' },
]

export const stack = ['HTML5', 'CSS3', 'Tailwind CSS', 'React', 'JavaScript']

export const projects = [
  {
    id: 1,
    title: 'მინიმალისტური ბლოგ-პლატფორმა',
    description:
      'სუფთა და წაკითხვადი ბლოგის ინტერფეისი. აწყობილია სემანტიკური HTML-ითა და Tailwind CSS-ით.',
    badge: 'WEB PLATFORM',
    tags: ['HTML5', 'Tailwind CSS', 'Responsive'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCr0wYgEzcBThMwwkSW0rPFCOTA9fnQj5Af8ZcuS9HKSp3DWRbZxhO9Wkn-Zq9AD2i4CCsHvcQNnYFQw_Ah7T9lC19H850oOTIjgAuWr2C-fGY2IztfgKCkvXH9SCOptLD9cbQitc50OK2pWdax1_wrZ1nb99Y-e0XW89ulqbsq_qfvImemTyqYOYxpN_bdga4_crLWijpLxJ_dVf4IAe1gDdEeynnHz_VXYs7iSC1l',
    github: 'https://github.com',
    demo: '#',
  },
  {
    id: 2,
    title: 'სასტუმროს სადესანტო გვერდი',
    description:
      'თანამედროვე, სრულად ადაპტირებული სარეკლამო გვერდი ონლაინ ჯავშნის ფორმითა და გალერეით.',
    badge: 'LANDING PAGE',
    tags: ['Semantic HTML', 'Flexbox / Grid', 'Tailwind'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9u-Kx9GJjMWkfueCO8o3LCMzeuHV8bSzT4zcl2NhdshcYtnciELdpomTojO9_7P7WhAwwtcEI3f79BkfaQJ5Z0e_XR6_Pc-mHVEvn1PpJBrmKD294xR4CHeHNCnAx-8mXYpNv5Ttgo3J2wzKhP1ueTx2nEWSE1WTqm2Y8PX746DwRqT6fKo6SOqO3a2ocT7hRcloTj_hYbcBguYdy_9zWM3v3egh1aO_rJW4xLKwQ',
    github: 'https://github.com',
    demo: '#',
  },
  {
    id: 3,
    title: 'ამოცანების მართვის აპლიკაცია',
    description:
      'მარტივი ინტერფეისი ყოველდღიური დავალებების აღრიცხვისა და ფილტრაციისთვის React-ით.',
    badge: 'WEB APPLICATION',
    tags: ['React', 'JavaScript', 'CSS'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDV1oge25yT6_QU_hdBTMCKhQOINc1ub9SzZvIZfOrvrnB1NRM101gfkQS203BN-tsNVaZDAV8rOXtK4DOeOJJjkQsq37-8__ozdxXUVk_26O3uQyWqgKEE3xW0K2rJ9TB97IwxYVUO-85wROegMFKfYcA_QKtKXa8oLX_i6_x2o-Qvo8xJf675PtV3i9GQ7wxI_ZcT-6dsCZciuZcT9pzfs2q917uRhnHi1MKG554r',
    github: 'https://github.com',
    demo: '#',
  },
]

export const skills = [
  {
    id: 'html',
    title: 'HTML5',
    badge: 'საფუძველი',
    icon: '</>',
    description: 'სემანტიკური მარკირება, a11y და SEO საფუძვლები.',
    level: 90,
    levelLabel: 'სოლიდური',
    barClass: 'bg-primary',
  },
  {
    id: 'css',
    title: 'CSS3',
    badge: 'სტილიზაცია',
    icon: '#css',
    description: 'Flexbox, Grid, რესპონსივი და მედია ქუერები.',
    level: 85,
    levelLabel: 'მოწინავე',
    barClass: 'bg-tertiary',
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    badge: 'ფრეიმვორკი',
    icon: 'tw:',
    description: 'Utility-first მიდგომა და სწრაფი UI აწყობა.',
    level: 88,
    levelLabel: 'პრაქტიკული',
    barClass: 'bg-primary-container',
  },
  {
    id: 'react',
    title: 'React',
    badge: 'ბიბლიოთეკა',
    icon: '⚛',
    description: 'კომპონენტები, props, state და JSX.',
    level: 70,
    levelLabel: 'სწავლა',
    barClass: 'bg-primary',
  },
]

export const principles = [
  {
    id: 1,
    icon: 'code',
    title: 'სუფთა კოდი',
    text: 'მკაფიო სტრუქტურა და სემანტიკური იერარქია.',
  },
  {
    id: 2,
    icon: 'devices',
    title: 'რესპონსივი',
    text: 'კარგი გამოცდილება ნებისმიერ ეკრანზე.',
  },
  {
    id: 3,
    icon: 'trending_up',
    title: 'მუდმივი სწავლა',
    text: 'ახალი ტექნოლოგიების ყოველდღიური პრაქტიკა.',
  },
]

export const learning = [
  {
    id: 1,
    code: '01 / JS',
    title: 'JavaScript (ES6+)',
    text: 'DOM, Fetch API, Promises და მოდულები.',
    tags: ['ES6', 'Fetch', 'DOM'],
  },
  {
    id: 2,
    code: '02 / GIT',
    title: 'Git & GitHub',
    text: 'ვერსიათა კონტროლი, ბრენჩები და workflow.',
    tags: ['Branches', 'Commits', 'PRs'],
  },
  {
    id: 3,
    code: '03 / REACT',
    title: 'React კომპონენტები',
    text: 'Props, state, hooks და კომპონენტური არქიტექტურა.',
    tags: ['Components', 'Props', 'State'],
  },
]
