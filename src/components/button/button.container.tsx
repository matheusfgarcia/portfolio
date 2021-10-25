import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ButtonComponent } from './button.component'
import { flipCard } from '../../actions/card'
import { activePage } from '../../actions/page'

export const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      flipCard: flipCard,
      activePage: activePage
    },
    dispatch
  )

export const ButtonPage = connect(
  null,
  mapDispatchToProps
)(ButtonComponent)
