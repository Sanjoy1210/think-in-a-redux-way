## এসাইনমেন্ট রিকুয়ারমেন্ট:

এই মডিউলে আমরা শিখেছি কিভাবে Redux Thunk দিয়ে Asynchronous রিকুয়েস্ট গুলো হ্যান্ডেল করা যায়। সুতরাং এখন আমরা জানি, সার্ভার থেকে কিভাবে API কল করে Store এ ডেটা রাখতে পারি, এবং যখন কোনো action dispatch করবো তখন সেটিকে কিভাবে asynchronously handle করতে হয়। আমরা এবারের এসাইনমেন্টে অনেকটা এধরনের একটি প্রোজেক্ট করবো।

এই এসাইনমেন্টের জন্যে একটি HTML template দিয়ে দেয়া হবে, সেই সাথে লোকাল সার্ভারের জন্যে JSON Server কনফিগার করে দিয়ে দেয়া হবে। সেই কনফিগারেশনেই সার্ভার ব্যবহার করতে হবে এবং অবশ্যই সার্ভারটি "9000" পোর্টে চালাতে হবে। সার্ভার ফোল্ডারে আপনাকে কোন হাতই দিতে হবেনা। আপনি শুধু সার্ভারটি স্টার্ট করে ব্যবহার করবেন। পূর্বের ন্যায়, UI তে কোনো প্রকার পরিবর্তন কিংবা ক্লাস/আইডি পরিবর্তন করা যাবে না।

**উল্লেখ্য যে, এসাইনমেন্ট এর ডিজাইনে কোন ধরনের পরিবর্তন করা যাবে না এবং HTML template এ দেয়া কোনো বাটন বা এলিমেন্ট এর ক্লাস বা আইডি পরিবর্তন করা যাবে না। সেই ক্লাস বা আইডি দিয়েই আপনাকে এসাইনমেন্টটি সম্পন্ন করতে হবে। অন্যথায় এসাইনমেন্টটি গ্রহনযোগ্য হবে না এবং এসাইনমেন্ট এর কোনো মার্ক নাও পেতে পারেন।**

## এই এসাইনমেন্ট এ যা যা করতে হবেঃ

✓ ডান পাশে দেয়া ফর্ম এ, যাবতীয় তথ্য ইনপুট দিয়ে সাবমিট করলে, সেটি asynchronously লোকাল সার্ভারে গিয়ে Store হবে।

✓ "Book List" - সেকশনে সার্ভার থেকে বই এর লিস্ট গুলো নিয়ে এসে দেখাতে হবে।

✓ "Book List" - এর ডানে "All, Featured নামে দুটি ট্যাগ আছে, Featured সিলেক্ট করলে 'Featured' বই গুলো শুধু ফিল্টার করে দেখাবে। All দিলে সব গুলোই দেখাবে।

✓ নেভিগেশন মেনুতে "Search Bar" - আছে, সেখানে সার্চ করলে, শুধু মাত্র বই এর নাম দিয়ে সার্চ করবে, এবং সার্চ রেজাল্ট "Book List" সেকশনেই ফিল্টার হয়ে দেখাবে। সার্চ বার ফাঁকা থাকলে, স্বাভাবিক ভাবে যেমন সব বই গুলো দেখায়, সেভাবেই দেখাবে।

✓ কার্ড আইটেমের Edit আইকনে ক্লিক করলে, কার্ডের সব তথ্য ডান পাশের "Add New Book" ফর্মে চলে যাবে। বাটনের নাম তখন "Add Book" থেকে "Update Book" এ কনভার্ট হবে।

✓ "Update Book" এ ক্লিক করলে, প্রোডাক্ট আপডেট হয়ে যাবে, ফর্ম Reset হয়ে যাবে, এবং বাটনের আগের title মানে "Add Book" চলে আসবে।

✓ সব শেষে ডিলিট বাটন ক্লিক করলে, বই টি ডেটাবেজ থেকে ডিলিট হয়ে যাবে।

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
cd assignment-4
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

- [book management redux app](https://book-management-redux.netlify.app/)
