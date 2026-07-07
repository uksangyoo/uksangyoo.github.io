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
      <a href="https://scholar.google.com/citations?user=0bnaVQ8AAAAJ&hl=en" target="_blank" rel="noopener" title="Google Scholar"><i class="ai ai-google-scholar"></i> Scholar</a>
      <a href="https://github.com/uksangyoo" target="_blank" rel="noopener" title="GitHub"><i class="fa-brands fa-github"></i> GitHub</a>
      <a href="https://www.linkedin.com/in/uksang/" target="_blank" rel="noopener" title="LinkedIn"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
    </div>

news: true # includes a list of news items
latest_posts: false # includes a list of the newest posts
selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---

I am a postdoctoral researcher with [Prof. Ken Goldberg](https://goldberg.berkeley.edu/) in the [AUTOLab](https://autolab.berkeley.edu/) at [UC Berkeley](https://bair.berkeley.edu/). I completed my Ph.D. at Carnegie Mellon University in the Robotics Institute (RI), where I was co-advised by [Prof. Jean Oh](https://www.ri.cmu.edu/ri-faculty/jean-hyaejin-oh/) and [Prof. Jeffrey Ichnowski](https://ichnow.ski/) as a member of RI's [BIG lab](https://cmubig.github.io/) and Momentum lab. I have also worked as a research scientist intern with the robot learning groups at Bosch AI (Summer 2025) and Meta (Fall 2025). My research focuses on **leveraging robot hands' unique morphologies** to perform **dexterous** and **contact-rich** manipulation tasks in ways that exploit each morphology's distinct capabilities.

My work spans two main areas: developing methods to utilize robot compliance for dexterous and delicate manipulation, and reasoning about continuous deformations of soft objects during contact-rich interactions. This research combines theoretical foundations in discrete differential geometry, machine learning, and soft body mechanics with practical applications in deploying dexterous robots to the real world.

I received my B.Sc. in Mathematics (2020) and in Mechanical Engineering (2021) at the University of Texas at Austin, where I developed my interest in continuous deformations and continuum structure representation. My research is supported by the NSF Graduate Research Fellowship Program.

<div class="thesis-card-wrap"><a class="thesis-card" href="https://publications.ri.cmu.edu/mechanics-informed-learning-for-deformation-rich-manipulation" target="_blank" rel="noopener"><img src="{{ '/assets/img/thesis_teaser.png' | relative_url }}" alt="Ph.D. Thesis teaser" loading="lazy" /><span class="thesis-card-body"><span class="thesis-card-label">Ph.D. Thesis · Carnegie Mellon University, 2026</span><span class="thesis-card-title">Mechanics-Informed Learning for Deformation-Rich Manipulation</span><span class="thesis-card-tldr"><strong>TL;DR:</strong> We already know how soft bodies deform (mechanics, contact modeling) but how can we encode them into general manipulation policy learning frameworks to learn to leverage deformation in our world with better sample efficiency and generalization?</span><span class="thesis-card-cta">Read the dissertation &rarr;</span></span></a></div>

<style>
  .profile-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.75rem;
  }
  .profile-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.35rem 0.7rem;
    font-size: 0.85rem;
    font-weight: 500;
    line-height: 1;
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    color: var(--global-text-color) !important;
    text-decoration: none !important;
    transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }
  .profile-links a:hover {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color) !important;
    background-color: var(--global-card-bg-color, transparent);
  }
  .profile-links a i {
    font-size: 1rem;
  }
  .thesis-card-wrap {
    margin: 1.75rem 0 0.5rem;
  }
  .thesis-card {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    max-width: 540px;
    padding: 0.9rem 1.1rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    background-color: var(--global-card-bg-color, var(--global-bg-color));
    text-decoration: none !important;
    color: inherit;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }
  .thesis-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    border-color: var(--global-theme-color);
  }
  .thesis-card img {
    width: 120px;
    height: auto;
    border-radius: 6px;
    flex-shrink: 0;
  }
  .thesis-card-body {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .thesis-card-label {
    font-size: 0.72rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: var(--global-text-color-light);
  }
  .thesis-card-title {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.3;
    color: var(--global-text-color);
  }
  .thesis-card-tldr {
    font-size: 0.85rem;
    line-height: 1.4;
    color: var(--global-text-color-light);
  }
  .thesis-card-cta {
    font-size: 0.88rem;
    font-weight: 500;
    color: var(--global-theme-color);
  }
  @media (max-width: 576px) {
    .thesis-card {
      flex-direction: column;
      align-items: flex-start;
      max-width: 100%;
    }
    .thesis-card img {
      width: 100%;
    }
  }
</style>
