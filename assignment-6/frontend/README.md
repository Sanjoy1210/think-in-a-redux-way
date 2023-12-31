#### এসাইনমেন্ট এ আপনাকে যা যা করতে হবেঃ

✓ আমরা Fake JSON Server দিয়ে দিয়েছি এবং সেখানে বেশ কিছু ব্লগ থাকবে, সেগুলো আপনাকে fetch করে নিয়ে এসে হোম পেজে দেখাতে হবে।

✓ ব্লগ গুলো প্রথম অবস্থায় সারিবদ্ধ ভাবে দেখাবে অর্থাৎ API থেকে যেই সিরিয়ালে পাঠাবে সেই সিরিয়ালেই দেখাতে হবে। পরবর্তীতে Sort মেনু থেকে "Newest", "Most Liked" এ ক্লিক করলে পর্যায়ক্রমে নতুন গুলো এবং সব থেকে বেশি লাইক পাওয়া গুলো ফিল্টার দেখাবে।

✓ লাইকে ক্লিক করলে লাইকের সংখ্যা বাড়বে, যেহেতু Authentication নেই, সেহেতু যত ইচ্ছা লাইক দেয়া যাবে এবং সেটি সার্ভারের সাথে Sync থাকবে।

✓ বাম পাশের মেনুতে "Saved" এ ক্লিক করলে, যে গুলো সেভ করা হয়েছে সেগুলোই দেখাবে।

✓ কার্ডের Title বা Thumbnail এ ক্লিক করলে, Details পেজে নিয়ে যাবে। এক্ষেত্রে অবশ্যই 'react-router-dom' প্যাকেজের মাধ্যমে রাউটিং ম্যানেজ করতে হবে। এসাইনমেন্ট Deploy করার পরে এটি নিশ্চিত হবেন, যেন সরাসরি ওই পেজে গেলেও, Blog Details দেখা যায়।

✓ Details পেজে "Save" বাটনে ক্লিক করলে, সেটি আলাদা ভাবে বুক মার্ক হবে, অর্থাৎ 'Save' লেখাটি 'Saved' হবে এবং নীল রং হবে (এটির জন্যে 'active' নামে একটি CSS ক্লাস বানিয়ে দেয়াই আছে)।

✓ Details পেজে, 'Related Blogs' সেকশনে ট্যাগ অনুযায়ী রিলেটেড ব্লগ গুলো দেখাবে।

✓ যেই ব্লগ পোষ্ট এর ডিটেইল পেজে যাবো, সেই পোষ্ট যেন 'Related Blogs' এর লিস্ট এ না আসে।

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
cd assignment-6
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

- [blogs redux-toolkit app](https://blog-app-reduxtoolkit.netlify.app/)
