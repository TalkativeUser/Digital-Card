import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  display: flex;
  justify-content: start;
  padding: 15px;
`;

const Tab = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  color: ${(props) => (props.active ? '#ff66a6' : '#000')};
  cursor: pointer;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  margin: 0 15px;
`;

const AddButton = styled.button`
  background: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 15px;
  margin-left: 15px;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Tab active>Links</Tab>
      <Tab>Posts</Tab>
      <Tab>Design</Tab>
      <Tab>Subscribers</Tab>
      <Tab>Stats</Tab>
      <Tab>Settings</Tab>
      <AddButton>+ Add Link</AddButton>
      <AddButton>+ Add Embed</AddButton>
    </SidebarContainer>
  );
};

export default Sidebar;
