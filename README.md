# What is JSX, and why is it used?
JSX (JavaScript XML) হলো এক ধরনের Syntex, যা JavaScript কোডের ভেতর HTML কোড লেখা সহজ হয় যার মাধ্যমে UI কে ডাইনামিকভাবে তৈরি করা যায়।



# What is the difference between State and Props?
State 
1. Component-এর ভিতরে ডাটা সংরক্ষণ করে
2. তা পরিবর্তন করা যায়
3. Dynamic UI ও User Interaction এর জন্য ব্যবহার করা হয় 

Props
1. Parent থেকে Child Component-এ ডাটা পাঠায়
2. পরিবর্তন করা যায় না
3. Component-এর মধ্যে তথ্য পাঠাতে ব্যবহার করা হয় 

# What is the useState hook, and how does it work?
useState হলো React Hook, যা কোনো Component-এর ভিতরে ডাটা পরিবর্তন ও সংরক্ষণ করতে সাহায্য করে।


# How can you share state between components in React?
সাধারণত দুটি উপায় আছে:
1. Parent Component-এ state রাখে, তারপর Props দিয়ে নিচে নিচে পাঠায়।

2. অনেক Component-এর মধ্যে একসাথে ডাটা শেয়ার করার জন্য ব্যবহৃত হয়।


# How is event handling done in React?
React-এ ইভেন্ট হ্যান্ডল করা হয় JavaScript এর মতোই, তবে camelCase নাম ব্যবহার করা হয়।