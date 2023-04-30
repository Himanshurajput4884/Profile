import React from "react";

const AboutTwo = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img style={{height:"100%"}} src="/img/placeholders/1-1.jpg" alt="placeholder" />

                  <div
                    className="main"
                    style={{
                      height:"100%",
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/about/logo-me.png"
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>About Me</span>
                  <h3> Pursuing Bsc </h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                  I am a dedicated and hardworking student pursuing a Bachelors of Computer Science (BCS) degree. Alongside my academic pursuits, I am also a professional boxer, where I hone my skills and discipline daily. As an athlete, I have learned the importance of setting goals, perseverance, and self-motivation, all of which I apply to my studies. My passion for both computer science and boxing has taught me the value of hard work, commitment, and determination in achieving success. I am excited to see where these pursuits take me in the future.
{/*                     
                    I'm passionate about technologies and programming. 🚀
                    I'm a hard worker and I have a strong resilience at work. 💡
                    Whenever I work on a project, I'm totally dedicated. 🎯
                    I focus on every detail and always work on making it better. 🏆 */}
                  </p>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
