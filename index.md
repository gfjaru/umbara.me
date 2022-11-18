---
layout: default
---

<div class="home">

  <header>
    <h1>Fajar Umbara</h1>
    <a href="mailto:fajar@umbara.me">fajar@umbara.me</a>
  </header>

  <main>
  
    <p>
      💼 Software Engineer at <a href="https://cermati.com" target="_blank" rel="noreferrer">Cermati.com</a> (2021 - now)<br />
      <br />
      <b>2022:</b><br />
        - Facilitator 
          <abbr title="Digital Talent Scholarship">DTS</abbr> <abbr title="Kementerian Komunikasi dan Digital Republik Indonesia">Kominfo</abbr> (<abbr title="Professional Academy">PROA</abbr>) - <abbr title="Associate Cloud Engineer">ACE</abbr> Program<br />
        - Participant
          <abbr title="Digital Talent Scholarship">DTS</abbr> <abbr title="Kementerian Komunikasi dan Digital Republik Indonesia">Kominfo</abbr> (<abbr title="Professional Academy">PROA</abbr>) - <abbr title="Associate Cloud Engineer">ACE</abbr> Program<br />
      <br />
      <b>2021:</b> <br />
        - Graduated from <a href="https://telkomuniversity.ac.id" target="_blank" rel="noreferrer">Telkom University</a> (Computer Engineering, 3.29/4.0)<br />
        - Graduated from <a href="https://bangkit.academy" target="_blank" rel="noreferrer">Bangkit Academy</a> (Cloud Engineer)<br />
      <br />
    </p>

    {% if site.posts.size != 0 %}
      <h2>Writing:</h2>
      {% for post in site.posts %}
        {% assign currentdate = post.date | date: "%Y" %}
        {% if currentdate != date %}
          <b>{{ currentdate }}</b>
          {% assign date = currentdate %} 
        {% endif %}

        <div>
          [{{ post.date |  date: "%b %d" }}] <a href="{{ post.url }}">{{ post.title }}</a>
        </div>
      {% endfor %}
    {% endif %}

  </main>

</div>