import React from 'react';
import styled from 'styled-components';

const LinksContainer = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const LinkCard = styled.div`
  background: #fafafa;
  border: 1px solid #e1e1e8;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
`;

const LinkTitle = styled.h4`
  margin: 0 0 5px;
`;

const LinkUrl = styled.a`
  color: #0073e6;
  text-decoration: none;
  word-break: break-all;
`;

const LinkAction = styled.span`
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
  color: #666;
`;

const LinksSection: React.FC = () => {
  return (
    <LinksContainer>
      <h3>+ Add header</h3>
      <LinkCard>
        <LinkTitle>My face book page</LinkTitle>
        <LinkUrl href="https://www.facebook.com/profile.php?id=100037793105320" target="_blank">
          https://www.facebook.com/profile.php?id=100037793105320
        </LinkUrl>
        <LinkAction>🕵️‍♂️ 1</LinkAction>
      </LinkCard>
      <h3>SOCIALS</h3>
      <p><LinkUrl href="#">+ Add socials</LinkUrl></p>
    </LinksContainer>
  );
};

export default LinksSection;
