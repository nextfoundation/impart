import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './AnimatedTab.styles.js'
import { returnIconAsImage } from '../../../../util/media'

class AnimatedTab extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    renderContent: PropTypes.func,
  }

  state = {}

  render() {
    const { title, icon, renderContent } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleText}>{title.toUpperCase()}</Text>
          <View style={styles.iconContainer}>
            {returnIconAsImage(icon || 'dropdown', styles.icon)}
          </View>
        </View>
        {renderContent ? (
          <View style={styles.content}>
            {renderContent()}
          </View>
        ) : null}
      </View>
    )
  }
}

export default AnimatedTab