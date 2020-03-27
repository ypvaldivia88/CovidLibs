import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'
import { apply, family, colors } from 'osmicsx'

export default StyleSheet.create({
  container: apply([
    "flex",
    "bg-gray-800"
  ]),
  summaryContainer: apply([
    "flex",
    "row",
    "justify-center",
    "items-center",
    "p-5"
  ]),
  welcomeText: apply([
    "text-white",
    "text-5xl",
    family(Fonts.type.medium),
    "flex-wrap",
    "leading-10"
  ])
})
