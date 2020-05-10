import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Footer extends Component {
    render() {
        return (
            <div className="py-lg-4 footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="dance-agile-info">
          <h4>About us</h4>
          <p>ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla.</p>
          <p>ultricies nec, pellentesque eu, pretium quis, sem. Nulla</p>
          <div className="bottom-social pt-2">
            <ul>
              <li><a href="#" className="fab fa-facebook-f" /></li>
              <li><a href="#" className="fab fa-google-plus-g" /></li>
              <li><a href="#" className="fab fa-twitter" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="dance-agile-info">
          <h4>Working time</h4>
          <div className="wls-hours-list">
            <ul>
              <li className="d-flex">Monday<span className="time ml-auto">9:30-18:30</span></li>
              <li className="d-flex">Tuesday<span className="time ml-auto">9:30-18:30</span></li>
              <li className="d-flex">Wednesday<span className="time ml-auto">9:30-18:30</span></li>
              <li className="d-flex">Thursday<span className="time ml-auto">9:30-18:30</span></li>
              <li className="d-flex">Friday<span className="time ml-auto">9:30-18:30</span></li>
              <li className="d-flex">Saturday<span className="time ml-auto">9:30-18:30</span></li>
              <li className="d-flex">Sunday<span className="time ml-auto">closed</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="dance-agile-info">
          <h4>Twitter Us</h4>
          <p>ultricies nec, pellentesque eu, pretium qui.</p>
          <p>ultricies nec, pellentesque eu, pretium qui.</p>
          <p>ultricies nec, pellentesque eu, pretium qui.</p>
          <p>ultricies nec, pellentesque</p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="dance-agile-info">
          <h4>SUBSCRIBE US</h4>
          <div className="input-search">
            <input type="text" placeholder="name@example.com" />
            <button type="submit" className="far fa-share-square" />
          </div>
          <p>ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla</p>
        </div>
      </div>
    </div>
  </div>
  <div className=" footer-deep  text-left">
    <p className="mb-0">© 2020 Bake. All Rights Reserved | Design by <a href="https://www.facebook.com/profile.php?id=100024818054580">HuuTruong</a> </p>
  </div>
</div>

        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
