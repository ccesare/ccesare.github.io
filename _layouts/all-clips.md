---
layout: default
---
<div class="clip-box">
<h3><a name="All Clips"></a>All Clips</h3>
<br>
{% assign clips = site.clips %}
{% assign rev_clips = clips | reverse %}
{% assign sorted_clips = rev_clips.items | sort: "date" | reverse %}
{{ clips.items | size }} clips
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
</div>
