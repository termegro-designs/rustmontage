interface SEOHeaderProps {
  keywords: string[]
  primaryKeyword: string
  location?: string
}

export default function SEOHeader({ keywords, primaryKeyword, location = "Wien" }: SEOHeaderProps) {
  const headerText = `${primaryKeyword} ${location} - ${keywords.join(' ')} - Professionelle Handwerksdienstleistungen`
  
  return (
    <h1 
      className="absolute top-0 left-0 w-full h-0 overflow-hidden opacity-0 invisible text-[0px] leading-[0]"
      style={{
        color: 'transparent',
        backgroundColor: 'transparent',
        border: 'none',
        margin: 0,
        padding: 0,
        position: 'absolute',
        clip: 'rect(0, 0, 0, 0)',
        height: '1px',
        width: '1px',
        whiteSpace: 'nowrap'
      }}
      aria-hidden="true"
    >
      {headerText}
    </h1>
  )
}
