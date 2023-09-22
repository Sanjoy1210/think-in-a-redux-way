এই মডিউলে আমরা দেখে ফেললাম কিভাবে আমরা React প্রোজেক্ট এ রিডাক্স ব্যবহার করে State ম্যানেজ করতে পারি। এই প্রোজেক্টে যা যা দেখানো হয়েছে, তার উপর ভিত্তি করে আপনাদের জন্যে একটি এসাইনমেন্ট তৈরি করা হয়েছে। এই এসাইনমেন্ট এর জন্যে আমরা HTML/CSS ব্যবহার করে একটি template তৈরি করে দিয়েছি। সেই template টি কে Rect এ কনভার্ট করে সেখানে ‘react-redux’ প্যাকেজ ব্যবহার করতে হবে State ম্যানেজ করতে হবে।

**উল্লেখ্য যে, এসাইনমেন্ট এর ডিজাইনে কোন ধরনের পরিবর্তন করা যাবে না এবং HTML template এ দেয়া কোনো বাটন বা এলিমেন্ট এর ক্লাস বা আইডি পরিবর্তন করা যাবে না। সেই ক্লাস বা আইডি দিয়েই আপনাকে এসাইনমেন্টটি সম্পন্ন করতে হবে। অন্যথায় এসাইনমেন্টটি গ্রহনযোগ্য হবে না এবং এসাইনমেন্ট এর কোনো মার্ক নাও পেতে পারেন।**

## এসাইনমেন্ট এ আপনাকে যা যা করতে হবেঃ

✓ প্রজেক্টটি React-redux দিয়ে করতে হবে।

✓ Destination From, Destination To, Journey Date, Guests, Class সবগুলো ফিলাপ করে Book বাটনে ক্লিক করলে ডাটা গুলো Redux store এ সেভ হবে ।

✓ Redux store থেকে ডাটা গুলো নিয়ে এসে টেবিলে দেখাতে হবে।

✓ সর্বোচ্চ ৩ টি ডাটা এড করলে Book বাটন ডিজেবল হয়ে যাবে। এখানে আপনাকে ভ্যালিডেশন করতে হবে। অর্থাৎ সর্বোচ্চ ৩ টি রো এড করা যাবে, ৪র্থ ডেটা এড করা যাবে না ।

✓ টেবিলে থাকা ডিলেট বাটন এ ক্লিক করলে row টি ডিলেট হয়ে যাবে, সেই সাথে Redux store থেকেও ডাটা ডিলেট হয়ে যাবে।

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
cd assignment-2
```

install the dependencies
```sh
npm i
```

or 
```sh
yarn
```

start the development server
```sh
npm run dev
```

or
```sh
yarn dev
```

Your app should be available in http://localhost:5173/

## Project live preview
- [flight booking web app](https://flight-booking-web-app.netlify.app/)