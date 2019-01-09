import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import BigGreyImage from '../../components/bigGreyImage'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { I18nextProvider, translate } from "react-i18next"
import i18n from '../../data/translations'
import Button from '../../components/button'
import OurRecruitment from '../../components/ourValues'
import {
  H3,
  PageSizer,
} from '../../components/styledComponents'
import {
  H4,
  SectionContainer,
  PositonsContainer,
  PositionCard,
  SubTitle,
  RecruitmentProcessContainer,
} from './styledComponents';

const WrapperButton = ({ id, onClick }) => {
  const handleClick = () => {
    onClick(id);
  }
  return (
    <Button
      text="View More"
      padding="5px 10px"
      size="12px"
      onClick={handleClick}
    />
  );
}

WrapperButton.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}


const PositionCardItems = ({ openPositions, t, onClickPosition }) => {
  const positionCard = [];
  for (var i = 0; i < openPositions; i++) {
    positionCard.push(
      <PositionCard key={`position-card-${i}`}>
        <H4>{t(`careers.openPositions.positions.${i}.title`)}</H4>
        <SubTitle>Full Time</SubTitle>
        <WrapperButton id={i} onClick={onClickPosition}/>
      </PositionCard>
    );
  }
  return (
    <PositonsContainer>
      {positionCard}
    </PositonsContainer>
  );
};

PositionCardItems.defaultProps = {
  openPositions: PropTypes.number.isRequired,
  t: PropTypes.object.isRequired,
  onClickPosition: PropTypes.func.isRequired,
}

class IndexPage extends Component {
  state = {
    openPositionSelected: null,
  };

  renderOurRecruitment = () => {
    const {
      data: {
        site: {
          siteMetadata: {
            careers: {
              recruitmentProcess,
            },
          },
        },
      },
      data,
      t,
    } = this.props;
    return recruitmentProcess.map((item, index) => (
      <OurRecruitment
        key={`${index}-${item}`}
        title={t(`careers.recruitmentProcess.${item}.title`)}
        description={t(`careers.recruitmentProcess.${item}.description`)}
        image={data[`${item}Icon`].childImageSharp.sizes}
        contentCustomStyles={{ paddingBottom: 0 }}
      />
    ));
  }

  onClickPosition = ( positionId ) => {
    console.log('****');
    console.log(positionId);
    this.setState({
      openPositionSelected: positionId,
    })
  }

  render() {
    const { openPositionSelected } = this.state;
    const {
      data: {
        site: {
          siteMetadata: {
            careers: {
              openPositions,
            },
          },
        },
      },
      data,
      t,
    } = this.props;
    return (
      <I18nextProvider i18n={i18n}>
      <Layout>
        <SEO title="Sancrisoft | Homepage" keywords={['sancrisoft', 'digital-solutions']} />
        <section>
          <BigGreyImage
            image={data.aboutUsMainImage.childImageSharp.sizes}
            title={t('aboutUs.bigImage.title')}
            description={t('aboutUs.bigImage.description')}
          />
        </section>
        <PageSizer>
          <SectionContainer>
            <H3>{t('careers.recruitment.title')}</H3>
            <RecruitmentProcessContainer>
              {this.renderOurRecruitment()}
            </RecruitmentProcessContainer>
            <H3>{t('careers.openPositions.title')}</H3>
            <PositionCardItems
              openPositions={openPositions}
              t={t}
              onClickPosition={this.onClickPosition}
            />
          </SectionContainer>
          {openPositionSelected !== null && <div>
            {t(`careers.openPositions.positions.${openPositionSelected}.description`)}
          </div>}
        </PageSizer>
      </Layout>
      </I18nextProvider>
    );
  }
}

// Queries for images (One query by image)
export const query = graphql`
query portfolioQuery {
  aboutUsMainImage:file(relativePath: { eq: "aboutUs/team.png" }) {
    ...imageFragment
  }
  astronaut:file(relativePath: { eq: "home/gatsby-astronaut.png" }) {
    ...imageFragment
  }
  icon:file(relativePath: { eq: "gatsby-icon.png" }) {
    ...imageFragment
  }
  applicationIcon:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  assigmentIcon:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  interviewIcon:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  offerIcon:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      title
      careers {
        recruitmentProcess
        openPositions
      }
    }
  }
}
`;

export default translate("translations")(IndexPage)
