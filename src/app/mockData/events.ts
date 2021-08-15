import { EventModel } from '../model/EventModel';

export const showroomEvents = [
  {
    _id:'60e01a519f57c99fe18e641b',
    title:'Java 101',
    isPremium:true,
    date:'2023-07-03T08:07:00.000Z',
    link:'http://localhost:4200/dashboard/contribute',
    duration:45,
    createdDate:'2021-07-03T08:05:54.001Z',
    user:{
      username:'gandalf',
      email:null
    },
    payload:{
      description:'Java Basics',
      category:1,
      subCategory:4,
      leafCategory:2,
      price:'5.00',
      isCompleted:false,
      trailerVideoLink: 'GtgdHzLvf4Q'
    },
    __v:0,
    count:5,
    isFeatured:false,
    isNew:false,
    attended:false
  },
  {
    _id:'60e01b6d9f57c99fe18e641c',
    title:'Python 101',
    isPremium:false,
    date:'2023-07-03T08:11:00.000Z',
    link:'http://localhost:4200/dashboard/contribute',
    duration:45,
    createdDate:'2021-07-03T08:10:48.916Z',
    user:{
      username:'gandalf',email:null
    },
    payload:{
      description:'Python basics',
      category:1,
      subCategory:4,
      leafCategory:1,
      isCompleted:true
    },
    __v:0,
    count:20,
    isFeatured:true,
    isNew:false,
    attended:false
  },
  {
    _id:'60e01b6d9f57c99fe18e641c',
    title:'C# 101',
    isPremium:false,
    date:'2023-07-03T08:11:00.000Z',
    link:'http://localhost:4200/dashboard/contribute',
    duration:50,
    createdDate:'2021-07-03T08:10:48.916Z',
    user:{
      username:'gandalf',email:null
    },
    payload:{
      description:'Python basics',
      category:1,
      subCategory:4,
      leafCategory:1,
      isCompleted:true,
      trailerVideoLink:'BM4CHBmAPh4'
    },
    __v:0,
    count:30,
    isFeatured:false,
    isNew:true,
    attended:false
  },
  {
    _id:'60e01a519f57c99fe18e641b',
    title:'Java 101',
    isPremium:true,
    date:'2023-07-03T08:07:00.000Z',
    link:'http://localhost:4200/dashboard/contribute',
    duration:45,
    createdDate:'2021-07-03T08:05:54.001Z',
    user:{
      username:'gandalf',
      email:null
    },
    payload:{
      description:'Java Basics',
      category:1,
      subCategory:4,
      leafCategory:2,
      price:'5.00',
      isCompleted:false,
      trailerVideoLink: 'GtgdHzLvf4Q'
    },
    __v:0,
    count:5,
    isFeatured:false,
    isNew:false,
    attended:false
  },
  {
    _id:'60e01b6d9f57c99fe18e641c',
    title:'Python 101',
    isPremium:false,
    date:'2023-07-03T08:11:00.000Z',
    link:'http://localhost:4200/dashboard/contribute',
    duration:45,
    createdDate:'2021-07-03T08:10:48.916Z',
    user:{
      username:'gandalf',email:null
    },
    payload:{
      description:'Python basics',
      category:1,
      subCategory:4,
      leafCategory:1,
      isCompleted:true
    },
    __v:0,
    count:20,
    isFeatured:true,
    isNew:false,
    attended:false
  },
  {
    _id:'60e01b6d9f57c99fe18e641c',
    title:'C# 101',
    isPremium:false,
    date:'2023-07-03T08:11:00.000Z',
    link:'http://localhost:4200/dashboard/contribute',
    duration:50,
    createdDate:'2021-07-03T08:10:48.916Z',
    user:{
      username:'gandalf',email:null
    },
    payload:{
      description:'Python basics',
      category:1,
      subCategory:4,
      leafCategory:1,
      isCompleted:true,
      trailerVideoLink:'BM4CHBmAPh4'
    },
    __v:0,
    count:30,
    isFeatured:false,
    isNew:true,
    attended:false
  },
] as EventModel[]

