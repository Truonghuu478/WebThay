import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Nav} from"react-bootstrap";
import Modal from "../Modal"
 class ShowIn extends Component {
        constructor(props){
            super(props);
            this.state={
                modalTrailer : false,
                eventKey:0,
                ShowNMav:[
                    {name : "Tất Cả"},
                    {name : "Máy Tính"},
                    {name:"Camera"},
                    {name : "Photocopy"}
                ],
                ItemsImage:[
                    {hinhAnh:`img/suachuamaytinh-2.jpg`},
                    {hinhAnh:`img/suachuamaytinh-3.jpg`},
                    {hinhAnh:`img/suachuamaytinh-4.png`},
                    {hinhAnh:`img/suachuamaytinh-5.jpeg`},
                    {hinhAnh:`img/suachuamaytinh-6.jpg`},
                    {hinhAnh:`img/suachuamaytinh-7.jpg`},
                    {hinhAnh:`img/photocoppy-2.jpg`},
                    {hinhAnh:`img/photocoppy-3.jpg`},
                    {hinhAnh:`img/photocoppy-4.jpg`},
                    {hinhAnh:`img/photocoppy-5.png`},
                    {hinhAnh:`img/photocoppy-6.jpg`},
                    {hinhAnh:`img/camera-2.jpg`},
                    {hinhAnh:`img/camera-3.jpeg`},
                    {hinhAnh:`img/camera-4.jpg`},
                    {hinhAnh:`img/suachuamaytinh-7.jpg`},
                    {hinhAnh:`img/photocoppy-2.jpg`},
                    {hinhAnh:`img/photocoppy-3.jpg`},
                    {hinhAnh:`img/photocoppy-4.jpg`},
                    {hinhAnh:`img/photocoppy-5.png`},
                    {hinhAnh:`img/photocoppy-6.jpg`},
                    {hinhAnh:`img/camera-2.jpg`},
                    {hinhAnh:`img/camera-3.jpeg`},

                    

                ]
            }
        }
        handleTrailer=()=>{
            this.setState({
                modalTrailer:true
            })
        }
    renderNavShow =()=>{
        return this.state.ShowNMav.map((item,index)=>{
                return(
                    <Nav.Item key={index}>
                        <Nav.Link eventKey={index} >{item.name}</Nav.Link>
                    </Nav.Item>
                )
            })
                
             
        
    }
    renderItems=()=>{
        return this.state.ItemsImage.map((item,index)=>{
            return(
                <div className="items" key={index}>
                    <img src={item.hinhAnh} alt="image"/>
                    <div className="items-detail">
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="items-hover">
                        <i
                        onClick={()=>{this.handleTrailer()}}
                         class="fa fa-play"></i>
                    </div>
                </div>
            )
        })
    }
    render() {
        const closeTrailer = ()=>{this.setState({modalTrailer:false})}
        return (
            <>
            <div className="ShowIn ">
                <div className="ShowIn__title text-center">
                    <h2 data-aos="fade-down">Hình Ảnh Hoạt Động</h2>
                    <i class="fa fa-chevron-up"></i>
                    <div className="About-text">
                    <p data-aos="fade-up">Với đội ngũ thi công chuyên nghiệp, TDNATION tự hào hiện tại là nhà cung cấp các giải
                    pháp về thi công mạng Network,WIFI, CCVT,...
                    </p >
                    </div>
                </div>
                <div className="ShowIn__content">
                <Nav variant="tabs" defaultActiveKey="0">
                {this.renderNavShow()}
                </Nav>
                <div className="Nav__items">
                    {this.renderItems()}
                </div>
                </div>
                
            </div>
            <Modal
                onHide={closeTrailer}
                show={this.state.modalTrailer}
            />
          </>  
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowIn)
