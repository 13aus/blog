---
layout: default
title: Projects
permalink: /projects/
---
<header class="page-header container">
  <p class="eyebrow">Work in progress</p>
  <h1>Projects</h1>
  <p class="page-lede">Certifications, tools, and longer-running work.</p>
</header>

<section class="feed container">
  {% for project in site.projects %}
    {% include post-card.html item=project label="Project" %}
  {% endfor %}
</section>
