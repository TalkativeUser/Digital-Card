import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 320px;
  background: linear-gradient(to bottom, #6a11cb 0%, #2575fc 100%);
  border-radius: 30px;
  padding: 15px;
  text-align: center;
  color: white;
  position: relative;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const UserName = styled.h2`
  font-size: 1.5em;
  margin: 10px 0 5px;
`;

const Bio = styled.p`
  margin: 0;
`;

const Button = styled.button`
  margin-top: 10px;
  background: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  color: #333;
  cursor: pointer;
`;

const ProfileCard: React.FC = () => {
  return (
    <CardContainer>
      <ProfileImage src="https://via.placeholder.com/100" alt="Profile" />
      <UserName>ALmorsh</UserName>
      <Bio>bios</Bio>
      <Button>My face book page</Button>
    </CardContainer>
  );
};

export default ProfileCard;
