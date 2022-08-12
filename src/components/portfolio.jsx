import React from 'react';

//import stock
import stock from '../img/image1.jpg';
import stock1 from '../img/image2.jpg';
import stock2 from '../img/image3.jpg';
import stock3 from '../img/image4.jpg';
import stock4 from '../img/image5.jpg';
import stock5 from '../img/image6.jpg';
import androidtv1 from '../img/androidtv1.png';
import androidtv2 from '../img/androidtv2.png';
import androidtv3 from '../img/androidtv3.png';
import androidtv4 from '../img/androidtv4.png';
import elice11 from '../img/elice11.png';
import elice12 from '../img/elice12.png';
import elice13 from '../img/elice13.png';
import elice14 from '../img/elice14.png';
import elice15 from '../img/elice15.png';
import elice16 from '../img/elice16.png';
import elice17 from '../img/elice17.png';
import elice18 from '../img/elice18.png';

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Incididunt nostrud id aute culpa excepteur pariatur consequat
                  elit culpa nulla enim anim incididunt.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={androidtv1} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={androidtv1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">
                          다중 스마트폰 제어 Andriod TV
                        </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Bluetooth AndroidStudio DirectWIFI Unity
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={androidtv2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={androidtv3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={androidtv4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={elice11} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img
                      src={elice11}
                      alt="여행사 프로젝트"
                      className="img-fluid"
                    />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">여행사 프로젝트</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 VanillaJS NodeJS MongoDB Express
                          </span>{' '}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={elice12}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={elice13}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={elice14}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={elice15}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={elice16}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={elice17}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={elice18}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">음식점 예약 시스템 </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap ReactJS NodeJS MongoDB Express
                            Pm2 Nginx AWS(S3)
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-todo"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-todo"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-todo"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-todo"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-todo"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Bootstrap ReactJS GoogleAPI
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-medlingos"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-medlingos"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-medlingos"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-medlingos"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-medlingos"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">MERN</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-smth"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-smth"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-smth"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-smth"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-smth"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap MERN
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-mf"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-mf"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-mf"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-mf"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-mf"
                  style={{ display: 'none' }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
