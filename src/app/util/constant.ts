/**
 * @description holds constants
 */

export const ResponseCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  INVALID_TOKEN: 498,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

export const enum EventTypes { Recommended, Searched, Attended, RecommendedByFollowingList, Other }

export const PROFILE_IMG = './assets/common/profile-img.png';

const dashboard = '/dashboard';
const settings = '/settings';
const user = '/user';
const callback = '/callback';

export const URLS = {
  root: '/',
  u: '/u',
  notFound: '/not-found',
  maintenance: '/maintenance',
  signup: '/signup',
  signupSuccess: '/signup-success',
  verifyAccount: '/verify-account',
  login: '/login',
  forgetPassword: '/forget-password',
  resetPassword: '/reset-password',
  cookiePolicy: '/cookie-policy',
  privacyPolicy: '/privacy-policy',
  terms: '/terms',
  showroom: '/showroom',
  dashboard: {
    root: dashboard,
    contribute: dashboard + '/createEvent',
    learn: dashboard + '/learn',
    event: dashboard + '/event',
    privacy: dashboard + '/privacy',
    myProfile: dashboard + '/my-profile'
  },
  settings: {
    welcome: settings + '/welcome',
    editProfile: settings + '/edit-profile',
  },
  user: {
    root: user
  },
  callback: {
    root: callback,
    twitter: callback + '/twitter',
    google: callback + '/google',
    facebook: callback + '/facebook',
    linkedin: callback + '/linkedin',
    github: callback + '/github'
  }
};

export const RIBBONS = {
  default: {
    type: '',
    text: ''
  },
  new: {
    type: 'new',
    text: 'New 🎉'
  },
  featured: {
    type: 'featured',
    text: 'Featured 🚀'
  },
  premium: {
    type: 'premium',
    text: 'Premium ⭐'
  }
};

export const QUOTES = [
  {
    quote: 'Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.',
    author: 'Abigail Adams'
  },
  {
    quote: 'Upon the subject of education ... I can only say that I view it as the most important subject which we as a people may be engaged in.',
    author: 'Abraham Lincoln'
  },
  {
    quote: 'It is as impossible to withhold education from the receptive mind as it is impossible to force it upon the unreasoning.',
    author: 'Agnes Repplierg'
  },
  {
    quote: 'Education is what remains after one has forgotten what one has learned in school.',
    author: 'Albert Einstein'
  },
  {
    quote: 'Wisdom is not a product of schooling but of the lifelong attempt to acquire it.',
    author: 'Albert Einstein'
  },
  {
    quote: 'I am indebted to my father for living, but to my teacher for living well.',
    author: 'Alexander the Great'
  },
  {
    quote: 'The best teachers are those who show you where to look but don’t tell you what to see.',
    author: 'Alexandra K. Trenfor'
  },
  {
    quote: 'What we learn with pleasure we never forget.',
    author: 'Alfred Mercier'
  },
  {
    quote: 'Nine-tenths of education is encouragement.',
    author: 'Anatole France'
  },
  {
    quote: 'If you think education is expensive, try ignorance.',
    author: 'Andy McIntyre'
  },
  {
    quote: 'I agree that a love of reading is a great gift for a parent to pass on to his or her child.',
    author: 'Ann Brashares'
  },
  {
    quote: 'Develop a passion for learning. If you do, you will never cease to grow.',
    author: 'Anthony J. D\'Angelo'
  },
  {
    quote: 'Wisdom.... comes not from age, but from education and learning.',
    author: 'Anton Chekhov'
  },
  {
    quote: 'The roots of education are bitter, but the fruit is sweet.',
    author: 'Aristotle'
  },
  {
    quote: 'Educating the mind without educating the heart is no education at all.',
    author: 'Aristotle'
  },
  {
    quote: 'For the things we have to learn before we can do them, we learn by doing them.',
    author: 'Aristotle'
  },
  {
    quote: 'The educated differ from the uneducated as much as the living differ from the dead.',
    author: 'Aristotle'
  },
  {
    quote: 'The beautiful thing about learning is that nobody can take it away from you.',
    author: 'B.B. King'
  },
  {
    quote: 'An investment in knowledge pays the best interest.',
    author: 'Benjamin Franklin'
  },
  {
    quote: 'We learn from failure, not from success!',
    author: 'Bram Stoker'
  },
  {
    quote: 'Education is the power to think clearly, the power to act well in the world’s work, and the power to appreciate life.',
    author: 'Brigham Young'
  },
  {
    quote: 'Education without values, as useful as it is, seems rather to make man a more clever devil.',
    author: 'C.S. Lewis'
  },
  {
    quote: 'The only person who is educated is the one who has learned how to learn and change.',
    author: 'Carl Rogers'
  },
  {
    quote: 'Education is the best friend. An educated person is respected everywhere. Education beats the beauty and the youth.',
    author: 'Chanakya'
  },
  {
    quote: 'Learning is like rowing upstream: not to advance is to drop back.',
    author: 'Chinese proverb'
  },
  {
    quote: 'Learning is a treasure that will follow its owner everywhere.',
    author: 'Chinese Proverb'
  },
  {
    quote: 'Knowledge will bring you the opportunity to make a difference.',
    author: 'Claire Fagin'
  },
  {
    quote: 'Man can learn nothing except by going from the known to the unknown.',
    author: 'Claude Bernard'
  },
  {
    quote: 'It is what we know already that often prevents us from learning.',
    author: 'Claude Bernard'
  },
  {
    quote: 'You cannot open a book without learning something.',
    author: 'Confucius'
  },
  {
    quote: 'Education breeds confidence. Confidence breeds hope. Hope breeds peace.',
    author: 'Confucius'
  },
  {
    quote: 'The essence of knowledge is, having it, to apply it; not having it, to confess your ignorance.',
    author: 'Confuciuss'
  },
  {
    quote: 'You are always a student, never a master. You have to keep moving forward.',
    author: 'Conrad Hall'
  },
  {
    quote: 'Your library is your paradise.',
    author: 'Desiderius Erasmus'
  },
  {
    quote: 'You live and learn. At any rate, you live.',
    author: 'Douglas Adams'
  },
  {
    quote: 'Education is the ability to meet life\'s situations.',
    author: 'Dr. John G. Hibben'
  },
  {
    quote: 'The more that you read, the more things you will know, the more that you learn, the more places you’ll go.',
    author: 'Dr. Seuss'
  },
  {
    quote: 'Learning is not compulsory. Neither is survival.',
    author: 'Dr. W. Edwards Deming'
  },
  {
    quote: 'Education is a better safeguard of liberty than a standing army.',
    author: 'Edward Everett'
  },
  {
    quote: 'A good education is a foundation for a better future.',
    author: 'Elizabeth Warren'
  },
  {
    quote: 'Only the educated are free.',
    author: 'Epictetus'
  },
  {
    quote: 'It is impossible for a man to learn what he thinks he already knows.',
    author: 'Epictetus'
  },
  {
    quote: 'Education is helping the child realize his potentialities.',
    author: 'Eric Fromm'
  },
  {
    quote: 'Education is the methodical creation of the habit of thinking.',
    author: 'Ernest Dimnet'
  },
  {
    quote: 'Education is the art of making man ethical.',
    author: 'Georg Wilhelm Friedrich Hegel'
  },
  {
    quote: 'Education is learning what you didn\'t know you didn\'t know.',
    author: 'George Boas'
  },
  {
    quote: 'The progress of the world depends almost entirely upon education.',
    author: 'George Eastman'
  },
  {
    quote: 'Every student can learn, just not on the same day, or the same way.',
    author: 'George Evans'
  },
  {
    quote: 'Education is the key to unlock the golden door of freedom.',
    author: 'George Washington Carver'
  },
  {
    quote: 'Education is a continual process, it\'s like a bicycle... If you don\'t pedal you don\'t go forward.',
    author: 'George Weah'
  },
  {
    quote: 'Education is simply the soul of a society as it passes from one generation to another.',
    author: 'Gilbert K. Chesterton'
  },
  {
    quote: 'All things good to know are difficult to learn.',
    author: 'Greek proverb'
  },
  {
    quote: 'They know enough who know how to learn.',
    author: 'Henry Adams'
  },
  {
    quote: 'What does education often do? It makes a straight-cut ditch of a free, meandering brook.',
    author: 'Henry David Thoreau'
  },
  {
    quote: 'The great aim of education is not knowledge but action.',
    author: 'Herbert Spencer'
  },
  {
    quote: 'Self-education is, I firmly believe, the only kind of education there is.',
    author: 'Isaac Asimov'
  },
  {
    quote: 'The minute that you\'re not learning I believe you\'re dead.',
    author: 'Jack Nicholson'
  },
  {
    quote: 'Formal education will make you a living; self-education will make you a fortune.',
    author: 'Jim Rohn'
  },
  {
    quote: 'By seeking and blundering we learn.',
    author: 'Johann Wolfgang von Goethe'
  },
  {
    quote: 'Education makes a greater difference between man and man than nature has made between man and brute.',
    author: 'John Adams'
  },
  {
    quote: 'Education is not preparation for life; education is life itself.',
    author: 'John Dewey'
  },
  {
    quote: 'Learning starts with failure; the first failure is the beginning of education.',
    author: 'John Hersey'
  },
  {
    quote: 'Learning is not the product of teaching. Learning is the product of the activity of learners.',
    author: 'John Holt'
  },
  {
    quote: 'When you take the free will out of education, that turns it into schooling.',
    author: 'John Taylor Gatto'
  },
  {
    quote: 'The learning process continues until the day you die.',
    author: 'Kirk Douglas'
  },
  {
    quote: 'Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family.',
    author: 'Kofi Annan'
  },
  {
    quote: 'Change is the end result of all true learning.',
    author: 'Leo Buscaglia'
  },
  {
    quote: 'The noblest pleasure is the joy of understanding.',
    author: 'Leonardo da Vinci'
  },
  {
    quote: 'Study without desire spoils the memory, and it retains nothing that it takes in.',
    author: 'Leonardo da Vinci'
  },
  {
    quote: 'We learn more by looking for the answer to a question and not finding it than we do from learning the answer itself.',
    author: 'Lloyd Alexander'
  },
  {
    quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi'
  },
  {
    quote: 'By education, I mean an all-round drawing of the best in child and man in body, mind and spirit.',
    author: 'Mahatma Gandhi'
  },
  {
    quote: 'They cannot stop me. I will get my education, if it is in the home, school, or anyplace.',
    author: 'Malala Yousafzai'
  },
  {
    quote: 'I don\'t want revenge on the Taliban, I want education for sons and daughters of the Taliban.',
    author: 'Malala Yousafzai'
  },
  {
    quote: 'The content of a book holds the power of education and it is with this power that we can shape our future and change lives.',
    author: 'Malala Yousafzai'
  },
  {
    quote: 'Education’s purpose is to replace an empty mind with an open one.',
    author: 'Malcolm S. Forbes'
  },
  {
    quote: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.',
    author: 'Malcolm X'
  },
  {
    quote: 'Education is for improving the lives of others and for leaving your community and world better than you found it.',
    author: 'Marian Wright Edelman'
  },
  {
    quote: 'A person who won\'t read has no advantage over one who can\'t read.',
    author: 'Mark Twain'
  },
  {
    quote: 'I have never let my schooling interfere with my education.',
    author: 'Mark Twain'
  },
  {
    quote: 'Education: that which reveals to the wise, and conceals from the stupid, the vast limits of their knowledge.',
    author: 'Mark Twain'
  },
  {
    quote: 'Never let formal education get in the way of your learning.',
    author: 'Mark Twain'
  },
  {
    quote: 'I think you learn more if you\'re laughing at the same time.',
    author: 'Mary Ann Shaffer & Annie Barrows'
  },
  {
    quote: 'The more I live, the more I learn. The more I learn, the more I realize, the less I know.',
    author: 'Michel Legrand'
  },
  {
    quote: 'When girls are educated, their countries become stronger and more prosperous.',
    author: 'Michelle Obama'
  },
  {
    quote: 'To me education is a leading out of what is already there in the pupil\'s soul.',
    author: 'Muriel Spark'
  },
  {
    quote: 'Education is the most powerful weapon which you can use to change the world.',
    author: 'Nelson Mandela'
  },
  {
    quote: 'Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.',
    author: 'Og Mandino'
  },
  {
    quote: 'Man\'s mind, once stretched by a new idea, never regains its original dimensions.',
    author: 'Oliver Wendell Holmes'
  },
  {
    quote: 'A man\'s mind, stretched by new ideas, may never return to its original dimensions.',
    author: 'Oliver Wendell Holmes Jr.'
  },
  {
    quote: 'Education is teaching our children to desire the right things.',
    author: 'Plato'
  },
  {
    quote: 'You learn something every day if you pay attention.',
    author: 'Ray LeBlond'
  },
  {
    quote: 'Education is the ability to listen to almost anything without losing your temper or your self-confidence.',
    author: 'Robert Frost'
  },
  {
    quote: 'Let the improvement of yourself keep you so busy that you have no time to criticize others.',
    author: 'Roy T. Bennett'
  },
  {
    quote: 'Education should light a fire within us to improve us and help our world.',
    author: 'Sarah Josepf'
  },
  {
    quote: 'Education is the kindling of a flame, not the filling of a vessel.',
    author: 'Socrates'
  },
  {
    quote: 'One learns by doing a thing; for though you think you know it, you have no certainty until you try.',
    author: 'Sophocles'
  },
  {
    quote: 'I was reading the dictionary. I thought it was a poem about everything.',
    author: 'Steven Wright'
  },
  {
    quote: 'The whole purpose of education is to turn mirrors into windows.',
    author: 'Sydney J. Harris'
  },
  {
    quote: 'A teacher is one who makes himself progressively unnecessary.',
    author: 'Thomas Carruthers'
  },
  {
    quote: 'The man who reads nothing at all is better educated than the man who reads nothing but newspapers.',
    author: 'Thomas Jefferson'
  },
  {
    quote: 'Men, in teaching others, learn themselves.',
    author: 'Thomas Lodge'
  },
  {
    quote: 'He who opens a school door, closes a prison.',
    author: 'Victor Hugo'
  },
  {
    quote: 'The more I read, the more I acquire, the more certain I am that I know nothing.',
    author: 'Voltaire'
  },
  {
    quote: 'Education is not the filling of a pail, but the lighting of a fire.',
    author: 'W.B. Yeats'
  },
  {
    quote: 'Whatever the cost of our libraries, the price is cheap compared to that of an ignorant nation.',
    author: 'Walter Cronkite'
  },
  {
    quote: 'Education is a progressive discovery of our own ignorance.',
    author: 'Will Durant'
  },
  {
    quote: 'The aim of education is the knowledge, not of facts, but of values.',
    author: 'William Burroughs'
  },
  {
    quote: 'Education is not the filling of a pail, but the lighting of a fire.',
    author: 'William Butler Yeats'
  },
  {
    quote: 'The modern world belongs to the half-educated, a rather difficult class, because they do not realize how little they know.',
    author: 'William R. Inge'
  }
];

