import React from 'react';
import './stars.scss';
import Typed from 'react-typed';
import chan from '../img/chan1.jpeg';
class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              {/* <div class="imgbox" width="10px" height="10px"> */}
              <img src={chan} width="35%" height="35%" object-fit="cover" />
              {/* </div> */}

              <h1 className="intro-title mb-4">함께하고 싶은 오경찬 입니다!</h1>
              <h4 className="intro-title2 mb-2">
                특수부대 통신장교를 경험하여 통신의 흐름을 알고 팀원 및
                유관부서와의 협력을 통해 함께 일하는 개발자입니다!
              </h4>
              <h4 className="intro-title2 mb-4">
                나를 발전시키는 것을 좋아하며 언제든지 바뀔 준비가 되어있고
                배우는 것을 좋아합니다.
              </h4>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={['Back End Developer', 'Software Engineer']}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              {/* <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
