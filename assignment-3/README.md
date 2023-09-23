আমরা প্রতিনিয়ত, বিভিন্ন E-commerce সাইটে যে ধরনের cart সিস্টেম দেখি, ঠিক সে ধরণের একটি cart সিস্টেম আপনাকে বানাতে হবে এই এসাইনমেন্টে। এর আগের মত, এবারো একটি HTML Template দিয়ে দেয়া হয়েছে, সেই টেমপ্লেট কে React এ কনভার্ট করে Redux দিয়ে এই Cart সিস্টেম এর state ম্যানেজ করতে হবে।

**উল্লেখ্য যে, এসাইনমেন্ট এর ডিজাইনে কোন ধরনের পরিবর্তন করা যাবে না এবং HTML template এ দেয়া কোনো বাটন বা এলিমেন্ট এর ক্লাস বা আইডি পরিবর্তন করা যাবে না। সেই ক্লাস বা আইডি দিয়েই আপনাকে এসাইনমেন্টটি সম্পন্ন করতে হবে। অন্যথায় এসাইনমেন্টটি গ্রহনযোগ্য হবে না এবং এসাইনমেন্ট এর কোনো মার্ক নাও পেতে পারেন।**

## এসাইনমেন্ট এ আপনাকে যা যা করতে হবেঃ

✓ Initially State এ কোনো কিছু থাকবে না। আমরা প্রথমবার যখন সাইটে ঢুকি তখন যেন কোনো প্রোডাক্ট না দেখা যায় এবং একদম ফাঁকা থাকে, চাইলে সেখানে "No Product Found" এমন কিছু লিখতে পারেন, তবে যেন প্রোডাক্ট list ফাঁকা থাকে।

✓ Template এর ডান পাশে যেই "Add New Product” সেকশনটি রয়েছে, সেখানে প্রোডাক্ট এর তথ্য দিয়ে, "Add Product” বাটনে ক্লিক করলে, সেটি Redux Store এ সেভ হবে এবং Store থেকে ডাটা নিয়ে প্রোডাক্ট টি বাম পাশে Product এর গ্রিড ভিউ তে দেখাতে হবে।
_নোটঃ Unsplash বা Pexels এর মত সাইট গুলো থেকে প্রোডাক্ট এর ছবির লিংক নিয়ে, "Image URL” এ বসালে সেই লিংক থেকে ছবি লোড হবে।_

✓ Product Add করার সময়, "Quantity” যা দেয়া হবে, তার থেকে বেশি পরিমান এর প্রোডাক্ট Cart এ নেয়া যাবে না। Quantity তে যেই সংখ্যা দেয়া হয়েছিল, সেই পরিমান এর প্রোডাক্ট Cart এ এড হওয়ার সাথে সাথে "Add to Cart” বাটন টি Disable হয়ে যাবে।

✓ প্রতিবার "Add to Cart” এ ক্লিক দেবার সাথে সাথে ঐ Product এর Quantity কমতে থাকবে।

✓ উপরে ডান পাশে, সবুজ Cart আইকনে দেখা যাবে কত গুলো Product Cart এ add হয়েছে। একই Product 10 বার cart এ নিলে, সবুজ Cart আইকনে 10 দেখাবে।

✓ সবুজ Cart আইকনে ক্লিক করলে অন্য একটি পেজে নিয়ে যাবে, সেখানে Cart এ থাকা Product গুলোর লিস্ট দেখাবে এবং ডান এ থাকবে বিলের Details। এবং Home মেনুতে ক্লিক করলে, Home পেজ দেখাবে।
_নোটঃ Routing এর জন্যে আলাদা প্যাকেজ ব্যবহার না করে, Conditional Routing Implement করতে পারেন।_

✓ প্রত্যেকটি আইটেমের সাথে একটি কাউন্টার থাকবে যেখানে Plus এবং Minus এ ক্লিক করে কত গুলো প্রোডাক্ট অর্থাৎ Quantity পরিবর্তন করতে পারবে।

✓ প্রতিটি product এর ক্ষেত্রে Quantity এর সাথে Product Price গুন হয়ে প্রতিটি product এর মোট price দেখাবে।

✓ Delete বাটনে ক্লিক করে Product টি সম্পুর্ণ ভাবে Cart থেকে বাদ দিতে পারবেন।
_নোটঃ এই কার্ট পেজেও, প্রোডাক্ট এর stock এর থেকে বেশি Quantity এর প্রোডাক্ট কার্টে নেয়া যাবে না।_

✓ বাম পাশে যখন Plus/Minus করে প্রোডাক্ট বাড়ানো কিংবা কমানো হবে, তখন ডান পাশের "Bill Details" এও Sub Total এবং Total এ সঠিক হিসাব হয়ে দাম দেখাতে হবে। _এখানে Discount এবং VAT এই দুটো সবসময় 0 (zero) ই রেখে দিবেন এবং এগুলোকে কোন হিসাবে রাখবেন না। এগুলোকে শুধু সৌন্দর্য্য বর্ধনের জন্য dummy রাখা হয়েছে_

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
cd assignment-3
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
- [shopping cart redux app](https://shopping-cart-redux-wapp.netlify.app/)