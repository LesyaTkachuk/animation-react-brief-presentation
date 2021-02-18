import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./Swipper.module.scss";
import "../../animation/slideRight.css";
import "../../animation/slideLeft.css";
import Section from "../../Section/Section";

const images = [
  "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
  "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2",
  "https://s01.sgp1.cdn.digitaloceanspaces.com/article/51036-cwobnirfka-1580816618.jpeg",
  "https://furrytips.com/wp-content/uploads/2019/04/Best-Cat-Collar-810x540.jpg",
  "https://ds1.static.rtbf.be/image/media/object/default/16x9/1248x702/9/e/5/9e5ea6c22573e75fd73807a93817ea18.jpg",
];

class Swipper extends Component {
  state = {
    activeSlideIndex: 0,
    items: images,
    right: true,
  };

  getActiveImage = () => this.state.items[this.state.activeSlideIndex];

  showNext = () => {
    this.setState(({ activeSlideIndex, right }) => ({
      activeSlideIndex: activeSlideIndex + 1,
      right: true,
    }));
  };

  showPrev = () => {
    this.setState(({ activeSlideIndex, right }) => ({
      activeSlideIndex: activeSlideIndex - 1,
      right: false,
    }));
  };

  render() {
    const { activeSlideIndex, items, right } = this.state;
    const isOnFirstSlide = activeSlideIndex === 0;
    const isOnLastSlide = activeSlideIndex === items.length - 1;
    const image = this.getActiveImage();

    return (
      <Section>
        <div className={styles.controls}>
          <button
            type="button"
            className={isOnFirstSlide ? styles.disabled : styles.button}
            onClick={this.showPrev}
            disabled={isOnFirstSlide}
          >
            Prev
          </button>
          <button
            type="button"
            className={isOnLastSlide ? styles.disabled : styles.button}
            onClick={this.showNext}
            disabled={isOnLastSlide}
          >
            Next
          </button>
        </div>
        <div className={styles.swipper}>
          <TransitionGroup>
            <CSSTransition
              key={image}
              timeout={5000}
              classNames="slideRight"
              unmountOnExit
            >
              <img className={styles.img} src={image} alt="cat" />
            </CSSTransition>
          </TransitionGroup>
        </div>
      </Section>
    );
  }
}

export default Swipper;
