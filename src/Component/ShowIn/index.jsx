import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import {Nav} from"react-bootstrap";
import ModalTrailer from "../Modal";


 class ShowIn extends Component {
        constructor(props){
            super(props);
            this.state={
                modalTrailer : false,
                eventKey:0,
                arrNav:[],
                ShowNMav:[
                    {name : "Tất Cả",ma:0},
                    {name : "Máy Tính",ma:1},
                    {name:"Camera",ma:2},
                    {name : "Photocopy",ma:3}
                ],
                result:0,
                ItemsImage:[
                    {hinhAnh:`img/suachuamaytinh-2.jpg`,ma:1},
                    {hinhAnh:`img/suachuamaytinh-2.jpg`,ma:1},
                    {hinhAnh:`img/photocoppy-3.jpg`,ma:2},
                    {hinhAnh:`img/photocoppy-3.jpg`,ma:2},
                    {hinhAnh:`img/suachuamaytinh-4.jpg`,ma:1},
                    {hinhAnh:`img/suachuamaytinh-6.jpg`,ma:1},
                    {hinhAnh:`img/photocoppy-2.jpg`,ma:2},
                    {hinhAnh:`img/photocoppy-4.jpg`,ma:2},
                    {hinhAnh:`img/photocoppy-5.jpg`,ma:2},
                    {hinhAnh:`img/suachuamaytinh-7.jpg`,ma:1},
                    {hinhAnh:`img/suachuamaytinh-5.jpg`,ma:1},
                    {hinhAnh:`img/suachuamaytinh-3.jpg`,ma:1},
                    {hinhAnh:`img/photocoppy-6.jpg`,ma:2},
                    {hinhAnh:`img/camera-2.jpg`,ma:3},
                    {hinhAnh:`img/camera-4.jpg`,ma:3},
                    {hinhAnh:`img/suachuamaytinh-7.jpg`,ma:1},
                    {hinhAnh:`img/photocoppy-2.jpg`,ma:1},
                    {hinhAnh:`img/photocoppy-3.jpg`,ma:1},
                    {hinhAnh:`img/photocoppy-4.jpg`,ma:1},
                    {hinhAnh:`img/camera-3.jpg`,ma:3},
                    {hinhAnh:`img/photocoppy-5.jpg`,ma:1},
                    {hinhAnh:`img/camera-3.jpg`,ma:3},
                    {hinhAnh:`img/photocoppy-6.jpg`,ma:1},
                    {hinhAnh:`img/camera-2.jpg`,ma:3},

                    

                ]
            }
        }
        handleTrailer=()=>{
            this.setState({
                modalTrailer:true
            })
        }
        _handleNav=(name)=>{
            let {ItemsImage}= this.state;
            let arrImage=[];
        switch (name) {
            case "Tất Cả":
                arrImage= ItemsImage;
            case "Máy Tính":
               arrImage= ItemsImage.filter(item=>item.ma === 1);
                break;
            case "Camera":
                arrImage= ItemsImage.filter(item=>item.ma === 2);
                break;
            case "Photocopy":
                arrImage= ItemsImage.filter(item=>item.ma === 3);
                break;
                
            default:
                break;
        }
        this.setState({
            arrNav:arrImage
        })
    }
        // _handleNav=(ma)=>{
        //     console.log(ma);
            
        //         this.setState({
        //             result: ma
        //         })
        // }
    renderNavShow =()=>{
        return this.state.ShowNMav.map((item,index)=>{
                return(
                    <Nav.Item key={index}>
                        <Nav.Link
                       
                         onClick={()=>{this._handleNav(item.name)}}
                         eventKey={index} >{item.name}</Nav.Link>
                    </Nav.Item>
                )
            })
                
             
        
    }
    renderItems=()=>{
        return this.state.arrNav.map((item,index)=>{
            
            return(
                <div className="items" 
               key={index}>
                    <img  src={item.hinhAnh} alt="image"/>
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
            <Fragment>
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
            <ModalTrailer
            onHide={closeTrailer}
            show={this.state.modalTrailer}/>
            </Fragment>
        )
    }
    componentDidMount(){
        let ItemsImage=[...this.state.ItemsImage];
        this.setState({
            arrNav:ItemsImage
        })
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowIn)
