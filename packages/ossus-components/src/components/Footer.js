import React from 'react';
import styled from '@emotion/styled';
import { lighten } from 'polished';
import { withConfig } from 'ossus';
import Link from './Link';

const Footer = ({ config }) => (
  <FooterContainer>
    <FooterContent>
      {
        config.site.footerLinks.map(section => (
          <div className='footer-list' key={section.title}>
            <h3>{section.title}</h3>
            <ul>
              {
                section.links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} route={link.route} params={link.params || {}}>{link.label}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </FooterContent>
    <FooterBottomBar>
      <FooterBottomBarContent>
        <div className='social'>
          {
            config.site.socialLinks.map(link => (
              <a href={link.route} key={link.label}>{link.label}</a>
            ))
          }
        </div>
        <div>
          <p>{config.site.trademark}</p>
        </div>
      </FooterBottomBarContent>
    </FooterBottomBar>
  </FooterContainer>
);

const FooterContainer = styled('div')`
  width: 100%;
  background-color: ${props => props.theme.color.bgDark};
`;

const FooterContent = styled('div')`
  width: ${props => props.theme.size.width.page}px;
  margin: 0 auto;
  display: flex;
  padding: 2em 0em;

  @media (max-width: ${props => props.theme.size.width.page}px) {
    width: 100%;
    padding: 2em;
  }

  @media (max-width: 720px) {
    width: 100%;
    flex-direction: column;
    padding-left: 3em;

    .footer-list:last-child {
      margin-bottom: 0;
    }
  }

  .footer-list {
    margin-right: 6em;

    @media (max-width: 720px) {
      margin-right: 0;
      margin-bottom: 1.5em;
    }

    h3 {
      color: white;
      font-family: ${props => props.theme.font.family.body};
      font-size: .85rem;
      font-weight: ${props => props.theme.font.weight.bold};
      margin: 0em 0em .5em;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: .5em 0em;

        a {
          color: white;
          font-family: ${props => props.theme.font.family.body};
          font-size: .8rem;
          text-decoration: none;
        }
      }
    }
  }
`;

const FooterBottomBar = styled('div')`
  height: 4em;
  background-color: ${props => lighten(0.1, props.theme.color.bgDark)};
`;

const FooterBottomBarContent = styled('div')`
  width: ${props => props.theme.size.width.page}px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.size.width.page}px) {
    width: 100%;
    padding: 0em 2em;
  }

  @media (max-width: 720px) {
    width: 100%;
    flex-direction: column;
  }
  
  .social {
    @media (max-width: 720px) {
      margin-top: 1em;
    }
    a {
      color: white;
      font-family: ${props => props.theme.font.family.body};
      font-size: .85rem;
      padding-right: 1em;
      margin-right: 1em;
      border-right: 1px solid white;
      text-decoration: none;

      &:hover {
          cursor: pointer;
          text-decoration: underline;
      }
    }

    a:last-child {
      border-right: none;
      margin-right: 0;
      padding-right: 0;
    }
  }

  p {
    color: white;
    font-family: ${props => props.theme.font.family.body};
    font-size: .85rem;
    margin: 0;
    @media (max-width: 720px) {
      padding-bottom: .5em;
    }
  }
`;

export default withConfig(Footer);
