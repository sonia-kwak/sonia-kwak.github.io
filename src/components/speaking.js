import React from 'react'

const Speaking = () => (
    <div>
      <Talk
        title="Gerando insights a partir de dados em produtos B2B complexos"
        context="TheDevelopersConference - Trilha Gestão de Produto. São Paulo, 2019"
        link="https://s3-sa-east-1.amazonaws.com/thedevconf/presentations/TDC2019SP/gestaoprod/YDA-7768_2019-07-18T102700_Gerando%20insights%20a%20partir%20de%20dados%20em%20produtos%20B2B%20complexos%20(1).pdf"
      />

      <Talk
        title="Uma nova experiência para criar e gerenciar promoções na VTEX"
        context="VTEX Day. São Paulo, 2019"
        link="https://docs.google.com/presentation/d/1eXlEMlTrrYifJIOIWkdEAiz_Pxo0iHnuXr_NhLsjQto/edit?usp=sharing"
      />

      <Talk
        title="A UX da Mobilidade Urbana - Cidades melhores para pedalar e viver"
        context="Interaction Latin America. Rio de Janeiro, 2018"
      link="https://docs.google.com/presentation/d/1pI4ONbgxePD8DrPSmUlRHCa_mSGdzyGJB8Qb38ur4bs/edit?usp=sharing"
      />

      {/* <Talk
        title="Rage, rage against the dying of the Design System - Morte e vida de um sistema para empoderar um ecossistema."
        context="Interaction Latin America, 2018 [proposal]"
        link="https://drive.google.com/open?id=10VxokY3c1onxm67WUD_flPh5tlxyydBy"
      /> */}

      <Talk
        title="É possível estacionar a bike de boa?"
        context="Bicicultura. Rio de Janeiro, 2018"
        link="https://docs.google.com/presentation/d/1JJvtK1kPmfCg-g06vtmPoQNBgT9BdHZQCGxbXaqZAm8/edit#slide=id.p"
      />

      <Talk
        title="Podcasts"
        context="Isobar Lightning Talks. Porto Alegre, 2017"
        link="https://docs.google.com/presentation/d/1hzKk7USBEVX9m8HlrZD5rRb8sp-VXWFYuyebHe5kzJ8/edit?usp=sharing"
      />

      <Talk
        title="Multimídias Livres"
        context="Fórum Internacional Software Livre. Porto Alegre, 2016"
        link="https://musica-libre.org/sprint_multimedia_2016_1"
      />

      <Talk
        title="O primeiro web app PWA para ciclistas"
        context="Google IO Extended. Porto Alegre, 2015"
        link="https://docs.google.com/presentation/d/18DyziybC2Benf43OMAd5T7611QULd9oWA1L60rzvrsM/edit#slide=id.p"
      />

      <Talk
        title="React no Mundo Real - Relatos do maior site de aluguel de carros do mundo"
        context="React Meetup. Porto Alegre, 2014"
        link="https://docs.google.com/presentation/d/1RnbQ5beTuvtUFzk6KX3kJXrF25i2WN-ZMcXbhlelktw/edit#slide=id.p"
      />

      {/* <Talk
        title="Slow TV"
        context="Isobar Lightning Talks, 2016"
        link="https://www.youtube.com/playlist?list=PLEQfAlS3xFFXkBT0lAzsiHvX1OKuH1qv5"
      />

      <Talk
        title="Fallacies"
        context="Isobar Lightning Talks, 2016"
        link="https://docs.google.com/presentation/d/1989zLiju0njGpa4oTJz3J80kEIODHYTTTfmP6UYX35M/edit#slide=id.p"
      /> */}

      <Talk
        title="O que aprendi com as Artes Marciais"
        context="Desconferência UFRGS. Porto Alegre, 2013"
        link="https://docs.google.com/presentation/d/1djDV4rN1B3gyP-ODDjxwNMGlvgfExUyxe47l8n7tI_w/edit#slide=id.p"
      />
    </div>
)

class Talk extends React.Component {
  render() {
    const { title, context, link } = this.props;

    return (
      <div className="pb4-ns pb3 animatable lh-copy">
        <div className="fw5 f4 mv1">
          {/* {title} */}
          <a className="pretty-link" href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </div>
        
        <div className="gray f5">
          {context}
        </div>
        
        {/* <div className="mv2">
          <a className="pretty-link" href={link}>
            Slides
          </a>
        </div> */}
      </div>
    )
  }
}

export default Speaking