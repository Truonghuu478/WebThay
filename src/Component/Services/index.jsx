import React, { Component } from "react";
import { connect } from "react-redux";
import AOS from "aos";

export class Services extends Component {
  render() {
    return (
      <div className=" container link2">
        <div className="Services">
          <div data-aos="fade-up" className="Services__title">
            <div className="Services__headding">
            <h2>Dịch Vụ</h2>
            <i class="fa fa-chevron-up"></i>
            <p>Chúng tôi mang đến những dịch vụ tốt nhất...</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil, cum accusamus obcaecati explicabo maiores sed dolores, rem saepe aliquam quos eius deserunt incidunt quasi maxime porro cumque perspiciatis ea.Esse dicta beatae, maxime molestiae dolorem cum repellat itaque excepturi debitis tenetur. Animi error vel minima ratione fugiat aut ipsa voluptas eligendi! Temporibus odit incidunt optio animi, laborum culpa tenetur!</p>
            
          </div>

          <div className="Services__content row">
            <div className="col-sm-12  d-flex">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                className="Services-left"
              >
                <img src="img/suachuamaytinh-1.jpg" alt="sua chua may tinh" />
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                className="Services-right"
              >
                <h2>Sửa chữa lắp ráp bảo trì máy tính </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt culpa odit, voluptas facere repellat facilis tenetur
                  rem cupiditate ipsum adipisci dolores similique impedit
                  voluptate ea est sunt harum dicta quia beatae laborum omnis
                  distinctio dolor natus quae. Aspernatur, itaque magnam?
                </p>
                <button className="btn button-show text-muted btn-secondary">
                    <a href="#"> Chi tiết</a>
                   
                    </button>

              </div>
            </div>
            {/* innitial 2  */}

            <div className="col-sm-12 Services-suachua d-flex">
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                className="Services-right"
              >
                <h2>Lắp đặt Camera </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt culpa odit, voluptas facere repellat facilis tenetur
                  rem cupiditate ipsum adipisci dolores similique impedit
                  voluptate ea est sunt harum dicta quia beatae laborum omnis
                  distinctio dolor natus quae. Aspernatur, itaque magnam?
                </p>
                <button className="btn button-show text-muted btn-secondary">
                    <a href="#"> Chi tiết</a>
                   
                    </button>
                
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                className="Services-left"
              >
                <img src="img/camera-1.jpg" alt="camera-1" />
              </div>
            </div>
            {/* innitial 3  */}
            <div className="col-sm-12 Services-suachua d-flex">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                className="Services-left"
              >
                <img src="img/photocoppy-1.jpg" alt="camera-1" />
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                className="Services-right"
              >
                <h2>Photocopy </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt culpa odit, voluptas facere repellat facilis tenetur
                  rem cupiditate ipsum adipisci dolores similique impedit
                  voluptate ea est sunt harum dicta quia beatae laborum omnis
                  distinctio dolor natus quae. Aspernatur, itaque magnam?
                </p>
                <button className="btn button-show text-muted btn-secondary">
                    <a href="#"> Chi tiết</a>
                   
                    </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    AOS.init({
        esasing: 'ease',
        duration: 1000,
        once: true
    });
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
