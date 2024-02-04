import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/shashankaz"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://twitter.com/shashankaz"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-twitter"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/shashankaz/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a
        href="https://in.pinterest.com/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-pinterest"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
