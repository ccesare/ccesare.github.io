---
layout: default
---

## Blog posts

<ul class="blog-list">

  {% for post in site.posts %}
    <li>{{ post.date | date_to_string }} . <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
  {% endfor %}

</ul>
