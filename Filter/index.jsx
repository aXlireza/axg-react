
import style from './style.module.css'
import Input from '../Input'
import { useState, useEffect } from 'react'
import xjs from '@axoncodes/xjs'
import dynamic from 'next/dynamic'

const Text = dynamic(() => import('../Text2'), {ssr: false,})
export default function Filter({
  filterPrefix,
  targetId,
  filterPlacement,
  elementId,
  elements,
  catFilter
}) {

  const [filters, setFilters] = useState([])
  
  const handleFiltersClick = event => {
    const value = event.target.value.length > 0 ? event.target.value : event.target.name
    if (event.target.type == 'color') {
      colorScript(value)
    } else {
      let tmpFilters = []
      tmpFilters = !event.target.checked
      ? xjs.map(filters, (filter) => (filter != value ? filter : null))
      : [...filters, value]
      console.log(tmpFilters)
      setFilters(tmpFilters)
      filterScript(tmpFilters)
    }
  }

  const colorScript = color => {
    document.querySelectorAll(`#${targetId} .${filterPlacement} i`).forEach(element => {element.style.color = color})
  }

  const filterScript = (tmpFilters) => {
    if (tmpFilters.length == 0) document.querySelectorAll(`#${targetId} .${filterPlacement}`).forEach(element => {element.classList.remove('hide')})
    else {
      document.querySelectorAll(`#${targetId} .${filterPlacement}`).forEach(element => {
        let toHide = false
        tmpFilters.forEach(filter => {
          if (!element.classList.contains(`${filterPrefix}${filter}`)) toHide = true
        })
        if (toHide) element.classList.add('hide')
        else element.classList.remove('hide')
      })
    }
  }

  useEffect(() => {
    if (catFilter) {
      let tmpFilters = [...filters, ...catFilter]
      setFilters(tmpFilters)
      filterScript(tmpFilters)
    }
  }, [catFilter])
  
  return (
    <div className={style.body} id={elementId}>
      {elements.map((filter, i) => (
        <div key={i}>
          <Text tag="p" key={i} text={filter.name} textclasses={filter.classes} />
          <ul className={style.ul}>{filter.items.map((item, j) => (
            <li
              className={style.li}
              key={j}
            >
              <Input
                preactive={filters.filter(filter => filter.toLowerCase() == item.name.toLowerCase()).length > 0}
                checked={filters.filter(filter => filter.toLowerCase() == item.name.toLowerCase()).length > 0}
                label={item.label}
                onInput={handleFiltersClick}
                id={`${elementId}${i}${j}`}
                tag={item.tag}
                type={item.type}
                name={item.name}
                color={item.inputColor}
              />
            </li>
          ))}</ul>
        </div>
      ))}
    </div>
  )
}