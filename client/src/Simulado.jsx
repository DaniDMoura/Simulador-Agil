import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: { padding: 30 },
  title: { fontSize: 24, marginBottom: 20 },
  question: { marginBottom: 15 },
  disciplina: { fontSize: 12, color: 'grey' },
  alternativa: { marginLeft: 10 },
})

const Simulado = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Simulado</Text>
    </Page>
  </Document>
)

export default Simulado
