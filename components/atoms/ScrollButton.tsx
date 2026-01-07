import { Button } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'

interface ScrollButtonProps {
  targetId: string
  label?: string
}

export function ScrollButton({ targetId, label = 'Learn more' }: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Button
      variant="contained"
      size="large"
      endIcon={<KeyboardArrowDown />}
      onClick={handleClick}
      sx={{
        mt: 3,
        px: 4,
        py: 1.5,
        borderRadius: 3,
        textTransform: 'none',
        fontSize: '1.1rem',
      }}
    >
      {label}
    </Button>
  )
}

