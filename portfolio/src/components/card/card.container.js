import { createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CardComponent } from './card.component'
import { flipCard } from '../../actions/card'
import { getCardState } from '../../selectors/card'
import { getActivePage } from '../../selectors/page'


export const mapDispatchToProps = dispatch => bindActionCreators({
  flipCard: flipCard,
}, dispatch)

export const mapStateToProps = createSelector(
  getCardState,
  getActivePage,
  (getCardState, getActivePage) => ({
    getCardState,
    getActivePage
  })
)

export const CardPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardComponent)
