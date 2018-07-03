---
layout: default
permalink: /clips/
---
I've written for a variety of outlets, including Nature, Science, the San Jose Mercury News and Inside Science. This page provides a nearly exhaustive list of my published clips, sorted by outlet.

I reported a feature-length magazine story for Science Notes 2015 titled ["Heard it from a Bird."](http://sciencenotes.ucsc.edu/2015/pages/finches/finches.html) I produced a podcast and infographic to accompany it.

I also produced a [five minute video](https://vimeo.com/131390904) chronicling the Aptos High School robotics team's quest to retain their crown at an annual competition.

My clips:

<ul>
{% for outlet in site.outlets %}
<li style="list-style-type:none; margin:10px;">
<img style="position:relative;top:6px;" src="{{ outlet.icon }}" width="30px" title="{{ outlet.name }}">
&bull;
<a href="{{ outlet.permalink }}">{{ outlet.name }}</a>
</li>
{% endfor %}
</ul>
