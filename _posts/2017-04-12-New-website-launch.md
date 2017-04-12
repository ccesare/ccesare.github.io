---
layout: post
title: "A new website and a new blog"
date: 2017-04-12
author: Chris Cesare
author_email: me@chriscesare.com
---
Welcome to my Jekyll-ified website. It's a project that's been in the works for more than a year, marked by two major bursts of activity.

There are several reasons for the change. I update my portfolio of published clips obsessively, often right after a story goes live. This became a major hassle while I was a reporter for Nature and churned out news on the reg. I had an endless `clips.html` file that I edited manually, and the whole thing became a tangled mess of `div` and `href` tags. It took a lot of hunting and indenting and copying and pasting. And I made lots of mistakes.

It was also a totally inconvenient way to keep a record of my publications. The data was shoehorned into a static web page, which killed its portability. And I didn't have that many clips, so a CMS like Wordpress seemed cumbersome.

Finally, I wanted to make my site responsive so visitors on mobile devices weren't marooned on pinch-and-zoom island.

[Jekyll](https://jekyllrb.com) solves two of these problems easily, and designing the site from the ground up forced me to learn to do responsive design myself.

The gist of Jekyll: It reads in a bunch of text files from predefined and user-defined directories and spits out HTML. There's not much more to it.

For me, Jekyll's real power is its native fluency in YAML, a markup language that looks like a pretty version of XML. Jekyll parses YAML into data structures that you can iterate over and do logic on. It was a perfect way for me to store my clips.

For example, the block below shows the metadata, formatted in YAML, for a recent clip.

``` yaml
---
type: news_article
headline: Ions sync up into world's first time crystal
outlet: Joint Quantum Institute
date_published: 2017-03-08
image_url: [some nasty long URL]
image_credit: E. Edwards/JQI
address: http://jqi.umd.edu/news/ions-sync-into-worlds-first-time-crystal
featured: no
---
```

I just made up the field names myself, but you can see that it's a pretty straightforward schema. I don't only write---I've been busy with podcast production lately---so the `type` field lets me specify what kind of publication it is. I'm not using this yet, but it seems like a useful piece of data to have. Everything else is pretty self-explanatory, except for `featured`. I wanted a way to pick and choose which clips to show on the front page of my site, so I added a simple flag that I could check for when generating that section of the site.

Which brings me to another profoundly awesome feature of Jekyll: templating. Jekyll not only speaks YAML, it also reads Liquid. This is what allows me to write short snippets of code and generate a page that lists all of my clips. As an example, the code below is what I use to display all the featured clips on my home page.

{% raw %}
~~~ liquid
{% assign sorted = site.clips | sort:"date" | reverse %}
{% for clip in sorted %}
{% if clip.featured == true %}
<div class="feature-item">
<a href="{{ clip.address }}">{{ clip.headline }}</a>
<br>
{{ clip.date | date: "%Y %b %-d" }}
<br>
<div class="feature-crop">
<img class="feature-img" src="{{ clip.image_url }}">
</div>
</div>
{% endif %}
{% endfor %}
~~~
{% endraw %}

The first line grabs all of the clips and sorts them into a list with the newest clip at the front. The second line proceeds to iterate over every clip in that sorted list. The third line looks for clips that are supposed to be featured. If it finds one, it prints out a bunch of HTML with the headline, publication date and an image. Then it goes on to the next clip in the list. Once Jekyll runs, it produces a static HTML page with only the marked clips shown.

Another added bonus is that GitHub has native support for Jekyll. If I want to write a new blog post, I just create a text file, set a few YAML tags at the top and push it to the [GitHub repository](https://github.com/ccesare/ccesare.github.io) for my site. I can even write the post in [Markdown](http://daringfireball.net/projects/markdown/) and include formatted code like above. It saves time writing and saves money on hosting.

I'll do my best to finally keep a blog going more than a few months. You'll find a rotating selection of posts about programming, science, chess and books, depending on which phase of my interest cycle you catch.
