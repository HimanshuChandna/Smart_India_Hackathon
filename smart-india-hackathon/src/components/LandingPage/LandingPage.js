import React from 'react';
import bootstrap from '../media/bootstrap.png';
import css from '../media/css.png';
import html from '../media/html.png';
import react from '../media/react.png';

export const LandingPage = () => {
  return (
    <div>

<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item">
      <img src={bootstrap} class="d-block w-20" alt="bootstrap"/>
    </div>
    <div class="carousel-item active">
      <img src={css} class="d-block w-20" alt="css"/>
    </div>
    <div class="carousel-item">
      <img src={html} class="d-block w-20" alt="html"/>
    </div>
    <div class="carousel-item">
      <img src={react} class="d-block w-20" alt="react"/>
    </div>
  </div>
</div>

    </div>
 

 )
}
