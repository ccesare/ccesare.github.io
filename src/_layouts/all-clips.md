---
layout: default
---
<div class="clip-box">
{% assign clips = site.clips | reverse %}
<br>
<h3><a name="{{ outlet.name }}"></a>{{ outlet.name }}</h3>
{{ clips | size }} clips
{% for clip in clips %}
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
		<br>
		Outlet: {{ clip.outlet }}
		</div>
		{% if clip.image_url %}
		<div class="clear"></div>
		{% endif %}
	</div>
{% endfor %}
</div>