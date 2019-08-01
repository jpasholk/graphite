---
layout: post
title: Markdown Test
date: "2018-04-28 13:30:00 -0700"
tags: [test, markdown, docs]
---

You can write regular [markdown](https://markdowntutorial.com/) here and Jekyll will automatically convert it to a nice webpage.  I strongly encourage you to take 5 minutes to learn how to write in markdown - it'll teach you how to transform regular text into bold/italics/headings/tables/etc.

<!--more-->

**Here is some bold text**

## Here is a secondary heading

Here's a useless table:

| Column | Next column | Another column | Last column |
| :------ |:--- | :--- | :--- |
| Five | Six | Four | Three |
| Ten | Eleven | Nine | Eight |
| Seven | Eight | Six | Five |
| Two | Three | One | Zero |

How about a yummy crepe?

![Crepe](https://s3-media3.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/348s.jpg)

Here's a code chunk:

~~~
var foo = function(x) {
  return(x + 5);
}
foo(3)
~~~

And here is the same code with syntax highlighting:

```javascript
var foo = function(x) {
  return(x + 5);
}
foo(3)
```

And here is the same code yet again but with line numbers:

{% highlight javascript linenos %}
var foo = function(x) {
  return(x + 5);
}
foo(3)
{% endhighlight %}
