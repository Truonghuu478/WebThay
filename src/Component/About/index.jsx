import React, { Component } from 'react'
import { connect } from 'react-redux'
import  AOS from 'aos';

 class About extends Component {
    render() {
        return (
            <div className="About container">
                <div className="About__title">
                    <div className="About-left">
                        <img src="http://www.tdnation.com.vn/Upload/files/khac_phuc_su_co_14082018.jpg" alt="sua chua bao tri"/>
                    </div>
                <div className="About-right">

                    <h2 data-aos="fade-down">Sứ Mệnh</h2>
                    <i class="fa fa-chevron-up"></i>
                    <div className="About-text">
                    <p data-aos="fade-up">Với đội ngũ thi công chuyên nghiệp, TDNATION tự hào hiện tại là nhà cung cấp các giải
                    pháp về thi công mạng Network,WIFI, CCVT, optical fiber, cho các công ty, nhà xưởng tạicác khu công nghiệp, các tuyến Point To Point nội hạt và liên tỉnh.
                    </p >
                    <p data-aos="fade-up">TDNATION còn là địa điểm tin cậy đối với khách hàng có nhu cầu lắp đặt hệ thống giám sát nhân viên qua camera, giám sát ra vào cơ quan dùng vân tay, Hệ thống tổng đài,….</p>
                    </div>
                    </div>
                                </div>
                <div className="About__content">
                
                </div>
            </div>
        )
    }
    componentDidMount(){
        AOS.init({
            esasing: 'ease',
            duration: 1000,
            once: true
        });
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
