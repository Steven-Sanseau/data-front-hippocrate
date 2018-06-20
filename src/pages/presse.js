import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Text, Image, Link, Blockquote } from 'rebass'

import client from '../utils/client'
import { GET_PAGE } from '../query'
import 'regenerator-runtime/runtime'

import Footer from '../components/Footer'
import Header from '../components/Header'

export default class PressePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        steps: [],
      },
    }
  }
  static propTypes = {
    location: PropTypes.object,
  }

  async componentDidMount() {
    const { data } = await client.query({
      query: GET_PAGE,
    })

    this.setState({ data })
  }

  render() {
    const { location } = this.props
    const { data } = this.state
    return (
      <main>
        <Header location={location} />

        <Flex mx={-2} justifyContent="center">
          <Box width={['100%', '60%']}>
            <Flex justifyContent="center">
              <Box width={[1, 1, 1, 1 / 2]} px={2}>
                <Text
                  color="dark_grey"
                  textAlign="right"
                  fontSize={25}
                  fontWeight={300}
                  mt={6}
                >
                  Communiqué de presse
                </Text>
              </Box>
              <Box width={[0, 0, 1 / 2, 1 / 3]} px={2}>
                <Box>
                  <Image
                    ml="2em"
                    style={{ opacity: 0.2 }}
                    width={['100%', '200px']}
                    src="/static/hippocrate.png"
                  />
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Flex justifyContent="center" mt={6}>
          <Box width={[1, '45%']}>
            <Text textAlign="center" is="h2" mb={4}>
              Un “serment d’Hippocrate pour toute personne travaillant avec la
              donnée” vers un engagement éthique des data scientists
            </Text>
            <br />
            <Text textAlign="justify" fontWeight={300}>
              Le collectif Data for Good invite, via un site internet, les data
              scientists et les spécialistes de la donnée à s’engager à
              respecter une charte éthique.
              <br />
              <br />
              Cette initiative a été lancée dans le cadre de la saison
              d'accélération 2018 de Data for Good, qui regroupe des bénévoles
              pendant trois mois pour mettre la data science au service de
              l’intérêt général à travers le développement de réflexions et de
              produits fonctionnels s'attaquant à des problèmes de société.
              <br />
              <br />
              <Blockquote fontWeight={600}>
                “C’est un projet par et pour des data scientists, ouvert et
                bénévole”, explique Soline Ledésert, membre du projet
              </Blockquote>
              <br />
              Le projet a impliqué plus d’une centaine de data scientists et
              d’experts qui collectent, stockent, traitent, modélisent,
              analysent des données et font de la prédiction dans le cadre de
              leur activité professionnelle. Ces data scientists travaillent
              dans des start-up, des grandes entreprises, des cabinets de
              conseil, des PME, des administrations, ou sont indépendants ou
              chercheurs.<br />
              <br />
              La charte est proposée sur le site www.hippocrate.tech : elle
              s’articule à la fois autour de principes éthiques fondamentaux et
              de bonnes pratiques d’utilisation des données.
              <br />
              <br />
              Les principes d’intégrité scientifique, de transparence, d’équité,
              de respect et de responsabilité sont mis en avant. Les engagements
              sont formulés à la première personne, comme dans le serment
              d’Hippocrate des médecins :
              <Blockquote>
                « Je veillerai à toujours m’assurer que des individus ne sont
                pas discriminés par rapport à des critères illégaux ou
                illégitimes, de façon directe ou indirecte, sur la base de mes
                travaux sur les données. »
              </Blockquote>
              <Blockquote>
                « J’exercerai mon activité professionnelle en respectant la vie
                privée et la dignité humaine dans toutes leurs dimensions. »
              </Blockquote>
              <Blockquote>
                « J’assumerai mes responsabilités en cas de difficultés ou de
                conflits d’intérêt et je donnerai l’alerte si des actes illégaux
                liés à des données sont constatés. »
              </Blockquote>
              Toute personne travaillant avec la donnée peut lire la charte et
              la signer publiquement sur www.hippocrate.tech.
              <br />
              <br />
              <Blockquote>
                “C’est un guide pratique que l’on peut utiliser à chaque étape
                de notre travail de data scientist et qui rappelle la dimension
                éthique et les limites à respecter”, selon Sami Moustachir, data
                scientist
              </Blockquote>
              La charte contient en effet une dimension opérationnelle à travers
              des conseils pratiques. Décrite comme une “check-list éthique”,
              elle concerne par exemple l’application de modèles algorithmiques,
              qui sont souvent assimilés à des boîtes noires : <br />
              <br />
              <Blockquote>
                « Je m'engage à … ... prévoir les dérives possibles du modèle
                par rapport aux données dans le temps, de façon à éviter
                l'apparition de biais supplémentaires. ... réfléchir à la
                performance et à l'interprétabilité de chaque modèle à
                disposition et, si possible, opter pour les modèles les plus
                explicables aux personnes concernées par les résultats »
              </Blockquote>
            </Text>
          </Box>
        </Flex>
        <Footer />
      </main>
    )
  }
}
