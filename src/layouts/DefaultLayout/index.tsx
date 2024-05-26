import { Outlet } from 'react-router-dom'
import CoverImage from '../../assets/cover.png'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <img src={CoverImage} alt="Cover" />
      <Outlet />
    </LayoutContainer>
  )
}
