## এসাইনমেন্ট রিকুয়ারমেন্ট:

দেখতে দেখতে চলে আসলো আরো একটি এসাইনমেন্ট। এবারের এসাইনমেন্ট আমরা করবো **redux toolkit** এবং **vanilla node js** দিয়ে। এসাইনমেন্ট শুরু করার আগে আপনি যদি পার্ট বাই পার্ট চিন্তা করেন তাহলে দেখবেন এসাইনমেন্ট অনেক সহজ হয়ে গেছে। এই এসাইনমেন্টের জন্যে আপনাকে আমরা একটি API দিয়ে দেবো, সেটি ব্যবহার করে আপনাকে এসাইনমেন্টটি করতে হবে।

#### এসাইনমেন্ট এ আপনাকে যা যা করতে হবেঃ

✓ এই এসাইনমেন্টটি শুধুমাত্র **redux toolkit** দিয়ে করতে হবে। এজন্য যেভাবে এই মডিউলে vanilla node js প্রোজেক্টে **@reduxjs/toolkit** প্যাকেজ install করে প্রোজেক্টটি দেখানো হয়েছে, সেভাবেই আপনারা একটি প্রজেক্ট সেটআপ করে নিবেন। কোনো প্রকার UI based framwork দিয়ে করা যাবে না।

✓ আমাদের দেয়া api থেকে একটি Object আপনাকে async thunk function লিখে fetch করে নিয়ে আসতে হবে। প্রতিটি রিকুয়েস্টে আলাদা আলাদা একটি Object পাবেন।

```
API - http://localhost:9000/videos
```

✓ এই Object এর **tags** নামে একটি প্রোপার্টি আছে যেখানে কিছু tag আছে। এই tag গুলো ব্যবহার করে আরো একটি async thunk dispatch করতে হবে যেটি সার্ভার থেকে search করে রিলেটেড ভিডিও গুলো নিয়ে আসে। যেমনঃ

```
http://localhost:9000/videos?tags_like=javascript&tags_like=react
```

✓ উপরের API থেকে যেই Array of Object পাবেন, সেই Object গুলোর ভেতরে views নামে একটি Property থাকবে, সেই property এর ভিত্তিতে Object গুলো সাজিয়ে Console এ লগ করতে হবে। যেগুলোর ভিউ বেশি থাকবে সেগুলো প্রথমে দেখাবে, এবং সব শেষে কম যেটি সেটি থাকবে।

✓ Console এ লগ করার জন্যে অবশ্যই **redux-logger** এই middleware টি ব্যবহার করতে হবে।

✓ মনে রাখবেন, একবার node application run করে দিলেই দুটি API request sequentially পর পর রান করতে হবে অর্থাৎ প্রথম রিকুয়েস্টে যেই ট্যাগ গুলো পাবো সেই ট্যাগ দিয়ে ‘tags_like’ সার্চ দিয়ে বাকি রিলেটেড ভিডিও গুলো নিয়ে আসতে হবে।

## Run the project in locally

Clone this repository -

```sh
git clone https://github.com/Sanjoy1210/think-in-a-redux-way.git
```

Go to the cloned project directory

```sh
cd think-in-a-redux-way
```

Go to your desired project folder. For example go to assignment-2 folder

```sh
cd assignment-5
```

install the dependencies

```sh
npm i
```

or

```sh
yarn
```

Go to server directory and run

```sh
npm i
```

or

```sh
yarn
```

start the API server

```sh
npm start
```

or

```sh
yarn start
```

API server runs in

```sh
http://localhost:9000/videos
```

API for search by tags

```sh
http://localhost:9000/videos?tags_like=javascript&tags_like=react
```

run the command in console

```sh
node index
```

## Result of the code

