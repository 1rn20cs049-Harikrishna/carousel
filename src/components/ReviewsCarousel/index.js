// Write your code here
import {Component} from 'react'
import './index.css'

export default class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)

    const {reviewsList} = this.props

    this.state = {
      i: 0,
      reviewItem: reviewsList[0],
    }
  }

  leftArrow = () => {
    const {reviewsList} = this.props

    const {i} = this.state
    const newIndex = i - 1 < 0 ? 0 : i - 1
    if (i === 0) return
    this.setState({i: newIndex})

    this.setState({reviewItem: reviewsList[newIndex]})
  }

  rightArrow = () => {
    const {reviewsList} = this.props

    const {i} = this.state
    const newIndex =
      i + 1 > reviewsList.length - 1 ? reviewsList.length - 1 : i + 1
    if (i === reviewsList.length - 1) return
    this.setState({i: newIndex})

    this.setState({reviewItem: reviewsList[newIndex]})
  }

  render() {
    const {reviewItem} = this.state
    const {imgUrl, username, companyName, description} = reviewItem
    return (
      <div className="review-app">
        <div className="carousel">
          <h1 className="main-heading">Reviews</h1>
          <img src={imgUrl} alt={username} className="user-image" />

          <div className="change-image">
            <button
              type="button"
              onClick={this.leftArrow}
              data-testid="leftArrow"
              className="left-btn"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="left-arrow"
              />
            </button>

            <div>
              <p textContent={username} className="user-name">
                {username}
              </p>
              <p className="company-name">{companyName}</p>
            </div>

            <button
              type="button"
              onClick={this.rightArrow}
              data-testid="rightArrow"
              className="right-btn"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="right-arrow"
              />
            </button>
          </div>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}