export const CATEGORIES = [
  {
    name: 'Development',
    id: 1,
    payload: {
      subCategories: [
        {
          name: 'Web Development',
          id: 1,
          leafCategories: [ { name: 'JavaScript', id: 1 }, { name: 'React', id: 2 }, {
            name: 'Angular',
            id: 3
          }, { name: 'CSS', id: 4 }, { name: 'PHP', id: 5 }, { name: 'Node.Js', id: 6 }, { name: 'Vue JS', id: 7 } ]
        },
        {
          name: 'Data Science',
          id: 2,
          leafCategories: [ { name: 'Python', id: 1 }, { name: 'Machine Learning', id: 2 }, {
            name: 'Deep Learning',
            id: 3
          }, { name: 'Data Analysis', id: 4 }, { name: 'Artificial Intelligence', id: 5 }, {
            name: 'R',
            id: 6
          }, { name: 'TensorFlow', id: 7 }, { name: 'Neural Networks', id: 8 } ]
        },
        {
          name: 'Mobile Development',
          id: 3,
          leafCategories: [ { name: 'Google Flutter', id: 1 }, {
            name: 'Android Development',
            id: 2
          }, { name: 'iOS Development', id: 3 }, { name: 'Swift', id: 4 }, {
            name: 'React Native',
            id: 5
          }, { name: 'Dart Programming Language', id: 6 }, { name: 'Kotlin', id: 7 }, {
            name: 'Redux Framework',
            id: 8
          } ]
        },
        {
          name: 'Programming Languages',
          id: 4,
          leafCategories: [ { name: 'Python', id: 1 }, { name: 'Java', id: 2 }, { name: 'C#', id: 3 }, {
            name: 'C++',
            id: 4
          }, { name: 'React', id: 5 }, { name: 'JavaScript', id: 6 }, { name: 'C', id: 7 }, {
            name: 'Spring Framework',
            id: 8
          }, { name: 'Go', id: 9 }, { name: 'Programming Language', id: 10 } ]
        },
        {
          name: 'Game Development',
          id: 5,
          leafCategories: [ { name: 'Unity', id: 1 }, {
            name: 'Game Development Fundamentals',
            id: 2
          }, { name: 'Unreal Engine', id: 3 }, { name: 'C#', id: 4 }, {
            name: '3D Game Development',
            id: 5
          }, { name: 'C++', id: 6 }, { name: '2D Game Development', id: 7 }, {
            name: 'Unreal Engine',
            id: 8
          }, { name: 'Blueprints', id: 9 }, { name: 'Blender', id: 10 } ]
        },
        {
          name: 'Database Design & Development',
          id: 6,
          leafCategories: [ { name: 'SQL', id: 1 }, { name: 'MySQL', id: 2 }, {
            name: 'Oracle SQL',
            id: 3
          }, { name: 'Oracle Certification', id: 4 }, { name: 'MongoDB', id: 5 }, {
            name: 'Apache Kafka',
            id: 6
          }, { name: 'SQL Server', id: 7 }, { name: 'PostgreSQL', id: 8 }, { name: 'Database Management', id: 9 } ]
        },
        {
          name: 'Software Testing',
          id: 7,
          leafCategories: [ { name: 'Selenium WebDriver', id: 1 }, {
            name: 'Java',
            id: 2
          }, { name: 'Automation Testing', id: 3 }, {
            name: 'Selenium Testing Framework',
            id: 4
          }, { name: 'API Testing', id: 5 }, { name: 'REST Assured', id: 6 }, {
            name: 'Appium',
            id: 7
          }, { name: 'Cypress.io', id: 8 } ]
        },
        {
          name: 'Software Engineering',
          id: 8,
          leafCategories: [ { name: 'AWS Certification', id: 1 }, {
            name: 'AWS Certified Developer - Associate',
            id: 2
          }, { name: 'Coding Interview', id: 3 }, {
            name: 'Kubernetes',
            id: 4
          }, { name: 'Certified Kubernetes Application Developer (CKAD)', id: 5 }, {
            name: 'Microservices',
            id: 6
          }, { name: 'Python', id: 7 }, { name: 'Agile', id: 8 }, { name: 'Elasticsearch', id: 9 } ]
        },
        {
          name: 'Development Tools',
          id: 9,
          leafCategories: [ { name: 'Docker', id: 1 }, { name: 'Kubernetes', id: 2 }, {
            name: 'Git',
            id: 3
          }, { name: 'DevOps', id: 4 }, { name: 'Jenkins', id: 5 }, {
            name: 'AWS Certification',
            id: 6
          }, { name: 'AWS Certified Developer - Associate', id: 7 }, {
            name: 'JIRA',
            id: 8
          }, { name: 'AWS Certified Solutions Architect - Associate', id: 9 } ]
        },
        {
          name: 'No-Code Development',
          id: 10,
          leafCategories: [ { name: 'Elementor', id: 1 }, { name: 'Wix', id: 2 }, {
            name: 'Software Development',
            id: 3
          }, { name: 'Bubble Visual Programming', id: 4 }, { name: 'WordPress', id: 5 }, {
            name: 'Microsoft PowerApps',
            id: 6
          }, { name: 'Microsoft Power Automate', id: 7 }, { name: 'Web Design', id: 8 }, { name: 'Startup', id: 9 } ]
        }
      ]
    }
  },
  {
    name: 'Business',
    id: 2,
    payload: {
      subCategories: [
        {
          name: 'Entrepreneurship',
          id: 1,
          leafCategories: [ { name: 'Business Fundamentals', id: 1 }, {
            name: 'Entrepreneurship Fundamentals',
            id: 2
          }, { name: 'Business Strategy', id: 3 }, { name: 'Startup', id: 4 }, {
            name: 'Business Plan',
            id: 5
          }, { name: 'Blogging', id: 6 }, { name: 'Freelancing', id: 7 }, {
            name: 'Online Business',
            id: 8
          }, { name: 'Home Business', id: 9 } ]
        },
        {
          name: 'Communications',
          id: 2,
          leafCategories: [ { name: 'Writing', id: 1 }, {
            name: 'Communication Skills',
            id: 2
          }, { name: 'Presentation Skills', id: 3 }, { name: 'Public Speaking', id: 4 }, {
            name: 'Fiction Writing',
            id: 5
          }, { name: 'Business Writing', id: 6 }, { name: 'Technical Writing', id: 7 }, {
            name: 'Email Etiquette',
            id: 8
          }, { name: 'Novel Writing', id: 9 } ]
        },
        {
          name: 'Management',
          id: 3,
          leafCategories: [ { name: 'Product Management', id: 1 }, {
            name: 'Leadership',
            id: 2
          }, { name: 'Management Skills', id: 3 }, { name: 'ISO 9001', id: 4 }, {
            name: 'Business Process Management',
            id: 5
          }, { name: 'Risk Management', id: 6 }, { name: 'Agile', id: 7 }, {
            name: 'Quality Management',
            id: 8
          }, { name: 'Management Coaching', id: 9 } ]
        },
        {
          name: 'Sales',
          id: 4,
          leafCategories: [ { name: 'Sales Skills', id: 1 }, { name: 'B2B Sales', id: 2 }, {
            name: 'LinkedIn',
            id: 3
          }, { name: 'Presentation Skills', id: 4 }, { name: 'Business Development', id: 5 }, {
            name: 'Lead Generation',
            id: 6
          }, { name: 'Customer Service', id: 7 }, { name: 'Customer Success Management', id: 8 }, {
            name: 'Cold Email',
            id: 9
          } ]
        },
        {
          name: 'Business Strategy',
          id: 5,
          leafCategories: [ { name: 'Digital Marketing', id: 1 }, {
            name: 'Excel',
            id: 2
          }, { name: 'Financial Modeling', id: 3 }, {
            name: 'Management Consulting',
            id: 4
          }, { name: 'Google Ads (Adwords)', id: 5 }, { name: 'Business Model', id: 6 }, {
            name: 'Strategic Planning',
            id: 7
          }, { name: 'TOGAF 9 Foundation', id: 8 } ]
        },
        {
          name: 'Operations',
          id: 6,
          leafCategories: [ { name: 'Supply Chain', id: 1 }, {
            name: 'Six Sigma Green Belt',
            id: 2
          }, { name: 'Six Sigma', id: 3 }, { name: 'Quality Management', id: 4 }, {
            name: 'Robotic Process Automation',
            id: 5
          }, { name: 'Six Sigma Yellow Belt', id: 6 }, { name: 'UiPath', id: 7 }, {
            name: 'Six Sigma Black Belt',
            id: 8
          }, { name: 'Lean Six Sigma Green Belt', id: 9 } ]
        },
        {
          name: 'Project Management',
          id: 7,
          leafCategories: [ { name: 'PMP', id: 1 }, { name: 'PMBOK', id: 2 }, { name: 'Agile', id: 3 }, {
            name: 'Scrum',
            id: 4
          }, { name: 'CAPM', id: 5 }, { name: 'PMI-ACP', id: 6 }, {
            name: 'Microsoft Project',
            id: 7
          }, { name: 'Risk Management', id: 8 } ]
        },
        {
          name: 'Business Law',
          id: 8,
          leafCategories: [ { name: 'GDPR', id: 1 }, { name: 'Law', id: 2 }, {
            name: 'Contract Law',
            id: 3
          }, { name: 'Medical Device Development', id: 4 }, {
            name: 'LGPD Lei Geral de Proteção de Dados',
            id: 5
          }, { name: 'Healthcare IT', id: 6 }, { name: 'Patent', id: 7 }, { name: 'Intellectual Property', id: 8 } ]
        },
        {
          name: 'Business Analytics & Intelligence',
          id: 9,
          leafCategories: [ { name: 'SQL', id: 1 }, { name: 'Microsoft Power BI', id: 2 }, {
            name: 'Tableau',
            id: 3
          }, { name: 'Business Analysis', id: 4 }, { name: 'Business Intelligence', id: 5 }, {
            name: 'Data Analysis',
            id: 6
          }, { name: 'MySQL', id: 7 }, { name: 'Data Modeling', id: 8 }, { name: 'Big Data', id: 9 } ]
        },
        {
          name: 'Human Resources',
          id: 10,
          leafCategories: [ { name: 'Recruiting', id: 1 }, {
            name: 'Instructional Design',
            id: 2
          }, { name: 'Diversity and Inclusion', id: 3 }, {
            name: 'Emotional Intelligence',
            id: 4
          }, { name: 'Conflict Management', id: 5 }, { name: 'Hiring', id: 6 }, {
            name: 'Talent Management',
            id: 7
          }, { name: 'HR Analytics', id: 8 } ]
        },
        {
          name: 'Industry',
          id: 11,
          leafCategories: [ { name: 'Piping', id: 1 }, {
            name: 'Electrical Engineering',
            id: 2
          }, { name: 'Oil and Gas Industry', id: 3 }, { name: 'Freight Broker', id: 4 }, {
            name: 'Pharmacy',
            id: 5
          }, { name: 'Solar Energy', id: 6 }, { name: 'Life Coach Training', id: 7 }, {
            name: 'Chemical engineering',
            id: 8
          }, { name: 'EPLAN Electric P8', id: 9 } ]
        },
        {
          name: 'E-Commerce',
          id: 12,
          leafCategories: [ { name: 'Amazon FBA', id: 1 }, {
            name: 'Dropshipping',
            id: 2
          }, { name: 'Shopify Dropshipping', id: 3 }, { name: 'Shopify', id: 4 }, {
            name: 'Selling on Amazon',
            id: 5
          }, { name: 'WooCommerce', id: 6 }, { name: 'WordPress for Ecommerce', id: 7 }, { name: '.NET', id: 8 } ]
        },
        {
          name: 'Media',
          id: 13,
          leafCategories: [ { name: 'Audiobook Creation', id: 1 }, {
            name: 'WordPress',
            id: 2
          }, { name: 'Screenwriting', id: 3 }, { name: 'Writing', id: 4 }, {
            name: 'Amazon Kindle',
            id: 5
          }, { name: 'Journalism', id: 6 }, { name: 'Podcasting', id: 7 }, {
            name: 'Open Broadcaster',
            id: 8
          }, { name: 'After Effects', id: 9 } ]
        },
        {
          name: 'Real Estate',
          id: 14,
          leafCategories: [ { name: 'Real Estate Investing', id: 1 }, {
            name: 'Mortgage',
            id: 2
          }, { name: 'Construction', id: 3 }, { name: 'Airbnb Hosting', id: 4 }, {
            name: 'Financial Modeling',
            id: 5
          }, { name: 'Property Management', id: 6 }, {
            name: 'Real Estate Flipping',
            id: 7
          }, { name: 'Real Estate Marketing', id: 8 } ]
        },
        {
          name: 'Other Business',
          id: 15,
          leafCategories: [ { name: 'QuickBooks Online', id: 1 }, {
            name: 'Transcription',
            id: 2
          }, { name: 'Grant Writing', id: 3 }, { name: 'PowerPoint', id: 4 }, {
            name: 'Critical Thinking',
            id: 5
          }, { name: 'LGPD Lei Geral de Proteção de Dados', id: 6 }, {
            name: 'PMI-RMP',
            id: 7
          }, { name: 'Freelance Writing', id: 8 }, { name: 'Akka', id: 9 } ]
        }
      ]
    }
  },
  {
    name: 'Finance & Accounting',
    id: 3,
    payload: {
      subCategories: [
        {
          name: 'Accounting & Bookkeeping',
          id: 1,
          leafCategories: [ { name: 'Accounting', id: 1 }, {
            name: 'Finance Fundamentals',
            id: 2
          }, { name: 'Financial Accounting', id: 3 }, { name: 'Bookkeeping', id: 4 }, {
            name: 'Financial Statement',
            id: 5
          }, { name: 'Xero', id: 6 }, { name: 'Tally.ERP', id: 7 }, { name: 'SAP FICO', id: 8 }, {
            name: 'IFRS',
            id: 9
          } ]
        },
        {
          name: 'Compliance',
          id: 2,
          leafCategories: [ { name: 'Anti-Money Laundering', id: 1 }, {
            name: 'Risk Management',
            id: 2
          }, { name: 'Sarbanes-Oxley (SOX)', id: 3 }, {
            name: 'Internal Auditing',
            id: 4
          }, { name: 'CAMS Certification', id: 5 }, { name: 'IFRS', id: 5 }, {
            name: 'Certified Internal Auditor (CIA)',
            id: 6
          }, { name: 'Financial Risk Manager (FRM)', id: 7 }, { name: 'Accounting', id: 8 } ]
        },
        {
          name: 'Cryptocurrency & Blockchain',
          id: 3,
          leafCategories: [ { name: 'Cryptocurrency', id: 1 }, { name: 'Bitcoin', id: 2 }, {
            name: 'Blockchain',
            id: 3
          }, { name: 'Personal Finance', id: 4 }, { name: 'Day Trading', id: 5 }, {
            name: 'Algorithmic Trading',
            id: 6
          }, { name: 'Bitcoin Trading', id: 7 }, { name: 'Ethereum', id: 8 }, { name: 'Technical Analysis', id: 9 } ]
        },
        {
          name: 'Economics',
          id: 4,
          leafCategories: [ { name: 'Microeconomics', id: 1 }, {
            name: 'Macroeconomics',
            id: 2
          }, { name: 'Econometrics', id: 3 }, { name: 'Stata', id: 4 }, {
            name: 'Entrepreneurship Fundamentals',
            id: 5
          }, { name: 'Finance Fundamentals', id: 6 }, {
            name: 'Political Science',
            id: 7
          }, { name: 'Regression Analysis', id: 8 } ]
        },
        {
          name: 'Finance',
          id: 5,
          leafCategories: [ { name: 'Personal Finance', id: 1 }, { name: 'Investment Banking', id: 2 }, {
            name: 'CFA',
            id: 3
          }, { name: 'Finance Fundamentals', id: 4 }, {
            name: 'Financial Management',
            id: 5
          }, { name: 'Corporate Finance', id: 6 }, { name: 'Financial Analysis', id: 7 }, {
            name: 'Excel',
            id: 8
          }, { name: 'Company Valuation', id: 9 } ]
        },
        {
          name: 'Finance Cert & Exam Prep',
          id: 6,
          leafCategories: [ { name: 'CFA', id: 1 }, {
            name: 'Financial Markets',
            id: 2
          }, { name: 'Quantitative Finance', id: 3 }, {
            name: 'Certified Management Accountant (CMA)',
            id: 4
          }, { name: 'ANBIMA Certification', id: 5 }, { name: 'Financial Management', id: 6 }, {
            name: 'ACCA',
            id: 7
          }, { name: 'Fixed Income Securities', id: 8 }, { name: 'Corporate Finance', id: 9 } ]
        },
        {
          name: 'Financial Modeling & Analysis',
          id: 7,
          leafCategories: [ { name: 'Personal Finance', id: 1 }, { name: 'Investment Banking', id: 2 }, {
            name: 'CFA',
            id: 3
          }, { name: 'Finance Fundamentals', id: 4 }, {
            name: 'Financial Management',
            id: 5
          }, { name: 'Corporate Finance', id: 6 }, { name: 'Financial Analysis', id: 7 }, {
            name: 'Excel',
            id: 8
          }, { name: 'Company Valuation', id: 9 } ]
        },
        {
          name: 'Investing & Trading',
          id: 8,
          leafCategories: [ { name: 'Stock Trading', id: 1 }, { name: 'Forex', id: 2 }, {
            name: 'Technical Analysis',
            id: 3
          }, { name: 'Investing', id: 4 }, { name: 'Day Trading', id: 5 }, {
            name: 'Options Trading',
            id: 6
          }, { name: 'Financial Analysis', id: 7 }, { name: 'Financial Trading', id: 8 }, {
            name: 'Algorithmic Trading',
            id: 9
          } ]
        },
        {
          name: 'Money Management Tools',
          id: 9,
          leafCategories: [ { name: 'QuickBooks Online', id: 1 }, { name: 'Excel', id: 2 }, {
            name: 'QuickBooks',
            id: 3
          }, { name: 'SAP FICO', id: 4 }, { name: 'QuickBooks Pro', id: 5 }, {
            name: 'Excel Analytics',
            id: 6
          }, { name: 'Xero', id: 7 }, { name: 'Financial Modeling', id: 8 }, { name: 'Financial Accounting', id: 9 } ]
        },
        {
          name: 'Taxes',
          id: 10,
          leafCategories: [ { name: 'Tax Preparation', id: 1 }, {
            name: 'Goods and Services Tax',
            id: 2
          }, { name: 'Accounting', id: 3 }, { name: 'Value Added Tax (VAT)', id: 4 }, {
            name: 'QuickBooks Online',
            id: 5
          }, { name: 'Personal Finance', id: 6 }, { name: 'Finance Fundamentals', id: 7 }, {
            name: 'Home Business',
            id: 8
          }, { name: 'Financial Planning', id: 9 } ]
        },
        {
          name: 'Other Finance & Accounting',
          id: 11,
          leafCategories: [ { name: 'Technical Analysis', id: 1 }, { name: 'PowerPoint', id: 2 }, {
            name: 'Negotiation',
            id: 3
          }, { name: 'Financial Planning', id: 4 }, { name: 'Coaching', id: 5 }, {
            name: 'Investing',
            id: 6
          }, { name: 'Passive Income', id: 7 }, { name: 'Finance Fundamentals', id: 8 }, {
            name: 'Personal Finance',
            id: 9
          } ]
        }
      ]
    }
  },
  {
    name: 'IT & Software',
    id: 4,
    payload: {
      subCategories: [
        {
          name: 'IT Certification',
          id: 1,
          leafCategories: [ { name: 'AWS Certification', id: 1 }, {
            name: 'Microsoft Certification',
            id: 2
          }, { name: 'AWS Certified Solutions Architect - Associate', id: 3 }, {
            name: 'CompTIA A+',
            id: 4
          }, { name: 'AWS Certified Cloud Practitioner', id: 5 }, {
            name: 'Cisco CCNA',
            id: 6
          }, { name: 'AWS Certified Developer - Associate', id: 7 }, {
            name: 'CompTIA Security+',
            id: 8
          }, { name: 'Amazon AWS', id: 9 } ]
        },
        {
          name: 'Network & Security',
          id: 2,
          leafCategories: [ { name: 'Ethical Hacking', id: 1 }, {
            name: 'Cyber Security',
            id: 2
          }, { name: 'CompTIA Security+', id: 3 }, { name: 'Penetration Testing', id: 4 }, {
            name: 'Network Security',
            id: 5
          }, { name: 'IT Networking Fundamentals', id: 6 }, { name: 'CompTIA Network+', id: 7 }, {
            name: 'Cisco CCNA',
            id: 8
          }, { name: 'Terraform', id: 9 } ]
        },
        {
          name: 'Hardware',
          id: 3,
          leafCategories: [ { name: 'Arduino', id: 1 }, { name: 'PLC', id: 2 }, {
            name: 'Electronics',
            id: 3
          }, { name: 'Microcontroller', id: 4 }, { name: 'Raspberry Pi', id: 5 }, {
            name: 'Embedded Systems',
            id: 6
          }, { name: 'FPGA', id: 7 }, { name: 'HMI', id: 8 }, { name: 'Embedded C', id: 9 } ]
        },
        {
          name: 'Operating Systems',
          id: 4,
          leafCategories: [ { name: 'Linux', id: 1 }, { name: 'Linux Administration', id: 2 }, {
            name: 'Windows Server',
            id: 3
          }, { name: 'Shell Scripting', id: 4 }, { name: 'Active Directory', id: 5 }, {
            name: 'PowerShell',
            id: 6
          }, { name: 'VMware Vsphere', id: 7 }, {
            name: 'LPIC-1: Linux Administrator',
            id: 8
          }, { name: 'Operating System Creation', id: 9 } ]
        },
        {
          name: 'Other IT & Software',
          id: 5,
          leafCategories: [ { name: 'Docker', id: 1 }, { name: 'Python', id: 2 }, {
            name: 'Kubernetes',
            id: 3
          }, { name: 'DevOps', id: 4 }, {
            name: 'AWS Certified Solutions Architect - Professional',
            id: 5
          }, { name: 'Algorithms', id: 6 }, { name: 'Ansible', id: 7 }, {
            name: 'AWS Certification',
            id: 8
          }, { name: 'Java', id: 9 } ]
        }
      ]
    }
  },
  {
    name: 'Office Productivity',
    id: 5,
    payload: {
      subCategories: [
        {
          name: 'Microsoft',
          id: 1,
          leafCategories: [ { name: 'Excel', id: 1 }, {
            name: 'Excel VBA',
            id: 2
          }, { name: 'Excel Formulas and Functions', id: 3 }, { name: 'PowerPoint', id: 4 }, {
            name: 'Data Analysis',
            id: 5
          }, { name: 'Microsoft Power BI', id: 6 }, { name: 'Pivot Tables', id: 7 }, {
            name: 'Microsoft Office',
            id: 8
          }, { name: 'Microsoft Word', id: 9 } ]
        },
        {
          name: 'Apple',
          id: 2,
          leafCategories: [ { name: 'iMovie', id: 1 }, { name: 'Mac Basics', id: 2 }, {
            name: 'macOS',
            id: 3
          }, { name: 'Apple Keynote', id: 4 }, { name: 'Numbers For Mac', id: 5 }, {
            name: 'Mac Pages',
            id: 6
          }, { name: 'Microsoft Word', id: 7 }, { name: 'Microsoft Office 365', id: 8 }, {
            name: 'Video Editing',
            id: 9
          } ]
        },
        {
          name: 'Google',
          id: 3,
          leafCategories: [ { name: 'Google Sheets', id: 1 }, { name: 'G Suite', id: 2 }, {
            name: 'Google Drive',
            id: 3
          }, { name: 'Google Apps', id: 4 }, { name: 'Gmail Productivity', id: 5 }, {
            name: 'Excel',
            id: 6
          }, { name: 'Google Classroom', id: 7 }, { name: 'Google Docs', id: 8 }, {
            name: 'Google Certified Educator',
            id: 9
          } ]
        },
        {
          name: 'SAP',
          id: 4,
          leafCategories: [ { name: 'SAP ABAP', id: 1 }, { name: 'SAP MM', id: 2 }, {
            name: 'SAP S/4HANA',
            id: 3
          }, { name: 'SAP Financial Accounting', id: 4 }, { name: 'SAP SD', id: 5 }, {
            name: 'SAP Basis',
            id: 6
          }, { name: 'Supply Chain', id: 7 }, { name: 'SAP HCM', id: 8 } ]
        },
        {
          name: 'Oracle',
          id: 5,
          leafCategories: [ { name: 'Oracle Database', id: 1 }, { name: 'Oracle SQL', id: 2 }, {
            name: 'Pl/SQL',
            id: 3
          }, { name: 'Database Administration', id: 4 }, { name: 'Oracle Primavera', id: 5 }, {
            name: 'SQL',
            id: 6
          }, { name: 'Oracle Fusion HCM', id: 7 }, {
            name: 'Oracle Business Intelligence',
            id: 8
          }, { name: 'Oracle Data Integrator', id: 9 } ]
        },
        {
          name: 'Other Office Productivity',
          id: 6,
          leafCategories: [ { name: 'ServiceNow', id: 1 }, { name: 'QuickBooks Pro', id: 2 }, {
            name: 'Touch Typing',
            id: 3
          }, { name: 'Construction Estimation', id: 4 }, { name: 'QuickBooks', id: 5 }, {
            name: 'Salesforce',
            id: 6
          }, { name: 'AutoCAD', id: 7 }, { name: 'Time Management', id: 8 }, { name: 'Typing', id: 9 } ]
        }
      ]
    }
  },
  {
    name: 'Personal Development',
    id: 6,
    payload: {
      subCategories: [
        {
          name: 'Personal Transformation',
          id: 1,
          leafCategories: [ { name: 'Life Coach Training', id: 1 }, {
            name: 'Neuro-Linguistic Programming',
            id: 2
          }, { name: 'Mindfulness', id: 3 }, { name: 'Personal Development', id: 4 }, {
            name: 'Life Purpose',
            id: 5
          }, { name: 'Meditation', id: 6 }, { name: 'Neuroscience', id: 7 }, { name: 'Emotional Intelligence', id: 8 } ]
        },
        {
          name: 'Personal Productivity',
          id: 2,
          leafCategories: [ { name: 'Time Management', id: 1 }, {
            name: 'Focus Mastery',
            id: 2
          }, { name: 'Speed Reading', id: 3 }, { name: 'Goal Setting', id: 4 }, {
            name: 'Organization',
            id: 5
          }, { name: 'PowerShell', id: 6 }, { name: 'Procrastination', id: 7 }, { name: 'Habits', id: 8 } ]
        },
        {
          name: 'Leadership',
          id: 3,
          leafCategories: [ { name: 'Management Skills', id: 1 }, {
            name: 'Manager Training',
            id: 2
          }, { name: 'Communication Skills', id: 3 }, { name: 'Public Speaking', id: 4 }, {
            name: 'Conflict Management',
            id: 5
          }, { name: 'Listening Skills', id: 6 }, { name: 'Spirituality', id: 7 }, {
            name: 'Emotional Intelligence',
            id: 8
          } ]
        },
        {
          name: 'Career Development',
          id: 4,
          leafCategories: [ { name: 'Resume and CV Writing', id: 1 }, {
            name: 'Interviewing Skills',
            id: 2
          }, { name: 'Job Search', id: 3 }, { name: 'LinkedIn', id: 4 }, {
            name: 'Career Coaching',
            id: 5
          }, { name: 'Personal Networking', id: 6 }, {
            name: 'Life Coach Training',
            id: 7
          }, { name: 'Business Communication', id: 8 }, { name: 'Business Writing', id: 9 } ]
        },
        {
          name: 'Parenting & Relationships',
          id: 5,
          leafCategories: [ { name: 'Parenting', id: 1 }, {
            name: 'Neuroscience',
            id: 2
          }, { name: 'Relationship Building', id: 3 }, { name: 'Child Psychology', id: 4 }, {
            name: 'Counseling',
            id: 5
          }, { name: 'Early Childhood Education', id: 6 }, { name: 'Love', id: 7 }, {
            name: 'Life Coach Training',
            id: 8
          }, { name: 'Childhood Trauma Healing', id: 9 } ]
        },
        {
          name: 'Happiness',
          id: 6,
          leafCategories: [ { name: 'Life Coach Training', id: 1 }, {
            name: 'Positive Psychology',
            id: 2
          }, { name: 'CBT', id: 3 }, { name: 'Childhood Trauma Healing', id: 4 }, {
            name: 'Mindfulness',
            id: 5
          }, { name: 'Law of Attraction', id: 6 }, { name: 'Meditation', id: 7 }, { name: 'Decluttering', id: 8 } ]
        },
        {
          name: 'Religion & Spirituality',
          id: 7,
          leafCategories: [ { name: 'Mindfulness', id: 1 }, {
            name: 'Spirituality',
            id: 2
          }, { name: 'Life Coach Training', id: 3 }, { name: 'Witchcraft', id: 4 }, {
            name: 'Past Lives',
            id: 5
          }, { name: 'The Bible', id: 6 }, { name: 'Meditation', id: 7 }, {
            name: 'Spiritual Healing',
            id: 8
          }, { name: 'Quantum Physics', id: 9 } ]
        },
        {
          name: 'Personal Brand Building',
          id: 8,
          leafCategories: [ { name: 'Personal Branding', id: 1 }, {
            name: 'Business Communication',
            id: 2
          }, { name: 'Meetings', id: 3 }, { name: 'Body Language', id: 4 }, {
            name: 'LinkedIn',
            id: 5
          }, { name: 'Communication Skills', id: 6 }, { name: 'Interviewing Skills', id: 7 }, {
            name: 'Voice Training',
            id: 8
          }, { name: 'Digital Marketing', id: 9 } ]
        },
        {
          name: 'Creativity',
          id: 9,
          leafCategories: [ { name: 'Creative Writing', id: 1 }, { name: 'Screenwriting', id: 2 }, {
            name: 'Writing',
            id: 3
          }, { name: 'Design Thinking', id: 4 }, { name: 'Art Therapy', id: 5 }, {
            name: 'Writing a Book',
            id: 6
          }, { name: 'Storytelling', id: 7 }, { name: 'Aromatherapy', id: 8 }, { name: 'Drawing', id: 9 } ]
        },
        {
          name: 'Influence',
          id: 10,
          leafCategories: [ { name: 'Voice Training', id: 1 }, { name: 'Confidence', id: 2 }, {
            name: 'Body Language',
            id: 3
          }, { name: 'Communication Skills', id: 4 }, { name: 'Public Speaking', id: 5 }, {
            name: 'Negotiation',
            id: 6
          }, { name: 'Persuasion', id: 7 }, {
            name: 'Entrepreneurship Fundamentals',
            id: 8
          }, { name: 'Personal Development', id: 9 } ]
        },
        {
          name: 'Self Esteem & Confidence',
          id: 11,
          leafCategories: [ { name: 'Confidence', id: 1 }, {
            name: 'Self-Esteem',
            id: 2
          }, { name: 'Neuro-Linguistic Programming', id: 3 }, { name: 'Social Skills', id: 4 }, {
            name: 'Art for Kids',
            id: 5
          }, { name: 'Drawing', id: 6 }, { name: 'Fashion', id: 7 }, {
            name: 'Anxiety Management',
            id: 8
          }, { name: 'Personal Development', id: 9 } ]
        },
        {
          name: 'Stress Management',
          id: 12,
          leafCategories: [ { name: 'Anger Management', id: 1 }, {
            name: 'Emotional Intelligence',
            id: 2
          }, { name: 'Anxiety Management', id: 3 }, { name: 'Resilience', id: 4 }, {
            name: 'Mindfulness',
            id: 5
          }, { name: 'Meditation', id: 6 }, { name: 'EFT', id: 7 }, { name: 'Conflict Management', id: 8 } ]
        },
        {
          name: 'Memory & Study Skills',
          id: 13,
          leafCategories: [ { name: 'Memory', id: 1 }, { name: 'Speed Reading', id: 2 }, {
            name: 'Learning Strategies',
            id: 3
          }, { name: 'Study Skills', id: 4 }, { name: 'Focus Mastery', id: 5 }, {
            name: 'Mind Mapping',
            id: 6
          }, { name: 'Learning Disability', id: 7 }, {
            name: 'Personal Development',
            id: 8
          }, { name: 'Optimization Problem', id: 9 } ]
        },
        {
          name: 'Motivation',
          id: 14,
          leafCategories: [ { name: 'Neuroplasticity', id: 1 }, {
            name: 'Procrastination',
            id: 2
          }, { name: 'Personal Success', id: 3 }, { name: 'Confidence', id: 4 }, {
            name: 'Neuroscience',
            id: 5
          }, { name: 'Habits', id: 6 }, { name: 'Self-Discipline', id: 7 }, { name: 'Goal Setting', id: 8 } ]
        },
        {
          name: 'Other Personal Development',
          id: 15,
          leafCategories: [ { name: 'Freight Broker', id: 1 }, {
            name: 'American Accent',
            id: 2
          }, { name: 'English Pronunciation', id: 3 }, { name: 'Car Repair', id: 4 }, {
            name: 'Public Speaking',
            id: 5
          }, { name: 'Handwriting Analysis', id: 6 }, { name: 'Time Management', id: 7 }, {
            name: 'Voice-Over',
            id: 8
          }, { name: 'Contract Law', id: 9 } ]
        }
      ]
    }
  },
  {
    name: 'Design',
    id: 7,
    payload: {
      subCategories: [
        {
          name: 'Web Design',
          id: 1,
          leafCategories: [ { name: 'WordPress', id: 1 }, { name: 'CSS', id: 2 }, {
            name: 'HTML',
            id: 3
          }, { name: 'Photoshop', id: 4 }, { name: 'Mobile App Design', id: 5 }, {
            name: 'HTML5',
            id: 6
          }, { name: 'User Interface', id: 7 }, { name: 'Adobe XD', id: 8 } ]
        },
        {
          name: 'Graphic Design & Illustration',
          id: 2,
          leafCategories: [ { name: 'Photoshop', id: 1 }, {
            name: 'Graphic Design',
            id: 2
          }, { name: 'Adobe Illustrator', id: 3 }, { name: 'Drawing', id: 4 }, {
            name: 'Digital Painting',
            id: 5
          }, { name: 'InDesign', id: 6 }, { name: 'Canva', id: 7 }, {
            name: 'Figure Drawing',
            id: 8
          }, { name: 'Character Design', id: 9 } ]
        },
        {
          name: 'Design Tools',
          id: 3,
          leafCategories: [ { name: 'Photoshop', id: 1 }, {
            name: 'Procreate Digital Illustration App',
            id: 2
          }, { name: 'After Effects', id: 3 }, { name: 'Adobe Illustrator', id: 4 }, {
            name: 'AutoCAD',
            id: 5
          }, { name: 'Adobe Premiere', id: 6 }, { name: 'Digital Art', id: 7 }, {
            name: 'Video Editing',
            id: 8
          }, { name: 'Affinity Designer', id: 9 } ]
        },
        {
          name: 'User Experience Design',
          id: 4,
          leafCategories: [ { name: 'User Interface', id: 1 }, { name: 'Adobe XD', id: 2 }, {
            name: 'Figma',
            id: 3
          }, { name: 'Web Design', id: 4 }, { name: 'Product Design', id: 5 }, {
            name: 'Mobile App Design',
            id: 6
          }, { name: 'Design Thinking', id: 7 }, { name: 'Usability Testing', id: 8 } ]
        },
        {
          name: 'Game Design',
          id: 5,
          leafCategories: [ { name: 'Pixel Art', id: 1 }, { name: 'Unity', id: 2 }, {
            name: 'Unreal Engine',
            id: 3
          }, { name: 'Blender', id: 4 }, { name: 'Digital Painting', id: 5 }, {
            name: 'Game Development Fundamentals',
            id: 6
          }, { name: 'VFX Visual Effects', id: 7 }, { name: 'Level Design', id: 8 } ]
        },
        {
          name: 'Design Thinking',
          id: 6,
          leafCategories: [ { name: 'Marketing Plan', id: 1 }, { name: 'SOLIDWORKS', id: 2 }, {
            name: 'Innovation',
            id: 3
          }, { name: 'User Experience Design', id: 4 }, {
            name: 'Digital Painting',
            id: 5
          }, { name: 'Business Strategy', id: 6 }, { name: 'Gamification', id: 7 }, { name: 'VLSI', id: 8 } ]
        },
        {
          name: '3D & Animation',
          id: 7,
          leafCategories: [ { name: 'Blender', id: 1 }, { name: '3D Modeling', id: 2 }, {
            name: 'After Effects',
            id: 3
          }, { name: 'Motion Graphics', id: 4 }, { name: '3D Animation', id: 5 }, {
            name: '3D Texturing',
            id: 6
          }, { name: 'zBrush', id: 7 }, { name: '3ds Max', id: 8 }, { name: '2D Animation', id: 9 } ]
        },
        {
          name: 'Fashion Design',
          id: 8,
          leafCategories: [ { name: 'Fashion', id: 1 }, { name: 'Sewing', id: 2 }, {
            name: 'Adobe Illustrator',
            id: 3
          }, { name: 'Jewelry Design', id: 4 }, { name: 'Photoshop', id: 5 }, {
            name: 'T-Shirt Design',
            id: 6
          }, { name: 'Marvelous Designer', id: 7 }, { name: 'Anime', id: 8 } ]
        },
        {
          name: 'Architectural Design',
          id: 9,
          leafCategories: [ { name: 'Blender', id: 1 }, { name: '3D Modeling', id: 2 }, {
            name: 'After Effects',
            id: 3
          }, { name: 'Motion Graphics', id: 4 }, { name: '3D Animation', id: 5 }, {
            name: '3D Texturing',
            id: 6
          }, { name: 'zBrush', id: 7 }, { name: '3ds Max', id: 8 }, { name: '2D Animation', id: 9 } ]
        },
        {
          name: 'Interior Design',
          id: 10,
          leafCategories: [ { name: 'Color Theory', id: 1 }, { name: 'SketchUp', id: 2 }, {
            name: 'Lighting Design',
            id: 3
          }, { name: 'HVAC', id: 4 }, { name: 'Mechanical Engineering', id: 5 }, {
            name: 'Piping',
            id: 6
          }, { name: 'Blender', id: 7 }, { name: 'Minimalist Lifestyle', id: 8 } ]
        },
        {
          name: 'Other Design',
          id: 11,
          leafCategories: [ { name: 'Drawing', id: 1 }, { name: 'Circuit Design', id: 2 }, {
            name: 'Electronics',
            id: 3
          }, { name: 'Character Design', id: 4 }, { name: 'Comic Book Creation', id: 5 }, {
            name: 'Digital Painting',
            id: 6
          }, { name: 'Portraiture', id: 7 }, { name: 'Pencil Drawing', id: 8 }, { name: 'Pixel Art', id: 9 } ]
        }
      ]
    }
  },
  {
    name: 'Marketing',
    id: 8,
    payload: {
      subCategories: [
        {
          name: 'Digital Marketing',
          id: 1,
          leafCategories: [ { name: 'Google Ads (Adwords)', id: 1 }, {
            name: 'Social Media Marketing',
            id: 2
          }, { name: 'Google Ads (AdWords) Certification', id: 3 }, {
            name: 'Marketing Strategy',
            id: 4
          }, { name: 'Internet Marketing', id: 5 }, { name: 'YouTube Marketing', id: 6 }, {
            name: 'Retargeting',
            id: 7
          }, { name: 'Email Marketing', id: 8 } ]
        },
        {
          name: 'Search Engine Optimization',
          id: 2,
          leafCategories: [ { name: 'SEO', id: 1 }, { name: 'WordPress', id: 2 }, {
            name: 'Keyword Research',
            id: 3
          }, { name: 'Local SEO', id: 4 }, { name: 'Link Building', id: 5 }, {
            name: 'SEO Audit',
            id: 6
          }, { name: 'Google my Business', id: 7 }, {
            name: 'Google Ads (Adwords)',
            id: 8
          }, { name: 'Google Search Console', id: 9 } ]
        },
        {
          name: 'Social Media Marketing',
          id: 3,
          leafCategories: [ { name: 'Instagram Marketing', id: 1 }, {
            name: 'Facebook Ads',
            id: 2
          }, { name: 'Facebook Marketing', id: 3 }, {
            name: 'PPC Advertising',
            id: 4
          }, { name: 'Social Media Management', id: 5 }, { name: 'TikTok Marketing', id: 6 }, {
            name: 'LinkedIn',
            id: 7
          }, { name: 'Instagram Photography', id: 8 } ]
        },
        {
          name: 'Branding',
          id: 4,
          leafCategories: [ { name: 'Business Branding', id: 1 }, {
            name: 'YouTube Audience Growth',
            id: 2
          }, { name: 'YouTube Marketing', id: 3 }, { name: 'Personal Branding', id: 4 }, {
            name: 'Brand Management',
            id: 5
          }, { name: 'Marketing Strategy', id: 6 }, { name: 'Graphic Design', id: 7 }, {
            name: 'Canva',
            id: 8
          }, { name: 'Blogging', id: 9 } ]
        },
        {
          name: 'Marketing Fundamentals',
          id: 5,
          leafCategories: [ { name: 'Copywriting', id: 1 }, {
            name: 'Marketing Strategy',
            id: 2
          }, { name: 'Marketing Plan', id: 3 }, { name: 'Neuromarketing', id: 4 }, {
            name: 'Sales Skills',
            id: 5
          }, { name: 'Marketing Analytics', id: 6 }, { name: 'Event Planning', id: 7 }, {
            name: 'Career Coaching',
            id: 8
          }, { name: 'Digital Marketing', id: 9 } ]
        },
        {
          name: 'Marketing Analytics & Automation',
          id: 6,
          leafCategories: [ {
            name: 'Google Analytics',
            id: 1
          }, { name: 'Google Analytics Individual Qualification (IQ)', id: 2 }, {
            name: 'Data Analysis',
            id: 3
          }, { name: 'Marketing Analytics', id: 4 }, { name: 'SQL', id: 5 }, {
            name: 'Google Tag Manager',
            id: 6
          }, { name: 'Marketing Strategy', id: 7 }, { name: 'Marketing Automation', id: 8 }, {
            name: 'ActiveCampaign',
            id: 9
          } ]
        },
        {
          name: 'Public Relations',
          id: 7,
          leafCategories: [ { name: 'Media Training', id: 1 }, {
            name: 'Business Communication',
            id: 2
          }, { name: 'Startup', id: 3 }, { name: 'Public Speaking', id: 4 }, {
            name: 'Podcasting',
            id: 5
          }, { name: 'Event Planning', id: 6 }, { name: 'LinkedIn', id: 7 }, { name: 'Copywriting', id: 8 } ]
        },
        {
          name: 'Advertising',
          id: 8,
          leafCategories: [ { name: 'Google Ads (Adwords)', id: 1 }, {
            name: 'Facebook Ads',
            id: 2
          }, { name: 'Mailchimp', id: 3 }, { name: 'Email Marketing', id: 4 }, {
            name: 'PPC Advertising',
            id: 5
          }, { name: 'LinkedIn', id: 6 }, {
            name: 'Google Ads (AdWords) Certification',
            id: 7
          }, { name: 'Instagram Marketing', id: 8 }, { name: 'YouTube Marketing', id: 9 } ]
        },
        {
          name: 'Video & Mobile Marketing',
          id: 9,
          leafCategories: [ { name: 'YouTube Marketing', id: 1 }, {
            name: 'YouTube Audience Growth',
            id: 2
          }, { name: 'Video Creation', id: 3 }, { name: 'PowerPoint', id: 4 }, {
            name: 'Video Editing',
            id: 5
          }, { name: 'Video Marketing', id: 6 }, { name: 'Live Streaming', id: 7 }, {
            name: 'Whiteboard Animation',
            id: 8
          }, { name: 'App Marketing', id: 9 } ]
        },
        {
          name: 'Content Marketing',
          id: 10,
          leafCategories: [ { name: 'Copywriting', id: 1 }, { name: 'Blogging', id: 2 }, {
            name: 'Content Writing',
            id: 3
          }, { name: 'Writing', id: 4 }, { name: 'Freelancing', id: 5 }, {
            name: 'Marketing Strategy',
            id: 6
          }, { name: 'Content Creation', id: 7 }, { name: 'YouTube Audience Growth', id: 8 } ]
        },
        {
          name: 'Growth Hacking',
          id: 11,
          leafCategories: [ { name: 'Digital Marketing', id: 1 }, {
            name: 'Lead Generation',
            id: 2
          }, { name: 'App Marketing', id: 3 }, { name: 'Marketing Strategy', id: 4 }, {
            name: 'Excel',
            id: 5
          }, { name: 'SEO', id: 6 }, { name: 'Instagram Marketing', id: 7 }, { name: 'Local SEO', id: 8 } ]
        },
        {
          name: 'Affiliate Marketing',
          id: 12,
          leafCategories: [ { name: 'ClickBank', id: 1 }, { name: 'Amazon Affiliate Marketing', id: 2 }, {
            name: 'SEO',
            id: 3
          }, { name: 'CPA Marketing', id: 4 }, { name: 'Teespring', id: 5 }, {
            name: 'Marketing Strategy',
            id: 6
          }, { name: 'Home Business', id: 7 }, { name: 'Business Development', id: 8 } ]
        },
        {
          name: 'Product Marketing',
          id: 13,
          leafCategories: [ { name: 'Amazon Kindle', id: 1 }, {
            name: 'Self-Publishing',
            id: 2
          }, { name: 'Marketing Plan', id: 3 }, { name: 'Product Management', id: 4 }, {
            name: 'Voice-Over',
            id: 5
          }, { name: 'Presentation Skills', id: 6 }, { name: 'Meditation', id: 7 }, {
            name: 'Sales Skills',
            id: 8
          }, { name: 'Facebook Marketing', id: 9 } ]
        },
        {
          name: 'Other Marketing',
          id: 14,
          leafCategories: [ { name: 'Copywriting', id: 1 }, {
            name: 'Google Ads (AdWords) Certification',
            id: 2
          }, { name: 'YouTube Audience Growth', id: 3 }, {
            name: 'Conversion Rate Optimization',
            id: 4
          }, { name: 'Instagram Marketing', id: 5 }, { name: 'Event Planning', id: 6 }, {
            name: 'Marketing Strategy',
            id: 7
          }, { name: 'Digital Marketing', id: 8 }, { name: 'Social Media Marketing', id: 9 } ]
        }
      ]
    }
  },
  {
    name: 'Lifestyle',
    id: 9,
    payload: {
      subCategories: [
        {
          name: 'Arts & Crafts',
          id: 1,
          leafCategories: [ { name: 'Drawing', id: 1 }, { name: 'Watercolor Painting', id: 2 }, {
            name: 'Sketching',
            id: 3
          }, { name: 'Pencil Drawing', id: 4 }, { name: 'Portraiture', id: 5 }, {
            name: 'Figure Drawing',
            id: 6
          }, { name: 'Painting', id: 7 }, { name: 'Acrylic Painting', id: 8 }, { name: 'Soapmaking', id: 9 } ]
        },
        {
          name: 'Beauty & Makeup',
          id: 2,
          leafCategories: [ { name: 'Makeup Artistry', id: 1 }, { name: 'Beauty', id: 2 }, {
            name: 'Skincare',
            id: 3
          }, { name: 'Nail Art', id: 4 }, { name: 'Cosmetics', id: 5 }, {
            name: 'Hair Styling',
            id: 6
          }, { name: 'Tattoo Art', id: 7 }, { name: 'Facial Massage', id: 8 }, { name: 'Herbalism', id: 9 } ]
        },
        {
          name: 'Esoteric Practices',
          id: 3,
          leafCategories: []
        },
        {
          name: 'Food & Beverage',
          id: 4,
          leafCategories: [ { name: 'Cooking', id: 1 }, {
            name: 'Sourdough Bread Baking',
            id: 2
          }, { name: 'Bread Baking', id: 3 }, { name: 'Baking', id: 4 }, {
            name: 'Wine Appreciation and Oenology',
            id: 5
          }, { name: 'Cake Decorating', id: 6 }, { name: 'Pastry', id: 7 }, {
            name: 'Indian Cooking',
            id: 8
          }, { name: 'Cake Baking', id: 9 } ]
        },
        {
          name: 'Gaming',
          id: 5,
          leafCategories: [ { name: 'Chess', id: 1 }, { name: 'eSports', id: 2 }, {
            name: 'Poker',
            id: 3
          }, { name: 'Twitch', id: 4 }, { name: 'Live Streaming', id: 5 }, {
            name: 'Open Broadcaster',
            id: 6
          }, { name: 'League of Legends', id: 7 }, { name: 'Rubik\'s Cube', id: 8 } ]
        },
        {
          name: 'Home Improvement',
          id: 6,
          leafCategories: [ { name: 'Electricity', id: 1 }, { name: 'Electrical Wiring', id: 2 }, {
            name: 'Home Repair',
            id: 3
          }, { name: 'Gardening', id: 4 }, { name: 'Woodworking', id: 5 }, {
            name: 'Feng Shui',
            id: 6
          }, { name: 'Decluttering', id: 7 }, { name: 'Vastu Shastra', id: 8 } ]
        },
        {
          name: 'Pet Care & Training',
          id: 7,
          leafCategories: [ { name: 'Dog Training', id: 1 }, { name: 'Dog Behavior', id: 2 }, {
            name: 'Dog Care',
            id: 3
          }, { name: 'Pet Training', id: 4 }, { name: 'Pet Care', id: 5 }, {
            name: 'Animal Nutrition',
            id: 6
          }, { name: 'Horsemanship', id: 7 }, { name: 'Cat Behavior', id: 8 }, { name: 'Holistic Medicine', id: 9 } ]
        },
        {
          name: 'Travel',
          id: 8,
          leafCategories: [ { name: 'Travel Writing', id: 1 }, { name: 'Writing', id: 2 }, {
            name: 'Digital Nomad',
            id: 3
          }, { name: 'Travel Tips', id: 4 }, { name: 'Travel Hacking', id: 5 }, {
            name: 'Airbnb Hosting',
            id: 6
          }, { name: 'Journaling', id: 7 }, { name: 'iMovie', id: 8 }, { name: 'Mac Basics', id: 9 } ]
        },
        {
          name: 'Other Lifestyle',
          id: 9,
          leafCategories: [ { name: 'Neuro-Linguistic Programming', id: 1 }, {
            name: 'EFT',
            id: 2
          }, { name: 'Meditation', id: 3 }, { name: 'Permaculture', id: 4 }, {
            name: 'Life Coach Training',
            id: 5
          }, { name: 'Emotional Intelligence', id: 6 }, { name: 'Mindfulness', id: 7 }, {
            name: 'Acting',
            id: 8
          }, { name: 'REBT', id: 9 } ]
        }
      ]
    }
  },
  {
    name: 'Photography & Video',
    id: 10,
    payload: {
      subCategories: [
        {
          name: 'Digital Photography',
          id: 1,
          leafCategories: [ { name: 'Photography', id: 1 }, { name: 'iPhone Photography', id: 2 }, {
            name: 'DSLR',
            id: 3
          }, { name: 'Adobe Lightroom', id: 4 }, { name: 'Mobile Photography', id: 5 }, {
            name: 'Affinity Photo',
            id: 6
          }, { name: 'Photoshop', id: 7 }, { name: 'GIMP', id: 8 } ]
        },
        {
          name: 'Photography',
          id: 2,
          leafCategories: [ { name: 'Affinity Photo', id: 1 }, {
            name: 'Photography Composition',
            id: 2
          }, { name: 'DSLR', id: 3 }, { name: 'Digital Photography', id: 4 }, {
            name: 'Cameras',
            id: 5
          }, { name: 'Food Photography', id: 6 }, { name: 'Photography Lighting', id: 7 }, {
            name: 'Filmmaking',
            id: 8
          } ]
        },
        {
          name: 'Portrait Photography',
          id: 3,
          leafCategories: [ { name: 'Photoshop Retouching', id: 1 }, {
            name: 'Posing',
            id: 2
          }, { name: 'Photography Lighting', id: 3 }, { name: 'Photography', id: 4 }, {
            name: 'Flash Photography',
            id: 5
          }, { name: 'Family Portrait Photography', id: 6 }, { name: 'Photoshop', id: 7 }, { name: 'Cameras', id: 8 } ]
        },
        {
          name: 'Photography Tools',
          id: 4,
          leafCategories: [ { name: 'Adobe Lightroom', id: 1 }, { name: 'Photoshop', id: 2 }, {
            name: 'Image Editing',
            id: 3
          }, { name: 'Affinity Photo', id: 4 }, { name: 'Photoshop Retouching', id: 5 }, {
            name: 'Photography',
            id: 6
          }, { name: 'Drone Photography', id: 7 }, { name: 'Cameras', id: 8 }, { name: 'DSLR', id: 9 } ]
        },
        {
          name: 'Commercial Photography',
          id: 5,
          leafCategories: [ { name: 'Real Estate Photography', id: 1 }, {
            name: 'Marketing Strategy',
            id: 2
          }, { name: 'Architecture Photography', id: 3 }, {
            name: 'Photography Business',
            id: 4
          }, { name: 'Wedding Photography', id: 5 }, { name: 'Product Photography', id: 6 }, {
            name: 'Food Photography',
            id: 7
          }, { name: 'Photography', id: 8 }, { name: 'Drone Photography', id: 9 } ]
        },
        {
          name: 'Video Design',
          id: 6,
          leafCategories: [ { name: 'Video Editing', id: 1 }, {
            name: 'Adobe Premiere',
            id: 2
          }, { name: 'Video Production', id: 3 }, { name: 'Filmmaking', id: 4 }, {
            name: 'Videography',
            id: 5
          }, { name: 'DaVinci Resolve', id: 6 }, { name: 'Final Cut Pro', id: 7 }, {
            name: 'Cinematography',
            id: 8
          }, { name: 'YouTube Marketing', id: 9 } ]
        },
        {
          name: 'Other Photography & Video',
          id: 7,
          leafCategories: [ { name: 'Drone Photography', id: 1 }, {
            name: 'Photography',
            id: 2
          }, { name: 'Landscape Photography', id: 3 }, { name: 'Color Grading', id: 4 }, {
            name: 'Nature Photography',
            id: 5
          }, { name: 'Filmmaking', id: 6 }, { name: 'Aerial Videography', id: 7 }, {
            name: '3D Modeling',
            id: 8
          }, { name: 'Cameras', id: 9 } ]
        }
      ]
    }
  },
  {
    name: 'Health & Fitness',
    id: 11,
    payload: {
      subCategories: [
        {
          name: 'Fitness',
          id: 1,
          leafCategories: [ { name: 'Pilates', id: 1 }, { name: 'Teacher Training', id: 2 }, {
            name: 'Home Workout',
            id: 3
          }, { name: 'Muscle Building', id: 4 }, { name: 'Sword', id: 5 }, {
            name: 'Kettlebell',
            id: 6
          }, { name: 'Weight Loss', id: 7 }, { name: 'Testosterone', id: 8 } ]
        },
        {
          name: 'General Health',
          id: 2,
          leafCategories: [ { name: 'Massage', id: 1 }, { name: 'Aromatherapy', id: 2 }, {
            name: 'Herbalism',
            id: 3
          }, { name: 'Holistic Medicine', id: 4 }, { name: 'Acupressure', id: 5 }, {
            name: 'Health',
            id: 6
          }, { name: 'Essential Oil', id: 7 }, { name: 'Reflexology', id: 8 }, { name: 'Qi Gong', id: 9 } ]
        },
        {
          name: 'Sports',
          id: 3,
          leafCategories: [ { name: 'Sport Psychology', id: 1 }, { name: 'Sports Coaching', id: 2 }, {
            name: 'Soccer',
            id: 3
          }, { name: 'Tennis', id: 4 }, { name: 'Golf', id: 5 }, {
            name: 'Martial Arts',
            id: 6
          }, { name: 'Inline Skating', id: 7 }, { name: 'Swimming', id: 8 }, { name: 'Skateboarding', id: 9 } ]
        },
        {
          name: 'Nutrition',
          id: 4,
          leafCategories: [ { name: 'Health Coaching', id: 1 }, { name: 'Dieting', id: 2 }, {
            name: 'Vegan Cooking',
            id: 3
          }, { name: 'Sports Nutrition', id: 4 }, { name: 'Ketogenic Diet', id: 5 }, {
            name: 'Weight Loss',
            id: 6
          }, { name: 'Gut Health', id: 7 }, { name: 'Anti-Aging', id: 8 } ]
        },
        {
          name: 'Yoga',
          id: 5,
          leafCategories: [ { name: 'Yoga for Kids', id: 1 }, { name: 'Pranayama', id: 2 }, {
            name: 'Chair Yoga',
            id: 3
          }, { name: 'Teacher Training', id: 4 }, { name: 'Face Yoga', id: 5 }, {
            name: 'Kundalini',
            id: 6
          }, { name: 'Meditation', id: 7 }, { name: 'Prenatal Yoga', id: 8 } ]
        },
        {
          name: 'Mental Health',
          id: 6,
          leafCategories: [ { name: 'CBT', id: 1 }, { name: 'Art Therapy', id: 2 }, {
            name: 'Medical Terminology',
            id: 3
          }, { name: 'PTSD', id: 4 }, { name: 'Counseling', id: 5 }, {
            name: 'Childhood Trauma Healing',
            id: 6
          }, { name: 'REBT', id: 7 }, { name: 'Dialectical Behavior Therapy (DBT)', id: 8 } ]
        },
        {
          name: 'Dieting',
          id: 7,
          leafCategories: [ { name: 'Weight Loss', id: 1 }, { name: 'Ketogenic Diet', id: 2 }, {
            name: 'Ketosis',
            id: 3
          }, { name: 'Nutrition', id: 4 }, { name: 'Psychology', id: 5 }, { name: 'Fitness', id: 6 }, {
            name: 'Fasting',
            id: 7
          }, { name: 'Muscle Building', id: 8 } ]
        },
        {
          name: 'Self Defense',
          id: 8,
          leafCategories: [ { name: 'Krav Maga', id: 1 }, { name: 'Self-Defense', id: 2 }, {
            name: 'Martial Arts',
            id: 3
          }, { name: 'Tai Chi', id: 4 }, { name: 'Close Combat', id: 5 }, {
            name: 'Wing Chun',
            id: 6
          }, { name: 'Boxing', id: 7 }, { name: 'Muay Thai', id: 8 }, { name: 'Brazilian Jiu-Jitsu', id: 9 } ]
        },
        {
          name: 'Safety & First Aid',
          id: 9,
          leafCategories: [ { name: 'First Aid', id: 1 }, { name: 'Herbalism', id: 2 }, {
            name: 'Survival Skills',
            id: 3
          }, { name: 'OSHA', id: 4 }, {
            name: 'Workplace Health and Safety',
            id: 5
          }, { name: 'Personal Emergency Preparedness', id: 6 }, { name: 'Food Safety', id: 7 }, {
            name: 'Fire Safety',
            id: 8
          }, { name: 'Health', id: 9 } ]
        },
        {
          name: 'Dance',
          id: 10,
          leafCategories: [ { name: 'Belly Dancing', id: 1 }, { name: 'Hip Hop Dancing', id: 2 }, {
            name: 'Ballet',
            id: 3
          }, { name: 'Salsa Dancing', id: 4 }, { name: 'Poi Spinning', id: 5 }, {
            name: 'Bachata',
            id: 6
          }, { name: 'Breakdancing', id: 7 }, { name: 'Street Dance', id: 8 } ]
        },
        {
          name: 'Meditation',
          id: 11,
          leafCategories: []
        },
        {
          name: 'Other Health & Fitness',
          id: 12,
          leafCategories: [ { name: 'Massage', id: 1 }, { name: 'Sports Massage', id: 2 }, {
            name: 'Holistic Medicine',
            id: 3
          }, { name: 'Qi Gong', id: 4 }, { name: 'EFT', id: 5 }, {
            name: 'Facial Massage',
            id: 6
          }, { name: 'Makeup Artistry', id: 7 }, { name: 'Medical Terminology', id: 8 }, { name: 'Skincare', id: 9 } ]
        }
      ]
    }
  },
  {
    name: 'Music',
    id: 12,
    payload: {
      subCategories: [
        {
          name: 'Instruments',
          id: 1,
          leafCategories: [ { name: 'Piano', id: 1 }, { name: 'Guitar', id: 2 }, {
            name: 'Keyboard Instrument',
            id: 3
          }, { name: 'Ukulele', id: 4 }, { name: 'Harmonica', id: 5 }, { name: 'Violin', id: 6 }, {
            name: 'Drums',
            id: 7
          }, { name: 'Classical Guitar', id: 8 }, { name: 'Blues Guitar', id: 9 } ]
        },
        {
          name: 'Music Production',
          id: 2,
          leafCategories: [ { name: 'Logic Pro X', id: 1 }, { name: 'Music Mixing', id: 2 }, {
            name: 'Ableton Live',
            id: 3
          }, { name: 'Music Composition', id: 4 }, { name: 'Audio Production', id: 5 }, {
            name: 'FL Studio',
            id: 6
          }, { name: 'Sound Design', id: 7 }, { name: 'Game Music', id: 8 } ]
        },
        {
          name: 'Music Fundamentals',
          id: 3,
          leafCategories: [ { name: 'Music Theory', id: 1 }, {
            name: 'Music Composition',
            id: 2
          }, { name: 'Electronic Music', id: 3 }, { name: 'Songwriting', id: 4 }, {
            name: 'Reading Music',
            id: 5
          }, { name: 'Fingerstyle Guitar', id: 6 }, { name: 'ABRSM', id: 7 }, {
            name: 'Blues Guitar',
            id: 8
          }, { name: 'Piano Chords', id: 9 } ]
        },
        {
          name: 'Vocal',
          id: 4,
          leafCategories: [ { name: 'Singing', id: 1 }, { name: 'Voice Training', id: 2 }, {
            name: 'Voice Acting',
            id: 3
          }, { name: 'Rapping', id: 4 }, { name: 'Music Production', id: 5 }, {
            name: 'Raga Music',
            id: 6
          }, { name: 'Voice-Over', id: 7 }, { name: 'Carnatic Music', id: 8 }, { name: 'Yoga', id: 9 } ]
        },
        {
          name: 'Music Techniques',
          id: 5,
          leafCategories: [ { name: 'Guitar', id: 1 }, { name: 'Music Composition', id: 2 }, {
            name: 'Acoustic Guitar',
            id: 3
          }, { name: 'Fingerstyle Guitar', id: 4 }, { name: 'Reading Music', id: 5 }, {
            name: 'Music Theory',
            id: 6
          }, { name: 'Piano', id: 7 }, { name: 'DJ', id: 8 }, { name: 'Piano Chords', id: 9 } ]
        },
        {
          name: 'Music Software',
          id: 6,
          leafCategories: [ { name: 'FL Studio', id: 1 }, { name: 'Ableton Live', id: 2 }, {
            name: 'Logic Pro X',
            id: 3
          }, { name: 'Music Production', id: 4 }, { name: 'Cubase', id: 5 }, {
            name: 'GarageBand',
            id: 6
          }, { name: 'Pro Tools', id: 7 }, { name: 'DJ', id: 8 }, { name: 'Xfer Serum', id: 9 } ]
        },
        {
          name: 'Other Music',
          id: 7,
          leafCategories: [ { name: 'DJ', id: 1 }, { name: 'Songwriting', id: 2 }, {
            name: 'Music Marketing',
            id: 3
          }, { name: 'Music Business', id: 4 }, { name: 'Sound Therapy', id: 5 }, {
            name: 'Rapping',
            id: 6
          }, { name: 'Music Production', id: 7 }, { name: 'Talent Agent', id: 8 }, { name: 'Lyric Writing', id: 9 } ]
        }
      ]
    }
  },
  {
    name: 'Teaching & Academics',
    id: 13,
    payload: {
      subCategories: [
        {
          name: 'Engineering',
          id: 1,
          leafCategories: [ { name: 'Data Structures', id: 1 }, {
            name: 'Algorithms',
            id: 2
          }, { name: 'Electrical Engineering', id: 3 }, { name: 'Electronics', id: 4 }, {
            name: 'Civil Engineering',
            id: 5
          }, { name: 'Structural Engineering', id: 6 }, { name: 'Robotics', id: 7 }, {
            name: 'Mechanical Engineering',
            id: 8
          }, { name: 'Aerospace Engineering', id: 9 } ]
        },
        {
          name: 'Humanities',
          id: 2,
          leafCategories: [ { name: 'The Bible', id: 1 }, { name: 'Christianity', id: 2 }, {
            name: 'English Literature',
            id: 3
          }, { name: 'Psychology', id: 4 }, { name: 'Creative Writing', id: 5 }, {
            name: 'Art History',
            id: 6
          }, { name: 'Philosophy', id: 7 }, { name: 'Critical Thinking', id: 8 }, { name: 'Statistics', id: 9 } ]
        },
        {
          name: 'Math',
          id: 3,
          leafCategories: [ { name: 'Calculus', id: 1 }, { name: 'Statistics', id: 2 }, {
            name: 'Algebra',
            id: 3
          }, { name: 'Linear Algebra', id: 4 }, { name: 'Probability', id: 5 }, {
            name: 'Trigonometry',
            id: 6
          }, { name: 'Discrete Math', id: 7 }, { name: 'Geometry', id: 8 } ]
        },
        {
          name: 'Science',
          id: 4,
          leafCategories: [ { name: 'Physics', id: 1 }, { name: 'Solar Energy', id: 2 }, {
            name: 'Chemistry',
            id: 3
          }, { name: 'Anatomy', id: 4 }, { name: 'Biology', id: 5 }, {
            name: 'Radio Frequency',
            id: 6
          }, { name: 'Physiology', id: 7 }, { name: 'Neuroscience', id: 8 }, { name: 'Research Paper Writing', id: 9 } ]
        },
        {
          name: 'Online Education',
          id: 5,
          leafCategories: [ { name: 'Online Course Creation', id: 1 }, {
            name: 'Teaching Online',
            id: 2
          }, { name: 'Teaching English', id: 3 }, { name: 'Online Course Marketing', id: 4 }, {
            name: 'Freelancing',
            id: 5
          }, { name: 'Math', id: 6 }, { name: 'Online Business', id: 7 }, {
            name: 'Articulate Storyline',
            id: 8
          }, { name: 'Adobe Captivate', id: 9 } ]
        },
        {
          name: 'Social Science',
          id: 6,
          leafCategories: [ { name: 'Psychology', id: 1 }, { name: 'Counseling', id: 2 }, {
            name: 'Accounting',
            id: 3
          }, { name: 'Critical Thinking', id: 4 }, {
            name: 'Psychotherapy',
            id: 5
          }, { name: 'Dialectical Behavior Therapy (DBT)', id: 6 }, {
            name: 'Child Psychology',
            id: 7
          }, { name: 'Social Psychology', id: 8 }, { name: 'Economics', id: 9 } ]
        },
        {
          name: 'Language',
          id: 7,
          leafCategories: [ { name: 'English Language', id: 1 }, {
            name: 'German Language',
            id: 2
          }, { name: 'Japanese Language', id: 3 }, { name: 'Spanish Language', id: 4 }, {
            name: 'French Language',
            id: 5
          }, { name: 'English Grammar', id: 6 }, { name: 'English Conversation', id: 7 }, {
            name: 'Sign Language',
            id: 8
          }, { name: 'English Vocabulary', id: 9 } ]
        },
        {
          name: 'Teacher Training',
          id: 8,
          leafCategories: [ { name: 'Train the Trainer', id: 1 }, {
            name: 'Instructional Design',
            id: 2
          }, { name: 'Teaching Online', id: 3 }, { name: 'Teaching English', id: 4 }, {
            name: 'Moodle',
            id: 5
          }, { name: 'Voice-Over', id: 6 }, { name: 'Early Childhood Education', id: 7 }, { name: 'Education', id: 8 } ]
        },
        {
          name: 'Test Prep',
          id: 9,
          leafCategories: [ { name: 'IELTS', id: 1 }, { name: 'PMP', id: 2 }, {
            name: 'TOEFL',
            id: 3
          }, { name: 'Risk Management', id: 4 }, { name: 'PMBOK', id: 5 }, { name: 'PMI-RMP', id: 6 }, {
            name: 'Math',
            id: 7
          }, { name: 'Bookkeeping', id: 8 }, { name: 'GMAT', id: 9 } ]
        },
        {
          name: 'Other Teaching & Academics',
          id: 10,
          leafCategories: [ { name: 'Proofreading', id: 1 }, {
            name: 'Research Methods',
            id: 2
          }, { name: 'Academic Writing', id: 3 }, { name: 'Data Analysis', id: 4 }, {
            name: 'Montessori',
            id: 5
          }, { name: 'Early Childhood Education', id: 6 }, { name: 'Drawing', id: 7 }, {
            name: 'Aquaponics',
            id: 8
          }, { name: 'Punctuation', id: 9 } ]
        }
      ]
    }
  }
];

const CATEGORIES_MAP_INIT = new Map<number, any>();

for ( const category of CATEGORIES ) {
  CATEGORIES_MAP_INIT.set( category.id, { name: category.name, subCategories: new Map<number, any>() } );
  for ( const subCategory of category.payload.subCategories ) {
    CATEGORIES_MAP_INIT.get( category.id ).subCategories.set( subCategory.id, {
      name: subCategory.name,
      leafCategories: new Map<number, any>()
    } );
    for ( const leafCategory of subCategory.leafCategories ) {
      CATEGORIES_MAP_INIT.get( category.id ).subCategories.get( subCategory.id ).leafCategories.set( leafCategory.id, { name: leafCategory.name } );
    }
  }
}

export const CATEGORIES_MAP = CATEGORIES_MAP_INIT;
