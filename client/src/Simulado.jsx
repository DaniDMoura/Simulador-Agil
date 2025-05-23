import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer'
import header from './assets/header.png'

Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf' },
    { src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf', fontWeight: 'bold' },
  ]
});


const styles = StyleSheet.create({
  page: { padding: 0, borderWidth: 2, borderColor: 'black', borderStyle: 'solid', fontFamily:'Roboto'},
  title: { fontSize: 24, marginBottom: 20 },
  questionTitle: {fontSize: 13, fontWeight: 'bold', marginBottom:10, marginTop: 20 },
  context: { fontSize: 12, marginBottom: 20, marginTop: 10  },
  alternativa: { fontSize: 12, marginLeft: 10 },
  alternativeImage: { maxWidth: 100, maxHeight: 50, marginBottom: 10 },
  image: { maxHeight: 200, maxWidth: 200, marginTop: 20}
})

const Simulado = ({ questions }) =>{
  const sortedQuestions = [...questions].sort(() => Math.random() - 0.5)
  return (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={ { padding: 0, margin: 0} } src={header}/>
      <View style={ {paddingHorizontal: 30, paddingVertical: 10} }>
        {sortedQuestions && sortedQuestions.map((question, idx) => (
        <View key={idx} style={{ marginBottom: 24 }}>
          <Text style={ styles.questionTitle }>(ENEM {question.year}) {question.title}</Text>
          {question.files && question.files.length > 0 && question.files.map((file, i) => (
            <Image style={styles.image} key={i} src={file} />
          ))}
          {question.context && <Text style={styles.context}>{question.context}</Text>}
          <Text style={ { marginBottom: 20, fontSize: 12, } }>{question.alternativesIntroduction}</Text>

          {question.alternatives && question.alternatives.length > 0 && (
            <View>
              {question.alternatives.map((alternative, i) => (
                <View key={i} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 1 }}>
                  <Text style={{ fontSize: 13 }}>{alternative.letter}. </Text>
                  <Text style={styles.alternativa}>{alternative.text}</Text>
                  {alternative.file && <Image style={styles.alternativeImage} src={alternative.file} />}
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
      </View>
    </Page>
  </Document>
)}

export default Simulado