export const attendedEventsData = [
  {
    _id:'60e01a519f57c99fe18e641b',
    title:'Java 101',
    isPremium:true,
    date: new Date().toISOString(),
    link:'http://localhost:4200/dashboard/contribute',
    duration:45,
    createdDate:'2021-07-03T08:05:54.001Z',
    user:{
      username:'gandalf',
      email:null
    },
    payload:{
      description:'Java Basics',
      category:1,
      subCategory:4,
      leafCategory:2,
      price:'5.00',
      isCompleted:false,
      trailerVideoLink: 'GtgdHzLvf4Q'
    },
    __v:0,
    count:5,
    isFeatured:false,
    isNew:false,
    attended:true
  },
  {
    _id:'60e01b6d9f57c99fe18e641c',
    title:'Python 101',
    isPremium:false,
    date:'2023-07-03T08:11:00.000Z',
    link:'http://localhost:4200/dashboard/contribute',
    duration:45,
    createdDate:'2021-07-03T08:10:48.916Z',
    user:{
      username:'gandalf',email:null
    },
    payload:{
      description:'Python basics',
      category:1,
      subCategory:4,
      leafCategory:1,
      isCompleted:true
    },
    __v:0,
    count:20,
    isFeatured:true,
    isNew:false,
    attended:true
  },
  {
    _id:'60e01b6d9f57c99fe18e641c',
    title:'C# 101',
    isPremium:false,
    date: new Date(Date.now() + ( 3600 * 1000 * 24)),
    link:'http://localhost:4200/dashboard/contribute',
    duration:50,
    createdDate:'2021-07-03T08:10:48.916Z',
    user:{
      username:'gandalf',email:null
    },
    payload:{
      description:'Python basics',
      category:1,
      subCategory:4,
      leafCategory:1,
      isCompleted:true,
      trailerVideoLink:'BM4CHBmAPh4'
    },
    __v:0,
    count:30,
    isFeatured:false,
    isNew:true,
    attended:true
  },
  {
    _id:'60e01a519f57c99fe18e641b',
    title:'Java 101',
    isPremium:true,
    date:new Date(Date.now() + ( 3600 * 1000 * 24 * 2)),
    link:'http://localhost:4200/dashboard/contribute',
    duration:45,
    createdDate:'2021-07-03T08:05:54.001Z',
    user:{
      username:'gandalf',
      email:null
    },
    payload:{
      description:'Java Basics',
      category:1,
      subCategory:4,
      leafCategory:2,
      price:'5.00',
      isCompleted:false,
      trailerVideoLink: 'GtgdHzLvf4Q'
    },
    __v:0,
    count:5,
    isFeatured:false,
    isNew:false,
    attended:true
  },
  {
    _id:'60e01b6d9f57c99fe18e641c',
    title:'Python 101',
    isPremium:false,
    date:new Date(Date.now() + ( 3600 * 1000 * 24 * 3)),
    link:'http://localhost:4200/dashboard/contribute',
    duration:45,
    createdDate:'2021-07-03T08:10:48.916Z',
    user:{
      username:'gandalf',email:null
    },
    payload:{
      description:'Python basics',
      category:1,
      subCategory:4,
      leafCategory:1,
      isCompleted:true
    },
    __v:0,
    count:20,
    isFeatured:true,
    isNew:false,
    attended:true
  },
  {
    _id:'60e01b6d9f57c99fe18e641c',
    title:'C# 101',
    isPremium:false,
    date:new Date(Date.now() + ( 3600 * 1000 * 24 * 4)),
    link:'http://localhost:4200/dashboard/contribute',
    duration:50,
    createdDate:'2021-07-03T08:10:48.916Z',
    user:{
      username:'gandalf',email:null
    },
    payload:{
      description:'Python basics',
      category:1,
      subCategory:4,
      leafCategory:1,
      isCompleted:true,
      trailerVideoLink:'BM4CHBmAPh4'
    },
    __v:0,
    count:30,
    isFeatured:false,
    isNew:true,
    attended:true
  },
] as EventModel[]

export const unratedCompletedEventsData = [
    {
      _id:'gollum',
      completedEvents:[
        {
          _id:'60e08389fdc012001e1ad181',
          user:{
            username:'gandalf',email:null
          },
          title:'Programming Languages Fundamentals',
          payload:{
            category:1,
            subCategory:4,
            leafCategory:null
          }
        },
        {
          _id:'60e1855f14c710001efecfb5',
          user:{
            username:'gandalf',email:null
          },
          title:'Mobile Development Fundamentals',
          payload:
            {
              category:1,
              subCategory:3,
              leafCategory:null
            }
          },
        {
          _id:'60e184f414c710001efecfa0',
          user:{
            username:'gandalf',email:null
          },
          title:'Data Science 101',
          payload:
            {
              category:1,
              subCategory:2,
              leafCategory:null
            }
        } ]
    } ] as any
