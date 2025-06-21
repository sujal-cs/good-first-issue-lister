"use client"
import { useState } from "react";

interface IssueFormProps {
  onSubmit: (url: string) => void;
}

const IssueForm: React.FC<IssueFormProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(url)
  }

  return (
      <form className='flex gap-1 w-[65vw] items-center justify-center' onSubmit={handleSubmit}>
        <input 
          placeholder="Enter GitHub repo URL"
          className="bg-accent-2 text-sm p-2 md:p-3 rounded-lg border border-gray-800"
          onChange={(e) => {
            setUrl(e.target.value)
          }}
        />
        <button 
          type='submit' 
          className='rounded-lg p-2 text-sm bg-light text-dark md:text-lg'
        >
          Search
        </button>
      </form>
  )
}

export default IssueForm