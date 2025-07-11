import { Dialog, DialogContent, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useRouter } from 'next/router'

interface DevShopMenuDialogProps {
  open: boolean
  onClose: () => void
}

const DevShopMenuDialog = ({ open, onClose }: DevShopMenuDialogProps) => {
  const router = useRouter()

  const handleNavigate = (path: string) => {
    router.push(path)
    onClose()
  }

  const handleAnchorClick = (anchor: string) => {
    onClose()
    setTimeout(() => {
      const element = document.querySelector(anchor)
      element?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          position: 'fixed',
          top: 0,
          m: 0,
          borderRadius: 0,
          bgcolor: '#1A1A1A',
          color: '#F9FAFB'
        }
      }}
    >
      <DialogContent sx={{ p: 0, bgcolor: '#1A1A1A' }}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: '#D1D5DB' }}
        >
          <CloseIcon />
        </IconButton>
        <List sx={{ pt: 6 }}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigate('/home')}>
              <ListItemText primary="Products" sx={{ color: '#F9FAFB' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleAnchorClick('#portfolio')}>
              <ListItemText primary="Portfolio" sx={{ color: '#F9FAFB' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleAnchorClick('#services')}>
              <ListItemText primary="Services" sx={{ color: '#F9FAFB' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => window.location.href = 'mailto:business@nitoons.com'}>
              <ListItemText primary="Contact Us" sx={{ color: '#3B82F6', fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  )
}

export default DevShopMenuDialog