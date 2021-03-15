import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as NavbarAction from "../store/actions/navbarAction"

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(NavbarAction, dispatch)
}