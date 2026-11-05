---
layout: about
title: about
permalink: /
subtitle: Postdoctoral Researcher at <a href='https://autolab.berkeley.edu/'>UC Berkeley AUTOLab</a>

profile:
  align: left
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <div class="profile-links">
      <a href="https://scholar.google.com/citations?user=0bnaVQ8AAAAJ&hl=en" target="_blank" rel="noopener" title="Google Scholar" aria-label="Google Scholar"><i class="ai ai-google-scholar"></i></a>
      <a href="https://github.com/uksangyoo" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.linkedin.com/in/uksang/" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
      <button type="button" class="email-reveal-btn" data-scrambled="ude.yelekreb@gnasku" title="Reveal email" aria-label="Reveal email"><i class="fa-solid fa-envelope"></i></button>
    </div>
    <script>
      (function () {
        document.querySelectorAll('.email-reveal-btn').forEach(function (btn) {
          btn.addEventListener('click', function () {
            var addr = btn.getAttribute('data-scrambled').split('').reverse().join('');
            var span = document.createElement('span');
            span.className = 'email-plain';
            span.textContent = addr;
            btn.replaceWith(span);
          });
        });
      })();
    </script>

featured_thesis: true # pairs the thesis talk with the dissertation
news: true # includes a list of news items
latest_posts: false # includes a list of the newest posts
selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---

I am a postdoctoral researcher with [Prof. Ken Goldberg](https://goldberg.berkeley.edu/) in the [AUTOLab](https://autolab.berkeley.edu/) at [UC Berkeley](https://bair.berkeley.edu/). I completed my Ph.D. at Carnegie Mellon University in the Robotics Institute (RI), where I was co-advised by [Prof. Jean Oh](https://www.ri.cmu.edu/ri-faculty/jean-hyaejin-oh/) and [Prof. Jeffrey Ichnowski](https://ichnow.ski/) as a member of RI's [BIG lab](https://cmubig.github.io/) and Momentum lab. I have also worked as a research scientist intern with the robot learning groups at Bosch AI (Summer 2025) and Meta (Fall 2025).

My research investigates how **mechanics and physics-based models** can enable **generalizable learning** for **dexterous, contact-rich manipulation**. In particular, I develop models of **contact dynamics** and **deformation mechanics** that provide strong inductive biases for robot learning. My work spans **compliant and dexterous manipulation**, **learning from human demonstrations across embodiments through contact**, **tactile sensing**, and reasoning about the **continuous deformation of soft objects/robots** during physical interaction.

This research draws on ideas from discrete differential geometry, machine learning, robotics, and soft-body mechanics, with the goal of deploying dexterous robotic systems reliably in the real world.

I received my B.Sc. in Mathematics (2020) and in Mechanical Engineering (2021) at the University of Texas at Austin, where I developed my interest in continuous deformations and continuum structure representation. My research is supported by the NSF Graduate Research Fellowship Program (GRFP).

<style>
  .profile-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.75rem;
  }
  .profile-links a,
  .profile-links .email-reveal-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    padding: 0;
    font-size: 1rem;
    line-height: 1;
    background: none;
    cursor: pointer;
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    color: var(--global-text-color) !important;
    text-decoration: none !important;
    transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }
  .profile-links a:hover,
  .profile-links .email-reveal-btn:hover {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color) !important;
    background-color: var(--global-card-bg-color, transparent);
  }
  .email-plain {
    font-size: 0.8rem;
    color: var(--global-text-color);
    user-select: all;
    word-break: break-all;
  }
</style>
