## এই এসাইনমেন্ট এ যা যা করতে হবেঃ

এসাইনমেন্ট 4 এ যা যা করা হয়েছিলো, ঠিক সেগুলোই করতে হবে। তবে এখানে RTK Query ব্যবহার করে API কল করে করতে হবে।

✓ পেজ লোড হলেই, সার্ভার থেকে বই এর লিস্ট গুলো নিয়ে এসে দেখাবে

✓ 'Add Book পেজে' বই এর তথ্য দিয়ে সাবমিট করলে সেগুলো সার্ভারে গিয়ে সেভ হবে। অবশ্যই RTK Query এর Mutation কুয়েরি ব্যবহার করে করতে হবে এবং এড হলে 'Add' পেজ থেকে Home পেজে চলে আসবে।

✓ 'Book List' - এর ডানে 'All', 'Featured' নামে দুটি ট্যাগ আছে, 'Featured' সিলেক্ট করলে featured বই গুলো শুধু ফিল্টার করে দেখাবে। 'All' দিলে সব গুলোই দেখাবে। এটি ক্লাইন্ট সাইডেই করতে হবে।

✓ নেভিগেশন মেনুতে 'Search Bar' - আছে, সেখানে সার্চ করলে, শুধু মাত্র বই এর নাম দিয়ে সার্চ করবে এবং সার্চ রেজাল্ট 'Book List' সেকশনেই ফিল্টার হয়ে দেখাবে। সার্চ বার ফাঁকা থাকলে, স্বভাবিক ভাবে যেমন সব বই গুলো দেখায়, সেভাবেই দেখাবে।

✓ কার্ড আইটেমের 'Edit' আইকনে ক্লিক করলে এডিটের একটি পেজে নিয়ে যাবে। এর জন্যে React Router ব্যবহার করতে হবে এবং এডিট পেজে গেলে, সেই বইটির তথ্য দিয়ে ফর্ম টা আগে থেকেই পূরন করা থাকবে। এখন এই ফর্ম এর কোনো ডেটা আপডেট করলে সেটি সার্ভার এও আপডেট হয়ে যাবে এবং আপডেট হলে এডিট পেজ থেকে হোম পেজে চলে আসবে।

✓ সব শেষে ডিলেট বাটনে ক্লিক করলে, বইটি সার্ভার থেকেও ডিলেট হয়ে যাবে

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
cd assignment-8
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

- [book shop rtk-query app](https://book-shop-rtk-query.netlify.app/)
