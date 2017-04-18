---
layout: default
permalink: /clips/
---
I've written for a variety of outlets, including Nature, Science, the San Jose Mercury News and Inside Science. This page provides a nearly exhaustive list of my published clips, sorted by outlet.

I reported a feature-length magazine story for Science Notes 2015 titled ["Heard it from a Bird."](http://sciencenotes.ucsc.edu/2015/pages/finches/finches.html) I produced a podcast and infographic to accompany it.

I also produced a [five minute video](https://vimeo.com/131390904) chronicling the Aptos High School robotics team's quest to retain their crown at an annual competition.

Jump to an outlet:

{% assign outlets = site.clips | group_by: "outlet" | reverse %}
{% for outlet in outlets %}
<span class="outlet-list">
<a href="#{{ outlet.name }}">{{ outlet.name }}</a>
</span>
{% unless forloop.last %}{% raw %} | {% endraw %}{% endunless %}{% endfor %}

<div class="clip-box">
{% assign outlets = site.clips | group_by: "outlet" %}
{% assign rev_outlets = outlets | reverse %}
{% for outlet in rev_outlets %}
<br>
<h3><a name="{{ outlet.name }}"></a>{{ outlet.name }}</h3>
{{ outlet.items | size }} clips
{% assign sorted_clips = outlet.items | sort: "date" | reverse %}
{% for clip in sorted_clips %}
	<div class="clip-item">
		{% if clip.image_url %}
		<div class="clip-crop">
			<img class="clip-img" src="{{ clip.image_url }}">
		</div>
		{% endif %}
		<div class="clip-link">
		<a href="{{ clip.address }}" class="clip-link-size" target="_blank">{{ clip.headline | group_by: "outlet" }}</a>
		<br>
		{% if clip.type != "news_article" %}
		{{ clip.type | capitalize }}
		<br>
		{% endif %}
		Published: {{ clip.date | date: "%Y %b %-d" }}
		{% if clip.image_credit %}
		<br>
		Image credit: {{ clip.image_credit }}
		{% endif %}
		</div>
		{% if clip.image_url %}
		<div class="clear"></div>
		{% endif %}
	</div>
{% endfor %}
{% endfor %}
</div>
