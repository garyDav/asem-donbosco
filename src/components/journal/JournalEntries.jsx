import React from 'react'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {
  const entries = [1, 2, 3, 4, 5]

  return (
    <div className='journal__entries'>
      {/*entries.map(value => (
        <JournalEntry key={value} />
      ))*/}
      <div className='journal__entry-picture center'>
        <img src='logo-white.png' alt='Logo' />
      </div>

      <JournalEntry />
    </div>
  )
}
