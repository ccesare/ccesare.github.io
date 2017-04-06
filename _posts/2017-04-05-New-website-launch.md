---
layout: post
title: "A new website and a new blog"
date: 2017-04-05
author: Chris Cesare
author_email: me@chriscesare.com
---
Welcome to my Jekyll-ified website. It's a project that's been in the works for more than a year, marked by two major bursts of activity.

There are several reasons for the change. I update my portfolio of published clips obsessively, often right after a story goes live. This became a major hassle while I was a reporter for Nature and churned out news regularly. I had an endless <code>clips.html</code> file that I edited manually, and the whole thing became a tangled mess of <code>div</code> and <code>href</code> tags. There was a lot of hunting and indenting and copying and pasting. And I made lots of mistakes.

It was also a totally inconvenient way to keep a record of my publications. The data was shoehorned into a static web page, which killed its portability. And I didn't have that many clips, so a CMS like Wordpress seemed cumbersome.

Finally, I wanted to make my site responsive so visitors on mobile devices weren't marooned on pinch-and-zoom island.

[Jekyll](https://jekyllrb.com) solves two of these problems easily, and designing the site from the ground up forced me to learn to do responsive design myself.

The gist of Jekyll: It reads in a bunch of text files from predefined and user-defined directories and spits out HTML. There's not too much more to it.

For me, Jekyll's real power is its native fluency in YAML, a markup language that looks like a pretty version of XML. Jekyll parses YAML into data structures that you can iterate over and do logic on. It was a perfect way for me to store my clips.

``` yaml
---
type: news_article
headline: Ions sync up into world's first time crystal
outlet: Joint Quantum Institute
date_published: 2017-03-08
image_url: http://jqi.umd.edu/sites/default/files/styles/article_lead/public/images/time_crystals_gallery.jpg?itok=IWpLkusj
image_credit: E. Edwards/JQI
address: http://jqi.umd.edu/news/ions-sync-into-worlds-first-time-crystal
featured: no
---
```
