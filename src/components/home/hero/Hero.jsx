import React from 'react'
import Title from '../../common/title/Title'
import "./hero.css"

const hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
          <div className="row">
            <Title subtitle ='WELCOME TO COURSEHUB' title = 'Best '></Title>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, minus, libero quaerat aliquam eos inventore exercitationem expedita consequuntur nihil pariatur blanditiis omnis nulla totam vitae fuga sit rem molestiae sunt?</p>
            <button className='primary-btn'>
              GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
            </button>
            <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default hero