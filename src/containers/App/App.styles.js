import { styles as colors } from '../../common/constants/colors'
import {
  CARD_WIDTH,
  CARD_HEIGHT,
  CARD_INSET
} from '../../common/constants/sizes'

export default {
  container: {
    backgroundColor: colors.gray
    // height: SCREEN_HEIGHT,
    // width: SCREEN_WIDTH,
  },
  swipeCards: {
    marginTop: CARD_INSET,
    marginBottom: CARD_INSET,
    padding: 0,
    backgroundColor: 'transparent'
  },
  backgroundCardContainer: {
    position: 'absolute',
    top: CARD_INSET + 4,
    left: CARD_INSET + 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT
  }
}
