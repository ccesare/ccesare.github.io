---
layout: default
---
I'm a science writer living and working in the Washington, D.C. metropolitan area. I tell stories about physics research for the [Joint Quantum Institute](http://jqi.umd.edu) and the [Department of Physics at the University of Maryland](https://umdphysics.umd.edu), where I am currently Senior Science Communicator.

<div class="feature-box">
<h2>Featured recent clips</h2>
<ul>
{% assign sorted = site.clips | sort:"date" | reverse %}
{% for clip in sorted %}
{% if clip.featured == true %}
	<li>
		{% for outlet in site.outlets %}
		{% if clip.outlet == outlet.name %}
		<img style="position:relative;top:6px;" src="{{ outlet.icon }}" width="30px" title="{{ outlet.name }}">
		&bull;
		{% endif %}
		{% endfor %}
  	{{ clip.date | date_to_string }} &bull;
		{% if clip.type != "news_article" %}
		[{{ clip.type | upcase }}]
		{% endif %}
		<a href="{{ clip.address }}" target="_blank">{{ clip.headline }}</a>
	</li>
{% endif %}
{% endfor %}
</ul>
</div>

<div class="blog-box">
<h2>Recent blog posts</h2>
<div class="recent-blogs">
<ul>
{% for post in site.posts limit: 5%}
	<li>
		{{ post.date | date_to_string }} &bull; <a href="{{ post.url }}" class="blog-link-separator">{{ post.title }}</a>
	</li>
{% endfor %}
</ul>
</div>
</div>
