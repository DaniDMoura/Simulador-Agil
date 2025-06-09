import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import header from "./assets/header.png";
import gabarito from "./assets/gabarito.png";

const styles = StyleSheet.create({
  page: {
    paddingVertical: 10,
  },
  questionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
  },
  context: { fontSize: 12, marginBottom: 10, marginTop: 5 },
  alternativa: { fontSize: 12, marginLeft: 10 },
  alternativeImage: { maxWidth: 100, maxHeight: 100, marginBottom: 10 },
  image: { maxHeight: 250, maxWidth: 250, marginTop: 10 },
});

const Simulado = ({ questions }) => {
  const sortedQuestions = [...questions].sort(() => Math.random() - 0.5);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image style={{ padding: 0, margin: 0 }} src={header} />
        <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
          {sortedQuestions &&
            sortedQuestions.map((question, idx) => (
              <View key={idx} style={{ marginBottom: 12 }}>
                <Text style={styles.questionTitle}>
                  (ENEM {question.year}) Exercício {idx + 1}
                </Text>

                {question.files &&
                  question.files.length > 0 &&
                  question.files.map((file, i) => (
                    <Image style={styles.image} key={i} src={file} />
                  ))}

                {question.context && (
                  <Text style={styles.context}>{question.context.replace(/\*/g,'').replace(/!\[.*?\]\(.*?\)/g,'')}</Text>
                )}

                <Text style={{ marginBottom: 10, fontSize: 12, fontWeight: 'bold' }}>
                  {question.alternativesIntroduction}
                </Text>

                {question.alternatives && question.alternatives.length > 0 && (
                  <View>
                    {question.alternatives.map((alternative, i) => (
                      <View
                        key={i}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginBottom: 1,
                        }}
                      >
                        <Text style={{ fontSize: 13 }}>
                          {`${alternative.letter.toLowerCase()}) `}
                        </Text>
                        <Text style={styles.alternativa}>
                          {alternative.text}
                        </Text>
                        {alternative.file && (
                          <Image
                            style={styles.alternativeImage}
                            src={alternative.file}
                          />
                        )}
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
        </View>
        <View>
          <Image style={{ padding: 0, marginBottom: 10 }} src={gabarito} />
          <View style={{flexDirection:'row',gap: 2, flexWrap: 'wrap' }}>
            {sortedQuestions && sortedQuestions.map((question, idx) => (
              <View key={idx}>
                <Text style={styles.alternativa}>{idx + 1}: <Text style={{ fontWeight: 'bold' }}>{question.correctAlternative}</Text></Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Simulado;