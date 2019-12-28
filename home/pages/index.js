import React from 'react';
import dynamic from 'next/dynamic'

const Header = dynamic(import('../components/Header'));

export default () => (
  <div>
    <Header />
    <p>An actually cool portfolio website to come...</p>
    <p>For now... here's some projects:</p>
    <div>
      <a href="/armybuilder">ArmyBuilder</a>
    </div>
    <div>
      <a href="/ficdesigner">FicDesigner</a>
    </div>
  </div>
)
