---
layout: default
---
I'm a science writer living and working in the Washington, D.C. metropolitan area. I tell stories about physics research for the Joint Quantum Institute, where I am currently Senior Science Communicator.

<div class="feature-box">

<h2>Featured writing</h2>

{% assign sorted = site.clips | sort:"date" | reverse %}
{% for clip in sorted %}
	{% if clip.featured == true %}
		<div class="feature-item" markdown="0">
      {{ clip.date | date: "%Y %b %-d" }}
			<br>
      <a href="{{ clip.address }}">{{ clip.headline }}</a>
      <br>
			<div class="feature-crop">
				<img class="feature-img" src="{{ clip.image_url }}">
			</div>
		</div>
	{% endif %}
{% endfor %}
</div>

<div class="blog-box">
<h2>Recent blog posts</h2>
  <div class="recent-blogs">
  <ul>
  {% for post in site.posts limit: 5%}
		<li>
			<a class="post-link" href="{{ post.url }}">{{ post.title }}</a>
		</li>
  {% endfor %}
  </ul>
  </div>
</div>
