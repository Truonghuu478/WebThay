import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

export class OurTeam extends Component {
  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };

    return (
      <div className="Ourteam">
        <div className="container">
          <div className="Ourteam-title">
            <h2>Our Teams</h2>
            <i class="fa fa-chevron-up"></i>
          </div>

          {/* <div className="Ourteam__content "> */}
          <Slider {...settings}>
            {/* trong  */}
            <div className="Ourteam-item ">
              <img src="img/truong.jpg" alt="teams-truong" />
              <div className="Ourteam-detail">
                <h5>Lê Hữu Trường-FrontEnd</h5>
                
              </div>
              <div className="OurTeam-hover">
                <div>
                  <h3>Lorem ipsum dolor sit.</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsam, cupiditate.
                  </p>
                  <div className="Ourteam-link">
                    <a href="https://www.facebook.com/profile.php?id=100013466554606&sk=photos">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fab fa-google"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* trong  */}
            <div className="Ourteam-item ">
              <img src="img/trong.jpg" alt="teams-truong" />
              <div className="Ourteam-detail">
                <h5>Lê Hữu Trường-FrontEnd</h5>
                
              </div>
              <div className="OurTeam-hover">
                <div>
                  <h3>Lorem ipsum dolor sit.</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsam, cupiditate.
                  </p>
                  <div className="Ourteam-link">
                    <a href="https://www.facebook.com/profile.php?id=100013466554606&sk=photos">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fab fa-google"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* trong  */}
            <div className="Ourteam-item ">
              <img src="img/cuong.jpg" alt="teams-truong" />
              <div className="Ourteam-detail">
                <h5>Lê Hữu Trường-FrontEnd</h5>
                
              </div>
              <div className="OurTeam-hover">
                <div>
                  <h3>Lorem ipsum dolor sit.</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsam, cupiditate.
                  </p>
                  <div className="Ourteam-link">
                    <a href="https://www.facebook.com/profile.php?id=100013466554606&sk=photos">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fab fa-google"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* trong  */}
            <div className="Ourteam-item ">
              <img src="img/truong.jpg" alt="teams-truong" />
              <div className="Ourteam-detail">
                <h5>Lê Hữu Trường-FrontEnd</h5>
                
              </div>
              <div className="OurTeam-hover">
                <div>
                  <h3>Lorem ipsum dolor sit.</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsam, cupiditate.
                  </p>
                  <div className="Ourteam-link">
                    <a href="https://www.facebook.com/profile.php?id=100013466554606&sk=photos">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fab fa-google"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* trong  */}
            <div className="Ourteam-item ">
              <img src="img/cuong.jpg" alt="teams-truong" />
              <div className="Ourteam-detail">
                <h5>Lê Hữu Trường-FrontEnd</h5>
                
              </div>
              <div className="OurTeam-hover">
                <div>
                  <h3>Lorem ipsum dolor sit.</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsam, cupiditate.
                  </p>
                  <div className="Ourteam-link">
                    <a href="https://www.facebook.com/profile.php?id=100013466554606&sk=photos">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fab fa-google"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slider>

          {/* </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OurTeam);
