import React from 'react'
import gallery from './gallery.json'

type CategoryListProps = {
  title: string
}

export function CategoryList(props: CategoryListProps) {
  return <div>{props.title}</div>
}
