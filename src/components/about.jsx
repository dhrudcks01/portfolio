import React from 'react';
import myImage from '../img/myImage.png';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: 'Front-End',
          content: 'Front-End : React.Js',
        },
        {
          id: 'Back-End',
          content: 'Back-End : Node.Js(Express), AWS(S3), MongoDB, Nginx, Pm2',
        },
        // {
        //   id: 'NodeJS_skill',
        //   content: 'NodeJS',
        //   porcentage: '80%',
        //   value: '80',
        // },
        // {
        //   id: 'ReactJS_skill',
        //   content: 'ReactJS',
        //   porcentage: '70%',
        //   value: '70',
        // },
        // {
        //   id: 'Python_skill',
        //   content: 'Python',
        //   porcentage: '30%',
        //   value: '30',
        // },
        // {
        //   id: 'VanillaJS_skill',
        //   content: 'VanillaJS',
        //   porcentage: '70%',
        //   value: '70',
        // },
        // {
        //   id: 'Java_skill',
        //   content: 'Java',
        //   porcentage: '30%',
        //   value: '30',
        // },
      ],
      about_me: [
        {
          id: 'fifth-p-about',
          content: '오픈소스 컨트리뷰 마스터즈 : 2022.08 ~ ',
        },
        {
          id: 'fourth-p-about',
          content: '오픈소스 컨트리뷰 챌린저스 : 2022.07 ~ 2022.08',
        },
        {
          id: 'third-p-about',
          content: '엘리스 SW Engineer 트랙 : 2022.04 ~ 2022.07',
        },
        {
          id: 'second-p-about',
          content: '11공수특전여단 정보통신대 통신장교 : 2019.03 ~ 2021.06 ',
          box: '무선소대장 1년, 교육장교 1년 ',
        },
        {
          id: 'first-p-about',
          content: '울산대학교 IT융합 전공(컴퓨터 공학) : 2015.03 ~ 2019.02',
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    {/* <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: '0 auto' }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: 'center' }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                          
                        </div>
                      </div>
                    </div> */}
                    <div className="title-box-2">
                      <h5 className="title-left">Skills</h5>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}

                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <p>{skill.content}</p>{' '}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            {/* <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div> */}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Career</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                            <br />
                            {content.box}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
