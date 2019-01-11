import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, withPrefix } from 'gatsby'
import ReactHtmlParser from 'react-html-parser';
import BigGreyImage from '../../components/bigGreyImage'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { I18nextProvider, translate } from "react-i18next"
import i18n from '../../data/translations'
import Button from '../../components/button'
import OurRecruitment from '../../components/ourValues'
import OurValues from '../../components/ourValues'
import GalleryGrid from '../../components/galleryGrid'
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
  ImgCustom,
  PositionSubtitles,
  PositionDetailsContainer,
  PositionDetailsText,
  PositionDetailsForm,
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
    this.setState({
      openPositionSelected: positionId,
    })
  }

  renderBenefits = () => {
    const {
      data: {
        site: {
          siteMetadata: {
            careers: {
              benefits,
            },
          },
        },
      },
      data,
      t,
    } = this.props;
    return benefits.map((benefit) => (
      <OurValues
        key={benefit}
        description={t(`careers.benefits.${benefit}.description`)}
        title={t(`careers.benefits.${benefit}.title`)}
        image={data[`${benefit}`].childImageSharp.sizes}
        descDirection={'row'}
        chipOn
      />
    ));
  }

  renderGalleryGrid = () => {
    const {
      data: {
        site: {
          siteMetadata: {
            careers: {
              teamPhotos,
            },
          },
        },
      },
      data,
    } = this.props;
    return(
      <GalleryGrid
        images={teamPhotos.map((tp) => ({ ...tp, sizes: data[tp.id].childImageSharp.sizes }))}
      />
    );
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
            image={data.careersMainImage.childImageSharp.sizes}
            title={t('careers.bigImage.title')}
            description={t('careers.bigImage.description')}
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
          {openPositionSelected !== null && <PositionDetailsContainer>
            <PositionDetailsText>
              <H3>{t(`careers.openPositions.positions.${openPositionSelected}.title`)}</H3>
              {(t([`careers.openPositions.positions.${openPositionSelected}.image`, ''])) && (
                <ImgCustom src={withPrefix(`/images/careers/${t(`careers.openPositions.positions.${openPositionSelected}.image`)}`)} />
              )}
              {(t([`careers.openPositions.positions.${openPositionSelected}.positionDescription`, ''])) && (
                <div>
                  <PositionSubtitles style={{ marginTop: '1em' }}>{t(`careers.openPositions.positionDescriptionTitle`)}</PositionSubtitles>
                  {ReactHtmlParser(t(`careers.openPositions.positions.${openPositionSelected}.positionDescription`))}
                </div>

              )}
              {(t([`careers.openPositions.positions.${openPositionSelected}.technicalSkills`, ''])) && (
                <div>
                  <PositionSubtitles>{t(`careers.openPositions.technicalSkillsTitle`)}</PositionSubtitles>
                  {ReactHtmlParser(t(`careers.openPositions.positions.${openPositionSelected}.technicalSkills`))}
                </div>

              )}
              {(t([`careers.openPositions.positions.${openPositionSelected}.responsabilities`, ''])) && (
                <div>
                  <PositionSubtitles>{t(`careers.openPositions.responsabilitiesTitle`)}</PositionSubtitles>
                  {ReactHtmlParser(t(`careers.openPositions.positions.${openPositionSelected}.responsabilities`))}
                </div>

              )}
              {(t([`careers.openPositions.positions.${openPositionSelected}.extraContent`, ''])) && (
                <div>
                  <PositionSubtitles>{t(`careers.openPositions.positions.${openPositionSelected}.extraTitle`)}</PositionSubtitles>
                  {ReactHtmlParser(t(`careers.openPositions.positions.${openPositionSelected}.extraContent`))}
                </div>
              )}
            </PositionDetailsText>
            <PositionDetailsForm>
              {'This is the form'}
            </PositionDetailsForm>
          </PositionDetailsContainer>}
          <SectionContainer>
            <H3>{t('careers.benefits.title')}</H3>
            <RecruitmentProcessContainer>
              {this.renderBenefits()}
            </RecruitmentProcessContainer>
          </SectionContainer>
        </PageSizer>
        { this.renderGalleryGrid() }
      </Layout>
      </I18nextProvider>
    );
  }
}

// Queries for images (One query by image)
export const query = graphql`
query portfolioQuery {
  careersMainImage:file(relativePath: { eq: "careers/work.jpg" }) {
    ...imageFragment
  }
  astronaut:file(relativePath: { eq: "home/gatsby-astronaut.png" }) {
    ...imageFragment
  }
  icon:file(relativePath: { eq: "gatsby-icon.png" }) {
    ...imageFragment
  }
  applicationIcon:file(relativePath: { eq: "careers/recruitment/application.png" }) {
    ...imageFragment
  }
  assigmentIcon:file(relativePath: { eq: "careers/recruitment/assignment.png" }) {
    ...imageFragment
  }
  interviewIcon:file(relativePath: { eq: "careers/recruitment/interview.png" }) {
    ...imageFragment
  }
  offerIcon:file(relativePath: { eq: "careers/recruitment/offer.png" }) {
    ...imageFragment
  }
  salary:file(relativePath: { eq: "careers/benefits/salary.png" }) {
    ...imageFragment
  }
  vacations:file(relativePath: { eq: "careers/benefits/vacations.png" }) {
    ...imageFragment
  }
  remote:file(relativePath: { eq: "careers/benefits/remote.png" }) {
    ...imageFragment
  }
  environment:file(relativePath: { eq: "careers/benefits/environment.png" }) {
    ...imageFragment
  }
  bonus:file(relativePath: { eq: "careers/benefits/bonus.png" }) {
    ...imageFragment
  }
  snack:file(relativePath: { eq: "careers/benefits/snack.png" }) {
    ...imageFragment
  }
  happy:file(relativePath: { eq: "careers/benefits/happy.png" }) {
    ...imageFragment
  }
  workstation:file(relativePath: { eq: "careers/benefits/workstation.png" }) {
    ...imageFragment
  }
  support:file(relativePath: { eq: "careers/benefits/support.png" }) {
    ...imageFragment
  }
  careersPhoto1:file(relativePath: { eq: "careers/team/chicamocha1.jpg" }) {
    ...imageFragment
  }
  careersPhoto2:file(relativePath: { eq: "careers/team/chicamocha2.jpg" }) {
    ...imageFragment
  }
  careersPhoto3:file(relativePath: { eq: "careers/team/chicamocha3.jpg" }) {
    ...imageFragment
  }
  careersPhoto4:file(relativePath: { eq: "careers/team/chicamocha4.jpg" }) {
    ...imageFragment
  }
  careersPhoto5:file(relativePath: { eq: "careers/team/chicamocha5.jpg" }) {
    ...imageFragment
  }
  careersPhoto6:file(relativePath: { eq: "careers/team/chicamocha6.jpg" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      title
      careers {
        recruitmentProcess
        openPositions
        benefits
        teamPhotos {
          id
          colSpan
          rowSpan
          mobileColSpan
          mobileRowSpan
          tabletColSpan
          tabletRowSpan
        }
      }
    }
  }
}
`;

export default translate("translations")(IndexPage)
