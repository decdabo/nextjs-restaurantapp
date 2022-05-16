import React from "react";
export const FooterApp = () => {
  return (
    <div className="footer">
      <div className="footer__socialmedia">
        <a
          href="https://www.linkedin.com/in/david-c-a5028621a/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin lin" />
        </a>
        <a
          href="mailto:david.caro.dec@hotmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-envelope-square mail" />
        </a>
        <a
          href="https://github.com/decdabo/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github-square git" />
        </a>
      </div>
      <div className="footer__jobs">
        <a
          href="https://decdabo.github.io/portfolio/"
          target="_blank"
          rel="noreferrer"
          >
          <h1>More Jobs</h1>
          <img
            alt="logo"
            src="assets/footer/logo.png"
          />
        </a>
      </div>
    </div>
  );
};
