import type React from "react"

interface PageTemplateProps {
  title: string
  description?: string
  children: React.ReactNode
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ title, description, children }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight dark:text-white">{title}</h1>
        {description && <p className="text-gray-500 dark:text-gray-400">{description}</p>}
      </div>
      {children}
    </div>
  )
}

