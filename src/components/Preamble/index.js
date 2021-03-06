import React from 'react'
import { Box, Text, Flex, Relative, Absolute, Image } from 'rebass'
import Description from './Description'
import Number from './Number'
import Title from './Title'
import Underline from './Underline'
import UnderlineText from '../UnderlineText'
import Hide from 'hidden-styled'

const Preamble = () => (
  <div>
    <Box mt={[1, 6]}>
      <Flex justifyContent="center">
        <Box width={['90%', '60%']} fontWeight={300}>
          <Text fontWeight={300}>
            En tant que <strong>professionnel(le)</strong> amené(e) à
          </Text>
          <Text
            mt={3}
            lineHeight={['30px', '30px', '30px', '20px']}
            fontWeight={300}
          >
            collecter, stocker, traiter, modéliser, analyser des données et/ou à
            concevoir des algorithmes, des produits informatiques ou des
            interfaces,
          </Text>
          <Text mt={3} fontWeight={300}>
            je suis conscient(e) de <UnderlineText text="l’impact" /> que peut
            avoir mon travail sur des individus et sur la société dans son
            ensemble.
          </Text>
        </Box>
      </Flex>
      <Box mx={-2} my={5} p={4} bg="grey_background" borderColor="grey_border">
        <Flex justifyContent="center">
          <Box width={['100%', '80%', '60%']}>
            <Description>
              C’est pourquoi je m’engage à respecter les 5 principes suivants :
            </Description>
            {/*First ELEMENT*/}
            <Flex alignItems="left">
              <Relative>
                <Absolute top="5.1em">
                  <Underline />
                </Absolute>
              </Relative>
              <Number style={{ opacity: 0.07 }}>1</Number>
              <Title>Intégrité scientifique et rigueur</Title>
            </Flex>
            <Description>
              J’exploiterai les données avec toute la rigueur requise et en
              conformité avec les meilleurs standards de ma profession.
            </Description>

            {/*Second ELEMENT*/}
            <Flex alignItems="left">
              <Relative>
                <Absolute top="5.1em">
                  <Underline />
                </Absolute>
              </Relative>
              <Number style={{ opacity: 0.14 }}>2</Number>
              <Title>Transparence</Title>
            </Flex>
            <Description>
              J’informerai de façon compréhensible et précise toutes les parties
              prenantes sur les finalités, les modalités et les implications
              potentielles de mon utilisation des données.
            </Description>

            {/*Third ELEMENT*/}
            <Flex alignItems="left">
              <Relative>
                <Absolute top="5.1em">
                  <Underline />
                </Absolute>
              </Relative>
              <Number style={{ opacity: 0.21 }}>3</Number>
              <Title>Equité</Title>
            </Flex>
            <Description>
              Je veillerai à toujours m’assurer que des individus ou des groupes
              ne soient pas discriminés par rapport à des critères illégaux ou
              illégitimes, de façon directe ou indirecte, sur la base de mes
              travaux sur les données.
            </Description>

            {/*Fourth ELEMENT*/}
            <Flex alignItems="left">
              <Relative>
                <Absolute top="5.1em">
                  <Underline />
                </Absolute>
              </Relative>
              <Number style={{ opacity: 0.28 }}>4</Number>
              <Title>Respect</Title>
            </Flex>
            <Description>
              J’exercerai mon activité professionnelle en respectant la vie
              privée et la dignité des personnes dans toutes leurs dimensions.
            </Description>

            {/*Fifth ELEMENT*/}
            <Flex alignItems="left">
              <Relative>
                <Absolute top="5.1em">
                  <Underline />
                </Absolute>
              </Relative>
              <Number style={{ opacity: 0.35 }}>5</Number>
              <Title>Responsabilité et indépendance</Title>
            </Flex>
            <Description>
              J’assumerai mes responsabilités en cas de manquements ou de
              conflits d’intérêt et je donnerai l’alerte si des actes illégaux
              liés à des données sont constatés.
            </Description>
          </Box>
        </Flex>
      </Box>
    </Box>
    <Box mt={[1, 5]}>
      <Flex justifyContent="center">
        <Box width={['90%', '60%']} fontSize="16">
          <Text lineHeight="20px">
            Pour mettre en application ces principes au quotidien, Data for Good
            a rédigé la <UnderlineText text="check-list éthique" /> ci-dessous.
          </Text>
          <Text mt={1}>
            C’est une série de questions qu’on propose de se poser à{' '}
            <UnderlineText
              text="chaque
            étape"
            />{' '}
            du travail en entreprise, en recherche ou en administration.
          </Text>
        </Box>
      </Flex>
    </Box>
    <Hide xs>
      <Relative>
        <Absolute m={-2} left={0} top={-160}>
          <Image src={'/static/hand.png'} />
        </Absolute>
      </Relative>
    </Hide>
  </div>
)

export default Preamble
