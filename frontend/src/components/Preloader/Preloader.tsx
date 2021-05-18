import * as React from 'react'
import css from './Preloader.module.scss'
const Preloader = () => {
  return <div className={css.container}>
    <div className={`${css.ball} ${css.i1}`}></div>
    <div className={`${css.ball} ${css.i2}`}></div>
    <div className={`${css.ball} ${css.i3}`}></div>
  </div>
}

export default Preloader