```
$ node index
 action video/fetchVideo/pending @ 01:42:29.509
   prev state {
    video: { loading: false, video: {}, error: '' },
    relatedVideos: { loading: false, videos: [], error: '' }
  }
   action     {
    type: 'video/fetchVideo/pending',
    payload: undefined,
    meta: {
      arg: undefined,
      requestId: '5Yq_UpiEDcM0zIx9bY06u',
      requestStatus: 'pending'
    }
  }
   next state {
    video: { loading: true, video: {}, error: '' },
    relatedVideos: { loading: false, videos: [], error: '' }
  }
 action video/fetchVideo/fulfilled @ 01:42:29.581
   prev state {
    video: { loading: true, video: {}, error: '' },
    relatedVideos: { loading: false, videos: [], error: '' }
  }
   action     {
    type: 'video/fetchVideo/fulfilled',
    payload: {
      id: 4,
      title: 'Debounce Function in JavaScript - JavaScript Job Interview question',
      description: 'In this video, I have explained about the debounce function in JavaScript. This is a common question inte
rviewers ask at Job Interviews. If you watch this video carefully, you will understand what is debounce and how to handle it
with custom debounce function.',
      author: 'Learn with Sumit',
      avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
      date: 'Jan 06, 2022',
      duration: '10:12',
      views: '5.3k',
      link: 'https://www.youtube-nocookie.com/embed/dD9O8DnIBj4',
      thumbnail: 'https://i3.ytimg.com/vi/dD9O8DnIBj4/maxresdefault.jpg',
      tags: [ 'debounce', 'javascript', 'tips' ],
      likes: 0,
      unlikes: 0
    },
    meta: {
      arg: undefined,
      requestId: '5Yq_UpiEDcM0zIx9bY06u',
      requestStatus: 'fulfilled'
    }
  }
   next state {
    video: {
      loading: false,
      video: {
        id: 4,
        title: 'Debounce Function in JavaScript - JavaScript Job Interview question',
        description: 'In this video, I have explained about the debounce function in JavaScript. This is a common question in
terviewers ask at Job Interviews. If you watch this video carefully, you will understand what is debounce and how to handle i
t with custom debounce function.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Jan 06, 2022',
        duration: '10:12',
        views: '5.3k',
        link: 'https://www.youtube-nocookie.com/embed/dD9O8DnIBj4',
        thumbnail: 'https://i3.ytimg.com/vi/dD9O8DnIBj4/maxresdefault.jpg',
        tags: [ 'debounce', 'javascript', 'tips' ],
        likes: 0,
        unlikes: 0
      },
      error: ''
    },
    relatedVideos: { loading: false, videos: [], error: '' }
  }
 action relatedVideos/fetchRelatedVideos/pending @ 01:42:29.586
   prev state {
    video: {
      loading: false,
      video: {
        id: 4,
        title: 'Debounce Function in JavaScript - JavaScript Job Interview question',
        description: 'In this video, I have explained about the debounce function in JavaScript. This is a common question in
terviewers ask at Job Interviews. If you watch this video carefully, you will understand what is debounce and how to handle i
t with custom debounce function.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Jan 06, 2022',
        duration: '10:12',
        views: '5.3k',
        link: 'https://www.youtube-nocookie.com/embed/dD9O8DnIBj4',
        thumbnail: 'https://i3.ytimg.com/vi/dD9O8DnIBj4/maxresdefault.jpg',
        tags: [ 'debounce', 'javascript', 'tips' ],
        likes: 0,
        unlikes: 0
      },
      error: ''
    },
    relatedVideos: { loading: false, videos: [], error: '' }
  }
   action     {
    type: 'relatedVideos/fetchRelatedVideos/pending',
    payload: undefined,
    meta: {
      arg: [ 'debounce', 'javascript', 'tips' ],
      requestId: '9J5HzEh1x4ANUqmJUyBK1',
      requestStatus: 'pending'
    }
  }
   next state {
    video: {
      loading: false,
      video: {
        id: 4,
        title: 'Debounce Function in JavaScript - JavaScript Job Interview question',
        description: 'In this video, I have explained about the debounce function in JavaScript. This is a common question in
terviewers ask at Job Interviews. If you watch this video carefully, you will understand what is debounce and how to handle i
t with custom debounce function.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Jan 06, 2022',
        duration: '10:12',
        views: '5.3k',
        link: 'https://www.youtube-nocookie.com/embed/dD9O8DnIBj4',
        thumbnail: 'https://i3.ytimg.com/vi/dD9O8DnIBj4/maxresdefault.jpg',
        tags: [ 'debounce', 'javascript', 'tips' ],
        likes: 0,
        unlikes: 0
      },
      error: ''
    },
    relatedVideos: { loading: true, videos: [], error: '' }
  }
 action relatedVideos/fetchRelatedVideos/fulfilled @ 01:42:29.627
   prev state {
    video: {
      loading: false,
      video: {
        id: 4,
        title: 'Debounce Function in JavaScript - JavaScript Job Interview question',
        description: 'In this video, I have explained about the debounce function in JavaScript. This is a common question in
terviewers ask at Job Interviews. If you watch this video carefully, you will understand what is debounce and how to handle i
t with custom debounce function.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Jan 06, 2022',
        duration: '10:12',
        views: '5.3k',
        link: 'https://www.youtube-nocookie.com/embed/dD9O8DnIBj4',
        thumbnail: 'https://i3.ytimg.com/vi/dD9O8DnIBj4/maxresdefault.jpg',
        tags: [ 'debounce', 'javascript', 'tips' ],
        likes: 0,
        unlikes: 0
      },
      error: ''
    },
    relatedVideos: { loading: true, videos: [], error: '' }
  }
   action     {
    type: 'relatedVideos/fetchRelatedVideos/fulfilled',
    payload: [
      {
        id: 6,
        title: 'React Router DOM v6 Bangla Tutorial - Breaking Changes - React Router 6 vs 5',
        description: 'In this React Router DOM v6 Bangla tutorial, you will learn how to install react router dom 6, what are
 the breaking changes in react router 6, difference between react router 6 vs 5, how to upgrade from react router v5 to react
 router v6. ',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Nov 08, 2021',
        duration: '10:12',
        views: '9.4k',
        link: 'https://www.youtube-nocookie.com/embed/34tjWL9wi4g',
        thumbnail: 'https://i3.ytimg.com/vi/34tjWL9wi4g/maxresdefault.jpg',
        tags: [ 'react', 'router', 'javascript' ],
        likes: 0,
        unlikes: 0
      },
      {
        id: 7,
        title: 'Tailwind CSS Tutorial Bangla - Introduction to Tailwind CSS',
        description: 'Tailwind is a utility-first CSS framework to rapidly build modern websites without ever leaving your HT
ML. In this Tailwind CSS tutorial, I have given a short introduction and overview of Tailwind CSS in Bangla language. Also, I
 have explained, why Tailwind vs Bootstrap debate should be stopped as both are useful in their own ways.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Oct 15, 2021',
        duration: '10:12',
        views: '7.4k',
        link: 'https://www.youtube-nocookie.com/embed/smDa6hoxLKI',
        thumbnail: 'https://i3.ytimg.com/vi/smDa6hoxLKI/maxresdefault.jpg',
        tags: [ 'tailwind', 'css', 'ui' ],
        likes: 0,
        unlikes: 0
      },
      {
        id: 3,
        title: 'Tailwind CSS 3 tutorial - Upgrade to Tailwind 3 | Tailwind CSS Bangla Tutorial',
        description: 'Tailwind CSS v3.0 came with incredible performance gains, huge workflow improvements, and a seriously r
idiculous number of new features. In this tutorial - I have tried to explain different new features of Tailwind CSS version 3
, how to install tailwind css 3, how to upgrade from tailwind v2 to v3 etc.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'March 11, 2022',
        duration: '10:12',
        views: '7.3k',
        link: 'https://www.youtube-nocookie.com/embed/4M7D3O2XX4o',
        thumbnail: 'https://i3.ytimg.com/vi/4M7D3O2XX4o/maxresdefault.jpg',
        tags: [ 'tailwind', 'css' ],
        likes: 0,
        unlikes: 0
      },
      {
        id: 4,
        title: 'Debounce Function in JavaScript - JavaScript Job Interview question',
        description: 'In this video, I have explained about the debounce function in JavaScript. This is a common question in
terviewers ask at Job Interviews. If you watch this video carefully, you will understand what is debounce and how to handle i
t with custom debounce function.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Jan 06, 2022',
        duration: '10:12',
        views: '5.3k',
        link: 'https://www.youtube-nocookie.com/embed/dD9O8DnIBj4',
        thumbnail: 'https://i3.ytimg.com/vi/dD9O8DnIBj4/maxresdefault.jpg',
        tags: [ 'debounce', 'javascript', 'tips' ],
        likes: 0,
        unlikes: 0
      },
      {
        id: 1,
        title: 'যে ১০ টি ভুল বিগিনার রিয়্যাক্ট ডেভেলপাররা করে থাকেন',
        description: 'আপনারা যারা বিগিনার হিসেবে রিয়্যাক্ট জেস নিয়ে কাজ করা শুরু করেছেন, তারা রিয়্যাক্ট এর বেশ কিছু কনসেপ্
ট ঠিক মতো আয়ত্ত না করতে পারার কারণে বিচিত্র কিছু সমস্যার সম্মুখীন হন এবং শেষ পর্যন্ত বুঝতে না পেরে হতাশ হয়ে পড়েন। তাদের জন
্যই এই ভিডিওটি। এই ভিডিওতে আমি এমন ১০টি সমস্যার কথা তুলে ধরেছি যেগুলো বিগিনার হিসেবে আপনারা অহরহ সম্মুখীন হবেন। আশা করি ভিডিও
টি দেখলে আপনাদের এই সমস্যাগুলো নিয়ে আর কনফিউশন থাকবেনা।',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'May 10, 2022',
        duration: '10:12',
        views: '3.1k',
        link: 'https://www.youtube-nocookie.com/embed/6O4s7v28nlw',
        thumbnail: 'https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg',
        tags: [ 'javascript', 'react', 'tips' ],
        likes: 0,
        unlikes: 0
      },
      {
        id: 2,
        title: 'VS Code Snippets - Boost your productivity with User Snippets',
        description: 'আমরা যখন Visual Studio Code Editor এ কাজ করি তখন অহরহ ব্যবহৃত কোড ব্লক গুলো আমাদের কে বারবার টাইপ করতে
হয় এবং সামগ্রিকভাবে চিন্তা করলে এরকম ছোট ছোট ম্যনুয়াল কাজ আমাদের productivity অনেকাংশেই কমিয়ে দেয়। VS Code এর বিল্ট ইন ইউ
জার স্নিপেট ফিচারের মাধ্যমে আমরা কমন কাজগুলো স্নিপেট আকারে সাজিয়ে রেখে দিতে পারি এবং শর্টকাট কমান্ডের মাধ্যমে বড় বড় কোড ব্
লক গুলো নিয়ে আসতে পারি। এই ভিডিওতে আপনারা এটাই জানতে পারবেন যে কিভাবে আমরা Visual Studio Code Editor এ কাস্টম স্নিপেট লিখতে
পারি।',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'April 25, 2022',
        duration: '10:12',
        views: '2.5k',
        link: 'https://www.youtube-nocookie.com/embed/N-U6AVcIPy4',
        thumbnail: 'https://i3.ytimg.com/vi/N-U6AVcIPy4/maxresdefault.jpg',
        tags: [ 'vscode', 'tips' ],
        likes: 0,
        unlikes: 0
      },
      {
        id: 5,
        title: 'SASS Tutorial in English - Overview of SASS',
        description: 'In this video, I have given a high level overview of popular CSS Pre-processor SASS which helps us mana
ging our styles at scale. If you have a basic understanding of CSS & JavaScript, this 10 mins SASS Tutorial will help you get
ting started with SASS.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Nov 22, 2021',
        duration: '10:12',
        views: '1.5k',
        link: 'https://www.youtube-nocookie.com/embed/4tV1Mfi4fMA',
        thumbnail: 'https://i3.ytimg.com/vi/4tV1Mfi4fMA/maxresdefault.jpg',
        tags: [ 'sass', 'css', 'ui' ],
        likes: 0,
        unlikes: 0
      }
    ],
    meta: {
      arg: [ 'debounce', 'javascript', 'tips' ],
      requestId: '9J5HzEh1x4ANUqmJUyBK1',
      requestStatus: 'fulfilled'
    }
  }
   next state {
    video: {
      loading: false,
      video: {
        id: 4,
        title: 'Debounce Function in JavaScript - JavaScript Job Interview question',
        description: 'In this video, I have explained about the debounce function in JavaScript. This is a common question in
terviewers ask at Job Interviews. If you watch this video carefully, you will understand what is debounce and how to handle i
t with custom debounce function.',
        author: 'Learn with Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
        date: 'Jan 06, 2022',
        duration: '10:12',
        views: '5.3k',
        link: 'https://www.youtube-nocookie.com/embed/dD9O8DnIBj4',
        thumbnail: 'https://i3.ytimg.com/vi/dD9O8DnIBj4/maxresdefault.jpg',
        tags: [ 'debounce', 'javascript', 'tips' ],
        likes: 0,
        unlikes: 0
      },
      error: ''
    },
    relatedVideos: {
      loading: false,
      videos: [
        {
          id: 6,
          title: 'React Router DOM v6 Bangla Tutorial - Breaking Changes - React Router 6 vs 5',
          description: 'In this React Router DOM v6 Bangla tutorial, you will learn how to install react router dom 6, what a
re the breaking changes in react router 6, difference between react router 6 vs 5, how to upgrade from react router v5 to rea
ct router v6. ',
          author: 'Learn with Sumit',
          avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
          date: 'Nov 08, 2021',
          duration: '10:12',
          views: '9.4k',
          link: 'https://www.youtube-nocookie.com/embed/34tjWL9wi4g',
          thumbnail: 'https://i3.ytimg.com/vi/34tjWL9wi4g/maxresdefault.jpg',
          tags: [ 'react', 'router', 'javascript' ],
          likes: 0,
          unlikes: 0
        },
        {
          id: 7,
          title: 'Tailwind CSS Tutorial Bangla - Introduction to Tailwind CSS',
          description: 'Tailwind is a utility-first CSS framework to rapidly build modern websites without ever leaving your
HTML. In this Tailwind CSS tutorial, I have given a short introduction and overview of Tailwind CSS in Bangla language. Also,
 I have explained, why Tailwind vs Bootstrap debate should be stopped as both are useful in their own ways.',
          author: 'Learn with Sumit',
          avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
          date: 'Oct 15, 2021',
          duration: '10:12',
          views: '7.4k',
          link: 'https://www.youtube-nocookie.com/embed/smDa6hoxLKI',
          thumbnail: 'https://i3.ytimg.com/vi/smDa6hoxLKI/maxresdefault.jpg',
          tags: [ 'tailwind', 'css', 'ui' ],
          likes: 0,
          unlikes: 0
        },
        {
          id: 3,
          title: 'Tailwind CSS 3 tutorial - Upgrade to Tailwind 3 | Tailwind CSS Bangla Tutorial',
          description: 'Tailwind CSS v3.0 came with incredible performance gains, huge workflow improvements, and a seriously
 ridiculous number of new features. In this tutorial - I have tried to explain different new features of Tailwind CSS version
 3, how to install tailwind css 3, how to upgrade from tailwind v2 to v3 etc.',
          author: 'Learn with Sumit',
          avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
          date: 'March 11, 2022',
          duration: '10:12',
          views: '7.3k',
          link: 'https://www.youtube-nocookie.com/embed/4M7D3O2XX4o',
          thumbnail: 'https://i3.ytimg.com/vi/4M7D3O2XX4o/maxresdefault.jpg',
          tags: [ 'tailwind', 'css' ],
          likes: 0,
          unlikes: 0
        },
        {
          id: 4,
          title: 'Debounce Function in JavaScript - JavaScript Job Interview question',
          description: 'In this video, I have explained about the debounce function in JavaScript. This is a common question
interviewers ask at Job Interviews. If you watch this video carefully, you will understand what is debounce and how to handle
 it with custom debounce function.',
          author: 'Learn with Sumit',
          avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
          date: 'Jan 06, 2022',
          duration: '10:12',
          views: '5.3k',
          link: 'https://www.youtube-nocookie.com/embed/dD9O8DnIBj4',
          thumbnail: 'https://i3.ytimg.com/vi/dD9O8DnIBj4/maxresdefault.jpg',
          tags: [ 'debounce', 'javascript', 'tips' ],
          likes: 0,
          unlikes: 0
        },
        {
          id: 1,
          title: 'যে ১০ টি ভুল বিগিনার রিয়্যাক্ট ডেভেলপাররা করে থাকেন',
          description: 'আপনারা যারা বিগিনার হিসেবে রিয়্যাক্ট জেস নিয়ে কাজ করা শুরু করেছেন, তারা রিয়্যাক্ট এর বেশ কিছু কনসে
প্ট ঠিক মতো আয়ত্ত না করতে পারার কারণে বিচিত্র কিছু সমস্যার সম্মুখীন হন এবং শেষ পর্যন্ত বুঝতে না পেরে হতাশ হয়ে পড়েন। তাদের
জন্যই এই ভিডিওটি। এই ভিডিওতে আমি এমন ১০টি সমস্যার কথা তুলে ধরেছি যেগুলো বিগিনার হিসেবে আপনারা অহরহ সম্মুখীন হবেন। আশা করি ভিড
িওটি দেখলে আপনাদের এই সমস্যাগুলো নিয়ে আর কনফিউশন থাকবেনা।',
          author: 'Learn with Sumit',
          avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
          date: 'May 10, 2022',
          duration: '10:12',
          views: '3.1k',
          link: 'https://www.youtube-nocookie.com/embed/6O4s7v28nlw',
          thumbnail: 'https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg',
          tags: [ 'javascript', 'react', 'tips' ],
          likes: 0,
          unlikes: 0
        },
        {
          id: 2,
          title: 'VS Code Snippets - Boost your productivity with User Snippets',
          description: 'আমরা যখন Visual Studio Code Editor এ কাজ করি তখন অহরহ ব্যবহৃত কোড ব্লক গুলো আমাদের কে বারবার টাইপ করত
ে হয় এবং সামগ্রিকভাবে চিন্তা করলে এরকম ছোট ছোট ম্যনুয়াল কাজ আমাদের productivity অনেকাংশেই কমিয়ে দেয়। VS Code এর বিল্ট ইন
ইউজার স্নিপেট ফিচারের মাধ্যমে আমরা কমন কাজগুলো স্নিপেট আকারে সাজিয়ে রেখে দিতে পারি এবং শর্টকাট কমান্ডের মাধ্যমে বড় বড় কোড
ব্লক গুলো নিয়ে আসতে পারি। এই ভিডিওতে আপনারা এটাই জানতে পারবেন যে কিভাবে আমরা Visual Studio Code Editor এ কাস্টম স্নিপেট লিখত
ে পারি।',
          author: 'Learn with Sumit',
          avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
          date: 'April 25, 2022',
          duration: '10:12',
          views: '2.5k',
          link: 'https://www.youtube-nocookie.com/embed/N-U6AVcIPy4',
          thumbnail: 'https://i3.ytimg.com/vi/N-U6AVcIPy4/maxresdefault.jpg',
          tags: [ 'vscode', 'tips' ],
          likes: 0,
          unlikes: 0
        },
        {
          id: 5,
          title: 'SASS Tutorial in English - Overview of SASS',
          description: 'In this video, I have given a high level overview of popular CSS Pre-processor SASS which helps us ma
naging our styles at scale. If you have a basic understanding of CSS & JavaScript, this 10 mins SASS Tutorial will help you g
etting started with SASS.',
          author: 'Learn with Sumit',
          avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
          date: 'Nov 22, 2021',
          duration: '10:12',
          views: '1.5k',
          link: 'https://www.youtube-nocookie.com/embed/4tV1Mfi4fMA',
          thumbnail: 'https://i3.ytimg.com/vi/4tV1Mfi4fMA/maxresdefault.jpg',
          tags: [ 'sass', 'css', 'ui' ],
          likes: 0,
          unlikes: 0
        }
      ],
      error: ''
    }
  }
```
