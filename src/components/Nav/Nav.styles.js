import { STATUS_BAR_HEIGHT } from '../../common/constants/sizes'
import { PixelRatio } from 'react-native'

export default {
  container: {
    backgroundColor: 'red',
    flex: 8,
    flexDirection: 'row',
    height: 73,
    paddingTop: STATUS_BAR_HEIGHT,
    paddingBottom: 3,
    marginBottom: 21,
  },
  title: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleImage: {
    width: 79,
    height: 30,
  },
  side: {
    flex: 2,
    padding: 18,
    position: 'absolute',
  },
  iconImage: {
    height: 20,
    width: 30,
  },
  left: {
    left: 0,
  },
  right: {
    right: 18 + 30 + 18,
  },
}
