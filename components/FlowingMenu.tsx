"use client"

import React from 'react'
import Image from 'next/image'
import './FlowingMenu.css'

interface MenuItem {
  link: string
  text: string
  image: string
}

interface FlowingMenuProps {
  items: MenuItem[]
}

function FlowingMenu({ items = [] }: FlowingMenuProps) {
  // 复制项目数组以实现无缝循环
  const duplicatedItems = [...items, ...items]

  return (
    <div className="skills-container">
      <div className="skills-overflow">
        <div className="skills-scroll">
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="skill-item"
            >
              <div className="skill-icon">
                <Image
                  src={item.image}
                  alt={item.text}
                  width={18}
                  height={18}
                  className="skill-image"
                />
              </div>
              <span className="skill-text">{item.text}</span>
            </div>
          ))}
        </div>
        
        {/* 左右渐变遮罩 */}
        <div className="gradient-mask-left"></div>
        <div className="gradient-mask-right"></div>
      </div>
    </div>
  )
}

export default FlowingMenu 